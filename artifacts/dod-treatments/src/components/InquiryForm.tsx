import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { addDays, format, startOfDay } from 'date-fns';
import { CalendarDays, CheckCircle2 } from 'lucide-react';

const inquirySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  inquiryType: z.enum(['consultation', 'treatment', 'clinic', 'personal-treatment', 'general']),
  interest: z.string().optional(),
  preferredLocation: z.string().optional(),
  requestedArrival: z.string().optional(),
  requestedDeparture: z.string().optional(),
  healthStatus: z.enum(['chronic-critical', 'mild-moderate', 'healthy']).optional(),
  message: z.string().min(1, 'Message is required'),
  consent: z.boolean().refine(value => value, {
    message: 'Please confirm your consent before submitting',
  }),
  botcheck: z.string().optional(),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

interface InquiryFormProps {
  defaultType?: InquiryFormData['inquiryType'];
  defaultInterest?: string;
  defaultLocation?: string;
  includeStayPlanning?: boolean;
}

export function InquiryForm({
  defaultType = 'general',
  defaultInterest = '',
  defaultLocation = '',
  includeStayPlanning = false,
}: InquiryFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [arrivalCalendarOpen, setArrivalCalendarOpen] = useState(false);
  const [departureCalendarOpen, setDepartureCalendarOpen] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      inquiryType: defaultType,
      interest: defaultInterest,
      preferredLocation: defaultLocation,
      requestedArrival: '',
      requestedDeparture: '',
      healthStatus: undefined,
      message: '',
      consent: false,
      botcheck: '',
    },
  });

  useEffect(() => {
    if (isSuccess) successRef.current?.focus();
  }, [isSuccess]);

  useEffect(() => {
    if (submitError) errorRef.current?.focus();
  }, [submitError]);

  const onSubmit = async (data: InquiryFormData) => {
    if (includeStayPlanning) {
      let hasStayPlanningError = false;

      if (data.requestedArrival && data.requestedDeparture && data.requestedDeparture <= data.requestedArrival) {
        form.setError('requestedDeparture', { message: 'Departure must be after arrival' });
        hasStayPlanningError = true;
      }
      if (!data.healthStatus) {
        form.setError('healthStatus', { message: 'Please select your current health status' });
        hasStayPlanningError = true;
      }
      if (hasStayPlanningError) return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const accessKey = import.meta.env.WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        throw new Error('Web3Forms access key is not configured');
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Doc of Detox Website Inquiry — ${data.interest || data.inquiryType}`,
          from_name: 'Doc of Detox Treatments Website',
          name: data.name,
          email: data.email,
          phone: data.phone,
          inquiry_type: data.inquiryType,
          area_of_interest: data.interest,
          preferred_location: data.preferredLocation,
          requested_arrival: data.requestedArrival,
          requested_departure: data.requestedDeparture,
          current_health_status: data.healthStatus,
          message: data.message,
          consent_to_process_inquiry: data.consent ? 'Yes' : 'No',
          botcheck: data.botcheck,
          page_url: window.location.href,
        }),
      });
      const result = await response.json() as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to submit inquiry');
      }

      setIsSuccess(true);
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : '';
      setSubmitError(
        message.includes('domain TLD is blocked')
          ? 'Web3Forms blocks submissions from the Replit preview domain. The form will work on the approved docofdetoxtreatments.com domain.'
          : 'Something went wrong. Please try again or call us directly.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div
        ref={successRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        className="glass-panel rounded-2xl p-8 text-center outline-none focus-visible:ring-2 focus-visible:ring-primary md:p-12"
      >
        <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-primary" />
        <h3 className="text-2xl font-bold mb-3">Thank You</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          We've received your inquiry and will reach out personally within 24 hours. Your journey to healing starts now.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-6">
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="glass-panel rounded-2xl p-6 md:p-10 space-y-6">
        <input
          type="text"
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          className="hidden"
          {...form.register('botcheck')}
        />
        <div className={includeStayPlanning ? '' : 'grid gap-6 md:grid-cols-2'}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone (optional)</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {!includeStayPlanning && (
            <FormField
              control={form.control}
              name="inquiryType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Inquiry Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="treatment">Treatment</SelectItem>
                      <SelectItem value="clinic">Clinic Visit</SelectItem>
                      <SelectItem value="personal-treatment">Personal Treatment & Training</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>

        {!includeStayPlanning && (
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="interest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Area of Interest (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Wolfe Non Surgical, CellSonic" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preferredLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Location (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Ixtapa, In-home, or your city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        {includeStayPlanning && (
          <div className="space-y-6 rounded-xl border border-primary/20 bg-primary/5 p-5 md:p-6">
            <div>
              <h3 className="text-lg font-bold">Request Your Preferred Stay Dates</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                These dates are a request only. Our founder or sales team will contact you to discuss availability and confirm your stay.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="requestedArrival"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Preferred Arrival Date (optional)</FormLabel>
                    <Popover open={arrivalCalendarOpen} onOpenChange={setArrivalCalendarOpen}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            type="button"
                            variant="outline"
                            className="h-14 justify-start border-primary/25 bg-background/50 px-4 text-left text-base font-medium hover:border-primary/60 hover:bg-primary/10"
                          >
                            <CalendarDays className="mr-3 h-5 w-5 text-primary" aria-hidden="true" />
                            {field.value
                              ? format(new Date(`${field.value}T12:00:00`), 'MMMM d, yyyy')
                              : <span className="text-muted-foreground">Choose arrival date</span>}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        align="start"
                        className="w-auto max-w-[calc(100vw-1rem)] overflow-x-auto rounded-2xl border-primary/30 bg-card p-2 shadow-2xl"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value ? new Date(`${field.value}T12:00:00`) : undefined}
                          onSelect={(date) => {
                            field.onChange(date ? format(date, 'yyyy-MM-dd') : '');
                            setArrivalCalendarOpen(false);
                          }}
                          disabled={{ before: startOfDay(new Date()) }}
                          className="p-4 [--cell-size:2.75rem] sm:p-6 sm:[--cell-size:3.5rem]"
                          classNames={{
                            caption_label: 'text-lg font-semibold sm:text-xl',
                            weekdays: 'flex gap-2',
                            weekday: 'w-11 flex-none text-sm font-medium text-muted-foreground sm:w-12 sm:text-base',
                            week: 'mt-2 flex w-full gap-2',
                            day: 'h-11 w-11 flex-none p-0 sm:h-12 sm:w-12',
                            day_button: 'h-11 w-11 min-w-11 text-base sm:h-12 sm:w-12 sm:min-w-12 sm:text-lg',
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="requestedDeparture"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Preferred Departure Date (optional)</FormLabel>
                    <Popover open={departureCalendarOpen} onOpenChange={setDepartureCalendarOpen}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            type="button"
                            variant="outline"
                            className="h-14 justify-start border-primary/25 bg-background/50 px-4 text-left text-base font-medium hover:border-primary/60 hover:bg-primary/10"
                          >
                            <CalendarDays className="mr-3 h-5 w-5 text-primary" aria-hidden="true" />
                            {field.value
                              ? format(new Date(`${field.value}T12:00:00`), 'MMMM d, yyyy')
                              : <span className="text-muted-foreground">Choose departure date</span>}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        align="start"
                        className="w-auto max-w-[calc(100vw-1rem)] overflow-x-auto rounded-2xl border-primary/30 bg-card p-2 shadow-2xl"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value ? new Date(`${field.value}T12:00:00`) : undefined}
                          onSelect={(date) => {
                            field.onChange(date ? format(date, 'yyyy-MM-dd') : '');
                            setDepartureCalendarOpen(false);
                          }}
                          disabled={{
                            before: form.watch('requestedArrival')
                              ? addDays(new Date(`${form.watch('requestedArrival')}T12:00:00`), 1)
                              : startOfDay(new Date()),
                          }}
                          className="p-4 [--cell-size:2.75rem] sm:p-6 sm:[--cell-size:3.5rem]"
                          classNames={{
                            caption_label: 'text-lg font-semibold sm:text-xl',
                            weekdays: 'flex gap-2',
                            weekday: 'w-11 flex-none text-sm font-medium text-muted-foreground sm:w-12 sm:text-base',
                            week: 'mt-2 flex w-full gap-2',
                            day: 'h-11 w-11 flex-none p-0 sm:h-12 sm:w-12',
                            day_button: 'h-11 w-11 min-w-11 text-base sm:h-12 sm:w-12 sm:min-w-12 sm:text-lg',
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="healthStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How would you describe your current health status?</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} value={field.value} className="gap-3 pt-1">
                      {[
                        ['chronic-critical', 'Chronic or Critical Condition'],
                        ['mild-moderate', 'Mild or Moderate Condition'],
                        ['healthy', 'No Conditions and Healthy'],
                      ].map(([value, label]) => (
                        <label
                          key={value}
                          className="flex cursor-pointer items-center gap-3 rounded-lg border border-white/10 bg-background/30 px-4 py-3 transition-colors hover:border-primary/30"
                        >
                          <RadioGroupItem value={value} />
                          <span className="text-sm font-medium">{label}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your health goals and what you're looking for..."
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div id="inquiry-privacy-note" className="rounded-xl border border-primary/25 bg-primary/5 p-4 text-sm leading-relaxed text-foreground/90">
          <p className="font-semibold text-foreground">Please keep your inquiry general.</p>
          <p className="mt-1">
            Do not submit emergency information, medical records, payment details, government identification, or other highly
            sensitive information. This form is processed by Web3Forms and is not an emergency service. For an emergency, call
            your local emergency services immediately.
          </p>
        </div>

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="rounded-xl border border-white/15 bg-background/30 p-4">
              <div className="flex items-start gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={checked => field.onChange(checked === true)}
                    aria-describedby="inquiry-privacy-note"
                  />
                </FormControl>
                <div className="space-y-1">
                  <FormLabel className="cursor-pointer text-sm leading-relaxed">
                    I consent to Doc of Detox Treatments and Web3Forms processing the information I submit to respond to this
                    inquiry. I have read the <Link href="/privacy-policy" className="text-primary underline underline-offset-4">Privacy Policy</Link> and{' '}
                    <Link href="/terms-of-use" className="text-primary underline underline-offset-4">Terms of Use</Link>.
                  </FormLabel>
                  <FormMessage />
                </div>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          <span aria-live="polite">{isSubmitting ? 'Sending...' : 'Submit Inquiry'}</span>
        </Button>

        {submitError && (
          <p
            ref={errorRef}
            role="alert"
            aria-live="assertive"
            tabIndex={-1}
            className="text-destructive text-sm text-center outline-none"
          >
            {submitError}
          </p>
        )}
      </form>
    </Form>
  );
}

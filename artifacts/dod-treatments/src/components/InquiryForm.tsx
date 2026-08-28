import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CheckCircle2 } from 'lucide-react';

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
      botcheck: '',
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    if (includeStayPlanning) {
      let hasStayPlanningError = false;

      if (!data.requestedArrival) {
        form.setError('requestedArrival', { message: 'Requested arrival date is required' });
        hasStayPlanningError = true;
      }
      if (!data.requestedDeparture) {
        form.setError('requestedDeparture', { message: 'Requested departure date is required' });
        hasStayPlanningError = true;
      }
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
    } catch {
      setSubmitError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="glass-panel rounded-2xl p-8 md:p-12 text-center">
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
        <div className="grid md:grid-cols-2 gap-6">
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
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="interest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Area of Interest (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Wolfe Non-Surgical, CellSonic" {...field} />
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
                  <Input placeholder="e.g., Ixtapa, Penticton, In-home" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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
                  <FormItem>
                    <FormLabel>Preferred Arrival Date</FormLabel>
                    <FormControl>
                      <Input type="date" min={new Date().toISOString().split('T')[0]} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="requestedDeparture"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Departure Date</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        min={form.watch('requestedArrival') || new Date().toISOString().split('T')[0]}
                        {...field}
                      />
                    </FormControl>
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

        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
        </Button>

        {submitError && (
          <p className="text-destructive text-sm text-center">
            {submitError}
          </p>
        )}
      </form>
    </Form>
  );
}

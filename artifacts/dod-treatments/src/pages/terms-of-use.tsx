import { Link } from 'wouter';
import { LegalPage } from '@/components/LegalPage';

export default function TermsOfUse() {
  return (
    <LegalPage
      title="Terms of Use"
      description="Terms governing use of the Doc of Detox Treatments website and directory."
      path="/terms-of-use"
      updated="September 1, 2026"
    >
      <p>
        By using this website, you agree to these Terms of Use. If you do not agree, please do not use the website.
      </p>

      <h2>Website purpose and acceptable use</h2>
      <p>
        This website provides general information about treatments, locations, and practitioners and offers a way to make an
        inquiry. You may not misuse the website, interfere with its operation, attempt unauthorized access, submit unlawful or
        misleading material, or use its content in violation of another person's rights.
      </p>

      <h2>No medical or emergency service</h2>
      <p>
        Website content and inquiry responses are not a substitute for individualized medical advice. See our{' '}
        <Link href="/medical-disclaimer">Medical Disclaimer</Link>. If you believe you are experiencing a medical emergency, call
        your local emergency services immediately; do not use or await a response from the inquiry form.
      </p>

      <h2>Inquiries and third-party processing</h2>
      <p>
        Submitting an inquiry does not create a clinician-patient relationship or guarantee an appointment, availability, or
        service. Inquiry information, which may include a general health-status selection or health-related message, is transmitted
        through Web3Forms, a third-party form-processing provider. Do not submit medical records, payment-card data, government
        identification numbers, or other highly sensitive information. See our <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>Independent practitioners and external services</h2>
      <p>
        Directory practitioners and their businesses are independent and are responsible for their own advice, services,
        qualifications, licensing, scheduling, fees, policies, privacy practices, and legal compliance. Doc of Detox Treatments is
        not responsible for an independent practitioner's acts or omissions. External links are provided for convenience and do
        not place third-party websites under our control.
      </p>

      <h2>Bookings, cancellations, and refunds</h2>
      <p>
        Any booking, cancellation, rescheduling, payment, or refund terms will be disclosed by the provider responsible for the
        service and may vary by service or practitioner. Review and agree to the applicable terms before paying or booking.
        Requests are considered under those disclosed terms and applicable law; this website does not create a separate or
        guaranteed right to a refund.
      </p>

      <h2>Intellectual property and availability</h2>
      <p>
        Website content, branding, and design are protected by applicable intellectual-property laws. Except where law permits,
        content may not be copied, republished, or commercially exploited without authorization. We may update, suspend, or
        discontinue website features and cannot promise uninterrupted or error-free availability.
      </p>

      <h2>Disclaimers and limitation</h2>
      <p>
        To the extent permitted by law, the website is provided “as is” and “as available,” without warranties of accuracy,
        suitability, merchantability, fitness for a particular purpose, or non-infringement. To the extent permitted by law, Doc
        of Detox Treatments will not be liable for indirect, incidental, special, or consequential losses arising from website use.
        Nothing in these terms excludes rights or liabilities that cannot lawfully be excluded.
      </p>

      <h2>Changes and governing requirements</h2>
      <p>
        We may revise these terms by posting an updated version. Continued use after an update means you accept the revised terms.
        Applicable mandatory consumer and other legal protections continue to apply.
      </p>
    </LegalPage>
  );
}
import { Link } from 'wouter';
import { LegalPage } from '@/components/LegalPage';

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Doc of Detox Treatments collects, uses, and safeguards information submitted through this website."
      path="/privacy-policy"
      updated="September 1, 2026"
    >
      <p>
        This policy explains how Doc of Detox Treatments handles information when you browse this website or send an inquiry.
        It does not apply to the separate systems or practices of independent practitioners, external websites, or service providers.
      </p>

      <h2>Information we collect</h2>
      <p>
        We may collect information you choose to provide, including your name, email address, phone number, inquiry type,
        preferred location, requested stay dates, general health-status selection, and message. We may also receive ordinary
        technical information associated with website use or form delivery, such as page URL, browser, device, and network data.
      </p>

      <h2>Health information and form submissions</h2>
      <p>
        The inquiry form is for general contact and planning only. It is not a secure patient portal and should not be used to
        submit medical records, detailed diagnoses, government identification numbers, payment-card information, or other highly
        sensitive information. Information submitted through the form is transmitted to Web3Forms, a third-party form-processing
        provider, for delivery to us. Web3Forms processes that information under its own terms and privacy practices.
      </p>
      <p>
        Do not use the form for an emergency. If you believe you are experiencing a medical emergency, call your local emergency
        services immediately.
      </p>

      <h2>How information is used</h2>
      <ul>
        <li>To respond to your inquiry and discuss services, availability, or next steps.</li>
        <li>To operate, protect, and improve the website and inquiry process.</li>
        <li>To comply with legal obligations and prevent misuse, fraud, or security incidents.</li>
      </ul>
      <p>We do not sell personal information. We retain information only as reasonably needed for these purposes and applicable obligations.</p>

      <h2>Sharing and independent practitioners</h2>
      <p>
        Information may be shared with service providers that support website and communication operations, or when required by
        law. If you choose to contact a practitioner listed in the directory, that practitioner is an independent provider and is
        responsible for their own privacy, recordkeeping, security, and professional practices.
      </p>

      <h2>Your choices and questions</h2>
      <p>
        You may ask about, correct, or request deletion of information you submitted, subject to applicable legal and operational
        requirements. Use our <Link href="/treatments/consultations">inquiry form</Link> or the contact numbers shown in the footer
        to reach us. You may also limit browser storage through your browser settings.
      </p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy as our practices or legal obligations change. The date above shows the latest revision.</p>
    </LegalPage>
  );
}
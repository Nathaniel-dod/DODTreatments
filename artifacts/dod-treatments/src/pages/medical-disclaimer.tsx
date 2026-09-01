import { Link } from 'wouter';
import { LegalPage } from '@/components/LegalPage';

export default function MedicalDisclaimer() {
  return (
    <LegalPage
      title="Medical Disclaimer"
      description="Important medical and emergency guidance for visitors to the Doc of Detox Treatments website."
      path="/medical-disclaimer"
      updated="September 1, 2026"
    >
      <h2>Educational information only</h2>
      <p>
        Website content is provided for general educational and informational purposes. It is not medical advice, diagnosis,
        treatment, or a substitute for care from a qualified healthcare professional who knows your circumstances.
      </p>

      <h2>Emergencies</h2>
      <p>
        This website and its inquiry forms are not monitored as an emergency service. If you have severe or rapidly worsening
        symptoms, believe you may be experiencing a medical emergency, or may harm yourself or another person, call your local
        emergency services or go to the nearest emergency department immediately. Do not wait for a response from this website.
      </p>

      <h2>Professional guidance</h2>
      <p>
        Consult an appropriately licensed healthcare professional before starting, stopping, or changing any treatment,
        medication, supplement, exercise, or health program. Individual responses and outcomes vary; no result is guaranteed.
        Testimonials describe individual experiences and should not be understood as typical or promised outcomes.
      </p>

      <h2>Directory listings and independent practitioners</h2>
      <p>
        Practitioners appearing in the directory are independent providers, not employees or agents of Doc of Detox Treatments
        merely because they are listed. Each practitioner is responsible for verifying their scope of practice, credentials,
        licensing, insurance, clinical decisions, representations, and services. A listing is not a guarantee of suitability,
        availability, or outcome. You are responsible for evaluating a practitioner before receiving services.
      </p>

      <h2>General inquiries</h2>
      <p>
        Do not include medical records or highly sensitive information in a website inquiry. For general, non-urgent questions,
        use the <Link href="/treatments/consultations">consultation inquiry page</Link>.
      </p>
    </LegalPage>
  );
}
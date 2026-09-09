import { ThermometerSun } from 'lucide-react';
import { AssessmentDetailPage } from '@/components/AssessmentDetailPage';

export default function WholeBodyThermography() {
  return (
    <AssessmentDetailPage
      title="Whole Body Thermography"
      eyebrow="Radiation-Free Thermal Imaging"
      subtitle="A visual map of skin-surface temperature patterns"
      introduction="Whole body thermography uses a sensitive infrared camera to record heat naturally emitted from the skin. The resulting images display relative temperature patterns and asymmetries that can provide supplementary wellness information."
      seoDescription="Explore radiation-free whole body thermography at DOD5Star and understand how infrared imaging maps skin temperature patterns as an adjunctive wellness assessment."
      path="/clinics/ixtapa-zihuatanejo/treatments/whole-body-thermography"
      icon={ThermometerSun}
      processTitle="Passive Infrared Imaging—No Contact Required"
      processDescription="Thermography does not send radiation into the body. A calibrated camera detects infrared energy at the skin surface and converts relative temperatures into a color-coded image."
      steps={[
        { title: 'Acclimate', description: 'You rest in a temperature-controlled environment so recent heat, cold, or physical activity has less influence on the images.' },
        { title: 'Capture Images', description: 'The infrared camera records standardized views from a short distance without touching the body.' },
        { title: 'Review Patterns', description: 'Relative hot and cool areas, temperature differences, and side-to-side patterns can be reviewed as supplementary information.' },
      ]}
      highlights={[
        { title: 'No ionizing radiation', description: 'The camera passively records infrared energy emitted by the skin; there are no X-rays or injected contrast agents.' },
        { title: 'Whole-body overview', description: 'Standardized views create a broad visual record of skin-surface temperature distribution.' },
        { title: 'Pattern comparison', description: 'Images can show relative temperature differences and asymmetries for informed follow-up conversations.' },
        { title: 'Non-contact imaging', description: 'The camera captures images at a distance, making the process gentle and non-invasive.' },
      ]}
      limitations={[
        'Thermography measures temperature at the skin surface; it does not see inside the body and cannot determine the cause of a warm or cool area.',
        'It is an adjunctive informational tool, not a stand-alone method for diagnosing disease. It should not replace other medical tests.',
        'An unusual thermal pattern should be discussed with an appropriate healthcare professional, who can determine whether established diagnostic testing is needed.',
      ]}
    />
  );
}
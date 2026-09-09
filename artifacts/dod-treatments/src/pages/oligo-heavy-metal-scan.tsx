import { ScanLine } from 'lucide-react';
import { AssessmentDetailPage } from '@/components/AssessmentDetailPage';

export default function OligoHeavyMetalScan() {
  return (
    <AssessmentDetailPage
      title="Oligo Heavy Metal Scan"
      eyebrow="Non-Invasive Wellness Assessment"
      subtitle="A quick optical snapshot of mineral and metal patterns"
      introduction="The OligoScan uses visible-light spectrophotometry at several points on the palm. The software compares reflected light patterns with its reference data to provide an immediate wellness-oriented report covering selected minerals, trace elements, and heavy metals."
      seoDescription="Learn about the non-invasive OligoScan palm assessment available during a DOD5Star stay, including how it works and its important testing limitations."
      path="/clinics/ixtapa-zihuatanejo/treatments/oligo-heavy-metal-scan"
      icon={ScanLine}
      processTitle="Light-Based Scanning Through the Palm"
      processDescription="Spectrophotometry measures how light is absorbed and reflected. OligoScan applies this principle at the skin surface to generate estimates that can be discussed alongside your broader health history."
      steps={[
        { title: 'Prepare the Skin', description: 'The palm is kept clean and dry so creams, moisture, or surface residue do not interfere with the optical reading.' },
        { title: 'Take the Readings', description: 'A handheld scanner is placed briefly against several points on the palm to collect reflected-light measurements.' },
        { title: 'Review the Report', description: 'The software produces an immediate report that the team can review with you as informational wellness context.' },
      ]}
      highlights={[
        { title: 'Fast and non-invasive', description: 'The optical scan takes only a few minutes and does not require needles, blood collection, or a urine sample.' },
        { title: 'Broad informational view', description: 'The report organizes estimates for selected minerals, trace elements, and metals in one place.' },
        { title: 'Conversation starter', description: 'Results may help identify questions to discuss with a qualified healthcare professional.' },
        { title: 'Repeatable format', description: 'Using the same preparation and scanning process can provide consistent points of comparison over time.' },
      ]}
      limitations={[
        'OligoScan results are estimates produced from skin-surface optical measurements. They do not establish heavy-metal toxicity, mineral deficiency, or any medical diagnosis.',
        'When exposure or toxicity is a concern, validated laboratory testing—typically using blood or urine selected for the specific metal—should be ordered and interpreted by a qualified healthcare professional.',
        'Do not begin chelation, supplementation, or another treatment solely because of an OligoScan result.',
      ]}
    />
  );
}
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useEffect } from 'react';
import { Redirect, Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Dod5StarTreatmentRoute } from '@/components/Dod5StarTreatmentRoute';
import Home from '@/pages/home';
import Treatments from '@/pages/treatments';
import WolfeNonSurgical from '@/pages/wolfe-non-surgical';
import CellSonicRegeneration from '@/pages/cellsonic-regeneration';
import CardioMedBed from '@/pages/cardio-medbed';
import Consultations from '@/pages/consultations';
import DodCoreRestore from '@/pages/dod-core-restore';
import BoneDensityScanner from '@/pages/bone-density-scanner';
import InfraredLightHealing from '@/pages/infrared-light-healing';
import VitaminDLight from '@/pages/vitamin-d-light';
import BioptronLight from '@/pages/bioptron-light';
import Avacen from '@/pages/avacen';
import Clinics from '@/pages/clinics';
import IxtapaZihuatanejo from '@/pages/ixtapa-zihuatanejo';
import Dod5StarResidence from '@/pages/dod5star-residence';
import Dod5StarTreatments from '@/pages/dod5star-treatments';
import Dod5StarTeam from '@/pages/dod5star-team';
import Dod5StarInquire from '@/pages/dod5star-inquire';
import Dod5StarLocation from '@/pages/dod5star-location';
import PersonalTreatment from '@/pages/personal-treatment';
import Practitioners from '@/pages/practitioners';
import PrivacyPolicy from '@/pages/privacy-policy';
import MedicalDisclaimer from '@/pages/medical-disclaimer';
import TermsOfUse from '@/pages/terms-of-use';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  const [location] = useLocation();
  const isDod5StarJourney = location.startsWith('/clinics/ixtapa-zihuatanejo');

  return (
    <>
      <ScrollToTop />
      {!isDod5StarJourney && <Navbar />}
      <main className="min-h-[100dvh]">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/treatments" component={Treatments} />
          <Route path="/treatments/wolfe-non-surgical" component={WolfeNonSurgical} />
          <Route path="/treatments/cellsonic-regeneration" component={CellSonicRegeneration} />
          <Route path="/treatments/cardio-medbed" component={CardioMedBed} />
          <Route path="/treatments/consultations" component={Consultations} />
          <Route path="/treatments/dod-core-restore" component={DodCoreRestore} />
          <Route path="/treatments/bone-density-scanner" component={BoneDensityScanner} />
          <Route path="/treatments/infrared-light-healing" component={InfraredLightHealing} />
          <Route path="/treatments/vitamin-d-light" component={VitaminDLight} />
          <Route path="/treatments/bioptron-light" component={BioptronLight} />
          <Route path="/treatments/avacen" component={Avacen} />
          <Route path="/consultations">
            <Redirect to="/treatments/consultations" replace />
          </Route>
          <Route path="/clinics" component={Clinics} />
          <Route path="/clinics/ixtapa-zihuatanejo" component={IxtapaZihuatanejo} />
          <Route path="/clinics/ixtapa-zihuatanejo/residence" component={Dod5StarResidence} />
          <Route path="/clinics/ixtapa-zihuatanejo/treatments" component={Dod5StarTreatments} />
          <Route path="/clinics/ixtapa-zihuatanejo/treatments/wolfe-non-surgical">
            <Dod5StarTreatmentRoute><WolfeNonSurgical /></Dod5StarTreatmentRoute>
          </Route>
          <Route path="/clinics/ixtapa-zihuatanejo/treatments/cellsonic-regeneration">
            <Dod5StarTreatmentRoute><CellSonicRegeneration /></Dod5StarTreatmentRoute>
          </Route>
          <Route path="/clinics/ixtapa-zihuatanejo/treatments/cardio-medbed">
            <Dod5StarTreatmentRoute><CardioMedBed /></Dod5StarTreatmentRoute>
          </Route>
          <Route path="/clinics/ixtapa-zihuatanejo/treatments/consultations">
            <Dod5StarTreatmentRoute><Consultations /></Dod5StarTreatmentRoute>
          </Route>
          <Route path="/clinics/ixtapa-zihuatanejo/treatments/dod-core-restore">
            <Dod5StarTreatmentRoute><DodCoreRestore /></Dod5StarTreatmentRoute>
          </Route>
          <Route path="/clinics/ixtapa-zihuatanejo/treatments/bone-density-scanner">
            <Dod5StarTreatmentRoute><BoneDensityScanner /></Dod5StarTreatmentRoute>
          </Route>
          <Route path="/clinics/ixtapa-zihuatanejo/treatments/infrared-light-healing">
            <Dod5StarTreatmentRoute><InfraredLightHealing /></Dod5StarTreatmentRoute>
          </Route>
          <Route path="/clinics/ixtapa-zihuatanejo/treatments/vitamin-d-light">
            <Dod5StarTreatmentRoute><VitaminDLight /></Dod5StarTreatmentRoute>
          </Route>
          <Route path="/clinics/ixtapa-zihuatanejo/treatments/bioptron-light">
            <Dod5StarTreatmentRoute><BioptronLight /></Dod5StarTreatmentRoute>
          </Route>
          <Route path="/clinics/ixtapa-zihuatanejo/treatments/avacen">
            <Dod5StarTreatmentRoute><Avacen /></Dod5StarTreatmentRoute>
          </Route>
          <Route path="/clinics/ixtapa-zihuatanejo/team" component={Dod5StarTeam} />
          <Route path="/clinics/ixtapa-zihuatanejo/inquire" component={Dod5StarInquire} />
          <Route path="/clinics/ixtapa-zihuatanejo/location" component={Dod5StarLocation} />
          <Route path="/personal-treatment" component={PersonalTreatment} />
          <Route path="/practitioners" component={Practitioners} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/medical-disclaimer" component={MedicalDisclaimer} />
          <Route path="/terms-of-use" component={TermsOfUse} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Redirect, Route, Switch, Router as WouterRouter } from 'wouter';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Home from '@/pages/home';
import Treatments from '@/pages/treatments';
import WolfeNonSurgical from '@/pages/wolfe-non-surgical';
import CellSonicRegeneration from '@/pages/cellsonic-regeneration';
import CardioMedBed from '@/pages/cardio-medbed';
import Consultations from '@/pages/consultations';
import Clinics from '@/pages/clinics';
import IxtapaZihuatanejo from '@/pages/ixtapa-zihuatanejo';
import Dod5StarResidence from '@/pages/dod5star-residence';
import Dod5StarTreatments from '@/pages/dod5star-treatments';
import Dod5StarTeam from '@/pages/dod5star-team';
import Dod5StarInquire from '@/pages/dod5star-inquire';
import Penticton from '@/pages/penticton';
import PersonalTreatment from '@/pages/personal-treatment';
import Practitioners from '@/pages/practitioners';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <Navbar />
      <main className="min-h-[100dvh]">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/treatments" component={Treatments} />
          <Route path="/treatments/wolfe-non-surgical" component={WolfeNonSurgical} />
          <Route path="/treatments/cellsonic-regeneration" component={CellSonicRegeneration} />
          <Route path="/treatments/cardio-medbed" component={CardioMedBed} />
          <Route path="/treatments/consultations" component={Consultations} />
          <Route path="/consultations">
            <Redirect to="/treatments/consultations" replace />
          </Route>
          <Route path="/clinics" component={Clinics} />
          <Route path="/clinics/ixtapa-zihuatanejo" component={IxtapaZihuatanejo} />
          <Route path="/clinics/ixtapa-zihuatanejo/residence" component={Dod5StarResidence} />
          <Route path="/clinics/ixtapa-zihuatanejo/treatments" component={Dod5StarTreatments} />
          <Route path="/clinics/ixtapa-zihuatanejo/team" component={Dod5StarTeam} />
          <Route path="/clinics/ixtapa-zihuatanejo/inquire" component={Dod5StarInquire} />
          <Route path="/clinics/penticton" component={Penticton} />
          <Route path="/personal-treatment" component={PersonalTreatment} />
          <Route path="/practitioners" component={Practitioners} />
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

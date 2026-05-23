import { useState } from 'react';
import HubHero from './components/HubHero';
import HubOverview from './components/HubOverview';
import HubResources from './components/HubResources';
import HubWearable from './components/HubWearable';
import HubTeam from './components/HubTeam';
import HubCTA from './components/HubCTA';
import PrototypeNotice from './components/PrototypeNotice';
import SimulationNotice from './components/SimulationNotice';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'notice' | 'simNotice'>('home');

  if (currentPage === 'notice') {
    return (
      <div className="min-h-screen">
        <PrototypeNotice 
          onBack={() => setCurrentPage('home')} 
          onOpenSimNotice={() => setCurrentPage('simNotice')}
        />
      </div>
    );
  }

  if (currentPage === 'simNotice') {
    return (
      <div className="min-h-screen">
        <SimulationNotice onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="flex flex-col gap-24 font-sans">
        <HubHero />
        <HubOverview />
        <HubResources 
          onOpenNotice={() => setCurrentPage('notice')} 
          onOpenSimNotice={() => setCurrentPage('simNotice')} 
        />
        <HubWearable />
        <HubTeam />
        <HubCTA />
      </main>
    </div>
  );
}


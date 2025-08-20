import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TechnicalProcesses from './components/TechnicalProcesses';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ReactorPage from './pages/ReactorPage';
import DistillationPage from './pages/DistillationPage';
import HeatExchangerPage from './pages/HeatExchangerPage';
import SeparatorPage from './pages/SeparatorPage';
import ProcessesPage from './pages/ProcessesPage';
import QMRAAnalysisPage from './pages/QMRAAnalysisPage';
import MachineLearningPage from './pages/MachineLearningPage';
import MechanisticAnalysisPage from './pages/MechanisticAnalysisPage';
import RatingCurvesPage from './pages/RatingCurvesPage';
import ReactionPage from './pages/ReactionPage';
import ExtractionPage from './pages/ExtractionPage';

// Biological Treatment Pages
import ActivatedSludgePage from './pages/ActivatedSludgePage';
import BiofilmReactorsPage from './pages/BiofilmReactorsPage';
import AnaerobicDigestionPage from './pages/AnaerobicDigestionPage';
import ConstructedWetlandsPage from './pages/ConstructedWetlandsPage';
import MembraneBioreactorsPage from './pages/MembraneBioreactorsPage';
import TricklingFiltersPage from './pages/TricklingFiltersPage';

// Chemical Processes Pages
import CoagulationFlocculationPage from './pages/CoagulationFlocculationPage';
import ChemicalPrecipitationPage from './pages/ChemicalPrecipitationPage';
import IonExchangePage from './pages/IonExchangePage';
import AdvancedOxidationPage from './pages/AdvancedOxidationPage';
import ElectrochemicalTreatmentPage from './pages/ElectrochemicalTreatmentPage';
import PHAdjustmentPage from './pages/PHAdjustmentPage';

// Food Engineering Pages
import DairyProcessingPage from './pages/DairyProcessingPage';
import MeatProcessingPage from './pages/MeatProcessingPage';
import WineBeveragePage from './pages/WineBeveragePage';
import SeafoodProcessingPage from './pages/SeafoodProcessingPage';
import KiwifruitProcessingPage from './pages/KiwifruitProcessingPage';
import HoneyProcessingPage from './pages/HoneyProcessingPage';
import FoodSafetySystemsPage from './pages/FoodSafetySystemsPage';

import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reactor" element={<ReactorPage />} />
            <Route path="/distillation" element={<DistillationPage />} />
            <Route path="/heat-exchanger" element={<HeatExchangerPage />} />
            <Route path="/separator" element={<SeparatorPage />} />
            <Route path="/processes" element={<ProcessesPage />} />
            <Route path="/qmra-analysis" element={<QMRAAnalysisPage />} />
            <Route path="/machine-learning" element={<MachineLearningPage />} />
            <Route path="/mechanistic-analysis" element={<MechanisticAnalysisPage />} />
            <Route path="/rating-curves" element={<RatingCurvesPage />} />
            <Route path="/reaction" element={<ReactionPage />} />
            <Route path="/extraction" element={<ExtractionPage />} />
            
            {/* Biological Treatment Routes */}
            <Route path="/activated-sludge" element={<ActivatedSludgePage />} />
            <Route path="/biofilm-reactors" element={<BiofilmReactorsPage />} />
            <Route path="/anaerobic-digestion" element={<AnaerobicDigestionPage />} />
            <Route path="/constructed-wetlands" element={<ConstructedWetlandsPage />} />
            <Route path="/membrane-bioreactors" element={<MembraneBioreactorsPage />} />
            <Route path="/trickling-filters" element={<TricklingFiltersPage />} />
            
            {/* Chemical Processes Routes */}
            <Route path="/coagulation-flocculation" element={<CoagulationFlocculationPage />} />
            <Route path="/chemical-precipitation" element={<ChemicalPrecipitationPage />} />
            <Route path="/ion-exchange" element={<IonExchangePage />} />
            <Route path="/advanced-oxidation" element={<AdvancedOxidationPage />} />
            <Route path="/electrochemical-treatment" element={<ElectrochemicalTreatmentPage />} />
            <Route path="/ph-adjustment" element={<PHAdjustmentPage />} />
            
            {/* Food Engineering Routes */}
            <Route path="/dairy-processing" element={<DairyProcessingPage />} />
            <Route path="/meat-processing" element={<MeatProcessingPage />} />
            <Route path="/wine-beverage" element={<WineBeveragePage />} />
            <Route path="/seafood-processing" element={<SeafoodProcessingPage />} />
            <Route path="/kiwifruit-processing" element={<KiwifruitProcessingPage />} />
            <Route path="/honey-processing" element={<HoneyProcessingPage />} />
            <Route path="/food-safety-systems" element={<FoodSafetySystemsPage />} />
          </Routes>
        </main>
        <TechnicalProcesses />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
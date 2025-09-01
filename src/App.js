import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Core Service Pages - Essential only
import ReactorPage from './pages/ReactorPage';
import DistillationPage from './pages/DistillationPage';
import HeatExchangerPage from './pages/HeatExchangerPage';
import SeparatorPage from './pages/SeparatorPage';
import ProcessesPage from './pages/ProcessesPage';

// Analysis Services - Core offerings
import QMRAAnalysisPage from './pages/QMRAAnalysisPage';
import MachineLearningPage from './pages/MachineLearningPage';
import MechanisticAnalysisPage from './pages/MechanisticAnalysisPage';
import RatingCurvesPage from './pages/RatingCurvesPage';
import ReactionPage from './pages/ReactionPage';
import ExtractionPage from './pages/ExtractionPage';

// Food Engineering - Key NZ industry
import DairyProcessingPage from './pages/DairyProcessingPage';
import FoodSafetySystemsPage from './pages/FoodSafetySystemsPage';

// Process Unit Pages - Individual process technologies
import FiltrationPage from './pages/FiltrationPage';
import ReverseOsmosisPage from './pages/ReverseOsmosisPage';
import UVDisinfectionPage from './pages/UVDisinfectionPage';
import BioreactorPage from './pages/BioreactorPage';
import IonExchangePage from './pages/IonExchangePage';
import ActivatedCarbonPage from './pages/ActivatedCarbonPage';
import UltrafiltrationPage from './pages/UltrafiltrationPage';
import CrystallizationPage from './pages/CrystallizationPage';
import MembraneBioreactorPage from './pages/MembraneBioreactorPage';

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
            
            {/* Core Process Equipment */}
            <Route path="/reactor" element={<ReactorPage />} />
            <Route path="/distillation" element={<DistillationPage />} />
            <Route path="/heat-exchanger" element={<HeatExchangerPage />} />
            <Route path="/separator" element={<SeparatorPage />} />
            <Route path="/processes" element={<ProcessesPage />} />
            
            {/* Analysis Services */}
            <Route path="/qmra-analysis" element={<QMRAAnalysisPage />} />
            <Route path="/machine-learning" element={<MachineLearningPage />} />
            <Route path="/mechanistic-analysis" element={<MechanisticAnalysisPage />} />
            <Route path="/rating-curves" element={<RatingCurvesPage />} />
            <Route path="/reaction" element={<ReactionPage />} />
            <Route path="/extraction" element={<ExtractionPage />} />
            
            {/* Food Engineering - Key NZ Industry */}
            <Route path="/dairy-processing" element={<DairyProcessingPage />} />
            <Route path="/food-safety-systems" element={<FoodSafetySystemsPage />} />
            
            {/* Process Unit Pages */}
            <Route path="/filtration" element={<FiltrationPage />} />
            <Route path="/reverse-osmosis" element={<ReverseOsmosisPage />} />
            <Route path="/uv-disinfection" element={<UVDisinfectionPage />} />
            <Route path="/bioreactor" element={<BioreactorPage />} />
            <Route path="/ion-exchange" element={<IonExchangePage />} />
            <Route path="/activated-carbon" element={<ActivatedCarbonPage />} />
            <Route path="/ultrafiltration" element={<UltrafiltrationPage />} />
            <Route path="/crystallization" element={<CrystallizationPage />} />
            <Route path="/membrane-bioreactor" element={<MembraneBioreactorPage />} />
            
            {/* Catch-all route for debugging */}
            <Route path="*" element={<div style={{padding: '2rem', textAlign: 'center'}}><h2>Page Not Found</h2><p>The requested page could not be found.</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
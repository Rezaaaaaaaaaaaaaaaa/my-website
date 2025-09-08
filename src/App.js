import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
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
import WaterTreatmentServicesPage from './pages/WaterTreatmentServicesPage';
import ProcessEngineeringPage from './pages/ProcessEngineeringPage';
import FoodProcessingPage from './pages/FoodProcessingPage';
import './styles/index.css';

function App() {
  return (
    <ErrorBoundary>
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
              <Route path="/water-treatment-services" element={<WaterTreatmentServicesPage />} />
              <Route path="/process-engineering" element={<ProcessEngineeringPage />} />
              <Route path="/food-processing" element={<FoodProcessingPage />} />
            </Routes>
          </main>
          <TechnicalProcesses />
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
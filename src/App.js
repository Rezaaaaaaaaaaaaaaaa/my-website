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
          </Routes>
        </main>
        <TechnicalProcesses />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
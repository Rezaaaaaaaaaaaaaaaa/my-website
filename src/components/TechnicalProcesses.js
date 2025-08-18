import React from 'react';
import { FaWater, FaFilter, FaRecycle, FaBolt, FaVial, FaLeaf, FaSlidersH, FaChartLine, FaIndustry, FaFlask, FaSnowflake, FaBurn, FaAtom, FaDna, FaSeedling, FaOilCan, FaThermometerHalf, FaCloudRain, FaMicroscope, FaWind } from 'react-icons/fa';
import './TechnicalProcesses.css';

const waterTreatmentProcesses = [
    {
        title: 'Filtration',
        icon: <FaFilter className="process-icon" />,
        description: 'Sand, multimedia, and cartridge filtration remove suspended solids and particulates from water.'
    },
    {
        title: 'Reverse Osmosis (RO)',
        icon: <FaWater className="process-icon" />,
        description: 'RO membranes separate dissolved salts and impurities, producing high-purity water.'
    },
    {
        title: 'Ultrafiltration (UF)',
        icon: <FaSlidersH className="process-icon" />,
        description: 'UF uses hollow fiber membranes to remove bacteria, viruses, and colloids.'
    },
    {
        title: 'UV Disinfection',
        icon: <FaBolt className="process-icon" />,
        description: 'UV lamps inactivate microorganisms, providing chemical-free disinfection.'
    },
    {
        title: 'Ion Exchange',
        icon: <FaVial className="process-icon" />,
        description: 'Softening and deionization through resin beds for targeted contaminant removal.'
    },
    {
        title: 'Activated Carbon Adsorption',
        icon: <FaLeaf className="process-icon" />,
        description: 'Carbon media adsorbs organic compounds, chlorine, and taste/odor contaminants.'
    },
    {
        title: 'Primary Treatment',
        icon: <FaRecycle className="process-icon" />,
        description: 'Screening and sedimentation remove large solids and grit from wastewater.'
    },
    {
        title: 'Secondary Treatment',
        icon: <FaChartLine className="process-icon" />,
        description: 'Activated sludge and membrane bioreactors biologically degrade organic matter.'
    },
    {
        title: 'Tertiary Treatment',
        icon: <FaSlidersH className="process-icon" />,
        description: 'Advanced filtration and chemical dosing for nutrient and micropollutant removal.'
    },
    {
        title: 'Sludge Handling',
        icon: <FaRecycle className="process-icon" />,
        description: 'Thickening and dewatering processes for efficient solids management.'
    },
];

const bioProcesses = [
    {
        title: 'Bioreactors',
        icon: <FaFlask className="process-icon bio-icon" />,
        description: 'Controlled fermentation vessels for microbial cultivation and bioprocessing applications.'
    },
    {
        title: 'Anaerobic Digestion',
        icon: <FaDna className="process-icon bio-icon" />,
        description: 'Biogas production from organic waste through anaerobic bacterial decomposition.'
    },
    {
        title: 'Composting Systems',
        icon: <FaSeedling className="process-icon bio-icon" />,
        description: 'Aerobic biological decomposition of organic materials into nutrient-rich compost.'
    },
    {
        title: 'Membrane Bioreactors',
        icon: <FaMicroscope className="process-icon bio-icon" />,
        description: 'Combined biological treatment and membrane filtration for high-quality effluent.'
    },
    {
        title: 'Biofilm Reactors',
        icon: <FaLeaf className="process-icon bio-icon" />,
        description: 'Fixed-film biological systems for efficient organic matter removal and nitrification.'
    },
    {
        title: 'Algae Cultivation',
        icon: <FaSeedling className="process-icon bio-icon" />,
        description: 'Photobioreactors and open ponds for algae production and nutrient recovery.'
    },
];

const chemicalProcesses = [
    {
        title: 'Distillation',
        icon: <FaThermometerHalf className="process-icon chem-icon" />,
        description: 'Separation of liquid mixtures based on different boiling points and volatility.'
    },
    {
        title: 'Chemical Precipitation',
        icon: <FaCloudRain className="process-icon chem-icon" />,
        description: 'Coagulation and flocculation for removal of dissolved contaminants and phosphorus.'
    },
    {
        title: 'Crystallization',
        icon: <FaSnowflake className="process-icon chem-icon" />,
        description: 'Purification and separation through controlled crystal formation and recovery.'
    },
    {
        title: 'Oxidation Processes',
        icon: <FaAtom className="process-icon chem-icon" />,
        description: 'Advanced oxidation using ozone, hydrogen peroxide, and UV for micropollutant removal.'
    },
    {
        title: 'Extraction',
        icon: <FaOilCan className="process-icon chem-icon" />,
        description: 'Liquid-liquid and solid-liquid extraction for component separation and purification.'
    },
    {
        title: 'Catalytic Processes',
        icon: <FaIndustry className="process-icon chem-icon" />,
        description: 'Heterogeneous and homogeneous catalysis for chemical transformation and treatment.'
    },
    {
        title: 'Gas Absorption',
        icon: <FaWind className="process-icon chem-icon" />,
        description: 'Scrubbing towers and packed columns for gas-phase contaminant removal.'
    },
    {
        title: 'Thermal Treatment',
        icon: <FaBurn className="process-icon chem-icon" />,
        description: 'Incineration and pyrolysis for waste volume reduction and energy recovery.'
    },
];

const TechnicalProcesses = () => (
    <section className="technical-processes">
        <div className="container">
            <h2>Environmental Engineering Process Units</h2>
            
            <div className="process-section">
                <h3 className="section-title">Water & Wastewater Treatment</h3>
                <div className="process-list">
                    {waterTreatmentProcesses.map((proc, idx) => (
                        <div className="process-card water-treatment" key={`water-${idx}`}>
                            {proc.icon}
                            <h4>{proc.title}</h4>
                            <p>{proc.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="process-section">
                <h3 className="section-title">Biological Processes</h3>
                <div className="process-list">
                    {bioProcesses.map((proc, idx) => (
                        <div className="process-card bio-process" key={`bio-${idx}`}>
                            {proc.icon}
                            <h4>{proc.title}</h4>
                            <p>{proc.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="process-section">
                <h3 className="section-title">Chemical Engineering Processes</h3>
                <div className="process-list">
                    {chemicalProcesses.map((proc, idx) => (
                        <div className="process-card chem-process" key={`chem-${idx}`}>
                            {proc.icon}
                            <h4>{proc.title}</h4>
                            <p>{proc.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default TechnicalProcesses;

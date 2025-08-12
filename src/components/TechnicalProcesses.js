import React from 'react';
import { FaWater, FaFilter, FaRecycle, FaBolt, FaVial, FaLeaf, FaSlidersH, FaChartLine } from 'react-icons/fa';
import './TechnicalProcesses.css';

const processes = [
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

const TechnicalProcesses = () => (
    <section className="technical-processes">
        <h2>Water & Wastewater Treatment Systems</h2>
        <div className="process-list">
            {processes.map((proc, idx) => (
                <div className="process-card" key={idx}>
                    {proc.icon}
                    <h3>{proc.title}</h3>
                    <p>{proc.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default TechnicalProcesses;

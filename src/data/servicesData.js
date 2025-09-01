import React from 'react';
import {
    FaWater, FaFilter, FaRecycle, FaBolt, FaVial, FaLeaf, FaSlidersH,
    FaChartLine, FaIndustry, FaFlask, FaSnowflake, FaBurn, FaAtom,
    FaDna, FaSeedling, FaOilCan, FaThermometerHalf, FaCloudRain,
    FaMicroscope, FaWind, FaCogs, FaTools, FaShieldAlt, FaPlay, FaEye
} from 'react-icons/fa';

export const serviceCategories = {
    WATER_TREATMENT: 'Water & Wastewater Treatment',
    BIOLOGICAL: 'Biological Processes',
    CHEMICAL: 'Chemical Engineering',
    ANALYSIS: 'Analysis & Digital Services',
    FOOD: 'Food Engineering',
    GENERAL: 'General Engineering Services'
};

export const servicesData = [
    // Water & Wastewater Treatment
    {
        id: 'filtration',
        title: 'Filtration',
        category: serviceCategories.WATER_TREATMENT,
        icon: <FaFilter />,
        description: 'Sand, multimedia, and cartridge filtration to remove suspended solids.',
        link: '/filtration'
    },
    {
        id: 'reverse-osmosis',
        title: 'Reverse Osmosis (RO)',
        category: serviceCategories.WATER_TREATMENT,
        icon: <FaWater />,
        description: 'RO membranes for separating dissolved salts and impurities.',
        link: '/reverse-osmosis'
    },
    {
        id: 'ultrafiltration',
        title: 'Ultrafiltration (UF)',
        category: serviceCategories.WATER_TREATMENT,
        icon: <FaSlidersH />,
        description: 'Hollow fiber membranes to remove bacteria, viruses, and colloids.',
        link: '/ultrafiltration'
    },
    {
        id: 'uv-disinfection',
        title: 'UV Disinfection',
        category: serviceCategories.WATER_TREATMENT,
        icon: <FaBolt />,
        description: 'Chemical-free disinfection using UV lamps to inactivate microorganisms.',
        link: '/uv-disinfection'
    },
    {
        id: 'ion-exchange',
        title: 'Ion Exchange',
        category: serviceCategories.WATER_TREATMENT,
        icon: <FaVial />,
        description: 'Softening and deionization through resin beds for contaminant removal.',
        link: '/ion-exchange'
    },
    {
        id: 'activated-carbon',
        title: 'Activated Carbon Adsorption',
        category: serviceCategories.WATER_TREATMENT,
        icon: <FaLeaf />,
        description: 'Adsorption of organic compounds, chlorine, and taste/odor contaminants.',
        link: '/activated-carbon'
    },
    {
        id: 'primary-treatment',
        title: 'Primary Treatment',
        category: serviceCategories.WATER_TREATMENT,
        icon: <FaRecycle />,
        description: 'Screening and sedimentation to remove large solids and grit from wastewater.',
        link: undefined
    },
    {
        id: 'secondary-treatment',
        title: 'Secondary Treatment',
        category: serviceCategories.WATER_TREATMENT,
        icon: <FaChartLine />,
        description: 'Biological degradation of organic matter using activated sludge and other systems.',
        link: undefined
    },
    {
        id: 'tertiary-treatment',
        title: 'Tertiary Treatment',
        category: serviceCategories.WATER_TREATMENT,
        icon: <FaSlidersH />,
        description: 'Advanced filtration and chemical dosing for nutrient and micropollutant removal.',
        link: undefined
    },
    {
        id: 'sludge-handling',
        title: 'Sludge Handling',
        category: serviceCategories.WATER_TREATMENT,
        icon: <FaRecycle />,
        description: 'Thickening and dewatering processes for efficient solids management.',
        link: undefined
    },

    // Biological Processes
    {
        id: 'bioreactors',
        title: 'Bioreactors',
        category: serviceCategories.BIOLOGICAL,
        icon: <FaFlask />,
        description: 'Controlled fermentation vessels for microbial cultivation and bioprocessing.',
        link: '/bioreactor'
    },
    {
        id: 'anaerobic-digestion',
        title: 'Anaerobic Digestion',
        category: serviceCategories.BIOLOGICAL,
        icon: <FaDna />,
        description: 'Biogas production from organic waste through anaerobic decomposition.',
        link: undefined
    },
    {
        id: 'composting-systems',
        title: 'Composting Systems',
        category: serviceCategories.BIOLOGICAL,
        icon: <FaSeedling />,
        description: 'Aerobic decomposition of organic materials into nutrient-rich compost.',
        link: undefined
    },
    {
        id: 'membrane-bioreactors',
        title: 'Membrane Bioreactors (MBR)',
        category: serviceCategories.BIOLOGICAL,
        icon: <FaMicroscope />,
        description: 'Combined biological treatment and membrane filtration for high-quality effluent.',
        link: '/membrane-bioreactor'
    },
    {
        id: 'biofilm-reactors',
        title: 'Biofilm Reactors',
        category: serviceCategories.BIOLOGICAL,
        icon: <FaLeaf />,
        description: 'Fixed-film biological systems for efficient organic matter removal.',
        link: undefined
    },
    {
        id: 'algae-cultivation',
        title: 'Algae Cultivation',
        category: serviceCategories.BIOLOGICAL,
        icon: <FaSeedling />,
        description: 'Photobioreactors and open ponds for algae production and nutrient recovery.',
        link: undefined
    },

    // Chemical Engineering
    {
        id: 'distillation',
        title: 'Distillation',
        category: serviceCategories.CHEMICAL,
        icon: <FaThermometerHalf />,
        description: 'Separation of liquid mixtures based on different boiling points.',
        link: '/distillation'
    },
    {
        id: 'chemical-precipitation',
        title: 'Chemical Precipitation',
        category: serviceCategories.CHEMICAL,
        icon: <FaCloudRain />,
        description: 'Coagulation and flocculation for removal of dissolved contaminants.',
        link: undefined
    },
    {
        id: 'crystallization',
        title: 'Crystallization',
        category: serviceCategories.CHEMICAL,
        icon: <FaSnowflake />,
        description: 'Purification and separation through controlled crystal formation.',
        link: '/crystallization'
    },
    {
        id: 'oxidation-processes',
        title: 'Oxidation Processes',
        category: serviceCategories.CHEMICAL,
        icon: <FaAtom />,
        description: 'Advanced oxidation using ozone, peroxide, and UV for micropollutant removal.',
        link: undefined
    },
    {
        id: 'extraction',
        title: 'Extraction',
        category: serviceCategories.CHEMICAL,
        icon: <FaOilCan />,
        description: 'Liquid-liquid and solid-liquid extraction for component separation.',
        link: '/extraction'
    },
    {
        id: 'catalytic-processes',
        title: 'Catalytic Processes',
        category: serviceCategories.CHEMICAL,
        icon: <FaIndustry />,
        description: 'Heterogeneous and homogeneous catalysis for chemical transformation.',
        link: undefined
    },
    {
        id: 'gas-absorption',
        title: 'Gas Absorption',
        category: serviceCategories.CHEMICAL,
        icon: <FaWind />,
        description: 'Scrubbing towers and packed columns for gas-phase contaminant removal.',
        link: undefined
    },
    {
        id: 'thermal-treatment',
        title: 'Thermal Treatment',
        category: serviceCategories.CHEMICAL,
        icon: <FaBurn />,
        description: 'Incineration and pyrolysis for waste volume reduction and energy recovery.',
        link: undefined
    },
    {
        id: 'heat-exchanger',
        title: 'Heat Exchangers',
        category: serviceCategories.CHEMICAL,
        icon: <FaThermometerHalf />,
        description: 'Design and optimization of heat transfer equipment.',
        link: '/heat-exchanger'
    },
    {
        id: 'separators',
        title: 'Separators',
        category: serviceCategories.CHEMICAL,
        icon: <FaCogs />,
        description: 'Design of separation vessels for multiphase flows.',
        link: '/separator'
    },
    {
        id: 'reactors',
        title: 'Reactors',
        category: serviceCategories.CHEMICAL,
        icon: <FaFlask />,
        description: 'Chemical reactor design and analysis.',
        link: '/reactor'
    },

    // Analysis & Digital Services
    {
        id: 'qmra-analysis',
        title: 'QMRA Analysis',
        category: serviceCategories.ANALYSIS,
        icon: <FaChartLine />,
        description: 'Quantitative Microbial Risk Assessment for water safety.',
        link: '/qmra-analysis'
    },
    {
        id: 'machine-learning',
        title: 'Machine Learning & AI',
        category: serviceCategories.ANALYSIS,
        icon: <FaCogs />,
        description: 'AI-driven process optimization and predictive modelling.',
        link: '/machine-learning'
    },
    {
        id: 'mechanistic-analysis',
        title: 'Mechanistic Analysis',
        category: serviceCategories.ANALYSIS,
        icon: <FaTools />,
        description: 'First-principles modelling of process phenomena.',
        link: '/mechanistic-analysis'
    },
    {
        id: 'rating-curves',
        title: 'Rating Curves',
        category: serviceCategories.ANALYSIS,
        icon: <FaChartLine />,
        description: 'Development of hydraulic rating curves for flow measurement.',
        link: '/rating-curves'
    },

    // Food Engineering
    {
        id: 'dairy-processing',
        title: 'Dairy Processing',
        category: serviceCategories.FOOD,
        icon: <FaIndustry />,
        description: 'Engineering solutions for the dairy industry.',
        link: '/dairy-processing'
    },
    {
        id: 'food-safety',
        title: 'Food Safety Systems',
        category: serviceCategories.FOOD,
        icon: <FaShieldAlt />,
        description: 'Implementation of HACCP and other food safety standards.',
        link: '/food-safety-systems'
    },

    // General Engineering Services
    {
        id: 'processes',
        title: 'Process Design',
        category: serviceCategories.GENERAL,
        icon: <FaCogs />,
        description: 'Overall process design and development.',
        link: '/processes'
    },
    {
        id: 'reaction-engineering',
        title: 'Reaction Engineering',
        category: serviceCategories.GENERAL,
        icon: <FaFlask />,
        description: 'Analysis and optimization of chemical reactions.',
        link: '/reaction'
    }
];

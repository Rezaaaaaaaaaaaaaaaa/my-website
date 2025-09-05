import React, { useState } from 'react';
import { FaWater, FaCog, FaFilter, FaFlask } from 'react-icons/fa';

const ProcessFlowDiagram = ({ processType = "water_treatment" }) => {
  const [activeStep, setActiveStep] = useState(null);

  const processes = {
    water_treatment: {
      title: "Municipal Water Treatment Process",
      steps: [
        {
          id: 1,
          name: "Raw Water Intake",
          icon: FaWater,
          description: "Surface/groundwater collection with screening",
          color: "#0891b2",
          position: { x: 50, y: 50 }
        },
        {
          id: 2,
          name: "Coagulation",
          icon: FaFlask,
          description: "Chemical dosing (Alum/Ferric) for particle destabilization",
          color: "#0f766e",
          position: { x: 200, y: 50 }
        },
        {
          id: 3,
          name: "Flocculation",
          icon: FaCog,
          description: "Gentle mixing for floc formation",
          color: "#059669",
          position: { x: 350, y: 50 }
        },
        {
          id: 4,
          name: "Sedimentation",
          icon: FaFilter,
          description: "Clarifier for particle settling",
          color: "#0d9488",
          position: { x: 500, y: 50 }
        },
        {
          id: 5,
          name: "Filtration",
          icon: FaFilter,
          description: "Sand/Anthracite multimedia filters",
          color: "#0f766e",
          position: { x: 650, y: 50 }
        },
        {
          id: 6,
          name: "Disinfection",
          icon: FaFlask,
          description: "UV/Chlorine treatment",
          color: "#0891b2",
          position: { x: 800, y: 50 }
        }
      ],
      connections: [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
        { from: 5, to: 6 }
      ]
    },
    wastewater_treatment: {
      title: "Activated Sludge Wastewater Treatment",
      steps: [
        {
          id: 1,
          name: "Raw Sewage",
          icon: FaWater,
          description: "Influent wastewater collection",
          color: "#7c3aed",
          position: { x: 50, y: 50 }
        },
        {
          id: 2,
          name: "Primary Treatment",
          icon: FaFilter,
          description: "Screening & primary sedimentation",
          color: "#8b5cf6",
          position: { x: 200, y: 50 }
        },
        {
          id: 3,
          name: "Aeration Tank",
          icon: FaCog,
          description: "Activated sludge biological treatment",
          color: "#a855f7",
          position: { x: 350, y: 50 }
        },
        {
          id: 4,
          name: "Secondary Clarifier",
          icon: FaFilter,
          description: "Biomass separation",
          color: "#9333ea",
          position: { x: 500, y: 50 }
        },
        {
          id: 5,
          name: "Sludge Recycle",
          icon: FaCog,
          description: "Return activated sludge (RAS)",
          color: "#7c3aed",
          position: { x: 350, y: 150 }
        },
        {
          id: 6,
          name: "Tertiary Treatment",
          icon: FaFlask,
          description: "Nutrient removal & polishing",
          color: "#8b5cf6",
          position: { x: 650, y: 50 }
        }
      ],
      connections: [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 6 },
        { from: 4, to: 5 },
        { from: 5, to: 3 }
      ]
    },
    membrane_system: {
      title: "Reverse Osmosis Membrane System",
      steps: [
        {
          id: 1,
          name: "Feed Water",
          icon: FaWater,
          description: "Pre-treated feed water",
          color: "#dc2626",
          position: { x: 50, y: 50 }
        },
        {
          id: 2,
          name: "Pre-filtration",
          icon: FaFilter,
          description: "5μm cartridge filters",
          color: "#ea580c",
          position: { x: 200, y: 50 }
        },
        {
          id: 3,
          name: "High Pressure Pump",
          icon: FaCog,
          description: "15-80 bar pressure boost",
          color: "#f97316",
          position: { x: 350, y: 50 }
        },
        {
          id: 4,
          name: "RO Membranes",
          icon: FaFilter,
          description: "Spiral wound membrane elements",
          color: "#fb923c",
          position: { x: 500, y: 50 }
        },
        {
          id: 5,
          name: "Permeate",
          icon: FaWater,
          description: "Clean water product",
          color: "#0891b2",
          position: { x: 650, y: 30 }
        },
        {
          id: 6,
          name: "Concentrate",
          icon: FaWater,
          description: "Reject water disposal",
          color: "#dc2626",
          position: { x: 650, y: 70 }
        }
      ],
      connections: [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
        { from: 4, to: 6 }
      ]
    }
  };

  const currentProcess = processes[processType];

  const getConnectionPath = (from, to) => {
    const fromStep = currentProcess.steps.find(s => s.id === from);
    const toStep = currentProcess.steps.find(s => s.id === to);
    
    if (!fromStep || !toStep) return "";
    
    const startX = fromStep.position.x + 60;
    const startY = fromStep.position.y + 30;
    const endX = toStep.position.x;
    const endY = toStep.position.y + 30;
    
    return `M ${startX} ${startY} L ${endX} ${endY}`;
  };

  return (
    <div className="process-flow-container">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">{currentProcess.title}</h3>
        <p className="text-slate-600">Interactive Process Flow Diagram - Hover over components for details</p>
      </div>
      
      <div className="relative bg-white rounded-xl shadow-lg p-8 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0891b2" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <svg width="900" height="200" className="relative z-10">
          {/* Connections */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                    refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
            </marker>
          </defs>
          
          {currentProcess.connections.map((connection, index) => (
            <path
              key={index}
              d={getConnectionPath(connection.from, connection.to)}
              stroke="#64748b"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
              className="animate-pulse"
            />
          ))}
          
          {/* Process Steps */}
          {currentProcess.steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <g key={step.id} transform={`translate(${step.position.x}, ${step.position.y})`}>
                {/* Step circle */}
                <circle
                  cx="30"
                  cy="30"
                  r="25"
                  fill={activeStep === step.id ? step.color : 'white'}
                  stroke={step.color}
                  strokeWidth="3"
                  className="cursor-pointer transition-all duration-300 hover:scale-110"
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                />
                
                {/* Icon */}
                <foreignObject x="20" y="20" width="20" height="20">
                  <IconComponent 
                    className="w-5 h-5" 
                    style={{ color: activeStep === step.id ? 'white' : step.color }}
                  />
                </foreignObject>
                
                {/* Label */}
                <text
                  x="30"
                  y="80"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-slate-700"
                >
                  {step.name}
                </text>
                
                {/* Step number */}
                <circle
                  cx="45"
                  cy="15"
                  r="8"
                  fill={step.color}
                  className="opacity-80"
                />
                <text
                  x="45"
                  y="20"
                  textAnchor="middle"
                  className="text-xs font-bold fill-white"
                >
                  {step.id}
                </text>
              </g>
            );
          })}
        </svg>
        
        {/* Active Step Details */}
        {activeStep && (
          <div className="mt-6 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-200">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: currentProcess.steps.find(s => s.id === activeStep)?.color }}
              >
                <span className="text-white font-bold">{activeStep}</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">
                  {currentProcess.steps.find(s => s.id === activeStep)?.name}
                </h4>
                <p className="text-slate-600">
                  {currentProcess.steps.find(s => s.id === activeStep)?.description}
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Process Parameters */}
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-slate-800">
              {processType === 'water_treatment' ? '50-200 ML/d' : 
               processType === 'wastewater_treatment' ? '10-100 ML/d' : '1-50 ML/d'}
            </div>
            <div className="text-sm text-slate-600">Capacity Range</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-slate-800">
              {processType === 'water_treatment' ? '95-99%' : 
               processType === 'wastewater_treatment' ? '85-95%' : '95-99.5%'}
            </div>
            <div className="text-sm text-slate-600">Treatment Efficiency</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-slate-800">
              {processType === 'water_treatment' ? '2-6 hrs' : 
               processType === 'wastewater_treatment' ? '8-24 hrs' : '1-4 hrs'}
            </div>
            <div className="text-sm text-slate-600">Retention Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlowDiagram;
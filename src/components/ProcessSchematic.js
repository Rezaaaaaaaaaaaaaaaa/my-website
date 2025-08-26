import React, { useState } from 'react';

const ProcessSchematic = ({ schematicType = "mbr_system" }) => {
  const [hoveredComponent, setHoveredComponent] = useState(null);

  const schematics = {
    mbr_system: {
      title: "Membrane Bioreactor (MBR) System Schematic",
      width: 800,
      height: 400,
      components: [
        {
          id: 'influent',
          name: 'Raw Wastewater Influent',
          type: 'pipe',
          x: 20, y: 200, width: 80, height: 8,
          color: '#7c2d12',
          specs: 'BOD: 200-400 mg/L, TSS: 150-300 mg/L'
        },
        {
          id: 'screen',
          name: 'Fine Screen',
          type: 'rect',
          x: 120, y: 170, width: 40, height: 60,
          color: '#0f766e',
          specs: '1-3mm openings, 85% removal efficiency'
        },
        {
          id: 'anoxic',
          name: 'Anoxic Tank',
          type: 'tank',
          x: 200, y: 150, width: 80, height: 100,
          color: '#1e40af',
          specs: 'HRT: 2-4 hrs, DO: <0.5 mg/L'
        },
        {
          id: 'aerobic',
          name: 'Aerobic Bioreactor',
          type: 'tank',
          x: 320, y: 120, width: 120, height: 160,
          color: '#059669',
          specs: 'HRT: 6-12 hrs, DO: 2-4 mg/L, MLSS: 8-15 g/L'
        },
        {
          id: 'membrane',
          name: 'MF/UF Membranes',
          type: 'membrane',
          x: 480, y: 140, width: 60, height: 120,
          color: '#dc2626',
          specs: 'Pore size: 0.1-0.4 μm, Flux: 15-25 LMH'
        },
        {
          id: 'permeate',
          name: 'Treated Effluent',
          type: 'pipe',
          x: 580, y: 190, width: 100, height: 8,
          color: '#0891b2',
          specs: 'BOD: <10 mg/L, TSS: <5 mg/L, Turbidity: <1 NTU'
        },
        {
          id: 'blower',
          name: 'Air Blower',
          type: 'circle',
          x: 350, y: 50, width: 60, height: 60,
          color: '#f59e0b',
          specs: 'Capacity: 100-500 m³/hr, Pressure: 0.5-1.0 bar'
        },
        {
          id: 'ras',
          name: 'Recycle Line',
          type: 'pipe',
          x: 280, y: 300, width: 100, height: 8,
          color: '#7c3aed',
          specs: 'RAS Ratio: 100-400%, Mixed Liquor Recycle'
        }
      ]
    },
    stormwater_treatment: {
      title: "Stormwater Treatment Train Schematic",
      width: 800,
      height: 350,
      components: [
        {
          id: 'catchment',
          name: 'Urban Catchment',
          type: 'rect',
          x: 50, y: 80, width: 150, height: 60,
          color: '#6b7280',
          specs: 'Area: 10-500 ha, Runoff Coefficient: 0.3-0.9'
        },
        {
          id: 'inlet',
          name: 'Stormwater Inlet',
          type: 'rect',
          x: 220, y: 90, width: 30, height: 20,
          color: '#374151',
          specs: 'Grate inlet with sediment trap'
        },
        {
          id: 'pond',
          name: 'Detention Pond',
          type: 'ellipse',
          x: 300, y: 80, width: 100, height: 60,
          color: '#0891b2',
          specs: 'Volume: 500-5000 m³, Residence Time: 12-48 hrs'
        },
        {
          id: 'bioswale',
          name: 'Bioswale',
          type: 'rect',
          x: 450, y: 120, width: 80, height: 40,
          color: '#16a34a',
          specs: 'Infiltration Rate: 25-100 mm/hr, Vegetation Coverage'
        },
        {
          id: 'wetland',
          name: 'Constructed Wetland',
          type: 'ellipse',
          x: 580, y: 100, width: 120, height: 80,
          color: '#059669',
          specs: 'HRT: 7-14 days, TSS Removal: >80%'
        },
        {
          id: 'outlet',
          name: 'Treated Discharge',
          type: 'pipe',
          x: 720, y: 135, width: 60, height: 8,
          color: '#0284c7',
          specs: 'Meets regional discharge standards'
        }
      ]
    },
    advanced_oxidation: {
      title: "Advanced Oxidation Process (AOP) Schematic",
      width: 800,
      height: 300,
      components: [
        {
          id: 'feed',
          name: 'Contaminated Water',
          type: 'pipe',
          x: 20, y: 145, width: 80, height: 8,
          color: '#dc2625',
          specs: 'COD: 100-1000 mg/L, Pharmaceuticals, Pesticides'
        },
        {
          id: 'h2o2_tank',
          name: 'H₂O₂ Tank',
          type: 'tank',
          x: 130, y: 50, width: 60, height: 80,
          color: '#0891b2',
          specs: 'Concentration: 30-50%, Dosing: 50-200 mg/L'
        },
        {
          id: 'uv_reactor',
          name: 'UV Reactor',
          type: 'rect',
          x: 250, y: 120, width: 100, height: 60,
          color: '#7c3aed',
          specs: 'Wavelength: 254 nm, Intensity: 30-100 mW/cm²'
        },
        {
          id: 'contact_tank',
          name: 'Contact Tank',
          type: 'tank',
          x: 400, y: 100, width: 80, height: 100,
          color: '#059669',
          specs: 'HRT: 15-30 min, Hydroxyl Radical Formation'
        },
        {
          id: 'neutralization',
          name: 'pH Adjustment',
          type: 'circle',
          x: 520, y: 130, width: 40, height: 40,
          color: '#f59e0b',
          specs: 'pH: 6.5-8.5, Caustic/Acid Addition'
        },
        {
          id: 'effluent',
          name: 'Treated Water',
          type: 'pipe',
          x: 590, y: 145, width: 80, height: 8,
          color: '#10b981',
          specs: 'COD Removal: >90%, Mineralization of Organics'
        }
      ]
    }
  };

  const currentSchematic = schematics[schematicType];

  const renderComponent = (component) => {
    const commonProps = {
      fill: component.color,
      stroke: '#1f2937',
      strokeWidth: 2,
      className: 'cursor-pointer transition-all duration-300 hover:opacity-80',
      onMouseEnter: () => setHoveredComponent(component.id),
      onMouseLeave: () => setHoveredComponent(null)
    };

    switch (component.type) {
      case 'rect':
        return (
          <rect
            key={component.id}
            x={component.x}
            y={component.y}
            width={component.width}
            height={component.height}
            {...commonProps}
          />
        );
      case 'tank':
        return (
          <g key={component.id}>
            <rect
              x={component.x}
              y={component.y}
              width={component.width}
              height={component.height}
              {...commonProps}
              rx="5"
            />
            {/* Tank liquid level */}
            <rect
              x={component.x + 5}
              y={component.y + component.height * 0.3}
              width={component.width - 10}
              height={component.height * 0.6}
              fill={component.color}
              opacity="0.6"
            />
          </g>
        );
      case 'circle':
        return (
          <circle
            key={component.id}
            cx={component.x + component.width/2}
            cy={component.y + component.height/2}
            r={component.width/2}
            {...commonProps}
          />
        );
      case 'ellipse':
        return (
          <ellipse
            key={component.id}
            cx={component.x + component.width/2}
            cy={component.y + component.height/2}
            rx={component.width/2}
            ry={component.height/2}
            {...commonProps}
          />
        );
      case 'pipe':
        return (
          <rect
            key={component.id}
            x={component.x}
            y={component.y}
            width={component.width}
            height={component.height}
            {...commonProps}
            rx="4"
          />
        );
      case 'membrane':
        return (
          <g key={component.id}>
            {/* Membrane frame */}
            <rect
              x={component.x}
              y={component.y}
              width={component.width}
              height={component.height}
              {...commonProps}
            />
            {/* Membrane elements */}
            {[...Array(6)].map((_, i) => (
              <line
                key={i}
                x1={component.x + 10}
                y1={component.y + 20 + i * 15}
                x2={component.x + component.width - 10}
                y2={component.y + 20 + i * 15}
                stroke="#fff"
                strokeWidth="2"
              />
            ))}
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <div className="process-schematic-container">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">{currentSchematic.title}</h3>
        <p className="text-slate-600">Technical Process Schematic - Hover for Component Details</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <svg 
          width={currentSchematic.width} 
          height={currentSchematic.height} 
          className="mx-auto border border-gray-200 rounded-lg"
          style={{ backgroundColor: '#f8fafc' }}
        >
          {/* Background grid */}
          <defs>
            <pattern id="engineeringGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#engineeringGrid)" />
          
          {/* Flow arrows */}
          <defs>
            <marker id="flowArrow" markerWidth="10" markerHeight="7" 
                    refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
            </marker>
          </defs>
          
          {/* Render all components */}
          {currentSchematic.components.map(renderComponent)}
          
          {/* Component labels */}
          {currentSchematic.components.map((component) => (
            <text
              key={`label-${component.id}`}
              x={component.x + (component.width || 0)/2}
              y={component.y - 10}
              textAnchor="middle"
              className="text-xs font-semibold fill-slate-700"
            >
              {component.name}
            </text>
          ))}
        </svg>
        
        {/* Component Details Panel */}
        {hoveredComponent && (
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3">
              <div 
                className="w-4 h-4 rounded"
                style={{ backgroundColor: currentSchematic.components.find(c => c.id === hoveredComponent)?.color }}
              />
              <div>
                <h4 className="font-bold text-slate-800">
                  {currentSchematic.components.find(c => c.id === hoveredComponent)?.name}
                </h4>
                <p className="text-sm text-slate-600">
                  {currentSchematic.components.find(c => c.id === hoveredComponent)?.specs}
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Legend */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-slate-800 mb-3">Process Legend</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {currentSchematic.components.slice(0, 4).map((component) => (
              <div key={component.id} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: component.color }}
                />
                <span className="text-slate-600">{component.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSchematic;
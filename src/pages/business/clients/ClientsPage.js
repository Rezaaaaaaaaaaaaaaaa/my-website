import React, { useState, useMemo } from 'react';
import { 
  FaIndustry, 
  FaMapMarkerAlt, 
  FaDollarSign, 
  FaCalendarAlt,
  FaStar,
  FaFilter,
  FaSearch,
  FaEye,
  FaDownload,
  FaAward,
  FaUsers,
  FaChartLine
} from 'react-icons/fa';
import { clientsData, clientCategories, clientStats, filterClientsByCategory, searchClients } from '../../data/clients/clientsData';

const ClientsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedClient, setSelectedClient] = useState(null);

  // Filter and search clients
  const filteredClients = useMemo(() => {
    let filtered = clientsData;
    
    if (selectedCategory !== 'all') {
      filtered = filterClientsByCategory(selectedCategory);
    }
    
    if (searchTerm) {
      filtered = searchClients(searchTerm);
    }
    
    return filtered;
  }, [searchTerm, selectedCategory]);

  const ClientCard = ({ client }) => (
    <div className="card hover-card" style={{ cursor: 'pointer' }}>
      <div className="flex items-start gap-4">
        {client.logo && (
          <img 
            src={client.logo} 
            alt={`${client.name} logo`}
            className="w-16 h-16 object-contain rounded-lg bg-gray-100 p-2"
          />
        )}
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
              <p className="text-gray-600 font-medium">{client.industry}</p>
            </div>
            {client.status === 'Active' && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Active
              </span>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <FaMapMarkerAlt className="text-primary-green" />
              <span>{client.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaDollarSign className="text-primary-green" />
              <span>{client.projectValue}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaCalendarAlt className="text-primary-green" />
              <span>{new Date(client.startDate).getFullYear()}</span>
            </div>
            {client.testimonial && (
              <div className="flex items-center gap-2 text-gray-600">
                <FaStar className="text-yellow-500" />
                <span>{client.testimonial.rating}/5 Rating</span>
              </div>
            )}
          </div>

          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {client.services.slice(0, 3).map((service, index) => (
                <span 
                  key={index}
                  className="bg-accent-teal bg-opacity-10 text-accent-teal px-2 py-1 rounded text-sm"
                >
                  {service}
                </span>
              ))}
              {client.services.length > 3 && (
                <span className="text-gray-500 text-sm">
                  +{client.services.length - 3} more
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            {Object.entries(client.keyMetrics).slice(0, 2).map(([key, value]) => (
              <div key={key} className="text-center p-2 bg-gray-50 rounded">
                <div className="font-bold text-primary-green">{value}</div>
                <div className="text-xs text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                </div>
              </div>
            ))}
          </div>

          {client.testimonial && (
            <div className="border-l-4 border-accent-teal pl-4 mb-4">
              <p className="text-gray-700 italic text-sm mb-2">
                "{client.testimonial.quote.substring(0, 120)}..."
              </p>
              <p className="text-xs text-gray-600">
                — {client.testimonial.author}, {client.testimonial.position}
              </p>
            </div>
          )}

          <div className="flex justify-between items-center">
            <button
              onClick={() => setSelectedClient(client)}
              className="btn btn-primary text-sm"
            >
              <FaEye className="mr-2" /> View Details
            </button>
            {client.confidentiality === 'public' && (
              <button className="text-accent-teal hover:text-primary-green text-sm flex items-center gap-1">
                <FaDownload /> Case Study
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-container">
      {/* Header Section */}
      <section className="hero bg-gradient-to-r from-primary-green to-accent-teal">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="text-white mb-4">Our Valued Clients</h1>
            <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
              Trusted by leading organizations across New Zealand's key industries. 
              Discover how we've helped our clients achieve exceptional results through 
              innovative engineering solutions.
            </p>
            
            {/* Client Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">{clientStats.totalClients}</div>
                <div className="text-white text-sm">Total Clients</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">{clientStats.activeProjects}</div>
                <div className="text-white text-sm">Active Projects</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">{clientStats.averageRating.toFixed(1)}</div>
                <div className="text-white text-sm">Average Rating</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-white text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search clients by name, industry, or services..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent appearance-none bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Industries</option>
                {Object.entries(clientCategories).map(([key, value]) => (
                  <option key={key} value={value}>
                    {value.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Client Portfolio ({filteredClients.length} clients)
            </h2>
            <p className="text-gray-600">
              {selectedCategory === 'all' 
                ? 'Showing all clients across industries'
                : `Filtered by ${selectedCategory.split('-').join(' ')}`
              }
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Client Cards */}
          <div className="grid gap-6">
            {filteredClients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
            
            {filteredClients.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">
                  <FaUsers />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No clients found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Growing Client Family
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to achieve exceptional results for your organization? 
              Let's discuss how RMES can help you succeed.
            </p>
            <div className="flex justify-center gap-4">
              <button className="btn btn-primary btn-lg">
                <FaUsers className="mr-2" />
                Start Your Project
              </button>
              <button className="btn btn-secondary btn-lg">
                <FaDownload className="mr-2" />
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Detail Modal would go here */}
      {selectedClient && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedClient(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl max-h-96 overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedClient.name}</h2>
                <p className="text-gray-600">{selectedClient.industry}</p>
              </div>
              <button
                onClick={() => setSelectedClient(null)}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ×
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Project Summary</h3>
                <p className="text-gray-700 mb-4">{selectedClient.projectSummary}</p>
                
                <h3 className="font-semibold mb-3">Services Provided</h3>
                <ul className="space-y-1 mb-4">
                  {selectedClient.services.map((service, index) => (
                    <li key={index} className="text-gray-700 flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Key Achievements</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(selectedClient.keyMetrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-primary-green text-lg">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                      </div>
                    </div>
                  ))}
                </div>
                
                {selectedClient.testimonial && (
                  <div className="border-l-4 border-accent-teal pl-4">
                    <p className="text-gray-700 italic mb-2">
                      "{selectedClient.testimonial.quote}"
                    </p>
                    <p className="text-sm text-gray-600">
                      — {selectedClient.testimonial.author}, {selectedClient.testimonial.position}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientsPage;
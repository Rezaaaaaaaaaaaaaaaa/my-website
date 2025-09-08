import React, { useState, useMemo } from 'react';
import { 
  FaIndustry, 
  FaMapMarkerAlt, 
  FaDollarSign, 
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaFilter,
  FaSearch,
  FaEye,
  FaDownload,
  FaAward,
  FaLeaf,
  FaChartLine,
  FaCog,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { 
  projectsData, 
  projectTypes, 
  projectStatus, 
  projectStats, 
  filterProjectsByType, 
  filterProjectsByStatus 
} from '../../data/projects/projectsData';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects
  const filteredProjects = useMemo(() => {
    let filtered = projectsData;
    
    if (selectedType !== 'all') {
      filtered = filterProjectsByType(selectedType);
    }
    
    if (selectedStatus !== 'all') {
      filtered = filterProjectsByStatus(selectedStatus);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(term) ||
        project.client.toLowerCase().includes(term) ||
        project.location.toLowerCase().includes(term) ||
        project.technologies.some(tech => tech.toLowerCase().includes(term))
      );
    }
    
    return filtered;
  }, [searchTerm, selectedType, selectedStatus]);

  const getStatusColor = (status) => {
    const colors = {
      'planning': 'bg-yellow-100 text-yellow-800',
      'design': 'bg-blue-100 text-blue-800',
      'construction': 'bg-purple-100 text-purple-800',
      'commissioning': 'bg-orange-100 text-orange-800',
      'completed': 'bg-green-100 text-green-800',
      'operational': 'bg-teal-100 text-teal-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const ProjectCard = ({ project }) => (
    <div className="card hover-card">
      <div className="relative">
        {project.images && project.images[0] && (
          <img 
            src={project.images[0]} 
            alt={project.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        )}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 font-medium">{project.client}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <FaMapMarkerAlt className="text-primary-green" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaDollarSign className="text-primary-green" />
            <span>{project.projectValue}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaClock className="text-primary-green" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaUsers className="text-primary-green" />
            <span>{project.teamSize} team members</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-sm text-gray-700 mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="bg-accent-teal bg-opacity-10 text-accent-teal px-2 py-1 rounded text-xs"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-gray-500 text-xs">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {Object.entries(project.keyAchievements).slice(0, 2).map(([key, value]) => (
            <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="font-bold text-primary-green">{value}</div>
              <div className="text-xs text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
              </div>
            </div>
          ))}
        </div>

        {project.awards && project.awards.length > 0 && (
          <div className="mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-center gap-2 text-yellow-800">
              <FaAward />
              <span className="text-sm font-semibold">Award Winner</span>
            </div>
            <p className="text-xs text-yellow-700 mt-1">
              {project.awards[0].title} - {project.awards[0].organization}
            </p>
          </div>
        )}

        <div className="flex justify-between items-center">
          <button
            onClick={() => setSelectedProject(project)}
            className="btn btn-primary text-sm"
          >
            <FaEye className="mr-2" /> View Details
          </button>
          {project.confidentiality === 'public' && (
            <button className="text-accent-teal hover:text-primary-green text-sm flex items-center gap-1">
              <FaDownload /> Case Study
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-container">
      {/* Header Section */}
      <section className="hero bg-gradient-to-r from-primary-blue to-accent-blue">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="text-white mb-4">Project Portfolio</h1>
            <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of successful engineering projects 
              across New Zealand. From concept to completion, we deliver excellence 
              in every project.
            </p>
            
            {/* Project Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">{projectStats.totalProjects}</div>
                <div className="text-white text-sm">Total Projects</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">{projectStats.activeProjects}</div>
                <div className="text-white text-sm">Active Projects</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">
                  ${(projectStats.totalValue / 1000000).toFixed(1)}M
                </div>
                <div className="text-white text-sm">Total Value</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">
                  {Math.round(projectStats.averageDuration)}
                </div>
                <div className="text-white text-sm">Avg Duration (months)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects by title, client, location, or technology..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Type Filter */}
            <div className="relative">
              <FaCog className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent appearance-none bg-white"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">All Project Types</option>
                {Object.entries(projectTypes).map(([key, value]) => (
                  <option key={key} value={value}>
                    {value.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent appearance-none bg-white"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                {Object.entries(projectStatus).map(([key, value]) => (
                  <option key={key} value={value}>
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Project Portfolio ({filteredProjects.length} projects)
            </h2>
            <p className="text-gray-600">
              {selectedType === 'all' && selectedStatus === 'all'
                ? 'Showing all projects'
                : `Filtered projects`
              }
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            
            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">
                  <FaIndustry />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No projects found
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
              Start Your Next Successful Project
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to achieve outstanding results like our other clients? 
              Let's discuss your project requirements and create a solution that exceeds expectations.
            </p>
            <div className="flex justify-center gap-4">
              <button className="btn btn-primary btn-lg">
                <FaEye className="mr-2" />
                Discuss Your Project
              </button>
              <button className="btn btn-secondary btn-lg">
                <FaDownload className="mr-2" />
                Download Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const { t } = useTranslation();
  
  const projectsData = t('ProjectsPage.projects') as any[];
  const projects = [
    {
      id: 1,
      slug: 'project-cabanes',
      title: projectsData[0].title,
      description: projectsData[0].description,
      image: '/images/Site-CYVA-ytradi.avif',
      tags: projectsData[0].tags,
      cta: projectsData[0].cta,
      color: 'from-[#679436] to-[#7AAA4A]'
    },
    {
      id: 2,
      slug: 'project-iut',
      title: projectsData[1].title,
      description: projectsData[1].description,
      image: '/images/Site-Soutenance-hero.avif',
      tags: projectsData[1].tags,
      cta: projectsData[1].cta,
      color: 'from-[#05668D] to-[#1A7A9E]'
    },
    {
      id: 3,
      slug: 'project-poster',
      title: projectsData[2].title,
      description: projectsData[2].description,
      image: '/images/PochetteAlbum-NathanCourcelle.avif',
      tags: projectsData[2].tags,
      cta: projectsData[2].cta,
      color: 'from-[#679436] to-[#05668D]'  
    },
    {
      id: 4,
      slug: 'project-climbimprove',
      title: projectsData[3].title,
      description: projectsData[3].description,
      image: '/images/Site-ClimbImprove2.avif',
      tags: projectsData[3].tags,
      cta: projectsData[3].cta,
      color: 'from-[#7A4ACB] to-[#4A90E2]'
    }
  ];
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background decorative shapes */}
      <div
        className="absolute top-20 right-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #679436 0%, #05668D 100%)' }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: 'linear-gradient(225deg, #05668D 0%, #679436 100%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl mb-6 bg-gradient-to-r from-[#7AAA4A] to-[#1A7A9E] bg-clip-text text-transparent">
            {t('ProjectsPage.pageTitle')}
          </h1>
          <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
            {t('ProjectsPage.subtitle')}
          </p>
        </div>

        {/* Asymmetrical Grid Layout - Pareto Principle (3 key projects) */}
        <div className="space-y-8">
          {/* First Project - Large Feature */}
          <div className="group">
            <div className="glass rounded-3xl overflow-hidden hover:glass-strong transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div 
                  className="relative h-80 md:h-[500px] overflow-hidden cursor-pointer"
                  onClick={() => onNavigate(projects[0].slug)}
                >
                  <img
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${projects[0].color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>

                <div className="p-10 flex flex-col justify-center">
                  <h2 className="text-4xl mb-4 text-[#F2F2F2]">{projects[0].title}</h2>
                  <p className="text-lg text-[#A0A0A0] mb-6 leading-relaxed">
                    {projects[0].description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {projects[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full glass text-sm text-[#F2F2F2]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={() => onNavigate(projects[0].slug)}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-[#679436] to-[#05668D] hover:from-[#7AAA4A] hover:to-[#1A7A9E] transition-all duration-200 flex items-center gap-2"
                    >
                      <span>{projectsData[0].cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second and Third Projects - Side by Side */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(1).map((project) => (
              <div key={project.id} className="group">
                <div className="glass rounded-3xl overflow-hidden hover:glass-strong transition-all duration-300 h-full">
                  <div 
                    className="relative h-64 overflow-hidden cursor-pointer"
                    onClick={() => onNavigate(project.slug)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl mb-3 text-[#F2F2F2]">{project.title}</h3>
                    <p className="text-[#A0A0A0] mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full glass text-sm text-[#F2F2F2]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button 
                      onClick={() => onNavigate(project.slug)}
                      className="w-full px-4 py-3 rounded-full bg-gradient-to-r from-[#679436] to-[#05668D] hover:from-[#7AAA4A] hover:to-[#1A7A9E] transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <span>{project.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-lg text-[#A0A0A0] mb-6">
            {t('ProjectsPage.learnMore')}
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-block px-10 py-5 rounded-full glass-strong hover:bg-gradient-to-r hover:from-[#679436] hover:to-[#05668D] transition-all duration-200"
          >
            {t('ProjectsPage.ctaContact')}
          </button>
        </div>
      </div>
    </div>
  );
}
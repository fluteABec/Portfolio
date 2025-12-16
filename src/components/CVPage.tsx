import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Download, Code, Database, Users, Globe, Mail, Phone, MapPin, Guitar, Mountain, ChefHat } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

export function CVPage() {
  const { t } = useTranslation();
  
  const experiences = t('CVPage.experiences') as any[];
  const education = t('CVPage.education') as any[];
  const skills = (t('CVPage.skills') as any[]).map((skill: any, index: number) => ({
    ...skill,
    icon: index === 0 ? <Code className="w-6 h-6" /> :
          index === 1 ? <Database className="w-6 h-6" /> :
          index === 2 ? <Globe className="w-6 h-6" /> :
          <Users className="w-6 h-6" />
  }));
  const languages = t('CVPage.languages') as any[];
  const interests = (t('CVPage.interests') as any[]).map((interest: any, index: number) => ({
    ...interest,
    icon: index === 0 ? <Mountain className="w-8 h-8" /> :
          index === 1 ? <Guitar className="w-8 h-8" /> :
          <ChefHat className="w-8 h-8" />
  }));
  const handleDownloadCV = () => {
    // Option 1: Si vous avez un PDF dans le dossier public/
    const link = document.createElement('a');
    link.href = '/CV-Nathan-Courcelle.pdf'; // Placez votre CV.pdf dans le dossier public/
    link.download = 'CV-Nathan-Courcelle.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl mb-4 bg-gradient-to-r from-[#7AAA4A] to-[#1A7A9E] bg-clip-text text-transparent">
            {t('CVPage.name')}
          </h1>
          <p className="text-2xl text-[#F2F2F2] mb-3">{t('CVPage.title')}</p>
          <p className="text-lg text-[#A0A0A0] mb-6">{t('CVPage.age')}</p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-[#A0A0A0]">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#679436]" />
              <span>{t('CVPage.location')}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#679436]" />
              <a href="mailto:nathan.5courcelle@gmail.com" className="hover:text-[#F2F2F2] transition-colors">
                {t('CVPage.email')}
              </a>
            </div>
          </div>

          {/* Description */}
          <div className="glass rounded-3xl p-8 mb-8 max-w-3xl mx-auto">
            <p className="text-[#A0A0A0] leading-relaxed">
              {t('CVPage.description')}
            </p>
          </div>

          <button
            onClick={handleDownloadCV}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#679436] to-[#05668D] hover:from-[#7AAA4A] hover:to-[#1A7A9E] transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
          >
            <Download className="w-5 h-5" />
            {t('CVPage.downloadCV')}
          </button>
        </motion.div>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="w-8 h-8 text-[#05668D]" />
            <h2 className="text-4xl text-[#F2F2F2]">{t('CVPage.educationTitle')}</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass rounded-3xl p-8 hover:glass-strong transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl text-[#F2F2F2] mb-1">{edu.degree}</h3>
                    <p className="text-lg text-[#05668D] mb-1">{edu.school}</p>
                    <p className="text-sm text-[#679436]">{edu.location}</p>
                  </div>
                  <span className="px-4 py-2 rounded-full glass text-[#A0A0A0]">
                    {edu.period}
                  </span>
                </div>

                <p className="text-[#A0A0A0] leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl text-[#F2F2F2] mb-8">{t('CVPage.skillsTitle')}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="glass rounded-3xl p-6 hover:glass-strong transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4 text-[#679436]">
                  {skillGroup.icon}
                  <h3 className="text-xl text-[#F2F2F2]">{skillGroup.category}</h3>
                </div>

                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="text-[#A0A0A0] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#05668D] mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Languages Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl text-[#F2F2F2] mb-8">{t('CVPage.languagesTitle')}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="glass rounded-3xl p-6 hover:glass-strong transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl text-[#F2F2F2]">{lang.name}</h3>
                  <span 
                    className="px-4 py-2 rounded-full text-lg font-semibold"
                    style={{ backgroundColor: `${lang.color}33`, color: lang.color }}
                  >
                    {lang.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <Briefcase className="w-8 h-8 text-[#679436]" />
            <h2 className="text-4xl text-[#F2F2F2]">{t('CVPage.experienceTitle')}</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass rounded-3xl p-8 hover:glass-strong transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl text-[#F2F2F2] mb-1">{exp.role}</h3>
                    <p className="text-lg text-[#679436] mb-1">{exp.company}</p>
                    <p className="text-sm text-[#05668D]">{exp.location}</p>
                  </div>
                  <span className="px-4 py-2 rounded-full glass text-[#A0A0A0]">
                    {exp.period}
                  </span>
                </div>

                <p className="text-[#A0A0A0] mb-4 leading-relaxed">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#A0A0A0]">
                      <span className="text-[#05668D] mt-1">▸</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Interests Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h2 className="text-4xl text-[#F2F2F2] mb-8">{t('CVPage.interestsTitle')}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="glass rounded-3xl p-6 hover:glass-strong transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-4 text-[#679436]">
                  {interest.icon}
                </div>
                <h3 className="text-xl text-[#F2F2F2] mb-3 text-center">{interest.title}</h3>
                <p className="text-[#A0A0A0] text-center text-sm leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

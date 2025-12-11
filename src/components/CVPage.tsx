import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, Download, Code, Palette, Users } from 'lucide-react';

const experiences = [
  {
    role: 'Front-End Developer Intern',
    company: 'Tech Innovation Studio',
    period: '2024 - Present',
    description: 'Developing responsive web applications using React, TypeScript, and Tailwind CSS. Collaborating with designers to implement pixel-perfect UI components.',
    achievements: [
      'Built 5+ production-ready components',
      'Improved site performance by 40%',
      'Implemented accessibility standards (WCAG 2.1)'
    ]
  },
  {
    role: 'UI/UX Design Assistant',
    company: 'Creative Digital Agency',
    period: '2023 - 2024',
    description: 'Assisted in designing user interfaces for web and mobile applications. Created wireframes, prototypes, and design systems.',
    achievements: [
      'Designed 10+ client projects',
      'Created comprehensive design system',
      'Conducted user research sessions'
    ]
  }
];

const education = [
  {
    degree: 'DUT Informatique',
    school: 'IUT Informatique',
    period: '2022 - 2024',
    description: 'Specialized in web development, software engineering, and database management. Graduated with honors.'
  },
  {
    degree: 'Baccalauréat Scientifique',
    school: 'Lycée General',
    period: '2019 - 2022',
    description: 'Science-focused secondary education with specialization in mathematics and computer science.'
  }
];

const skills = [
  {
    category: 'Frontend Development',
    icon: <Code className="w-6 h-6" />,
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'Motion/Framer']
  },
  {
    category: 'Design Tools',
    icon: <Palette className="w-6 h-6" />,
    items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator']
  },
  {
    category: 'Soft Skills',
    icon: <Users className="w-6 h-6" />,
    items: ['Team Collaboration', 'Problem Solving', 'Communication', 'Time Management', 'Agile Methodology']
  }
];

const certifications = [
  { name: 'React Advanced Patterns', issuer: 'Frontend Masters', year: '2024' },
  { name: 'UI/UX Design Specialization', issuer: 'Coursera', year: '2023' },
  { name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2023' }
];

export function CVPage() {
  const handleDownloadCV = () => {
    alert('CV download would start here (demo mode)');
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
          <h1 className="text-6xl md:text-7xl mb-6 bg-gradient-to-r from-[#7AAA4A] to-[#1A7A9E] bg-clip-text text-transparent">
            Curriculum Vitae
          </h1>
          <p className="text-xl text-[#A0A0A0] mb-8">
            Nathan Courcelle - Front-End Developer
          </p>
          <button
            onClick={handleDownloadCV}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#679436] to-[#05668D] hover:from-[#7AAA4A] hover:to-[#1A7A9E] transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </button>
        </motion.div>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <Briefcase className="w-8 h-8 text-[#679436]" />
            <h2 className="text-4xl text-[#F2F2F2]">Professional Experience</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass rounded-3xl p-8 hover:glass-strong transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl text-[#F2F2F2] mb-1">{exp.role}</h3>
                    <p className="text-lg text-[#679436]">{exp.company}</p>
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

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="w-8 h-8 text-[#05668D]" />
            <h2 className="text-4xl text-[#F2F2F2]">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="glass rounded-3xl p-8 hover:glass-strong transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl text-[#F2F2F2] mb-1">{edu.degree}</h3>
                    <p className="text-lg text-[#05668D]">{edu.school}</p>
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl text-[#F2F2F2] mb-8">Skills & Expertise</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="glass rounded-3xl p-6 hover:glass-strong transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4 text-[#679436]">
                  {skillGroup.icon}
                  <h3 className="text-xl text-[#F2F2F2]">{skillGroup.category}</h3>
                </div>

                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="text-[#A0A0A0] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#05668D]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Award className="w-8 h-8 text-[#679436]" />
            <h2 className="text-4xl text-[#F2F2F2]">Certifications</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="glass rounded-3xl p-6 hover:glass-strong transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-lg text-[#F2F2F2] mb-2">{cert.name}</h3>
                <p className="text-[#679436] mb-1">{cert.issuer}</p>
                <p className="text-sm text-[#A0A0A0]">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

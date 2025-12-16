import { motion } from 'motion/react';
import { Code2, Palette, Zap, Github, Linkedin, Mail, FileDown, Target, Rocket, Monitor, Layers, Send, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from '../contexts/LanguageContext';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      // Configuration EmailJS
      await emailjs.send(
        'service_k0dttkt',
        'template_2swzvnp',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'NsoIuxi7uwwUirBP7'
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset le status après 5 secondes
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.');
      console.error('EmailJS Error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        {/* Static background shapes - no animation */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #679436 0%, #05668D 100%)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'linear-gradient(225deg, #05668D 0%, #679436 100%)' }}
        />

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          {/* Title - Full Width */}
          <div className="text-center mb-16">
            <h1 className="text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-[#7AAA4A] to-[#1A7A9E] bg-clip-text text-transparent">
              {t('HomePage.title')}
            </h1>
          </div>

          {/* Content Grid - 50/50 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl text-[#F2F2F2]">
                {t('HomePage.hero.subtitle')}
              </h2>

              <p className="text-lg md:text-xl text-[#A0A0A0] leading-relaxed">
                {t('HomePage.hero.description')}
              </p>

              <button
                onClick={() => onNavigate('projects')}
                className="px-10 py-5 rounded-full text-lg glass-strong hover:bg-gradient-to-r hover:from-[#679436] hover:to-[#05668D] transition-all duration-200"
              >
                {t('HomePage.hero.cta')}
              </button>
            </div>

            {/* Right Column - Profile Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#679436] to-[#05668D] rounded-full blur-xl opacity-50" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 glass">
                  <img
                    src="/images/imageProfil.avif"
                    alt="Nathan Courcelle"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-6 relative">
        {/* Background decorative shapes */}
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #679436 0%, #05668D 100%)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: 'linear-gradient(225deg, #05668D 0%, #679436 100%)' }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl text-center mb-6 text-[#F2F2F2]">
            {t('HomePage.skills.title')}
          </h2>
          <p className="text-center text-xl text-[#A0A0A0] mb-16 max-w-2xl mx-auto">
            {t('HomePage.skills.subtitle')}
          </p>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Web Development Service */}
            <div className="glass rounded-3xl p-10 hover:glass-strong transition-all duration-200 border border-white/10 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#679436]/20 to-[#679436]/10 group-hover:from-[#679436]/30 group-hover:to-[#679436]/20 transition-all duration-200">
                  <Monitor className="w-10 h-10 text-[#7AAA4A]" />
                </div>
                <h3 className="text-3xl text-[#F2F2F2]">{t('HomePage.skills.webDev.title')}</h3>
              </div>

              <p className="text-lg text-[#A0A0A0] mb-6 leading-relaxed">
                {t('HomePage.skills.webDev.description')}
              </p>

              <ul className="space-y-3 mb-8">
                {(t('HomePage.skills.webDev.features') as string[]).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#A0A0A0]">
                    <span className="text-[#7AAA4A] mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {(t('HomePage.skills.webDev.tech') as string[]).map((tech, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-[#679436]/10 text-[#7AAA4A] text-sm">{tech}</span>
                ))}
              </div>
            </div>

            {/* UI/UX Design Service */}
            <div className="glass rounded-3xl p-10 hover:glass-strong transition-all duration-200 border border-white/10 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#05668D]/20 to-[#05668D]/10 group-hover:from-[#05668D]/30 group-hover:to-[#05668D]/20 transition-all duration-200">
                  <Layers className="w-10 h-10 text-[#1A7A9E]" />
                </div>
                <h3 className="text-3xl text-[#F2F2F2]">{t('HomePage.skills.design.title')}</h3>
              </div>

              <p className="text-lg text-[#A0A0A0] mb-6 leading-relaxed">
                {t('HomePage.skills.design.description')}
              </p>

              <ul className="space-y-3 mb-8">
                {(t('HomePage.skills.design.features') as string[]).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#A0A0A0]">
                    <span className="text-[#1A7A9E] mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {(t('HomePage.skills.design.tech') as string[]).map((tech, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-[#05668D]/10 text-[#1A7A9E] text-sm">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambition Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#679436]/20 to-[#05668D]/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-12 h-12 text-[#679436]" />
                <h2 className="text-5xl text-[#F2F2F2]">{t('HomePage.ambition.title')}</h2>
              </div>

              <p className="text-xl text-[#A0A0A0] mb-6 leading-relaxed">
                {t('HomePage.ambition.text1')}
              </p>

              <div className="flex items-start gap-4 mb-6">
                <Rocket className="w-8 h-8 text-[#05668D] mt-1 flex-shrink-0" />
                <p className="text-lg text-[#A0A0A0] leading-relaxed">
                  {t('HomePage.ambition.text2')}
                  </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                {(t('HomePage.ambition.tags') as string[]).map((tag, index) => (
                  <div key={index} className="glass rounded-full px-6 py-3">
                    <span className={index % 2 === 0 ? "text-[#7AAA4A]" : "text-[#1A7A9E]"}>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl text-center mb-16 text-[#F2F2F2]">
            {t('HomePage.contact.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#F2F2F2] mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-[#679436]" />
                {t('HomePage.contact.formTitle')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#A0A0A0] mb-2">
                    {t('HomePage.contact.form.nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-[#F2F2F2] placeholder-[#A0A0A0] focus:outline-none focus:border-[#679436] transition-colors"
                    placeholder={t('HomePage.contact.form.namePlaceholder')}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#A0A0A0] mb-2">
                    {t('HomePage.contact.form.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-[#F2F2F2] placeholder-[#A0A0A0] focus:outline-none focus:border-[#679436] transition-colors"
                    placeholder={t('HomePage.contact.form.emailPlaceholder')}
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#A0A0A0] mb-2">
                    {t('HomePage.contact.form.subjectLabel')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-[#F2F2F2] placeholder-[#A0A0A0] focus:outline-none focus:border-[#679436] transition-colors"
                    placeholder={t('HomePage.contact.form.subjectPlaceholder')}
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#A0A0A0] mb-2">
                    {t('HomePage.contact.form.messageLabel')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-[#F2F2F2] placeholder-[#A0A0A0] focus:outline-none focus:border-[#679436] transition-colors resize-none"
                    placeholder={t('HomePage.contact.form.messagePlaceholder')}
                  />
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-[#679436]/20 border border-[#679436]/30 rounded-xl text-[#679436]">
                    <CheckCircle className="w-5 h-5" />
                    <p className="text-sm">{t('HomePage.contact.form.successMessage')}</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-start gap-2 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400">
                    <AlertCircle className="w-5 h-5 mt-0.5" />
                    <p className="text-sm">{t('HomePage.contact.form.errorMessage')}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[#679436] to-[#7AAA4A] hover:from-[#7AAA4A] hover:to-[#679436] text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t('HomePage.contact.form.sendingButton')}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('HomePage.contact.form.submit')}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info & CV Download */}
            <div className="space-y-6">
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl mb-6 text-[#F2F2F2]">{t('HomePage.contact.connectTitle')}</h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:nathan.5courcelle@gmail.com"
                    className="flex items-center gap-4 p-4 glass-strong rounded-full hover:bg-gradient-to-r hover:from-[#679436]/20 hover:to-[#05668D]/20 transition-all duration-200"
                  >
                    <Mail className="w-6 h-6 text-[#679436]" />
                    <span className="text-[#F2F2F2]">nathan.5courcelle@gmail.com</span>
                  </a>

                  <a
                    href="https://github.com/fluteABec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass-strong rounded-full hover:bg-gradient-to-r hover:from-[#679436]/20 hover:to-[#05668D]/20 transition-all duration-200"
                  >
                    <Github className="w-6 h-6 text-[#05668D]" />
                    <span className="text-[#F2F2F2]">{t('HomePage.contact.github')}</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/nathan-courcelle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass-strong rounded-full hover:bg-gradient-to-r hover:from-[#679436]/20 hover:to-[#05668D]/20 transition-all duration-200"
                  >
                    <Linkedin className="w-6 h-6 text-[#679436]" />
                    <span className="text-[#F2F2F2]">{t('HomePage.contact.linkedin')}</span>
                  </a>
                </div>
              </div>

              <button
                onClick={() => onNavigate('cv')}
                className="w-full px-8 py-6 rounded-full glass-strong hover:bg-gradient-to-r hover:from-[#679436] hover:to-[#05668D] transition-all duration-200 flex items-center justify-center gap-3"
              >
                <FileDown className="w-6 h-6" />
                <span>{t('HomePage.contact.cv')}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
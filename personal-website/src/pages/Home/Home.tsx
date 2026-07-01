import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Download, GraduationCap, Mail, Smartphone, Workflow } from 'lucide-react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import Cubes from '../../components/ReactBits/Cubes/Cubes';

export default function Home() {
  useDocumentTitle('Home | Onat Kaan Atılgan');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-20 pb-20 w-full">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-start text-left relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto px-6 z-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-primary font-medium mb-4"
          >
            Hello, I'm
          </motion.h2>
          <h1 className="mb-6 max-w-5xl bg-gradient-to-r from-white via-secondary to-primary bg-clip-text pb-2 text-5xl font-semibold leading-[1.15] tracking-normal text-transparent sm:text-6xl md:text-7xl xl:text-7xl">
            Onat Kaan Atılgan
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-text-muted max-w-2xl mb-10 leading-relaxed"
          >
            Senior Computer Engineering student at MEF University, <span className="text-secondary">graduating in July 2026</span>, with corporate experience in backend, full-stack, cross-platform mobile, AWS, and AI-assisted development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" onClick={() => navigate('/projects')}>
              View My Work <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.open('/resume.pdf', '_blank')}>
              Resume <Download size={20} />
            </Button>
          </motion.div>
        </motion.div>

        {/* Abstract Background Element */}
        <div
          className="absolute top-1/2 -right-10 md:-right-16 lg:-right-24 xl:-right-32 -translate-y-1/2 w-[400px] h-[400px] md:w-[650px] md:h-[650px] pointer-events-none hidden md:block opacity-50"
          style={{
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
          }}
        >
          <Cubes
            gridSize={12}
            maxAngle={45}
            cubeSize={60}
            faceColor="#333"
          />
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"><span className="text-primary">#</span> Current Focus</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full px-4">
            <Card className="p-6 bg-dark/40 border-white/5">
              <GraduationCap className="text-primary mb-5" size={30} />
              <h3 className="text-xl font-bold mb-3">Graduating Soon</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Finishing Computer Engineering at MEF University with a 3.34 / 4.00 GPA and an expected graduation date of July 2026.
              </p>
            </Card>
            <Card className="p-6 bg-dark/40 border-white/5">
              <Workflow className="text-secondary mb-5" size={30} />
              <h3 className="text-xl font-bold mb-3">Full-Stack Work</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Building backend services, web applications, dashboards, and internal tools with Spring Boot, ASP.NET, React, and FastAPI.
              </p>
            </Card>
            <Card className="p-6 bg-dark/40 border-white/5">
              <Smartphone className="text-primary mb-5" size={30} />
              <h3 className="text-xl font-bold mb-3">Mobile & AI/ML</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Built React Native features and tests for BiP at Turkcell while continuing AI/ML projects in NLP and churn prediction.
              </p>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary/10 to-secondary/10 p-1 rounded-2xl w-full max-w-3xl"
        >
          <div className="bg-dark/80 backdrop-blur-xl rounded-xl p-10 md:p-16 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-text-muted mb-8 max-w-lg mx-auto">
              I'm open to internships, junior software roles, and projects where I can contribute across backend, frontend, mobile, or AI/ML work.
            </p>
            <Button size="lg" onClick={() => window.location.href = 'mailto:onatkaanatilgan@gmail.com'}>
              <Mail size={20} /> Say Hello
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

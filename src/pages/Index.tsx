import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import DarkModeToggle from '../components/DarkModeToggle';
import Header from '../components/Header';
import Section from '../components/Section';
import EducationCard from '../components/EducationCard';
import SkillsGrid from '../components/SkillsGrid';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';
import CertificationCard from '../components/CertificationCard';

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const projects = [
    {
      title: "GeoVerse – Information Retrieval platform from a Knowledge Graph Based on Dynamic Web Portal Content",
      description: "GeoVerse is an AI-powered conversational assistant that transforms complex satellite data from the MOSDAC portal into instant, contextual answers using NLP , knowledge graphs, and semantic search.",
      technologies: "Neo4j, FastAPI, Langchain, Transformers, React, Node.js, AI/ML, LLMs",
      link: "https://github.com/Swasti1804/geoverse-ai",
      image: "/GeoVerse.png",
      darkImage: "/geoverse_dark.jpeg"
    },
    {
      title: "Prompt2Plugin – AI-Powered Chrome Extension & Workflow Generator",
      description: "Developed a tool that converts natural language prompts into fully functional Chrome extensions and n8n automation workflows. Simplifies development by generating code, logic, and structure directly from user intent.",
      technologies: "React, Node.js, AI/ML, LLMs, APIs",
      link: "https://github.com/aryy8/prompt2plugin-ai",
      image: "/p2p.png",
      darkImage: "/p2p_dark.png"
    },
    {
      title: "UniWay – MUJ's Campus Navigation Platform",
      description: "Developed UniWay, a campus navigation prototype for MUJ featuring navigation, interactive maps, smart search, student services, and future-ready extensions like AI chatbot, crowd heatmaps, volunteer support, API production, 360° street view.",
      technologies: "React, OSRM, Leaflet, Google Maps Js API, Places API, Distance matrix API",
      link: "https://github.com/aryy8/UniWay",
      image: "/uniway.png",
      darkImage: "/uniway.png"
    },
    {
      title: "SilverCircle – Social Networking Platform for Seniors",
      description: "Designed a user-friendly social platform for elderly users with features like voice-enabled chat, hobby circles, memory lane (VR experience), and simple games. Built using React, Supabase, and Tailwind CSS, with a focus on accessibility, design, and secure login.",
      technologies: "React, Supabase, Tailwind CSS",
      link: "https://github.com/aryy8/silvercircle.in",
      image: "/silvercircle.png",
      darkImage: "/silvercircle_dark.png"
    },
    {
      title: "Violence Detection Model",
      description: "Built a video classification model using a combination of CNN (MobileNet) and LSTM architectures in TensorFlow to detect violent behavior in video sequences. Focused on frame-wise feature extraction, temporal modeling, and dataset balancing. Implemented techniques like focal loss and class weighting to handle class imbalance and improve detection accuracy.",
      technologies: "TensorFlow, CNN, LSTM, Python",
      link: "https://github.com/aryy8/violence-detection-model",
      image: "/violence.png",
      darkImage: "/violence_dark.png"
    },
    {
      title: "Real-time Weapon Detection Model",
      description: "Implemented a real-time weapon detection system using YOLOv8, trained on a Hugging Face dataset, evaluated via OpenCV",
      technologies: "YOLOv8, Python, Roboflow, OpenCV",
      link: "https://github.com/aryy8/weapon-detection-model",
      image: "/weapon.jpeg",
      darkImage: "/weapon.jpeg"
    },
    {
      title: "UniPool-carpooling platform for MUJ folks",
      description: "Built Frontend for Unipool, a student-centric carpooling platform designed to connect MUJ students for safe, convenient, and eco-friendly shared travel.",
      technologies: "Html, css, js, react",
      link: "https://github.com/aryy8/uniPool",
      image: "/unipool.png",
      darkImage: "/unipool.png"
    },
    {
      title: "AI agent - Kaggle notebook generator",
      description: "AI-agent to code executable kaggle notebooks locally from bash with NLP.",
      technologies: "Python, LLM, APIs",
      link: "https://github.com/aryy8/kaggle_ai_agent"
    },
    {
      title: "Fine tuning -  DistilBERT Enhancement",
      description: "Fine-tuned a small LLM 'distilBert' using teslaP100 GPU on emotion-sentiment dataset to enhance its ability to predict emotional sentiment in text.",
      technologies: "DistilBERT, Python, GPU Computing",
      link: "https://github.com/aryy8/finetune_ai2"
    },
    {
      title: "Titanic Dataset Machine Learning Classification",
      description: "Analyzed the Titanic dataset from Kaggle to predict passenger survival outcomes based on features such as age, class, gender, and ticket fare. Applied classification algorithms such as Logistic Regression and Random Forest with PyCaret's automated pipeline.",
      technologies: "Python, Scikit-learn, PyCaret, Pandas",
      link: "https://github.com/aryy8/titanic_pycaret"
    },
    {
      title: "AryyGPT - AI Chatbot using Llama 3.2 and Ollama",
      description: "Developed AryyGPT, a conversational AI model, by fine-tuning Llama 3.2 using Ollama to run the model locally.",
      technologies: "Llama 3.2, Ollama, Python",
      link: "https://github.com/aryy8/ollama"
    }
  ];

  const experiences = [
    { company: "IEEE RAS", role: "Head of AIML (May 2025-Present)" },
    { company: "Elumina Street Solutions", role: "AI Research & Development Intern (April 2025-July 2025)" },
    { company: "AI2 Research lab", role: "Research Intern (Jan 2025-Present)" },
    { company: "180 DC MUJ", role: "Joint Head R&D (May 2025-Present)" },
    { company: "Superteam", role: "Contributor (April 2025-Present)" },
    { company: "GSSOC-2025", role: "Contributor (Present)" }
  ];

  const certifications = [
    { name: "AI Agents Fundamentals", issuer: "Hugging Face", url: "https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/aryanrastogi17/2025-02-13.png" },
    { name: "Gen AI with LLMs", issuer: "Deeplearning.ai", url: "https://coursera.org/share/338f518aff1eaa9d2336126a8ff16d9b" },
    { name: "Finetuning LLMs", issuer: "Deeplearning.ai", url: "https://learn.deeplearning.ai/accomplishments/f8c671c4-6c34-4c26-b00a-45d512ac5c7a?usp=sharing" },
    { name: "ML specialization", issuer: "Deeplearning.ai", url: "https://www.coursera.org/account/accomplishments/verify/ZU290TWNVU7Z" },
    { name: "Intro to ML", issuer: "Kaggle", url: "https://www.kaggle.com/learn/certification/aryanrastogi17/intro-to-machine-learning" },
    { name: "Postman", issuer: "Certified in API development and testing.", url: "https://api.badgr.io/public/assertions/RQHIgwJVTLyIhfu7kE6o0w" }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-black text-white'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    }`}>
      <DarkModeToggle isDark={isDark} toggle={toggleDarkMode} />
      
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <Header />
        
        <div className="space-y-12 animate-fade-in">
          <Section title="EDUCATION">
            <EducationCard />
          </Section>

          <Section title="TECHNICAL SKILLS">
            <SkillsGrid />
          </Section>

          <Section title="PROJECTS">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  link={project.link}
                  image={project.image}
                  darkImage={project.darkImage}
                  isDark={isDark}
                />
              ))}
            </div>
          </Section>

          <Section title="EXPERIENCE">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  company={exp.company}
                  role={exp.role}
                />
              ))}
            </div>
          </Section>

          <Section title="CERTIFICATIONS">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <CertificationCard
                  key={index}
                  name={cert.name}
                  issuer={cert.issuer}
                  url={cert.url}
                />
              ))}
            </div>
          </Section>
        </div>
      </div>
      <Analytics />
    </div>
  );
};

export default Index;

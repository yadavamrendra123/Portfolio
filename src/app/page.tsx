"use client"
import React, { useState, useRef, useEffect } from 'react';
import { 
  Briefcase, Code, GraduationCap, Award, Mail, Phone, Github, Linkedin, User, Star, 
  MapPin, Calendar, FileText, Book, Cpu, Cloud, Trophy
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const sectionRefs = {
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    education: useRef(null),
    certifications: useRef(null)
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 font-sans text-gray-900 flex">
      {/* Sidebar - Fixed Position */}
      <div className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-indigo-600 to-purple-700 text-white p-8 flex flex-col items-center z-50 shadow-2xl">
        <div 
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6 bg-cover bg-center"
          style={{backgroundImage: 'url("https://media.licdn.com/dms/image/D5603AQHk0gNyiYxkag/profile-displayphoto-shrink_800_800/0/1692873278163?e=1706140800&v=beta&t=5r_-RR_BVnmyMB0jNoY8VCEhKVx-VkQfJh4IjRU1vSE")'}}
        ></div>
        
        <h1 className="text-3xl font-bold text-center mb-2">Amrendra Yadav</h1>
        <p className="text-indigo-200 text-lg mb-6">Software Engineer</p>
        
        <div className="flex space-x-4 mb-6">
          <a href="https://github.com/yadavamrendra123" target="_blank" rel="noopener noreferrer" 
             className="hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/amrendra-yadav-332120198/" target="_blank" rel="noopener noreferrer" 
             className="hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:yadavamrendra789@gmail.com" 
             className="hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
        
        <nav className="w-full space-y-2">
          {[
            { icon: <User />, label: 'About', section: 'about' },
            { icon: <Briefcase />, label: 'Experience', section: 'experience' },
            { icon: <Code />, label: 'Projects', section: 'projects' },
            { icon: <Star />, label: 'Skills', section: 'skills' },
            { icon: <GraduationCap />, label: 'Education', section: 'education' },
            { icon: <Award />, label: 'Certifications', section: 'certifications' }
          ].map((item) => (
            <button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              className={`w-full flex items-center p-3 rounded-lg transition-all duration-300 ${
                activeSection === item.section 
                  ? 'bg-white text-indigo-700 shadow-lg' 
                  : 'hover:bg-indigo-500 hover:bg-opacity-50'
              }`}
            >
              {React.cloneElement(item.icon, { className: 'mr-3' })}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
      
      {/* Main Content - Scrollable */}
      <div className="ml-64 w-[calc(100%-16rem)] p-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <AboutSection ref={sectionRefs.about} />
          <ExperienceSection ref={sectionRefs.experience} />
          <ProjectsSection ref={sectionRefs.projects} />
          <SkillsSection ref={sectionRefs.skills} />
          <EducationSection ref={sectionRefs.education} />
          <CertificationsSection ref={sectionRefs.certifications} />
        </div>
      </div>
    </div>
  );
};

// Reusable Section Header Component
const SectionHeader = ({ title, icon }) => (
  <div className="flex items-center mb-6 pb-2 border-b-2 border-indigo-200">
    {React.cloneElement(icon, { className: 'mr-4 text-indigo-700', size: 32 })}
    <h2 className="text-3xl font-bold text-indigo-700">{title}</h2>
  </div>
);

// About Section
const AboutSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about" className="pt-24 scroll-mt-24">
      <SectionHeader title="About Me" icon={<User />} />
      <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-50">
        <p className="text-gray-700 leading-relaxed">
          Highly motivated and detail-oriented software engineer with 2+ years of experience in developing 
          scalable web applications. Proficient in both frontend and backend development, with expertise 
          in Ruby on Rails, Golang, React, and JavaScript technologies. Strong problem-solver with a passion 
          for creating efficient, user-friendly solutions.
        </p>
        <div className="mt-6 flex space-x-6">
          <div className="flex items-center text-indigo-600">
            <Phone className="mr-3" />
            <span>+977 9869063995</span>
          </div>
          <div className="flex items-center text-indigo-600">
            <MapPin className="mr-3" />
            <span>Koteshwor-32, Kathmandu</span>
          </div>
          <div className="flex items-center text-indigo-600">
            <Mail className="mr-3" />
            <span>yadavamrendra789@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
});

// Experience Section
const ExperienceSection = React.forwardRef((props, ref) => {
  const experiences = [
    {
      company: 'Cloco Nepal Inc Pvt Ltd',
      title: 'Software Engineer',
      duration: 'July 2023 - Present',
      responsibilities: [
        'Developed scalable web applications using Ruby on Rails and Golang',
        'Implemented background jobs and performance optimizations',
        'Designed and optimized database schemas for efficient data storage',
        'Deployed backend services on AWS (EC2, S3, Lambda, RDS, ECS)',
        'Maintained microservices architectures'
      ]
    },
    {
      company: 'Logicurv Technologies',
      title: 'Frontend Developer (Part-Time)',
      duration: 'August 2023 - June 2024',
      responsibilities: [
        'Built responsive components using React and TypeScript',
        'Converted UI/UX designs into interactive web pages',
        'Optimized applications with lazy loading and code splitting',
        'Developed mobile app interfaces using React Native',
        'Integrated RESTful APIs'
      ]
    },
    {
      company: 'Aeon Soft Solution Technology Pvt Ltd',
      title: 'Junior Frontend Developer',
      duration: 'Sept 2022 - June 2023',
      responsibilities: [
        'Implemented server-side rendering with Next.js',
        'Converted Figma designs to code',
        'Implemented responsive design principles',
        'Managed application state with Zustand',
        'Integrated GraphQL APIs and authentication mechanisms'
      ]
    }
  ];

  return (
    <section ref={ref} id="experience" className="pt-24 scroll-mt-24">
      <SectionHeader title="Professional Experience" icon={<Briefcase />} />
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-indigo-50 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700">{exp.title}</h3>
                <p className="text-gray-600">{exp.company}</p>
              </div>
              <div className="flex items-center text-gray-500">
                <Calendar className="mr-2 text-indigo-500" size={20} />
                <span>{exp.duration}</span>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="pl-2">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
});

// Projects Section
const ProjectsSection = React.forwardRef((props, ref) => {
  const projects = [
    {
      name: 'Book@TableRequest, SmartRequest, AppRequest',
      company: 'Bespo Inc at Cloco Nepal Inc',
      description: 'Developed web and mobile applications for user request functionalities, including table bookings and smart automation.',
      technologies: ['Ruby on Rails', 'Vue.js', 'AWS', 'Docker', 'SQL']
    },
    {
      name: 'Welby Project',
      description: 'Comprehensive hospital management system with patient management, appointment scheduling, and medical record keeping.',
      technologies: ['Golang', 'SQL', 'Healthcare Standards']
    },
    {
      name: 'Basiyo Project',
      description: 'Hotel booking and hosting platform with user registration, booking management, and payment gateway integration.',
      technologies: ['React', 'Django', 'AWS', 'Payment Systems']
    },
    {
      name: 'Smart Metering with Cloud Computation',
      description: 'Cloud-based smart metering system with real-time electricity usage monitoring and visualization.',
      technologies: ['Python', 'AWS', 'IoT', 'Cloud Services']
    },
    {
      name: 'Car Showroom Management System',
      description: 'Database system for managing inventory, customer information, sales tracking, and service scheduling.',
      technologies: ['MySQL', 'Database Design', 'User Interface']
    }
  ];

  return (
    <section ref={ref} id="projects" className="pt-24 scroll-mt-24">
      <SectionHeader title="Key Projects" icon={<Code />} />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-md border border-indigo-50 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3">{project.name}</h3>
            {project.company && <p className="text-gray-600 mb-2">{project.company}</p>}
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

// Skills Section
const SkillsSection = React.forwardRef((props, ref) => {
  const skills = {
    'Programming Languages': ['Ruby', 'Golang', 'JavaScript', 'Python', 'C', 'C++'],
    'Backend Technologies': ['Ruby on Rails', 'Golang (Gin, Fiber)', 'Django', 'Next.js'],
    'Frontend Technologies': ['React.js', 'Vue.js', 'Tailwind CSS', 'Material UI', 'Shadcn UI'],
    'Databases': ['PostgreSQL', 'MySQL', 'MongoDB'],
    'DevOps & Cloud': ['Docker', 'Git', 'AWS', 'Linux', 'EC2', 'Lambda', 'S3']
  };

  return (
    <section ref={ref} id="skills" className="pt-24 scroll-mt-24">
      <SectionHeader title="Technical Skills" icon={<Cpu />} />
      <div className="space-y-6">
        {Object.entries(skills).map(([category, skillList], index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-md border border-indigo-50 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

// Education Section
const EducationSection = React.forwardRef((props, ref) => {
  const education = [
    {
      institution: 'Pokhara University',
      degree: 'Bachelor of Science in Computer Science and Information Technology (BSc CSIT)',
      duration: '2018 - 2022',
      highlights: [
        'Specialized in software engineering and system design.',
        'GPA: 3.75/4.0.',
        'Final year project: Smart Metering with Cloud Computation.'
      ]
    }
  ];

  return (
    <section ref={ref} id="education" className="pt-24 scroll-mt-24">
      <SectionHeader title="Education" icon={<GraduationCap />} />
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-indigo-50 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-indigo-700">{edu.institution}</h3>
            <p className="text-gray-600 mb-4">{edu.degree}</p>
            <p className="text-gray-500">{edu.duration}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              {edu.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
});

// Certifications Section
const CertificationsSection = React.forwardRef((props, ref) => {
  const certifications = [
    { name: 'AWS Certified Solutions Architect – Associate', date: 'July 2023', issuer: 'Amazon Web Services' },
    { name: 'Certified Kubernetes Administrator (CKA)', date: 'June 2023', issuer: 'Linux Foundation' },
    { name: 'JavaScript Algorithms and Data Structures', date: 'March 2022', issuer: 'freeCodeCamp' }
  ];

  return (
    <section ref={ref} id="certifications" className="pt-24 scroll-mt-24">
      <SectionHeader title="Certifications" icon={<Award />} />
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-indigo-50 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-indigo-700">{cert.name}</h3>
            <p className="text-gray-600">{cert.issuer}</p>
            <p className="text-gray-500">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Portfolio;
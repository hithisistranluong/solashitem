import Header from './components/Header';
import StarfieldBackground from './components/StarfieldBackground';
import SolarSystem from './components/SolarSystem';
import ProjectsSection from './components/ProjectsSection';
import Section from './components/Section';

export default function Home() {
  return (
    <>
      <StarfieldBackground />
      
      <div className="page-content">
        <Header />
        
        {/* Hero */}
        <section id="home" className="page-hero pt-16 universe-band--blue">
          <div 
            className="section-panel absolute inset-0 pointer-events-none"
            aria-hidden="true"
          />
          
          <div className="container py-10 mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Tran Luong
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-primary)] mb-8">
              Artificial Intelligence | Data Science | Web Development
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-16 whitespace-pre-line">
              Exploring the intersection of artificial intelligence, algorithms, and data analysis.
              Building solutions that turn data into insight and ideas into applications.
            </p>
            
            <SolarSystem />
          </div>
        </section>

        {/* About */}
        <Section id="about" title="About Me" band="dark">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 mb-6 text-justify">
              Hello! I&apos;m Tran Luong, an aspiring AI and data science practitioner with a 
              passion for software and web development. I enjoy building intelligent systems, 
              analyzing data, and crafting solutions that combine solid engineering with meaningful insights.
            </p>
            <p className="text-lg text-gray-300 mb-6 text-justify">
              I enjoy solving complex problems where code meets data. 
              Whether I'm training machine-learning models or uncovering insights through analysis and visualization, 
              I combine technical skill with a deep curiosity for intelligent systems.
            </p>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills & Technologies" band="blue">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'Git', 'Python', 'Java',
              'HTML/CSS', 'JavaScript', 'TypeScript', 'React',
              'Next.js', 'Node.js', 'Tailwind CSS', 'REST APIs',
              'Mathematics'
            ].map((skill) => (
              <div 
                key={skill}
                className="project-card text-center"
              >
                <p className="text-gray-200 font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Featured Projects" band="dark">          
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Explore my work in AI, data science, and web development
          </p>
          
          <ProjectsSection />
        </Section>

        {/* Contact */}
        <Section id="contact" title="Get In Touch" band="blue">
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-lg text-gray-300 mb-8">
              I&apos;m always open to new opportunities and collaborations. 
              Feel free to reach out if you&apos;d like to connect!
            </p>
            <div className="flex justify-center gap-6">
              <a href="mailto:luongngocbaotran@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                  <rect x="3" y="6" width="18" height="12" rx="2" />
                </svg>
                Email Me
              </a>

              <a href="https://github.com/hithisistranluong"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <title>GitHub</title>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.476 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.566 9.566 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>

              <a href="https://www.linkedin.com/in/tran-luong-is-here"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button flex items-center gap-2"
              >
                <svg className="w-5 h-5" role="img" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.477-.9 1.637-1.852 3.368-1.852 3.602 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.227.791 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="border-t border-[var(--astro-cosmic-cyan))]/30 py-6 relative universe-band--dark">
          <div 
            className="section-panel absolute inset-0 pointer-events-none"
            aria-hidden="true"
          />
          
          <div className="container mx-auto px-6 text-center text-gray-400 relative z-10">
            <p>&copy; {new Date().getFullYear()} Tran Luong. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

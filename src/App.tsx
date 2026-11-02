import { useEffect, useRef, useState, type ReactNode } from 'react'

const resume = 'Hariharan%20G%20Resume.pdf'
const github = 'https://github.com/GShari-hub'

type RevealProps = { children: ReactNode; className?: string }

function Reveal({ children, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`}>{children}</div>
}

const skills = [
  ['⌨️', 'Programming', 'Python programming and development of a network port scanning project.'],
  ['🛡️', 'Security Monitoring', 'SIEM concepts, security alert investigation, endpoint activity, and log analysis.'],
  ['🌐', 'Network Security', 'Network scanning concepts, port discovery, and network security fundamentals.'],
  ['🔎', 'Threat Investigation', 'Examining security events, investigating suspicious activity, and documenting findings.'],
  ['🐧', 'Linux & Operating Systems', 'Cybersecurity operating system fundamentals and Linux tooling.'],
  ['🎯', 'Ethical Hacking', 'Ethical hacking concepts and security testing knowledge supported by CEH certification.'],
]

const certifications = [
  ['Security Operations Fundamentals', 'Course completion certificate.', 'security-operations-fundamentals.pdf'],
  ['Cisco — Introduction to Cybersecurity', 'Cisco Networking Academy course completion.', 'cisco-introduction-to-cybersecurity.pdf'],
  ['Deloitte Cyber Job Simulation', 'Cybersecurity job simulation certificate issued by Forage.', 'deloitte-cyber-job-simulation.pdf'],
  ['Oracle Cloud Infrastructure 2025 Certified Foundations Associate', 'Oracle Cloud Foundations credential.', 'oracle-cloud-foundations.pdf'],
]

const projects: Array<{ number: string; title: string; description: string; tags: string[] }> = [
  {
    number: 'PROJECT_01',
    title: 'Python Network Port Scanner',
    description: 'A Python project focused on network port scanning and identifying accessible ports on authorized target systems. The project provides an opportunity to explore TCP/IP concepts, port states, and basic network reconnaissance.',
    tags: ['Python', 'Networking', 'Port Scanning'],
  },
  {
    number: 'PROJECT_02',
    title: 'Wazuh SIEM Alert Investigation',
    description: 'A security monitoring and investigation project focused on examining security alerts through Wazuh. The investigation process covers endpoint activity, security logs, suspicious behavior, and structured documentation of investigation findings.',
    tags: ['Wazuh', 'SIEM', 'Log Analysis', 'SOC'],
  },
]

function Button({ children, href, secondary = false, download = false }: { children: React.ReactNode; href: string; secondary?: boolean; download?: boolean }) {
  return <a className={`btn ${secondary ? 'btn-secondary' : 'btn-primary'}`} href={href} download={download || undefined} target={href.startsWith('http') || href.endsWith('.pdf') ? '_blank' : undefined} rel="noopener noreferrer">{children}</a>
}

function SectionHeading({ label, title, description }: { label: string; title: string; description?: string }) {
  return <Reveal className="section-heading"><span className="section-label">{label}</span><h2>{title}</h2>{description && <p>{description}</p>}</Reveal>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = ['about', 'skills', 'projects', 'certifications', 'resume', 'education', 'contact']
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header>
        <nav className="container" aria-label="Main navigation">
          <a href="#home" className="logo" onClick={closeMenu}><span>G</span>s</a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>{menuOpen ? '✕' : '☰'}</button>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => <li key={item}><a href={`#${item}`} onClick={closeMenu}>{item[0].toUpperCase() + item.slice(1)}</a></li>)}
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-content">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
            <h1>Hariharan <span>G</span></h1>
            <h2>Aspiring SOC Analyst</h2>
            <p className="hero-description">B.E. Cybersecurity student passionate about SOC operations, security monitoring, threat investigation, network security, and ethical hacking. Building practical projects to develop real-world cybersecurity skills.</p>
            <div className="buttons">
              <Button href="#projects">Explore My Projects ↗</Button>
              <Button href="#contact" secondary>Connect With Me</Button>
              <Button href={resume} secondary>View Resume ↗</Button>
              <Button href={resume} secondary download>Download Resume ↓</Button>
            </div>
            <div className="hero-meta"><span><strong>Degree:</strong> B.E. Cybersecurity</span><span><strong>Graduation:</strong> 2027</span><span><strong>Focus:</strong> SOC & Ethical Hacking</span></div>
            <div className="tool-badges">{[['⌘', 'Kali Linux'], ['◈', 'Wireshark'], ['⌁', 'Nmap'], ['{ }', 'Python'], ['▣', 'Wazuh SIEM']].map(([icon, name]) => <span className="tool-badge" key={name}><span className="badge-icon">{icon}</span>{name}</span>)}</div>
          </div>
        </section>

        <section id="about"><div className="container">
          <SectionHeading label="01 / About Me" title="Securing systems through curiosity." description="My background, interests, and professional direction." />
          <div className="about-grid">
            <Reveal className="panel"><h3>Hello, I'm Hariharan</h3><p>I am pursuing a Bachelor of Engineering in Computer Science and Engineering with a specialization in Cybersecurity at Dhanalakshmi College of Engineering. I expect to graduate in 2027.</p><p>My interests include security operations, threat detection, network security, and ethical hacking. I have worked on a Python Network Port Scanner project and a Wazuh SIEM Alert Investigation project.</p><p>I am working toward an entry-level cybersecurity career where I can apply my knowledge, investigate suspicious activity, learn from experienced security professionals, and contribute to protecting systems.</p></Reveal>
            <Reveal className="panel profile-facts">{[['Education', 'B.E. CSE — Cybersecurity'], ['Institution', 'Dhanalakshmi College of Engineering'], ['Graduation', '2027']].map(([label, value]) => <div className="fact" key={label}><small>{label}</small><strong>{value}</strong></div>)}</Reveal>
          </div>
        </div></section>

        <section id="skills"><div className="container"><SectionHeading label="02 / Technical Skills" title="My technical foundation." description="Areas relevant to cybersecurity analysis and security testing." /><div className="skills-grid">{skills.map(([icon, title, text]) => <Reveal className="skill-card" key={title}><div className="skill-icon">{icon}</div><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>

        <section id="projects"><div className="container"><SectionHeading label="03 / Featured Projects" title="Practical cybersecurity work." description="Projects demonstrating programming, network security, security monitoring, and investigation concepts." /><div className="projects-grid">
          {projects.map(({ number, title, description, tags }) => <Reveal className="project-card" key={title}><div className="project-number">{number}</div><h3>{title}</h3><p>{description}</p><div className="tags">{tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><a className="project-link" href={github} target="_blank" rel="noopener noreferrer">Explore GitHub Profile ↗</a></Reveal>)}
        </div><Reveal className="note"><strong>Project documentation:</strong> Replace the profile links above with direct repository URLs for each project. Add screenshots, implementation details, testing evidence, and actual findings before describing specific results.</Reveal></div></section>

        <section id="certifications"><div className="container"><SectionHeading label="04 / Certifications & Learning" title="Professional development." description="Open or download the soft-copy PDFs of my completed courses and certificates." /><div className="cert-list">{certifications.map(([title, text, file]) => <Reveal className="cert-item" key={title}><div className="cert-check">✓</div><div className="cert-content"><h3>{title}</h3><p>{text}</p><div className="cert-actions"><Button href={`certificates/${file}`}>View Certificate ↗</Button><Button href={`certificates/${file}`} secondary download>Download PDF ↓</Button></div></div></Reveal>)}</div></div></section>

        <section id="resume"><div className="container"><SectionHeading label="05 / Resume" title="Credentials. Skills. Direction." description="View or download my resume for a summary of my education, technical skills, certifications, and projects." /><Reveal className="resume-panel"><div className="resume-terminal"><div className="terminal-top"><span /><span /><span /><strong>hariharan_resume.pdf</strong></div><div className="terminal-body"><p><span className="terminal-prompt">hariharan@portfolio:~$</span> cat resume_status.txt</p><p className="terminal-output">PROFILE: Aspiring Cybersecurity Analyst</p><p className="terminal-output">FOCUS: Network Security | Security Monitoring | Ethical Hacking</p><p className="terminal-output">STATUS: Open to entry-level opportunities</p><p><span className="terminal-prompt">hariharan@portfolio:~$</span> <span className="terminal-cursor">█</span></p></div></div><div className="resume-actions"><h3>Hariharan G — Cybersecurity Resume</h3><p>Includes my education, technical skills, certifications, and projects.</p><div className="buttons"><Button href={resume}>View Resume ↗</Button><Button href={resume} secondary download>Download PDF ↓</Button></div></div></Reveal></div></section>

        <section id="education"><div className="container"><SectionHeading label="06 / Education" title="Academic background." /><Reveal className="education-card"><h3>Bachelor of Engineering — Computer Science and Engineering</h3><p>Specialization: Cybersecurity</p><p>Dhanalakshmi College of Engineering</p><p className="percentage">CGPA: 7.54</p><span className="year">Expected Graduation: 2027</span></Reveal><Reveal className="education-card education-secondary"><h3>Agathiya Matriculation Higher Secondary School</h3><p>12th Grade</p><p className="percentage">Percentage: 78%</p><span className="year">Completed: 2023</span></Reveal></div></section>

        <section id="contact"><div className="container"><Reveal className="contact-box"><span className="section-label">07 / Contact</span><h2>Let's connect.</h2><p>I am interested in cybersecurity opportunities, professional networking, and connecting with people working in security operations and ethical hacking.</p><div className="contact-links"><Button href={github}>GitHub ↗</Button><Button href="https://www.linkedin.com/in/hariharan-g-315909354/" secondary>LinkedIn ↗</Button><Button href="mailto:gshariharan10@gmail.com">✉ Email Me</Button></div></Reveal></div></section>
      </main>
      <footer><div className="container"><p>© {new Date().getFullYear()} Hariharan G. Cybersecurity Portfolio.</p></div></footer>
    </>
  )
}

export default App

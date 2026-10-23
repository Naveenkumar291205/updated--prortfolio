import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Download,
  Code2,
  Sparkles,
  BookOpen,
  Award,
  Trophy,
  Bot,
  Send,
  Lightbulb,
  FileBadge,
  FlaskConical,
  Phone,
  MapPin,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { Github, Linkedin } from "./components/Icons.jsx";
import Intro from "./components/Intro.jsx";
import HeroPortrait from "./components/HeroPortrait.jsx";
import ProjectCard from "./components/ProjectCard.jsx";

// ── Personal Contact Info from Resume ──
const GITHUB_USER = "Naveenkumar291205";
const EMAIL = "kumarmnaveen384@gmail.com";
const PHONE = "+91-6385235131";
const LOCATION = "Dharmapuri, Tamil Nadu";
const LINKEDIN = "https://www.linkedin.com/in/naveen-kumar-m-36793a305/";
const GITHUB = `https://github.com/${GITHUB_USER}`;

// ── Internships from Resume ──
const internships = [
  {
    company: "Sparkout Tech Solutions",
    role: "Python Intern",
    domain: "Python & Backend Development",
    duration: "4 months",
    status: "Completed",
    description:
      "Developed Python and backend features over a 4-month internship, strengthening programming and application-development skills with REST APIs.",
  },
  {
    company: "Cognifyz Technologies",
    role: "Full Stack Intern",
    domain: "Full Stack Development",
    duration: "1 month",
    status: "Completed",
    description:
      "Worked on full-stack web application development, applying frontend and backend workflows.",
  },
];

// ── Flagship Projects from Resume (Including 4 Deployed Live Netlify Apps) ──
const projects = [
  {
    title: "Men’s Sportswear Website",
    type: "ECOMMERCE / WEB APP · LIVE NETLIFY",
    description:
      "A modern responsive men's athletic & sportswear eCommerce website deployed live on Netlify featuring streamlined catalog discovery, responsive product cards, and clean UI.",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Netlify"],
    art: "sportswear",
    theme: "project-lime",
    github: GITHUB,
    live: "https://mens-spoartwear.netlify.app/",
  },
  {
    title: "Teachers’ Day Surprise Website",
    type: "INTERACTIVE WEB EXPERIENCE · LIVE NETLIFY",
    description:
      "An animated celebration web experience deployed live on Netlify featuring interactive appreciation cards, smooth micro-interactions, audio and celebratory visual effects.",
    stack: ["HTML", "CSS", "JavaScript", "Micro-Animations", "Netlify"],
    art: "teachers",
    theme: "project-violet",
    github: GITHUB,
    live: "https://eachersday-surprice.netlify.app/",
  },
  {
    title: "Agri Smart Farming",
    type: "SMART AGRICULTURE / WEB APP · LIVE NETLIFY",
    description:
      "A smart agriculture platform deployed live on Netlify connecting digital analytics, crop health tools, and practical farming workflows for modern agriculture.",
    stack: ["React.js", "Tailwind CSS", "AI Agriculture", "REST APIs", "Netlify"],
    art: "agri",
    theme: "project-sage",
    github: GITHUB,
    live: "https://agri-smartforming.netlify.app/",
  },
  {
    title: "Starlit Mochi Website",
    type: "CREATIVE WEB APP · LIVE NETLIFY",
    description:
      "A creative frontend product showcase deployed live on Netlify featuring custom aesthetic branding, interactive product showcases, and responsive layouts.",
    stack: ["JavaScript", "React", "CSS3", "Responsive UI", "Netlify"],
    art: "mochi",
    theme: "project-field",
    github: GITHUB,
    live: "https://starlit-mochi-0eb160.netlify.app/",
  },
  {
    title: "AI Crop Disease Prediction",
    type: "MACHINE LEARNING / CNN",
    description:
      "Developed an AI/ML-based approach using CNN (Convolutional Neural Network) models to accurately predict crop diseases and support smart agricultural decision-making.",
    stack: ["Python", "Machine Learning", "CNN Models", "Prediction Systems"],
    art: "ai",
    theme: "project-field",
    github: GITHUB,
    live: "",
  },
  {
    title: "Secure Task Flow",
    type: "FULL STACK / JWT AUTHENTICATION",
    description:
      "Built a full-stack task management application with secure JWT authentication and user workflow authorization to organize work through a clean, reliable interface.",
    stack: ["Flask", "React.js", "REST APIs", "JWT Authentication", "MySQL"],
    art: "task",
    theme: "project-lime",
    github: GITHUB,
    live: "",
  },
  {
    title: "AIT Placement",
    type: "EDTECH / CAREER PLATFORM · LIVE VERCEL",
    description:
      "A placement-focused web platform for student and career-readiness workflows deployed live on Vercel.",
    stack: ["Web Application", "UI / UX", "Vercel"],
    art: "placement",
    theme: "project-sage",
    github: GITHUB,
    live: "https://aitplacement.vercel.app/",
  },
  {
    title: "Real-Time Code Collaboration",
    type: "DEVELOPER TOOLS",
    description:
      "A concept for collaborative coding and shared developer workflows in real time.",
    stack: ["Web Development", "Collaboration", "Realtime"],
    art: "collab",
    theme: "project-violet",
    github: GITHUB,
    live: "",
  },
];

// ── Technical Skills from Resume ──
const skills = {
  "Programming": ["Python", "JavaScript"],
  "Frontend Development": ["HTML", "CSS", "React.js", "Tailwind CSS", "Responsive Design"],
  "Backend Development": ["Flask", "REST APIs", "JWT Authentication"],
  "Database": ["MySQL"],
  "AI / ML": ["Machine Learning", "CNN Models", "Prediction Systems"],
  "Tools": ["Git", "GitHub", "VS Code", "Postman"],
};

// ── Achievements from Resume ──
const achievements = [
  ["SMARTATHON 2.0", "3x Finalist"],
  ["GDG AI Hackathon", "Finalist"],
  ["ZENITH’25", "Finalist"],
  ["DevForge", "Selected"],
  ["AI in Healthcare Hackathon", "Participant"],
  ["Research Paper Presentation", "Presented"],
];

// ── Certifications & Training from Resume ──
const certifications = [
  ["Python Internship", "Sparkout Tech Solutions · 4 Months Completed"],
  ["Full Stack Internship", "Cognifyz Technologies · 1 Month Completed"],
  ["GUVI Flask Training", "Certified"],
  ["GUVI HTML & CSS", "Certified"],
  ["Pantech Full Stack Course", "Completed"],
  ["Generative AI Training", "Completed"],
  ["HP AI Certifications", "Certified"],
  ["Government IP Awareness", "Certified"],
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["WORK", "#work"],
    ["EXPERIENCE", "#experience"],
    ["EDUCATION", "#education"],
    ["SKILLS", "#skills"],
    ["HIGHLIGHTS", "#achievements"],
    ["RESEARCH", "#research"],
    ["CONTACT", "#contact"],
  ];
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Naveen Kumar home">
        Naveen Kumar<span>®</span>
      </a>
      <nav className={open ? "nav-open" : ""} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
            <span>↗</span>
          </a>
        ))}
      </nav>
      <a className="availability" href="#contact">
        <i /> OPEN TO OPPORTUNITIES
      </a>
      <button
        className="menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function GitHubSection() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading");
  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=12`, {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API unavailable");
        return res.json();
      })
      .then((data) => {
        setRepos(Array.isArray(data) ? data.filter((r) => !r.fork).slice(0, 4) : []);
        setStatus("ready");
      })
      .catch((err) => {
        if (err.name !== "AbortError") setStatus("error");
      });
    return () => controller.abort();
  }, []);
  return (
    <section className="github-section section" id="github">
      <div className="section-heading">
        <div>
          <p className="eyebrow">OPEN SOURCE / GITHUB</p>
          <h2>
            Code in the
            <br />
            <span className="muted">open.</span>
          </h2>
        </div>
        <a className="outline-link" href={GITHUB} target="_blank" rel="noreferrer">
          VIEW GITHUB <ArrowUpRight size={16} />
        </a>
      </div>
      {status === "loading" && <p className="github-status">Fetching public repositories…</p>}
      {status === "error" && (
        <div className="github-fallback">
          <Github size={22} />
          <p>GitHub's API is unavailable right now. Explore the profile for current repositories.</p>
          <a href={GITHUB} target="_blank" rel="noreferrer">
            OPEN GITHUB ↗
          </a>
        </div>
      )}
      {status === "ready" && repos.length === 0 && (
        <div className="github-fallback">
          <p>No public repositories were returned. Open the profile to browse available projects.</p>
          <a href={GITHUB} target="_blank" rel="noreferrer">
            OPEN GITHUB ↗
          </a>
        </div>
      )}
      {status === "ready" && repos.length > 0 && (
        <div className="repo-grid">
          {repos.map((repo) => (
            <a className="repo-card" key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer">
              <div className="repo-title">
                <Code2 size={17} />
                <b>{repo.name}</b>
                <ArrowUpRight size={15} />
              </div>
              <p>{repo.description || "Public repository — open to explore the code and project details."}</p>
              <div className="repo-meta">
                <span>{repo.language || "Code"}</span>
                <span>★ {repo.stargazers_count}</span>
                <span>⑂ {repo.forks_count}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [notice, setNotice] = useState("");
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nReply email: ${form.email}\n\n${form.message}`
    );
    setNotice("Your email app will open with this message prepared. Send it there to complete delivery.");
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };
  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        Your name
        <input
          name="name"
          value={form.name}
          onChange={update}
          required
          autoComplete="name"
          placeholder="Name"
        />
      </label>
      <label>
        Your email
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={update}
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={update}
          required
          rows="4"
          placeholder="Tell me about the opportunity…"
        />
      </label>
      <button className="submit-button" type="submit">
        PREPARE MESSAGE <ArrowUpRight size={17} />
      </button>
      <p className="form-note" aria-live="polite">
        {notice || "This form opens your default email app; it does not send without your action."}
      </p>
    </form>
  );
}

function ExperienceSection() {
  return (
    <section className="experience section" id="experience">
      <div className="section-heading">
        <div>
          <p className="eyebrow">INTERNSHIPS / PRACTICAL EXPERIENCE</p>
          <h2>
            Experience &<br />
            <span className="muted">internships.</span>
          </h2>
        </div>
        <p className="section-intro">
          Hands-on internship experience in Python backend development and full-stack engineering.
        </p>
      </div>
      <div className="experience-list">
        {internships.map((item, i) => (
          <motion.article
            className="experience-row"
            key={item.company}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <span className="experience-index">0{i + 1}</span>
            <div className="experience-main">
              <div className="experience-titleline">
                <h3>{item.company}</h3>
                <span className="status-pill">{item.status}</span>
              </div>
              <p className="experience-role">
                {item.role} <span>·</span> {item.domain}
              </p>
              <p>{item.description}</p>
            </div>
            <div className="experience-duration">
              <b>{item.duration}</b>
              <span>DURATION</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="education-section section" id="education">
      <div className="section-heading">
        <div>
          <p className="eyebrow">ACADEMIC FOUNDATION</p>
          <h2>
            Education &<br />
            <span className="muted">credentials.</span>
          </h2>
        </div>
        <p className="section-intro">
          Information Technology degree program with strong foundation in computing and engineering.
        </p>
      </div>
      <div className="education-grid">
        <article className="education-card highlight">
          <div className="education-top">
            <span className="education-period">2023 – 2027 · CURRENT</span>
            <span className="education-gpa">CGPA: 7.89 / 10</span>
          </div>
          <h3>B.Tech — Information Technology</h3>
          <p className="education-school">
            <GraduationCap size={16} /> Adithya Institute of Technology, Coimbatore, Tamil Nadu
          </p>
          <p className="education-desc">
            Core coursework in Data Structures & Algorithms, Full-Stack Web Development, Database Management, Python Programming, and Machine Learning models.
          </p>
        </article>
        <article className="education-card">
          <div className="education-top">
            <span className="education-period">2022 – 2023 · COMPLETED</span>
            <span className="education-gpa">SCORE: 72%</span>
          </div>
          <h3>Higher Secondary Certificate (HSC)</h3>
          <p className="education-school">
            <GraduationCap size={16} /> Maths with Computer Science
          </p>
          <p className="education-desc">
            Strong grounding in higher mathematics, computational logic, basic algorithms, and computer science fundamentals.
          </p>
        </article>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="skills-section section" id="skills">
      <div className="section-heading">
        <div>
          <p className="eyebrow">TECHNICAL TOOLKIT</p>
          <h2>
            Built from
            <br />
            <span className="muted">the basics up.</span>
          </h2>
        </div>
        <p className="section-intro">
          Technologies and tools verified in my current resume profile.
        </p>
      </div>
      <div className="skill-categories">
        {Object.entries(skills).map(([group, items], i) => (
          <motion.div
            className="skill-category"
            key={group}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: i * 0.06 }}
          >
            <div>
              <span>0{i + 1}</span>
              <h3>{group}</h3>
            </div>
            <div className="skill-list">
              {items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function RecognitionSection() {
  const getCategory = (index) => {
    if (index < 3) return "HACKATHON FINALIST";
    if (index === 3) return "DEVELOPER SELECTION";
    if (index === 4) return "AI HACKATHON PARTICIPANT";
    return "RESEARCH PRESENTATION";
  };

  return (
    <section className="recognition section" id="achievements">
      <div className="section-heading">
        <div>
          <p className="eyebrow">MILESTONES & HACKATHON RECOGNITION</p>
          <h2>
            Milestones worth
            <br />
            <span className="muted">sharing.</span>
          </h2>
        </div>
        <p className="section-intro">
          Hackathons, selection rounds, competitive learning milestones and research presentations.
        </p>
      </div>

      <div className="awwwards-honors-strip">
        <div className="awwwards-ribbon">
          <Trophy size={18} />
          <span>HACKATHONS & COMPETITIVE RECOGNITION</span>
        </div>
        <div className="awwwards-stats">
          <span>
            <b>3x</b> HACKATHON FINALIST
          </span>
          <i>/</i>
          <span>
            <b>08</b> INDUSTRY CERTIFICATIONS
          </span>
          <i>/</i>
          <span>
            <b>01</b> PATENT RESEARCH CONCEPT
          </span>
        </div>
      </div>

      <div className="recognition-grid">
        {achievements.map(([name, status], i) => (
          <article className="recognition-card" key={name}>
            <div className="recognition-card-top">
              <span className="recognition-index">0{i + 1}</span>
              <span className="recognition-cat">{getCategory(i)}</span>
            </div>
            <div className="recognition-icon-wrap">
              <Award size={22} />
            </div>
            <h3>{name}</h3>
            <div className="recognition-bottom">
              <span className="recognition-status">{status}</span>
              <span className="recognition-badge">★ VERIFIED</span>
            </div>
          </article>
        ))}
      </div>

      <div className="cert-header">
        <div>
          <p className="eyebrow">CERTIFICATIONS & TRAINING</p>
          <h3>Learning, in practice.</h3>
        </div>
        <span className="cert-count">{certifications.length.toString().padStart(2, "0")} ENTRIES</span>
      </div>
      <div className="cert-list">
        {certifications.map(([name, status], i) => (
          <div className="cert-row" key={name}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <b>{name}</b>
            <small>{status}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResearchSection() {
  return (
    <section className="research section" id="research">
      <div className="section-heading">
        <div>
          <p className="eyebrow">RESEARCH / INTELLECTUAL PROPERTY</p>
          <h2>
            Ideas with
            <br />
            <span className="muted">real-world roots.</span>
          </h2>
        </div>
        <FlaskConical className="research-icon" size={42} />
      </div>
      <article className="research-card">
        <div className="research-mark">
          <Lightbulb size={28} />
          <span>SMART AGRICULTURE</span>
        </div>
        <div className="research-content">
          <p className="eyebrow">PATENT CONTRIBUTION · RESEARCH</p>
          <h3>The Smart Harvest: India’s Leap Toward Intelligent Farming</h3>
          <p>
            Smart agriculture research concept applying AI, machine learning, IoT and predictive analytics to solve agricultural challenges and optimize crop yield.
          </p>
          <div className="tags">
            <span>AI</span>
            <span>MACHINE LEARNING</span>
            <span>IoT</span>
            <span>PREDICTIVE ANALYTICS</span>
          </div>
          <div className="research-meta">
            <span>
              <BookOpen size={15} /> Research Paper Presentation
            </span>
            <span>
              <FileBadge size={15} /> Patent Contribution
            </span>
          </div>
        </div>
      </article>
    </section>
  );
}

function PortfolioAssistant() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi, I’m Naveen’s portfolio assistant. Ask me about live Netlify projects, skills, education (7.89 CGPA), internships, hackathons or contact details.",
    },
  ]);
  const answerFor = (raw) => {
    const q = raw.toLowerCase();
    if (/phone|call|mobile|number|contact/.test(q))
      return `You can contact Naveen by phone/WhatsApp at ${PHONE}, email at ${EMAIL}, or connect on LinkedIn (${LINKEDIN}).`;
    if (/location|city|place|native|address/.test(q))
      return `Naveen is based in ${LOCATION}, and studies in Coimbatore, Tamil Nadu.`;
    if (/gpa|cgpa|marks|grade|score|percentage/.test(q))
      return "Naveen maintains a CGPA of 7.89/10 in B.Tech Information Technology at Adithya Institute of Technology, and secured 72% in Higher Secondary (Maths with Computer Science).";
    if (/intern|experience|company/.test(q))
      return "Naveen has completed two internships: 4-month Python Intern at Sparkout Tech Solutions (Python & backend development, REST APIs) and 1-month Full Stack Intern at Cognifyz Technologies (full-stack web applications).";
    if (/live|deployed|link|url|netlify/.test(q))
      return "Naveen has 4 live deployed web apps on Netlify: 1) Men's Sportswear (https://mens-spoartwear.netlify.app/), 2) Teachers' Day Surprise (https://eachersday-surprice.netlify.app/), 3) Agri Smart Farming (https://agri-smartforming.netlify.app/), and 4) Starlit Mochi (https://starlit-mochi-0eb160.netlify.app/). Plus AIT Placement on Vercel.";
    if (/project|build|work/.test(q))
      return "Naveen's verified resume projects include: Men's Sportswear (Live Netlify), Teachers' Day Surprise (Live Netlify), Agri Smart Farming (Live Netlify), Starlit Mochi (Live Netlify), AI Crop Disease Prediction (CNN Models), and Secure Task Flow (JWT & Flask).";
    if (/research|patent|harvest|paper/.test(q))
      return "Naveen contributed to research and patent work titled 'The Smart Harvest: India’s Leap Toward Intelligent Farming', applying AI, machine learning, IoT and predictive analytics to agriculture.";
    if (/achievement|hackathon|award|finalist/.test(q))
      return "Achievements include: 3x Hackathon Finalist (SMARTATHON 2.0, GDG AI Hackathon, and ZENITH’25), DevForge Selected, and AI in Healthcare Hackathon Participant.";
    if (/skill|technolog|stack|language/.test(q))
      return "Naveen's listed toolkit includes Python, JavaScript, HTML, CSS, React.js, Tailwind CSS, Flask, REST APIs, JWT Authentication, MySQL, Machine Learning, CNN Models, Git, GitHub, VS Code, and Postman.";
    if (/college|education|student|degree|batch/.test(q))
      return "Naveen is pursuing B.Tech in Information Technology (2023–2027) at Adithya Institute of Technology, Coimbatore, with a 7.89/10 CGPA.";
    return "I can answer questions about Naveen's resume: education (7.89 CGPA), live Netlify projects, Python & Full-Stack internships, 3x hackathon finals, AI skills, contact details (+91-6385235131) and resume download.";
  };

  const send = (text) => {
    const value = (text ?? question).trim();
    if (!value) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: value },
      { role: "assistant", text: answerFor(value) },
    ]);
    setQuestion("");
  };

  return (
    <>
      <button
        className={`assistant-launch ${open ? "assistant-launch-open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Close portfolio assistant" : "Open portfolio assistant"}
      >
        {open ? (
          <X size={20} />
        ) : (
          <>
            <Bot size={20} />
            <span>ASK ABOUT NAVEEN</span>
          </>
        )}
      </button>
      {open && (
        <aside className="assistant-panel" aria-label="Portfolio Q&A assistant">
          <div className="assistant-head">
            <div className="assistant-avatar">
              <Sparkles size={19} />
            </div>
            <div>
              <b>Portfolio Assistant</b>
              <span>
                <i /> RESUME VERIFIED
              </span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close assistant">
              <X size={17} />
            </button>
          </div>
          <div className="assistant-messages" aria-live="polite">
            {messages.map((m, i) => (
              <div className={`assistant-message ${m.role}`} key={i}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="assistant-prompts">
            {["Live Netlify apps", "Internship details", "Phone & contact", "Education & CGPA"].map(
              (item) => (
                <button key={item} onClick={() => send(item)}>
                  {item}
                </button>
              )
            )}
          </div>
          <form
            className="assistant-input"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask about projects, skills, CGPA…"
              aria-label="Ask portfolio assistant"
            />
            <button type="submit" aria-label="Send question">
              <Send size={16} />
            </button>
          </form>
          <p className="assistant-note">Interactive AI assistant for Naveen Kumar M’s verified resume.</p>
        </aside>
      )}
    </>
  );
}

function App() {
  const [introDone, setIntroDone] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? window.scrollY / max : 0);
    };
    const onMove = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", onScroll, { passive: true });
    if (window.matchMedia("(pointer:fine)").matches)
      window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  useEffect(() => {
    document.title = "Naveen Kumar M — Full Stack Developer | AI/ML Enthusiast";
  }, []);

  return (
    <>
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <div className="scroll-line" style={{ transform: `scaleX(${scrollProgress})` }} />
      <div className="cursor-dot" style={{ left: cursor.x, top: cursor.y }} aria-hidden="true" />
      <Header />
      <main>
        {/* ── Hero Section ── */}
        <section className="hero" id="home">
          <div className="hero-meta">
            <span>PORTFOLIO / 2026</span>
            <span>B.TECH IT (CGPA: 7.89) · 2023—2027</span>
          </div>
          <div className="hero-copy">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              FULL STACK DEVELOPER · AI/ML ENTHUSIAST · DHARMAPURI, TAMIL NADU
            </motion.p>
            <h1>
              <span className="line-reveal">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  I build digital
                </motion.span>
              </span>
              <br />
              <span className="line-reveal outline-text">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 1.03, ease: [0.16, 1, 0.3, 1] }}
                >
                  products with
                </motion.span>
              </span>
              <br />
              <span className="line-reveal lime-text">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 1.16, ease: [0.16, 1, 0.3, 1] }}
                >
                  purpose & AI.
                </motion.span>
              </span>
            </h1>
            <motion.div
              className="hero-bottom"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35 }}
            >
              <p>
                B.Tech Information Technology student with hands-on experience in Python programming, full-stack web development, and machine learning. Built 6 projects (4 deployed live on Netlify) using React.js, JavaScript, HTML, CSS, Tailwind CSS, Flask, REST APIs, and MySQL.
              </p>
              <a className="round-link" href="#work" aria-label="Scroll to selected projects">
                <ArrowDown size={19} />
              </a>
            </motion.div>
          </div>
          <HeroPortrait />
          <div className="hero-bottom-meta">
            <span>01 — INTRODUCTION</span>
            <span>ADITHYA INSTITUTE OF TECHNOLOGY</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        {/* ── Marquee Ticker ── */}
        <div className="ticker" aria-label="Areas of focus">
          <div className="ticker-track">
            FULL-STACK DEVELOPMENT <b>✳</b> AI & MACHINE LEARNING <b>✳</b> REACT.JS & TAILWIND CSS <b>✳</b> FLASK & REST APIs <b>✳</b> 4 LIVE NETLIFY DEPLOYMENTS <b>✳</b> SMART AGRICULTURE <b>✳</b> CNN MODELS <b>✳</b> MYSQL & JWT <b>✳</b>&nbsp;&nbsp;&nbsp;&nbsp;
            FULL-STACK DEVELOPMENT <b>✳</b> AI & MACHINE LEARNING <b>✳</b> REACT.JS & TAILWIND CSS <b>✳</b> FLASK & REST APIs <b>✳</b> 4 LIVE NETLIFY DEPLOYMENTS <b>✳</b> SMART AGRICULTURE <b>✳</b> CNN MODELS <b>✳</b> MYSQL & JWT <b>✳</b>&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>

        {/* ── Selected Work Section (Resume Projects First) ── */}
        <section className="work section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK / RESUME PROJECTS</p>
              <h2>
                Things I’ve
                <br />
                been building<span className="lime-text">.</span>
              </h2>
            </div>
            <p className="section-intro">
              6 projects from my resume, including 4 deployed live on Netlify across eCommerce, interactive celebration, smart agriculture, and machine learning.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
          <div className="work-bottom">
            <span>{projects.length} PROJECTS LISTED · 4 LIVE ON NETLIFY</span>
            <a href={GITHUB} target="_blank" rel="noreferrer">
              EXPLORE GITHUB ↗
            </a>
          </div>
        </section>

        {/* ── About Section ── */}
        <section className="about section" id="about">
          <div className="about-meta">
            <p className="eyebrow">PROFESSIONAL SUMMARY</p>
            <span>02 — THE PROFILE</span>
          </div>
          <div className="about-grid">
            <h2>
              Curious by nature.
              <br />
              <span>Developer by craft.</span>
            </h2>
            <div className="about-copy">
              <p>
                I’m Naveen Kumar M, an Information Technology student at Adithya Institute of Technology, Coimbatore (batch 2023–2027) with a CGPA of 7.89/10, based in Dharmapuri, Tamil Nadu.
              </p>
              <p>
                I have hands-on experience in Python programming, full-stack web development, and machine learning. I've built 6 projects with 4 deployed live on Netlify using React.js, JavaScript, HTML, CSS, and Tailwind CSS, complemented by backend engineering in Flask, REST APIs, JWT authentication, and MySQL.
              </p>
              <p>
                A 3x hackathon finalist with 2 industry internships in Python and full-stack development, I focus on practical, user-centered software solutions.
              </p>
              <a className="text-link" href={LINKEDIN} target="_blank" rel="noreferrer">
                CONNECT ON LINKEDIN <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="stats-strip">
            <div>
              <strong>04</strong>
              <span>LIVE APPS DEPLOYED</span>
            </div>
            <div>
              <strong>7.89</strong>
              <span>CGPA (B.TECH IT)</span>
            </div>
            <div>
              <strong>02</strong>
              <span>INDUSTRY INTERNSHIPS</span>
            </div>
            <div>
              <strong>3x</strong>
              <span>HACKATHON FINALIST</span>
            </div>
          </div>
        </section>

        {/* ── Experience, Education, Skills, GitHub, Recognition, Research ── */}
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <GitHubSection />
        <RecognitionSection />
        <ResearchSection />

        {/* ── Principles ── */}
        <section className="principles section">
          <p className="eyebrow">HOW I LIKE TO WORK</p>
          {[
            ["01", "Start with the problem.", "Understand what needs to improve before deciding what to build."],
            ["02", "Make it feel simple.", "Clear interfaces, thoughtful micro-interactions, and fast load times."],
            ["03", "Build for the real world.", "Reliable code, secure JWT workflows, and responsive deployments on Netlify & Vercel."],
          ].map(([n, title, copy]) => (
            <motion.div
              className="principle-row"
              key={n}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <b>↘</b>
            </motion.div>
          ))}
        </section>

        {/* ── Contact Section ── */}
        <section className="contact section" id="contact">
          <div className="contact-head">
            <p className="eyebrow">HAVE AN OPPORTUNITY OR COLLABORATION?</p>
            <h2>
              Let’s make
              <br />
              something <span>useful.</span>
            </h2>
            <div className="contact-direct-links">
              <a className="email-link" href={`mailto:${EMAIL}`}>
                {EMAIL} <ArrowUpRight size={17} />
              </a>
              <a className="phone-link" href={`tel:${PHONE}`}>
                <Phone size={16} /> {PHONE}
              </a>
              <span className="location-pill">
                <MapPin size={14} /> {LOCATION}, INDIA
              </span>
            </div>
          </div>
          <ContactForm />
          <div className="social-links">
            <a href={GITHUB} target="_blank" rel="noreferrer">
              <Github size={16} /> GITHUB ↗
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LINKEDIN ↗
            </a>
            <a href={`mailto:${EMAIL}`}>
              <Mail size={16} /> EMAIL ↗
            </a>
            <a href={`tel:${PHONE}`}>
              <Phone size={16} /> CALL ↗
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer>
        <a className="brand" href="#home">
          Naveen Kumar<span>®</span>
        </a>
        <span>FULL STACK DEVELOPER · AI/ML ENTHUSIAST · DHARMAPURI</span>
        <a href="/resume.pdf" download className="resume-link">
          <Download size={14} /> DOWNLOAD RESUME
        </a>
        <a href="#home">BACK TO TOP ↑</a>
        <span>© 2026 NAVEEN KUMAR M</span>
      </footer>

      {/* ── Interactive AI Assistant ── */}
      <PortfolioAssistant />
    </>
  );
}

export default App;

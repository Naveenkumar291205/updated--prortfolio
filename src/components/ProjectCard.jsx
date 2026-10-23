import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, HeartPulse, Flower2, Music, Brain, Timer, Utensils, ShieldCheck, Users, ShoppingBag, Sparkles, Star } from "lucide-react";
import { Github } from "./Icons.jsx";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`project-card ${project.theme}`}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: (index % 2) * 0.1 }}
    >
      <a
        className="project-art"
        href={project.live || project.github}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title}`}
      >
        <div className="art-grain" />
        <span className="art-index">{String(index + 1).padStart(2, "0")} / SELECTED WORK</span>

        {/* ── Men's Sportswear (Live Netlify) ── */}
        {project.art === "sportswear" && (
          <div className="sportswear-art">
            <div className="art-kicker-tag"><ShoppingBag size={13}/> LIVE NETLIFY APP</div>
            <span className="art-brand-ghost">ATHLETIC</span>
            <h3>Peak.<br/>Performance.</h3>
            <div className="sportswear-badge">
              <span>MEN'S SPORTSWEAR</span>
              <b>VISIT LIVE ↗</b>
            </div>
          </div>
        )}

        {/* ── Teachers' Day Surprise (Live Netlify) ── */}
        {project.art === "teachers" && (
          <div className="teachers-art">
            <div className="art-kicker-tag"><Sparkles size={13}/> LIVE CELEBRATION</div>
            <span className="art-brand-ghost">TRIBUTE</span>
            <h3>Inspiring<br/>Tomorrow.</h3>
            <div className="teachers-badge">
              <span>TEACHERS' DAY WEB APP</span>
              <b>VISIT LIVE ↗</b>
            </div>
          </div>
        )}

        {/* ── Starlit Mochi (Live Netlify) ── */}
        {project.art === "mochi" && (
          <div className="mochi-art">
            <div className="art-kicker-tag"><Star size={13}/> LIVE SHOWCASE</div>
            <span className="art-brand-ghost">STARLIT</span>
            <h3>Sweet<br/>Simplicity.</h3>
            <div className="mochi-badge">
              <span>STARLIT MOCHI EXPERIENCE</span>
              <b>VISIT LIVE ↗</b>
            </div>
          </div>
        )}

        {/* ── Agri Smart Farming (Live Netlify) ── */}
        {project.art === "agri" && (
          <div className="agri-art">
            <div className="art-kicker-tag"><Sparkles size={13}/> LIVE SMART AGRICULTURE</div>
            <div className="agri-sun"/>
            <div className="hills h1"/>
            <div className="hills h2"/>
            <span>SMART AGRICULTURE PLATFORM</span>
            <h3>AgriFlow<span>.</span></h3>
            <small>INTELLIGENT FARMING × NETLIFY</small>
          </div>
        )}

        {/* ── AI Crop Disease Prediction (CNN) ── */}
        {project.art === "ai" && (
          <div className="generic-art ai-art">
            <Brain size={54}/>
            <small>CNN MODELS × PREDICTIVE ANALYTICS</small>
            <h3>Patterns to<br/>predictions.</h3>
            <div className="task-stats" style={{marginTop: "12px", width: "100%"}}>
              <span>MODEL<b>CNN</b></span>
              <span>DOMAIN<b>AGRI-AI</b></span>
              <span>ACCURACY<b>96.4%</b></span>
            </div>
          </div>
        )}

        {/* ── Secure Task Flow (Full Stack / JWT) ── */}
        {project.art === "task" && (
          <div className="task-art">
            <div className="task-top">
              <b>STF.</b>
              <span>SECURE TASK FLOW // JWT</span>
              <span>•••</span>
            </div>
            <div className="task-content">
              <small>AUTHENTICATION: ACTIVE · JWT VERIFIED</small>
              <h3>Secure work<br/>starts here.</h3>
              <div className="task-stats">
                <span>BACKEND<b>FLASK</b></span>
                <span>DB<b>MYSQL</b></span>
                <span>AUTH<b>JWT</b></span>
              </div>
              <div className="task-progress"><i style={{width: "88%"}}/></div>
            </div>
          </div>
        )}

        {/* ── AIT Placement Platform ── */}
        {project.art === "placement" && (
          <div className="placement-art">
            <span className="art-kicker">EDTECH / PLACEMENT · LIVE</span>
            <h3>Make your<br/>next move.</h3>
            <div className="bar-chart">{[32, 54, 42, 85, 68, 96, 88].map((v, i) => (
              <i key={i} style={{ height: `${v}%` }} />
            ))}</div>
            <div className="art-footer"><span>AIT PLACEMENT PORTAL</span><b>↗ LIVE VERCEL</b></div>
          </div>
        )}

        {/* ── Healthcare Booking ── */}
        {project.art === "health" && (
          <div className="generic-art">
            <HeartPulse size={54}/>
            <small>HEALTHCARE WORKFLOW</small>
            <h3>Care made<br/>clearer.</h3>
          </div>
        )}

        {/* ── Music Player ── */}
        {project.art === "music" && (
          <div className="generic-art music-art">
            <Music size={54}/>
            <small>AUDIO / PLAYBACK INTERFACE</small>
            <h3>Sound<br/>in focus.</h3>
          </div>
        )}

        {/* ── Flower Prediction ── */}
        {project.art === "flower" && (
          <div className="generic-art flower-art">
            <Flower2 size={54}/>
            <small>CLASSIFICATION MODEL</small>
            <h3>Nature,<br/>by data.</h3>
          </div>
        )}

        {/* ── Realtime Code Collaboration ── */}
        {project.art === "collab" && (
          <div className="generic-art collab-art">
            <Users size={54}/>
            <small>DEVELOPER WORKSPACE</small>
            <h3>Build<br/>together.</h3>
          </div>
        )}

        <span className="art-open"><ArrowUpRight size={20}/></span>
      </a>

      <div className="project-details">
        <div className="project-text">
          <p className="eyebrow">{project.type}</p>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="tags">
            {project.stack.map(item => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="project-links">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`Live demo of ${project.title}`}
              title="Open Live Deployed Website"
            >
              <ExternalLink size={17} />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} source code`}
            title="View Source on GitHub"
          >
            <Github size={17} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
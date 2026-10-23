import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Award, Scan, Sparkles, Cpu, Target, Eye, ShieldCheck, Activity } from "lucide-react";

export default function HeroPortrait() {
  const cardRef = useRef(null);
  const [mode, setMode] = useState("scan"); // "scan" | "neural" | "clean"
  const [isHovered, setIsHovered] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);

  // Mouse tilt physics using Framer Motion springs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 220 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const spotlightX = useTransform(smoothX, [-0.5, 0.5], [15, 85]);
  const spotlightY = useTransform(smoothY, [-0.5, 0.5], [15, 85]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const triggerPulse = (newMode) => {
    setMode(newMode);
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 700);
  };

  return (
    <div className="hero-portrait-wrapper" aria-label="Interactive AI Portrait of Naveen Kumar M">

      {/* ── Main 3D Tilting Card ── */}
      <motion.div
        ref={cardRef}
        className={`portrait-card-3d mode-${mode} ${isHovered ? "is-hovered" : ""} ${pulseActive ? "scan-pulse" : ""}`}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.92, y: 22 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Dynamic Specular Spotlight */}
        <motion.div
          className="portrait-spotlight"
          style={{
            background: useTransform(
              [spotlightX, spotlightY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(215, 255, 100, 0.22) 0%, rgba(215, 255, 100, 0.04) 40%, transparent 70%)`
            ),
          }}
        />

        {/* Ambient Glow Aura */}
        <div className="portrait-aura" />

        {/* Primary Photo */}
        <div className="portrait-image-frame">
          <img
            src="/profile-photo.jpeg"
            alt="Naveen Kumar M - AI-Driven Full Stack Developer"
            className="portrait-main-img"
          />

          {/* Glitch / Chromatic Aberration Overlay on Hover */}
          {mode !== "clean" && (
            <div className="portrait-glitch-layer" aria-hidden="true">
              <img src="/profile-photo.jpeg" alt="" />
            </div>
          )}

          {/* Cyber Scanline Grid Overlay */}
          {mode !== "clean" && <div className="portrait-matrix-grid" />}

          {/* ── AI Image Analysis Scanner Laser ── */}
          {mode === "scan" && (
            <div className="ai-laser-scanner" aria-hidden="true">
              <div className="laser-line" />
              <div className="laser-trail" />
              <div className="laser-label">AI SCANNING // 99.8%</div>
            </div>
          )}

          {/* ── Thermal / Neural Depth Simulation ── */}
          {mode === "neural" && (
            <div className="neural-depth-overlay" aria-hidden="true">
              <div className="neural-wave-ring r1" />
              <div className="neural-wave-ring r2" />
              <div className="neural-wave-ring r3" />
            </div>
          )}

          {/* ── Biometric Face Recognition Bounding Box ── */}
          {mode !== "clean" && (
            <div className="biometric-hud-box">
              <span className="corner-bracket c-tl" />
              <span className="corner-bracket c-tr" />
              <span className="corner-bracket c-bl" />
              <span className="corner-bracket c-br" />
              <div className="hud-reticle">
                <Target size={14} />
              </div>
              <div className="hud-tag">
                <span className="hud-badge"><ShieldCheck size={10} /> VERIFIED SUBJECT</span>
                <b>NAVEEN KUMAR M</b>
                <small>ROLE: FULL-STACK & AI DEV</small>
                <div className="hud-stat-row">
                  <span>CONF: 99.87%</span>
                  <span>LAT: 11.01° N</span>
                </div>
              </div>
            </div>
          )}

          {/* Real-time Telemetry Data Pins */}
          {mode !== "clean" && (
            <>
              <div className="telemetry-pin top-left">
                <span className="pulse-dot" />
                <span>AI_VISION // RESNET-50</span>
              </div>
              <div className="telemetry-pin top-right">
                <Activity size={10} />
                <span>60 FPS · 8ms INFERENCE</span>
              </div>
              <div className="telemetry-pin bottom-left">
                <Cpu size={10} />
                <span>NEURAL NODES: 2,048</span>
              </div>
              <div className="telemetry-pin bottom-right">
                <Sparkles size={10} />
                <span>PORTFOLIO 2026</span>
              </div>
            </>
          )}

          {/* Subtle Outer Neon Accent Ring */}
          <div className="portrait-neon-ring" />
        </div>

        {/* ── Interactive Mode Switcher Bar ── */}
        <div className="portrait-control-bar" onClick={(e) => e.stopPropagation()}>
          <div className="control-bar-label">
            <Scan size={12} />
            <span>IMAGE ANALYSIS:</span>
          </div>
          <div className="mode-toggle-group">
            <button
              className={`mode-btn ${mode === "scan" ? "active" : ""}`}
              onClick={() => triggerPulse("scan")}
              title="Activate AI Laser Scanner"
            >
              <span>◉</span> SCAN
            </button>
            <button
              className={`mode-btn ${mode === "neural" ? "active" : ""}`}
              onClick={() => triggerPulse("neural")}
              title="Activate Neural Depth Mode"
            >
              <span>◈</span> NEURAL
            </button>
            <button
              className={`mode-btn ${mode === "clean" ? "active" : ""}`}
              onClick={() => triggerPulse("clean")}
              title="Clean Portrait Mode"
            >
              <span>○</span> RAW
            </button>
          </div>
        </div>

        {/* Caption Tag */}
        <div className="portrait-caption-pill">
          <Eye size={12} />
          <span>NAVEEN KUMAR M</span>
          <i>·</i>
          <span>AI-DRIVEN DEVELOPER</span>
        </div>
      </motion.div>
    </div>
  );
}

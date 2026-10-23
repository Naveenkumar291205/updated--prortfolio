import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = "NAVEEN KUMAR M".split("");

export default function Intro({ onDone }) {
  const [count, setCount] = useState(0);
  const [exit, setExit] = useState(false);

  /* Count up 0→100 over ~2.2s */
  useEffect(() => {
    let start = null;
    const duration = 2200;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.round(p * 100));
      if (p < 1) requestAnimationFrame(step);
      else {
        /* short pause, then trigger exit */
        setTimeout(() => {
          setExit(true);
          setTimeout(onDone, 900);
        }, 350);
      }
    };
    requestAnimationFrame(step);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!exit ? (
        <motion.div
          className="intro-screen"
          key="intro"
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* top-left label */}
          <motion.span
            className="intro-label intro-tl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            PORTFOLIO / 2026
          </motion.span>

          {/* top-right label */}
          <motion.span
            className="intro-label intro-tr"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            B.TECH IT · AIT
          </motion.span>

          {/* centre — name reveal letter by letter */}
          <div className="intro-center">
            <div className="intro-eyebrow">
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                FULL STACK DEVELOPER · AI ENTHUSIAST
              </motion.span>
            </div>

            <h1 className="intro-name" aria-label="Naveen Kumar M">
              {LETTERS.map((ch, i) => (
                <span key={i} className="intro-letter-wrap">
                  <motion.span
                    className="intro-letter"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.55 + i * 0.045,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* thin lime line */}
            <motion.div
              className="intro-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* bottom row */}
          <div className="intro-bottom">
            <motion.span
              className="intro-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              ADITHYA INSTITUTE OF TECHNOLOGY
            </motion.span>

            {/* counter */}
            <motion.span
              className="intro-counter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {String(count).padStart(3, "0")}
            </motion.span>
          </div>

          {/* progress bar */}
          <div className="intro-progress-track">
            <motion.div
              className="intro-progress-fill"
              style={{ scaleX: count / 100, transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

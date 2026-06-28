[6/29/2026 4:04 AM] Harshana Chamod: * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Orbitron', sans-serif;
}

body {
  background: #05070a;
  color: #fff;
  overflow-x: hidden;
}

/* Scroll Progress Bar */
#progressBar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  width: 0%;
  background: #00ff88;
  z-index: 9999;
  box-shadow: 0 0 10px #00ff88;
}

/* Loader */
#loader {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #05070a;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.loader-box {
  text-align: center;
}

.glow-ring {
  width: 80px;
  height: 80px;
  border: 3px solid #00ff88;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
  box-shadow: 0 0 20px #00ff88;
  margin: auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Canvas Background */
#particleCanvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(10, 15, 20, 0.6);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 255, 136, 0.2);
  z-index: 1000;
}

.logo {
  font-size: 20px;
  font-weight: 800;
  color: #00ff88;
}

.logo span {
  color: #fff;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 25px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
}

.nav-links a:hover,
.nav-links a.active {
  color: #00ff88;
  text-shadow: 0 0 10px #00ff88;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #00ff88;
  box-shadow: 0 0 5px #00ff88;
}
[6/29/2026 4:06 AM] Harshana Chamod: /* =========================
   RESPONSIVE DESIGN
========================= */

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .glow-text {
    font-size: 32px;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 15px 20px;
  }

  .nav-links {
    position: absolute;
    top: 70px;
    right: 0;
    background: rgba(10, 15, 20, 0.95);
    flex-direction: column;
    width: 200px;
    padding: 20px;
    display: none;
    border-left: 1px solid #00ff88;
  }

  .nav-links.active {
    display: flex;
  }

  .hamburger {
    display: flex;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .glow-text {
    font-size: 26px;
  }

  .hero p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .hero-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .section-title {
    font-size: 22px;
  }
}

/* =========================
   EXTRA CYBER EFFECTS
========================= */

.card::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(0,255,136,0.1), transparent);
  top: 0;
  left: -100%;
  transition: 0.5s;
}

.card {
  position: relative;
  overflow: hidden;
}

.card:hover::before {
  left: 100%;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Selection color */
::selection {
  background: #00ff88;
  color: #000;
}
[6/29/2026 4:07 AM] Harshana Chamod: particlesArray[i].draw();
  }

  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

// =========================
// RESIZE FIX
// =========================
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

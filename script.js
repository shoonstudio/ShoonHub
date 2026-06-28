[6/29/2026 2:48 AM] Harshana Chamod: .footer{
    color:white;
    animation:blink 2s infinite;
}

@keyframes blink{
    50%{
        opacity:.5;
    }
}
[6/29/2026 3:28 AM] Harshana Chamod: <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shoon Hub V3</title>

    <meta name="description" content="Shoon Hub V3 - Premium Gaming Community">
    <meta name="theme-color" content="#00ff88">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;800&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="style.css">
</head>

<body>

<div id="loader">
    <div class="loader-logo">SHOON HUB</div>
    <div class="loader-bar">
        <span></span>
    </div>
</div>

<canvas id="particles"></canvas>

<header>

<nav class="navbar">

<div class="logo">
SHOON HUB
</div>

<ul>

<li><a href="#home">Home</a></li>
<li><a href="#features">Features</a></li>
<li><a href="#community">Community</a></li>
<li><a href="#social">Social</a></li>

</ul>

<button id="musicBtn">
🎵
</button>

</nav>

</header>

<section id="home" class="hero">

<div class="hero-content">

<h1>
WELCOME TO
<span>SHOON HUB</span>
</h1>

<p>

Premium Gaming Community with futuristic cyber design.

</p>

<div class="hero-buttons">

<a href="#community" class="btn neon">
Join Now
</a>

<a href="#features" class="btn glass">
Explore
</a>

</div>

</div>

</section>

<section id="features">

<h2>

FEATURES

</h2>

<div class="cards">

<div class="card">

<h3>⚡ Fast</h3>

<p>
Lightning fast experience with modern design.
</p>

</div>

<div class="card">

<h3>🎮 Gaming</h3>

<p>

Built for gamers.

</p>

</div>

<div class="card">

<h3>💚 Community</h3>

<p>

Join thousands of members.

</p>

</div>

<div class="card">

<h3>🚀 Premium</h3>

<p>

Modern cyber animations.

</p>

</div>

</div>

</section>

<section id="community">

<h2>

OUR COMMUNITY

</h2>

<p>

Play.
Chat.
Grow.
Win.

</p>

</section>

<section id="social">

<h2>

FOLLOW US

</h2>

<div class="socials">

<a href="#" class="discord">
Discord
</a>

<a href="#" class="whatsapp">
WhatsApp
</a>

<a href="#" class="tiktok">
TikTok
</a>

</div>

</section>

<footer>

<p>

© 2026 Shoon Hub

</p>

</footer>

<audio id="bgMusic" loop>
<source src="assets/music.mp3" type="audio/mpeg">
</audio>

<script src="script.js"></script>

</body>
</html>
[6/29/2026 3:37 AM] Harshana Chamod: </button>

            </div>

        </div>

    </header>

    <!-- ==========================================
         HERO SECTION
         ========================================== -->

    <section id="hero">

        <div class="hero-overlay"></div>

        <div class="container hero-grid">

            <div class="hero-left fade-up">

                <span class="hero-badge">

                    FUTURE OF GAMING

                </span>

                <h1>

                    Welcome To

                    <span>

                        SHOON HUB

                    </span>

                </h1>

                <p>

                    Premium futuristic gaming community
                    built for passionate players.

                    Join tournaments, explore events,
                    connect with gamers and experience
                    next-generation gaming together.

                </p>

                <div class="hero-buttons">

                    <a href="#community"
                        class="primary-btn">

                        Join Now

                    </a>

                    <a href="#features"
                        class="secondary-btn">

                        Explore

                    </a>

                </div>

                <div class="hero-stats">

                    <div class="glass-card stat-card">

                        <h2>

                            25K+

                        </h2>

                        <p>

                            Members

                        </p>

                    </div>

                    <div class="glass-card stat-card">

                        <h2>

                            300+

                        </h2>

                        <p>

                            Events

                        </p>

                    </div>

                    <div class="glass-card stat-card">

                        <h2>

                            99%

                        </h2>

                        <p>

                            Active

                        </p>

                    </div>

                </div>

            </div>

            <div class="hero-right fade-up">

                <div class="hero-circle">

                    <div class="hero-glow"></div>

                    <i class="fa-solid fa-gamepad"></i>

                </div>

            </div>

        </div>

    </section>

    <!-- ==========================================
         FEATURES
         ========================================== -->

    <section id="features">

        <div class="container">

            <div class="section-title fade-up">

                <h2>

                    Premium Features

                </h2>

                <p>

                    Everything you need inside one
                    futuristic gaming platform.

                </p>

            </div>

            <div class="features-grid">
[6/29/2026 3:42 AM] Harshana Chamod: /* ==========================================
   HEADER / NAVBAR
========================================== */

#header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border);
    z-index: 1000;
}

#header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* LOGO */
.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--primary);
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
}

.logo-icon {
    color: var(--primary);
    text-shadow: 0 0 10px var(--primary);
}

/* NAVBAR */
nav ul {
    display: flex;
    gap: 25px;
    list-style: none;
}

.nav-link {
    color: white;
    text-decoration: none;
    font-size: 14px;
    opacity: 0.7;
    transition: 0.3s;
    position: relative;
}

.nav-link:hover,
.nav-link.active {
    opacity: 1;
    color: var(--primary);
}

/* BUTTONS */
.header-buttons {
    display: flex;
    gap: 10px;
}

.header-buttons button {
    background: var(--glass);
    border: 1px solid var(--border);
    color: var(--primary);
    padding: 8px 10px;
    cursor: pointer;
    border-radius: 8px;
    transition: 0.3s;
}

.header-buttons button:hover {
    box-shadow: 0 0 15px var(--primary);
    transform: scale(1.05);
}

/* ==========================================
   HERO SECTION
========================================== */

#hero {
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 80px;
}

.hero-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center,
            rgba(0, 255, 136, 0.08),
            transparent 60%);
    z-index: 0;
}

.hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    position: relative;
    z-index: 2;
}

/* HERO TEXT */
.hero-left h1 {
    font-size: 50px;
    margin: 20px 0;
    line-height: 1.2;
}

.hero-left h1 span {
    color: var(--primary);
    text-shadow: 0 0 20px var(--primary);
}

.hero-left p {
    opacity: 0.7;
    line-height: 1.6;
}

/* BADGE */
.hero-badge {
    padding: 6px 12px;
    border: 1px solid var(--border);
    display: inline-block;
    color: var(--primary);
    font-size: 12px;
    border-radius: 20px;
    letter-spacing: 2px;
}

/* BUTTONS */
.hero-buttons {
    margin-top: 20px;
    display: flex;
    gap: 15px;
}

.primary-btn,
.secondary-btn {
    padding: 10px 18px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 13px;
    transition: 0.3s;
}

.primary-btn {
    background: var(--primary);
    color: black;
    font-weight: bold;
}

.primary-btn:hover {
    box-shadow: 0 0 20px var(--primary);
    transform: translateY(-2px);
}

.secondary-btn {
    border: 1px solid var(--border);
    color: var(--primary);
}

.secondary-btn:hover {
    background: var(--glass);
}

/* HERO RIGHT */
.hero-circle {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 2px solid var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    animation: float 4s ease-in-out infinite;
}

.hero-circle i {
    font-size: 80px;
    color: var(--primary);
    text-shadow: 0 0 20px var(--primary);
}

.hero-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 0 80px var(--primary);
}

/* FLOAT ANIMATION */
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
}

/* GLASS CARD */
.glass-card {
    background: var(--glass);
    border: 1px solid var(--border);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 20px;
}
[6/29/2026 3:43 AM] Harshana Chamod: /* ==========================================
   SECTION TITLES
========================================== */

section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    margin-bottom: 50px;
}

.section-title h2 {
    font-size: 35px;
    color: var(--primary);
    text-shadow: 0 0 10px var(--primary);
}

.section-title p {
    opacity: 0.6;
    margin-top: 10px;
}

/* ==========================================
   FEATURES
========================================== */

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.feature-card {
    text-align: center;
    transition: 0.3s;
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 25px rgba(0, 255, 136, 0.2);
}

.feature-icon {
    font-size: 30px;
    color: var(--primary);
    margin-bottom: 10px;
}

/* ==========================================
   COMMUNITY
========================================== */

.community-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.community-card {
    text-align: center;
}

.community-card h3 {
    margin-bottom: 10px;
}

.community-card p {
    opacity: 0.6;
    margin-bottom: 15px;
}

/* ==========================================
   ABOUT
========================================== */

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}

.about-box {
    margin-bottom: 15px;
}

.about-box h3 {
    color: var(--primary);
    margin-bottom: 8px;
}

/* ==========================================
   SOCIAL
========================================== */

.social-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.social-card {
    text-align: center;
}

.social-icon {
    font-size: 35px;
    color: var(--primary);
    margin-bottom: 10px;
}

/* ==========================================
   FOOTER
========================================== */

footer {
    background: #000;
    border-top: 1px solid var(--border);
    padding: 40px 0;
    text-align: center;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 15px 0;
}

.footer-links a {
    color: white;
    text-decoration: none;
    opacity: 0.6;
    transition: 0.3s;
}

.footer-links a:hover {
    color: var(--primary);
    opacity: 1;
}

/* ==========================================
   BACK TO TOP
========================================== */

#backToTop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--primary);
    border: none;
    padding: 10px 12px;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    box-shadow: 0 0 15px var(--primary);
}

/* ==========================================
   ANIMATIONS
========================================== */

.fade-up {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 1s forwards;
}

@keyframes fadeUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ==========================================
   RESPONSIVE DESIGN
========================================== */

@media (max-width: 768px) {

    nav ul {
        display: none;
        position: absolute;
        top: 70px;
        right: 20px;
        flex-direction: column;
        background: rgba(0, 0, 0, 0.9);
        padding: 20px;
        border: 1px solid var(--border);
        border-radius: 10px;
    }

    nav ul.active {
        display: flex;
    }

    .hero-grid {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-left h1 {
        font-size: 35px;
    }

    .about-grid {
        grid-template-columns: 1fr;
    }

}
[6/29/2026 3:44 AM] Harshana Chamod: function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }

    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

/* ================================
   RESIZE FIX
================================ */
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

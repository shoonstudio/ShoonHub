console.log("Welcome to ShoonHub!");
/* ==========================
   SHOON HUB V4
   script.js
========================== */

const particles = document.getElementById("particles");

/* ==========================
CREATE PARTICLES
========================== */

function createParticle() {

    const particle = document.createElement("span");

    const size = Math.random() * 6 + 2;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.position = "absolute";
    particle.style.borderRadius = "50%";

    particle.style.background = "#00ff88";

    particle.style.boxShadow =
        "0 0 10px #00ff88,0 0 20px #00ff88";

    particle.style.left =
        Math.random() * window.innerWidth + "px";

    particle.style.top =
        window.innerHeight + "px";

    particle.style.opacity = Math.random();

    particle.style.pointerEvents = "none";

    particles.appendChild(particle);

    let pos = window.innerHeight;

    const speed = Math.random() * 2 + 1;

    function animate() {

        pos -= speed;

        particle.style.top = pos + "px";

        if (pos < -20) {

            particle.remove();

        } else {

            requestAnimationFrame(animate);

        }

    }

    animate();

}

setInterval(createParticle, 150);

/* ==========================
BUTTON HOVER EFFECT
========================== */

document.querySelectorAll(".links a").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
            "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
            "scale(1)";

    });

});

/* ==========================
CLICK RIPPLE
========================== */

document.querySelectorAll(".links a").forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple = document.createElement("span");

        ripple.style.position = "absolute";

        ripple.style.width = "15px";

        ripple.style.height = "15px";

        ripple.style.background = "#ffffff";

        ripple.style.borderRadius = "50%";

        ripple.style.left =
            e.offsetX + "px";

        ripple.style.top =
            e.offsetY + "px";

        ripple.style.transform =
            "translate(-50%,-50%)";

        ripple.style.animation =
            "ripple .6s linear";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* ==========================
CARD GLOW
========================== */

const card = document.querySelector(".profile-card");

document.addEventListener("mousemove", e => {

    const x =
        e.clientX / window.innerWidth;

    const y =
        e.clientY / window.innerHeight;

    card.style.transform =
        `
        rotateY(${(x-.5)*12}deg)
        rotateX(${(0.5-y)*12}deg)
        `;

});

/* ==========================
RESET CARD
========================== */

document.addEventListener("mouseleave", () => {

    card.style.transform =
        "rotateX(0deg) rotateY(0deg)";

});

/* ==========================
FADE IN
========================== */

window.onload = () => {

    document.body.style.opacity = "1";

};

/* ==========================
CONSOLE
========================== */

console.log("🔥 SHOON HUB V4 Loaded");

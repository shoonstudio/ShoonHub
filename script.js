/* ===========================
   SHOON HUB V5
=========================== */

// Loader

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.pointerEvents = "none";

    setTimeout(() => {

        loader.style.display = "none";

    }, 700);

});

/* ===========================
   3D CARD EFFECT
=========================== */

const card = document.querySelector(".profile-card");

card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 20;

    const rotateX = -(y / rect.height - 0.5) * 20;

    card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave", () => {

    card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

});

/* ===========================
   BUTTON RIPPLE
=========================== */

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const size = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = size + "px";

        circle.style.height = size + "px";

        circle.style.left = e.offsetX - size / 2 + "px";

        circle.style.top = e.offsetY - size / 2 + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        },600);

    });

});

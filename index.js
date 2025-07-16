// Modern GSAP Animations for Portfolio Page (ScrollTrigger removed)

document.addEventListener('DOMContentLoaded', () => {
  // === 1. h1 Text Animation: Split and Animate Letters ===
  const h1 = document.querySelector("#main-title");
  if (h1) {
    const text = h1.textContent;
    h1.innerHTML = "";
    [...text].forEach(letter => {
      const span = document.createElement('span');
      span.textContent = letter === " " ? "\u00A0" : letter;
      span.style.display = "inline-block";
      h1.appendChild(span);
    });

    gsap.fromTo(
      '#main-title span',
      { y: 40, opacity: 0, color: "#009efd" },
      {
        y: 0,
        opacity: 1,
        color: "#2af598",
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.04
      }
    );

    gsap.to('#main-title span', {
      color: "#fff",
      delay: 1.2,
      duration: 1.1,
      stagger: 0.01,
      onComplete: () => {
        h1.style.background = "linear-gradient(90deg, #2af598, #009efd, #a55158)";
        h1.style.backgroundClip = "text";
        h1.style.webkitBackgroundClip = "text";
        h1.style.color = "transparent";
      }
    });
  }

  // === 2. Header and Nav Appear on Load ===
  gsap.timeline()
    .from('header', {
      y: -60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from('nav', {
      y: -30,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.4");

  // === 5. Animate Skills List Items on Hover ===
  document.querySelectorAll("#skills ul li").forEach((li) => {
    li.addEventListener("mouseenter", () => {
      gsap.to(li, { background: "linear-gradient(90deg,#2af598,#009efd)", color: "#fff", duration: 0.3 });
    });
    li.addEventListener("mouseleave", () => {
      gsap.to(li, { background: "rgba(255,255,255,0.16)", color: "#222b40", duration: 0.3 });
    });
  });

  // === 6. Animate Nav Link Underline and Color on Click ===
  document.querySelectorAll("nav a").forEach((a) => {
    a.addEventListener("click", (e) => {
      document.querySelectorAll("nav a").forEach(link => link.classList.remove("active"));
      a.classList.add("active");
      gsap.fromTo(a, { background: "linear-gradient(90deg,#2af598,#009efd)" }, { background: "#009efd", duration: 0.32, yoyo: true, repeat: 1 });
    });
  });

  // === 7. Smooth Scroll for Nav Links ===
  document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith("#")) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

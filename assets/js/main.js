/* ============================================
   PARTICLES.JS CONFIGURATION
   ============================================ */
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Particles.js
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#6c5ce7", "#00cec9", "#fd79a8", "#fdcb6e"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.4,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.5,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#6c5ce7",
          opacity: 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 180,
            line_linked: {
              opacity: 0.4,
            },
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    });
  }

  // ============================================
  // SMOOTH SCROLL
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // ============================================
  // SCROLL REVEAL ANIMATION
  // ============================================
  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .stagger-children"
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  // ============================================
  // TYPING EFFECT FOR HERO DESCRIPTION
  // ============================================
  const descriptions = [
    "Python Developer • ML Engineer • Full-Stack Builder",
    "Building Scalable & Intelligent Applications",
    "Passionate About AI, Security & Open Source",
  ];

  const descEl = document.querySelector(".site-description");
  if (descEl) {
    let descIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 60;

    function typeEffect() {
      const current = descriptions[descIndex];

      if (isDeleting) {
        descEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 30;
      } else {
        descEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 60;
      }

      if (!isDeleting && charIndex === current.length) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        descIndex = (descIndex + 1) % descriptions.length;
        typingSpeed = 500;
      }

      setTimeout(typeEffect, typingSpeed);
    }

    // Wait for initial animation to finish before starting typing
    setTimeout(() => {
      descEl.textContent = "";
      typeEffect();
    }, 2000);
  }

  // ============================================
  // PARALLAX EFFECT ON HERO
  // ============================================
  const hero = document.getElementById("particles-js");
  if (hero) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const header = hero.querySelector(".header");
      if (header && scrolled < window.innerHeight) {
        header.style.transform = `translateY(${scrolled * 0.3}px)`;
        header.style.opacity = 1 - scrolled / (window.innerHeight * 0.8);
      }
    });
  }

  // ============================================
  // ACTIVE NAV LINK HIGHLIGHT
  // ============================================
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".header-links .link");

  function highlightNav() {
    const scrollPos = window.scrollY + 200;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNav);

  // ============================================
  // SKILL TAG HOVER GLOW EFFECT
  // ============================================
  document.querySelectorAll(".skill-tag").forEach((tag) => {
    tag.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 0 15px rgba(108, 92, 231, 0.3)";
    });
    tag.addEventListener("mouseleave", function () {
      this.style.boxShadow = "none";
    });
  });

  // ============================================
  // COUNTER ANIMATION FOR STATS
  // ============================================
  function animateCounter(el, target, duration = 2000) {
    let start = 0;
    const step = target / (duration / 16);
    const counter = setInterval(() => {
      start += step;
      if (start >= target) {
        el.textContent = target;
        clearInterval(counter);
      } else {
        el.textContent = Math.floor(start);
      }
    }, 16);
  }

  // Observe stat elements
  document.querySelectorAll("[data-count]").forEach((el) => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounter(el, parseInt(el.dataset.count));
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
  });

  console.log("🚀 Muhammad Hashir's Portfolio loaded successfully!");
});

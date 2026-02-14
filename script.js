(() => {
  const menuButton = document.getElementById("menuButton");
  const siteMenu = document.getElementById("siteMenu");
  const heroOfferText = document.getElementById("heroOfferText");

  document.querySelectorAll(".reveal").forEach((item) => {
    item.style.setProperty("--delay", item.dataset.revealDelay || "0s");
  });

  if (menuButton && siteMenu) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      siteMenu.classList.remove("open");
      siteMenu.setAttribute("aria-hidden", "true");
    };

    menuButton.addEventListener("click", () => {
      const next = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(next));
      siteMenu.classList.toggle("open", next);
      siteMenu.setAttribute("aria-hidden", String(!next));
    });

    siteMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (!siteMenu.classList.contains("open")) return;
      const target = event.target;
      if (target instanceof Node && !siteMenu.contains(target) && !menuButton.contains(target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  const offerLines = [
    "Comprehensive, Patient-Centered Care For A Healthier You",
    "50% Discount On Your First Visit With Flowspace",
    "Sign Up For The Flow Space Longevity Program"
  ];

  let offerIndex = 0;
  if (heroOfferText) {
    setInterval(() => {
      offerIndex = (offerIndex + 1) % offerLines.length;
      heroOfferText.style.opacity = "0";

      window.setTimeout(() => {
        heroOfferText.textContent = offerLines[offerIndex];
        heroOfferText.style.opacity = "1";
      }, 180);
    }, 4300);
  }

  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  if (slides.length > 1) {
    let slideIndex = 0;
    setInterval(() => {
      slides[slideIndex].classList.remove("active");
      slideIndex = (slideIndex + 1) % slides.length;
      slides[slideIndex].classList.add("active");
    }, 6000);
  }

  const faqItems = Array.from(document.querySelectorAll(".accordion details"));
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      faqItems.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
})();

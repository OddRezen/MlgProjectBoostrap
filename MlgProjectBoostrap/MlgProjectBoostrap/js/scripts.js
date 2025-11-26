/* ===============================
   MJG Renovations LLC
   JavaScript File
   Author: Prince Gentillon
   =============================== */

// ===== MOBILE NAVBAR AUTO-CLOSE =====
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navCollapse = document.getElementById('navMenu');

if (navLinks && navCollapse) {
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.getComputedStyle(navCollapse).display !== "none") {
        let bsCollapse = new bootstrap.Collapse(navCollapse, { toggle: false });
        bsCollapse.hide();
      }
    });
  });
}


// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


const heroImages = [
  "images/house1.jpg",
  "images/interior3.jpg",
  "images/sink2.jpg",
  "images/bath1.jpg",
  "images/floor1.jpg"
];

let currentHero = 0;
const hero = document.getElementById("hero");

function setHeroImage() {
  console.log("Loading hero:", heroImages[currentHero]);
  hero.style.backgroundImage = `url('${heroImages[currentHero]}')`;
}

setHeroImage();

document.getElementById("heroPrev").addEventListener("click", () => {
  currentHero = (currentHero - 1 + heroImages.length) % heroImages.length;
  setHeroImage();
});

document.getElementById("heroNext").addEventListener("click", () => {
  currentHero = (currentHero + 1) % heroImages.length;
  setHeroImage();
});




// ===================== LIGHTBOX (Gallery) ======================
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

if (galleryImages.length > 0 && lightbox && lightboxImg) {
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("active");
    });
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });
}


// Debug confirmation
console.log("MJG Renovations JavaScript Loaded.");

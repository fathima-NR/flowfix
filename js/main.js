const PHONE = "+971 4 555 0199";
const PHONE_LINK = "tel:" + PHONE.replace(/[^+\d]/g, "");
const WHATSAPP = "971505550911";
const EMAIL = "info@flowfix.ae";
const ADDRESS = "Office 1204, Al Quoz Industrial Area 3, Dubai, UAE";
const HOURS = "Sat - Thu: 8:00 AM - 9:00 PM";

const NAV_LINKS = [
  { href: "index.html", label: "Home" },
  { href: "services.html", label: "Services" },
  { href: "about.html", label: "About Us" },
  { href: "process.html", label: "Process" },
  { href: "pricing.html", label: "Pricing" },
  { href: "testimonials.html", label: "Reviews" },
  { href: "contact.html", label: "Contact" },
];

const SOCIALS = [
  { icon: "fa-facebook-f", label: "Facebook" },
  { icon: "fa-instagram", label: "Instagram" },
  { icon: "fa-x-twitter", label: "X" },
  { icon: "fa-linkedin-in", label: "LinkedIn" },
];

const currentPage = location.pathname.split("/").pop() || "index.html";

const logoHTML = `
  <a href="index.html" class="logo">
    <span class="logo-icon"><i class="fa-solid fa-faucet-drip"></i></span>
    <span class="logo-text">Flow<span>Fix</span></span>
  </a>`;

const headerHTML = `
  <header class="header" id="header">
    <div class="container">
      ${logoHTML}
      <nav class="nav" id="nav">
        <ul>
          ${NAV_LINKS.map(
            (l) => `<li><a href="${l.href}" class="${l.href === currentPage ? "active" : ""}">${l.label}</a></li>`
          ).join("")}
        </ul>
        <div class="nav-cta">
          <a href="${PHONE_LINK}" class="btn btn-blue"><i class="fa-solid fa-phone"></i> ${PHONE}</a>
          <a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener" class="btn btn-whatsapp"><i class="fa-brands fa-whatsapp"></i> WhatsApp Us</a>
        </div>
      </nav>
      <div class="header-cta">
        <a href="${PHONE_LINK}" class="header-phone">
          <span class="ic"><i class="fa-solid fa-phone"></i></span>
          <div><small>Call Us 24/7</small><strong>${PHONE}</strong></div>
        </a>
        <a href="contact.html" class="btn btn-yellow">Get a Quote</a>
        <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
      </div>
    </div>
  </header>`;

const footerHTML = `
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        ${logoHTML}
        <p>DED-licensed plumbing company serving homes, villas and businesses across Dubai, Abu Dhabi, Sharjah and the Northern Emirates. Available 24/7.</p>
        <div class="socials">${SOCIALS.map(
          (s) => `<a href="#" aria-label="${s.label}"><i class="fa-brands ${s.icon}"></i></a>`
        ).join("")}</div>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul class="footer-links">${NAV_LINKS.map(
          (l) => `<li><a href="${l.href}"><i class="fa-solid fa-chevron-right"></i>${l.label}</a></li>`
        ).join("")}</ul>
      </div>
      <div>
        <h4>Our Services</h4>
        <ul class="footer-links">
          ${["Leak Detection", "Drain Cleaning", "Water Heaters", "Pipe Repair", "Bathroom Plumbing", "Water Tank Cleaning"]
            .map((s) => `<li><a href="services.html"><i class="fa-solid fa-chevron-right"></i>${s}</a></li>`)
            .join("")}
        </ul>
      </div>
      <div>
        <h4>Contact Info</h4>
        <ul class="footer-contact">
          <li><i class="fa-solid fa-location-dot"></i>${ADDRESS}</li>
          <li><i class="fa-solid fa-phone"></i><a href="${PHONE_LINK}">${PHONE}</a></li>
          <li><i class="fa-solid fa-envelope"></i><a href="mailto:${EMAIL}">${EMAIL}</a></li>
          <li><i class="fa-solid fa-clock"></i><span>${HOURS}<br />Emergency: 24/7</span></li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <span>© ${new Date().getFullYear()} FlowFix Plumbing Services L.L.C. All rights reserved.</span>
        <div class="links"><a href="#">Privacy Policy</a><a href="#">Terms & Conditions</a></div>
      </div>
    </div>
  </footer>
  <a class="whatsapp" href="https://wa.me/${WHATSAPP}?text=Hi%20FlowFix%2C%20I%20need%20a%20plumber" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
  <button class="to-top" id="toTop" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>
  <div class="mobile-bar">
    <a href="${PHONE_LINK}"><i class="fa-solid fa-phone"></i>Call</a>
    <a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener" class="wa"><i class="fa-brands fa-whatsapp"></i>WhatsApp</a>
    <a href="contact.html" class="book"><i class="fa-regular fa-calendar-check"></i>Book Now</a>
  </div>`;

document.getElementById("site-header").innerHTML = headerHTML;
document.getElementById("site-footer").innerHTML = footerHTML;

const nav = document.getElementById("nav");
const toggle = document.getElementById("menuToggle");
const setMenu = (open) => {
  nav.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
  toggle.setAttribute("aria-expanded", open);
  toggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
};
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
window.addEventListener("resize", () => {
  if (window.innerWidth > 1100) setMenu(false);
});

const header = document.getElementById("header");
const toTop = document.getElementById("toTop");
const onScroll = () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
  toTop.classList.toggle("show", window.scrollY > 500);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    }),
  { threshold: 0.1 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.querySelectorAll("[data-count]").forEach((el) => {
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || "";
  const counter = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    counter.disconnect();
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / 1600);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
  counter.observe(el);
});

document.querySelectorAll(".faq-q").forEach((q) =>
  q.addEventListener("click", () => q.parentElement.classList.toggle("open"))
);

document.querySelectorAll("[data-slider]").forEach((wrap) => {
  const track = wrap.querySelector(".reviews");
  const step = () => track.querySelector(".review").offsetWidth + 24;
  wrap.querySelector("[data-prev]").addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
  wrap.querySelector("[data-next]").addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
});

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("formMsg").style.display = "flex";
    form.reset();
  });
}

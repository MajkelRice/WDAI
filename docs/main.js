// Toggle custom topic input visibility
function toggleCustomTopic() {
  const topicSelect = document.getElementById("topicSelect");
  const customTopicGroup = document.getElementById("customTopicGroup");
  const customTopic = document.getElementById("customTopic");

  if (topicSelect.value === "custom") {
    customTopicGroup.style.display = "block";
    customTopic.required = true;
  } else {
    customTopicGroup.style.display = "none";
    customTopic.required = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Header scroll effect
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Gallery image modal functionality
  const imgModal = document.getElementById("imageModal");
  const videoModal = document.getElementById("videoModal");
  const modalImg = document.getElementById("modalImage");
  const modalVideo = document.getElementById("modalVideo");
  const galleryItems = document.querySelectorAll(
    ".gallery-item img, .gallery-item video"
  );

  galleryItems.forEach((el) => {
    el.addEventListener("click", function () {
      if (el.nodeName == "IMG") {
        mdl = modalImg;
        modal = imgModal;
      } else if (el.nodeName == "VIDEO") {
        mdl = modalVideo;
        modal = videoModal;
      }
      modal.style.display = "flex";
      mdl.src = this.src;
      mdl.alt = this.alt;
      document.body.style.overflow = "hidden";
    });
  });

  imgModal.addEventListener("click", function () {
    imgModal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  videoModal.addEventListener("click", function () {
    videoModal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Form submission
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const topicSelect = document.getElementById("topicSelect");
    const customTopic = document.getElementById("customTopic");
    const topic =
      topicSelect.value === "custom" ? customTopic.value : topicSelect.value;
    const message = document.getElementById("message").value;

    alert("Thank you for your message! We will get back to you soon.");
    form.reset();
    document.getElementById("customTopicGroup").style.display = "none";
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      navLinks.classList.remove("active");
    }
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // Intersection Observer for animation
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.5s, transform 0.5s";
    observer.observe(item);
  });

  // Image Swiper
  let swiper;

  function initSwiper() {
    if (window.innerWidth <= 768) {
      swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }

  // Initialize swiper on page load
  window.addEventListener("load", initSwiper);

  // Reinitialize on window resize
  window.addEventListener("resize", () => {
    if (swiper) swiper.destroy();
    initSwiper();
  });
});

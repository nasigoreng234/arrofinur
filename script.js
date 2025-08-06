document.addEventListener("DOMContentLoaded", function () {
  // Custom cursor
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });

  // Back to top button
  const backToTop = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTop.style.opacity = "1";
      backToTop.style.visibility = "visible";
    } else {
      backToTop.style.opacity = "0";
      backToTop.style.visibility = "hidden";
    }
  });

  // Form submission
  const contactForm = document.querySelector(".contact__form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = this.querySelector("#name").value;
      const email = this.querySelector("#email").value;
      const message = this.querySelector("#message").value;

      // Here you would typically send the form data to a server
      console.log({ name, email, message });

      // Show success message
      alert("Thank you for your message! I will get back to you soon.");
      this.reset();
    });
  }

  // Animate elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".work__item, .about__content, .about__image"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for animation
  document
    .querySelectorAll(".work__item, .about__content, .about__image")
    .forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Run once on page load
});

document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.animate-text');
    
    // Trigger animasi saat halaman dimuat
    const animateOnLoad = () => {
        animateElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animated');
            }, 100 * index);
        });
    };

    // Alternatif: Trigger saat elemen masuk viewport
    const animateOnScroll = () => {
        animateElements.forEach(el => {
            const elPosition = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elPosition < windowHeight - 100) {
                el.classList.add('animated');
            }
        });
    };

    // Pilih salah satu metode:
    animateOnLoad(); // Langsung animasi saat load
    // window.addEventListener('scroll', animateOnScroll); // Animasi saat scroll
});
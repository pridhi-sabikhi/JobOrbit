    // Navbar menu
    function openMenu() {
      document.getElementById("overlayMenu").style.display = "flex";
    }
    function closeMenu() {
      document.getElementById("overlayMenu").style.display = "none";
    }

    // Slider functionality
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    let interval = setInterval(nextSlide, 4000);

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    document.querySelector(".arrow.right").addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });

    document.querySelector(".arrow.left").addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });

    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(nextSlide, 4000);
    }

    const steps = document.querySelectorAll('.step');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      steps.forEach((step, i) => {
        setTimeout(() => {
          step.classList.add('show');
        }, i * 400); // delay each step
      });
    } else {
      steps.forEach(step => step.classList.remove('show')); 
    }
  });
}, { threshold: 0.3 });

observer.observe(document.querySelector('.steps-section'));

    // Removable tags
    document.addEventListener("click", function(e) {
      if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove();
      }
    });

    // Array of categories with vacancy counts
const categories = [
  { name: "Design", vacancies: 87 },
  { name: "Sales", vacancies: 142 },
  { name: "Marketing", vacancies: 95 },
  { name: "Finance", vacancies: 73 },
  { name: "Teaching and Education", vacancies: 110 },
  { name: "Freelancing", vacancies: 64 },
  { name: "Project Management", vacancies: 51 },
  { name: "Customer Services", vacancies: 128 }
];

// Reference to grid container
const grid = document.getElementById("jobCategories");

// Icons (Sales uses inline SVG)
const icons = {
  "Design": `<i class="fa-solid fa-pen-ruler"></i>`,
  "Sales": `
    <svg xmlns="http://www.w3.org/2000/svg" 
         viewBox="0 0 512 359.49" 
         width="45" height="45" 
         fill="currentColor" 
         style="vertical-align: middle; margin-right: 6px;">
      <path d="M477.666 152.24v201.217c0 3.298-2.735 6.033-6.034 6.033h-52.029c-3.299 0-6.034-2.714-6.034-6.033V203.785c10.62-10.387 23.674-22.952 36.993-35.77l21.017-20.249a50.492 50.492 0 006.087 4.474zM197.013 93.506l40.059-35.046c30.44 29.82 59.953 65.866 90.086 95.636L437.009 43.728 401.63 8.348 512 0l-6.206 112.469-33.938-33.946c-24.364 24.683-81.983 79.078-106.378 103.476-30.815 30.82-45.532 31.376-76.359.548l-52.047-57.926-10.106 8.962a123.575 123.575 0 00-5.137-9.915c-3.87-6.704-8.312-12.927-13.235-18.572l.067-.058c-3.495-4.014-7.392-7.873-11.648-11.532zm-70.715 1.189a87.26 87.26 0 00-33.857 4.363l-.231.086a87.673 87.673 0 00-29.418 16.951 87.66 87.66 0 00-20.883 27.093 87.286 87.286 0 00-8.893 32.943 87.695 87.695 0 001.934 25.21 87.074 87.074 0 007.511 20.685l-41.155 39.4a4.198 4.198 0 00-.156 5.929l23.299 24.369a4.184 4.184 0 005.909.141l39.604-38.23A87.016 87.016 0 0089.4 263.973a87.577 87.577 0 0025.046 5.442 87.3 87.3 0 0033.841-4.358 87.648 87.648 0 0029.666-17.04 87.687 87.687 0 0020.879-27.085c4.978-10.012 8.099-21.141 8.901-32.955.801-11.814-.79-23.263-4.362-33.857l-.086-.231a87.7 87.7 0 00-16.963-29.405 87.384 87.384 0 00-27.066-20.887c-10.011-4.978-21.144-8.101-32.958-8.902zm-14.309 121.492c-4.613-.322-10.488-1.459-15.011-2.671v-14.187c6.004.486 20.789 1.747 26.24.514 4.09-.929 3.637-7.387.943-8.196-3.243-1.009-10.031.202-15.49-1.379-2.786-.808-5.137-2.026-7.053-3.653-1.957-1.67-3.422-3.882-4.384-6.63-.939-2.674-1.412-5.859-1.412-9.552v-4.862c0-10.395 5.732-16.587 16.167-18.331v-7.452h14.866v7.162c4.611.368 10.349 1.546 14.925 2.655v14.21c-6.239-.549-18.072-1.665-23.99-.59a5.747 5.747 0 00-1.404.432c-2.43 1.152-2.333 7.798.644 8.585 1.947.511 5.94.241 8.069.241 2.154 0 4.152.211 5.986.626 1.85.421 3.525 1.058 5.009 1.906 6.226 3.548 8.972 9.806 8.972 16.717v4.867c0 2.888-.259 5.466-.769 7.72-2.033 8.941-8.968 10.87-17.442 11.797v8.037h-14.866v-7.966zm-37.567-86.768c6.879-5.999 14.911-10.665 23.644-13.604 8.425-2.84 17.564-4.102 27.033-3.461 9.468.642 18.357 3.129 26.313 7.076 8.264 4.097 15.587 9.802 21.59 16.678l.213.225a70.156 70.156 0 0113.401 23.438l.076.209c2.781 8.355 4.017 17.42 3.381 26.804-.641 9.459-3.125 18.345-7.067 26.296a70.168 70.168 0 01-16.69 21.602c-6.876 6.003-14.908 10.67-23.641 13.611-8.416 2.835-17.56 4.099-27.03 3.457-9.456-.641-18.335-3.125-26.293-7.073l-.208-.095c-16.478-8.23-29.128-22.797-35.012-40.242l-.076-.208c-2.781-8.357-4.017-17.421-3.381-26.808.642-9.466 3.128-18.352 7.076-26.31a69.887 69.887 0 0116.671-21.595zm89.246 161.438v62.6c0 3.307-2.726 6.033-6.034 6.033h-52.029c-3.308 0-6.034-2.714-6.034-6.033v-56.096c4.159.74 8.466 1.271 12.908 1.573 7.538.508 15.186.237 22.824-.747a116.568 116.568 0 0022.36-5.12c2.02-.68 4.021-1.415 6.005-2.21zm104.665-60.788v123.388c0 3.304-2.732 6.033-6.036 6.033H210.27c-3.304 0-6.036-2.714-6.036-6.033v-89.681a117.464 117.464 0 0021.105-29.763 116.488 116.488 0 008.157-21.452 115.425 115.425 0 002.943-14.613l13.89 15.451a48.33 48.33 0 001.783 1.878c5.543 5.543 10.916 10.472 16.221 14.792zm104.664 9.188v114.2c0 3.304-2.729 6.033-6.033 6.033h-52.03c-3.303 0-6.033-2.714-6.033-6.033V251.179c6.074 1.349 12.366 1.983 18.999 1.902 16.583-.201 30.915-4.82 45.097-13.824z"/>
    </svg>
  `,
  "Marketing": `<i class="fa-solid fa-bullhorn" "></i>`,
  "Finance": `<i class="fa-solid fa-coins"></i>`,
  "Teaching and Education": `<i class="fa-solid fa-chalkboard-user"></i>`,
  "Freelancing": `<i class="fa-solid fa-laptop"></i>`,
  "Project Management": `<i class="fa-solid fa-list-check"></i>`,
  "Customer Services": `<i class="fa-solid fa-user"></i>`
};

// Generate category cards
categories.forEach(cat => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="icon">${icons[cat.name]}</div>
    <h3>${cat.name}</h3>
    <p>${cat.vacancies} Vacancies</p>
  `;
  grid.appendChild(card);
});

    // Observe category cards
const cards = document.querySelectorAll('.card');

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add('show');
        }, i * 300); // delay each card
      });
    } else {
      cards.forEach(card => card.classList.remove('show'));
    }
  });
}, { threshold: 0.3 });

cardObserver.observe(document.querySelector('.grid'));

// Initialize particles.js
document.addEventListener('DOMContentLoaded', function() {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#113e6a" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#113e6a",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "grab" },
                        onclick: { enable: true, mode: "push" },
                        resize: true
                    }
                },
                retina_detect: true
            });
            
            // Animation on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1
            });
            
            document.querySelectorAll('.feature-card, .job-card').forEach(card => {
                observer.observe(card);
            });
            
            // Testimonial rotation
            const testimonials = document.querySelectorAll('.testimonial');
            const dots = document.querySelectorAll('.testimonial-dot');
            let currentTestimonial = 0;
            
            function showTestimonial(index) {
                testimonials.forEach(testimonial => testimonial.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                testimonials[index].classList.add('active');
                dots[index].classList.add('active');
                currentTestimonial = index;
            }
            
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showTestimonial(index);
                });
            });
            
            // Auto rotate testimonials
            setInterval(() => {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(currentTestimonial);
            }, 5000);
            
            // Add floating animation to some elements
            document.querySelectorAll('.feature-icon, .job-card, .company-logo').forEach(el => {
                el.classList.add('floating');
            });
        });
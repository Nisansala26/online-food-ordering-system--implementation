const testimonials = document.querySelectorAll(".testimonial");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function showTestimonial(i) {
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[i].classList.add("active");
}

next.addEventListener("click", () => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
});

prev.addEventListener("click", () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
});

// Auto change every 5 seconds
setInterval(() => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}, 5000);

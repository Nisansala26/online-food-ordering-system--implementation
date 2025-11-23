// JavaScript for testimonial slider functionality
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentTestimonialIndex = 0;

    // Function to show a specific testimonial
    function showTestimonial(index) {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        // Show the active one
        testimonials[index].classList.add('active');
    }

    // Function to move to the next testimonial
    function nextTestimonial() {
        currentTestimonialIndex++;
        if (currentTestimonialIndex >= testimonials.length) {
            currentTestimonialIndex = 0; // Wrap around to the first testimonial
        }
        showTestimonial(currentTestimonialIndex);
    }

    // Function to move to the previous testimonial
    function prevTestimonial() {
        currentTestimonialIndex--;
        if (currentTestimonialIndex < 0) {
            currentTestimonialIndex = testimonials.length - 1; // Wrap around to the last testimonial
        }
        showTestimonial(currentTestimonialIndex);
    }

    // Event listeners for the buttons
    if (nextButton && prevButton) {
        nextButton.addEventListener('click', nextTestimonial);
        prevButton.addEventListener('click', prevTestimonial);
    }

    // Optional: Auto-slide every few seconds
    // setInterval(nextTestimonial, 5000); 

    // Initial call to show the first testimonial (which is already set via HTML class 'active', 
    // but this ensures consistency if more logic is added)
    // showTestimonial(currentTestimonialIndex);
});

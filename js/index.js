// Typewriter effect
const professions = ['Cybersecurity Specialist', 'Full Stack Developer','Graphic Designer', 'Ethical Hacker', 'Penetration Tester'];
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isPaused = false;
const typingSpeed = 100;
const deleteSpeed = 50;
const pauseDuration = 2000;

function typeWriter() {
    const currentText = professions[professionIndex];
    const professionElement = document.getElementById('profession');

    if (!isDeleting && charIndex <= currentText.length) {
        professionElement.textContent = currentText.substring(0, charIndex);
        charIndex++;
    } else if (!isDeleting && !isPaused) {
        isPaused = true;
        setTimeout(() => {
            isDeleting = true;
            isPaused = false;
        }, pauseDuration);
    } else if (isDeleting && charIndex > 0) {
        professionElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        professionIndex = (professionIndex + 1) % professions.length;
    }

    const speed = isDeleting ? deleteSpeed : typingSpeed;
    setTimeout(typeWriter, speed);
}
typeWriter();

document.addEventListener('DOMContentLoaded', () => {
        animateCounter(document.getElementById('clients'), 10);
        animateCounter(document.getElementById('projects'), 50);
        animateCounter(document.getElementById('reviews'), 34);
    });

    function animateCounter(element, target) {
        let count = 0;
        const duration = 2000; // Animation duration in milliseconds
        const increment = target / (duration / 100); // Calculate the increment for each step

        const counter = setInterval(() => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(counter);
            }
            element.textContent = Math.floor(count); // Update the number in the element
        }, 100); // Interval of 100ms
    }
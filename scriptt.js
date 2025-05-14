// Initialize AOS
AOS.init({ duration: 1000, once: true });

// Typewriter effect for hero tagline
const taglineElement = document.getElementById('tagline');
const taglines = ['Full Stack Developer', 'Creative Coder', 'Tech Enthusiast'];
let index = 0, charIndex = 0, isDeleting = false;
function type() {
    const currentTagline = taglines[index];
    taglineElement.textContent = currentTagline.substring(0, charIndex);
    if (!isDeleting) {
        charIndex++;
        if (charIndex > currentTagline.length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else {
            setTimeout(type, 100);
        }
    } else {
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % taglines.length;
        }
        setTimeout(type, 50);
    }
}
type();

// Initialize Vanilla Tilt for project cards
VanillaTilt.init(document.querySelectorAll('.project-card'), {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.5
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form with confetti
const confetti = new JSConfetti();
document.getElementById('submit-btn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');

    if (name && email && message) {
        formMessage.classList.remove('hidden');
        formMessage.style.color = '#34D399';
        formMessage.textContent = 'Message Sent! Let’s Create Something Amazing!';
        document.getElementById('contact-form').reset();
        confetti.addConfetti({ emojis: ['🚀', '✨'] });
        setTimeout(() => formMessage.classList.add('hidden'), 3000);
    } else {
        formMessage.classList.remove('hidden');
        formMessage.style.color = '#F87171';
        formMessage.textContent = 'Please Fill All Fields!';
        setTimeout(() => formMessage.classList.add('hidden'), 3000);
    }
});
// 1. MENU MOBILE
const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('a, button, .skill-tag').forEach(link => {
    link.addEventListener('mouseenter', () => cursor.style.transform = 'scale(2.5)');
    link.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});
window.addEventListener('scroll', () => {
    const scrollLine = document.querySelector('.scroll-line');
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (windowScroll / height) * 100;
    scrollLine.style.width = scrolled + "%";
});

// 2. TYPING EFFECT
const txtElement = ['Web Developer', 'Pendidik', 'Product Designer'];
let count = 0; let txtIndex = 0; let currentTxt = ''; let words = ''; let isDeleting = false;

(function type() {
    if (count === txtElement.length) count = 0;
    currentTxt = txtElement[count];
    if (isDeleting) { words = currentTxt.slice(0, --txtIndex); } 
    else { words = currentTxt.slice(0, ++txtIndex); }
    document.querySelector('.typing').textContent = words;

    let typeSpeed = 150;
    if (isDeleting) typeSpeed /= 2;
    if (!isDeleting && words.length === currentTxt.length) { typeSpeed = 2000; isDeleting = true; } 
    else if (isDeleting && words.length === 0) { isDeleting = false; count++; typeSpeed = 500; }
    setTimeout(type, typeSpeed);
})();

// 3. MODAL CONTACT
const modal = document.getElementById("contactModal");
function openModal() { modal.classList.add("active"); document.body.style.overflow = "hidden"; }
function closeModal() { modal.classList.remove("active"); document.body.style.overflow = "auto"; }
window.onclick = function(e) { if (e.target == modal) closeModal(); }

// 4. SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.about-img, .about-text, .card-item, .skill-group, .portfolio-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});
document.addEventListener('DOMContentLoaded', () => {
    // ========== Hamburger Menu Toggle ==========
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link (mobile)
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // ========== Smooth Scrolling for Anchor Links ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== Header Scroll Effect ==========
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // ========== Form Validation and Submission ==========
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const name = contactForm.querySelector('input[type="text"]').value.trim();
            const email = contactForm.querySelector('input[type="email"]').value.trim();
            const subject = contactForm.querySelectorAll('input[type="text"]')[1]?.value.trim();
            const message = contactForm.querySelector('textarea').value.trim();

            // Basic validation
            if (!name || !email || !message) {
                alert('कृपया सबै आवश्यक फिल्डहरू भर्नुहोस्। (Please fill all required fields.)');
                return;
            }

            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('कृपया मान्य इमेल ठेगाना प्रविष्ट गर्नुहोस्। (Please enter a valid email address.)');
                return;
            }

            // Success message
            alert('तपाईंको सन्देश सफलतापूर्वक पठाइयो! हामी चाँडै सम्पर्क गर्नेछौं। (Your message has been sent successfully! We will contact you soon.)');

            // Reset form
            contactForm.reset();
        });
    }

    // ========== Animate Elements on Scroll ==========
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .contact-info-item, .about-text');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize animation styles
    document.querySelectorAll('.service-card, .contact-info-item, .about-text').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run on load

    // ========== Active Navigation Highlight ==========
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navLinkItems = document.querySelectorAll('.nav-links a');

    navLinkItems.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentLocation) {
            link.classList.add('active');
        }
    });
});

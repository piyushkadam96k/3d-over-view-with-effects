document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('active');
            
            // Set active link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Handle scroll to set active link
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section');
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
    
    // 3D Cube Rotation
    const cube = document.getElementById('main-cube');
    const rotateBtn = document.getElementById('rotate-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    let xRotation = 0;
    let yRotation = 0;
    let isRotating = false;
    let rotationInterval;
    
    rotateBtn.addEventListener('click', () => {
        if (!isRotating) {
            isRotating = true;
            rotateBtn.textContent = 'Stop Rotation';
            
            rotationInterval = setInterval(() => {
                yRotation += 2;
                cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
            }, 50);
        } else {
            isRotating = false;
            rotateBtn.textContent = 'Rotate Cube';
            clearInterval(rotationInterval);
        }
    });
    
    resetBtn.addEventListener('click', () => {
        xRotation = 0;
        yRotation = 0;
        cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        isRotating = false;
        rotateBtn.textContent = 'Rotate Cube';
        clearInterval(rotationInterval);
    });
    
    // Manual rotation with mouse drag
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    cube.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = {
            x: e.clientX,
            y: e.clientY
        };
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const dx = e.clientX - previousMousePosition.x;
        const dy = e.clientY - previousMousePosition.y;
        
        xRotation += dy * 0.5;
        yRotation += dx * 0.5;
        
        cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        
        previousMousePosition = {
            x: e.clientX,
            y: e.clientY
        };
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    // 3D Carousel
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    
    let theta = 0;
    const count = carouselItems.length;
    const radius = 300;
    let currentIndex = 0;
    
    function setupCarousel() {
        const apothem = radius * Math.cos(2 * Math.PI / count / 2);
        
        for (let i = 0; i < count; i++) {
            const angle = ((i / count) * 2 * Math.PI);
            const x = Math.sin(angle) * radius;
            const z = Math.cos(angle) * radius - apothem;
            
            carouselItems[i].style.transform = 
                `translateZ(${apothem}px) rotateY(${angle}rad) translateZ(${radius}px)`;
        }
        
        rotateCarousel();
    }
    
    function rotateCarousel() {
        carousel.style.transform = `translateZ(${-radius}px) rotateY(${theta}rad)`;
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        theta = (currentIndex / count) * 2 * Math.PI;
        rotateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        theta = (currentIndex / count) * 2 * Math.PI;
        rotateCarousel();
    });
    
    setupCarousel();
    
    // 3D Parallax Effect on Mouse Move - MODIFIED
    const sections = document.querySelectorAll('.section');
    
    // Create separate wrapper divs for parallax content
    sections.forEach(section => {
        // Add a class to indicate this section is ready for parallax
        section.classList.add('parallax-ready');
    });
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        
        document.querySelectorAll('.parallax-ready').forEach(section => {
            const depth = 10; // Reduced depth for subtler effect
            const moveX = x * depth;
            const moveY = y * depth;
            
            // Use CSS custom property to store the parallax transform
            section.style.setProperty('--parallax-x', `${moveX}px`);
            section.style.setProperty('--parallax-y', `${moveY}px`);
        });
    });
    
    // 3D Form Interaction
    const contactForm = document.getElementById('contact-form');
    const inputFields = contactForm.querySelectorAll('input, textarea');
    
    inputFields.forEach(field => {
        field.addEventListener('focus', () => {
            field.style.transform = 'translateZ(20px)';
        });
        
        field.addEventListener('blur', () => {
            field.style.transform = 'translateZ(0)';
        });
    });
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission with 3D animation
        contactForm.style.transform = 'rotateX(90deg) translateZ(100px)';
        contactForm.style.opacity = '0';
        
        setTimeout(() => {
            alert('Form submitted! This is a demo - no actual submission occurred.');
            
            // Reset form
            contactForm.reset();
            contactForm.style.transform = 'rotateX(5deg)';
            contactForm.style.opacity = '1';
        }, 1000);
    });
    
    // Smooth scrolling for navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Apply 3D perspective to headings on scroll
    const headings = document.querySelectorAll('h2');
    
    function checkScroll() {
        headings.forEach(heading => {
            const rect = heading.getBoundingClientRect();
            const isInView = (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0);
            
            if (isInView) {
                heading.style.transform = 'perspective(500px) translateZ(50px)';
                heading.style.opacity = '1';
            } else {
                heading.style.transform = 'perspective(500px) translateZ(0)';
                heading.style.opacity = '0.5';
            }
        });
    }
    
    // Initialize heading styles
    headings.forEach(heading => {
        heading.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        heading.style.opacity = '0.5';
    });
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check
}); 
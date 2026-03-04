/* script.js - GSAP Animations and Interactions */

document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial load animation for hero section
    const initHeroAnim = () => {
        gsap.fromTo('.gsap-reveal',
            {
                y: 30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                clearProps: 'all' // Cleanup after animation to avoid conflicts with CSS
            }
        );
    };

    // Trigger hero animation after a small delay to ensure rendering
    setTimeout(initHeroAnim, 100);

    // Scroll reveal animations for elements down the page
    const revealElements = document.querySelectorAll('.gsap-scroll');

    revealElements.forEach((element) => {
        gsap.fromTo(element,
            {
                y: 40,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%', // Trigger when top of element hits 85% of viewport height
                    toggleActions: 'play none none reverse' // Play on enter, reverse on leave back
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
                clearProps: 'all' // Important for responsiveness
            }
        );
    });

    // Advanced Effect 1: Scroll Interactive Images for Curriculum
    const stepCards = document.querySelectorAll('.step-card');
    const stepImage = document.getElementById('step-image');

    if (stepCards.length > 0 && stepImage) {
        stepCards.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: 'top center', // Trigger when the top of the card hits the center of the viewport
                end: 'bottom center', // End when the bottom of the card hits the center
                onEnter: () => {
                    // Update image source with smooth crossfade
                    const newImgSrc = card.getAttribute('data-img');
                    if (stepImage.getAttribute('src') !== newImgSrc) {
                        gsap.to(stepImage, {
                            opacity: 0,
                            duration: 0.3,
                            ease: "power1.inOut",
                            onComplete: () => {
                                stepImage.setAttribute('src', newImgSrc);
                                gsap.to(stepImage, { opacity: 1, duration: 0.3, ease: "power1.inOut" });
                            }
                        });
                    }
                    // Highlight active card text
                    gsap.to(card, { opacity: 1, duration: 0.4 });
                },
                onEnterBack: () => {
                    const newImgSrc = card.getAttribute('data-img');
                    if (stepImage.getAttribute('src') !== newImgSrc) {
                        gsap.to(stepImage, {
                            opacity: 0,
                            duration: 0.3,
                            ease: "power1.inOut",
                            onComplete: () => {
                                stepImage.setAttribute('src', newImgSrc);
                                gsap.to(stepImage, { opacity: 1, duration: 0.3, ease: "power1.inOut" });
                            }
                        });
                    }
                    gsap.to(card, { opacity: 1, duration: 0.4 });
                },
                onLeave: () => {
                    // Dim card when scrolled past
                    gsap.to(card, { opacity: 0.4, duration: 0.4 });
                },
                onLeaveBack: () => {
                    // Dim card when scrolled back up past it
                    gsap.to(card, { opacity: 0.4, duration: 0.4 });
                }
            });
        });
    }

    // Advanced Effect 2: Subtle continuous breathing for Hero Background Mesh
    const heroBg = document.querySelector('.mix-blend-normal');
    if (heroBg) {
        gsap.to(heroBg, {
            scale: 1.25,
            opacity: 1,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Add prominent mouse follow to the background
        document.addEventListener('mousemove', (e) => {
            const xPct = (e.clientX / window.innerWidth) - 0.5;
            const yPct = (e.clientY / window.innerHeight) - 0.5;

            gsap.to(heroBg, {
                x: xPct * -150, // Much stronger horizontal movement
                y: yPct * -100, // Stronger vertical movement
                duration: 1.5,
                ease: "power2.out"
            });
        });
    }

    // Navbar scroll effect (blur and border only show when scrolling)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });
});

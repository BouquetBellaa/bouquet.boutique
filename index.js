        // Initialize AOS
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });

        // Loader
        window.addEventListener('load', function() {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 1500);
        });

        // Floating Petals Animation
        function createPetals() {
            const container = document.getElementById('petals');
            const colors = ['#FFB6C1', '#FFD1DC', '#FFC0CB', '#FF91A4', '#FFE4EC'];
            
            for (let i = 0; i < 15; i++) {
                const petal = document.createElement('div');
                petal.className = 'petal';
                petal.style.left = Math.random() * 100 + 'vw';
                petal.style.animationDelay = Math.random() * 8 + 's';
                petal.style.animationDuration = (Math.random() * 4 + 6) + 's';
                petal.style.background = colors[Math.floor(Math.random() * colors.length)];
                petal.style.width = (Math.random() * 15 + 10) + 'px';
                petal.style.height = (Math.random() * 15 + 10) + 'px';
                container.appendChild(petal);
            }
        }
        createPetals();

        // Counter Animation
        function animateCounter() {
            const counters = document.querySelectorAll('.counter');
            
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current).toLocaleString();
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.textContent = target.toLocaleString() + '+';
                    }
                };
                
                // Intersection Observer for counter
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            updateCounter();
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 });
                
                observer.observe(counter);
            });
        }
        animateCounter();

        // Back to Top Button
        const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Navbar scroll effect
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.padding = '10px 0';
                navbar.style.boxShadow = '0 5px 30px rgba(255, 105, 180, 0.15)';
            } else {
                navbar.style.padding = '15px 0';
                navbar.style.boxShadow = '0 2px 20px rgba(255, 105, 180, 0.1)';
            }
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add to cart animation
        document.querySelectorAll('.product-overlay .btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                this.innerHTML = '<i class="bi bi-check2 me-2"></i>Ditambahkan!';
                this.classList.add('btn-success');
                this.classList.remove('btn-light');
                
                setTimeout(() => {
                    this.innerHTML = '<i class="bi bi-cart-plus me-2"></i>Tambah';
                    this.classList.remove('btn-success');
                    this.classList.add('btn-light');
                }, 2000);
            });
        });

        // Newsletter form submission
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const input = this.querySelector('input');
            
            btn.innerHTML = '<i class="bi bi-check2-circle me-2"></i>Berhasil!';
            btn.style.background = '#28a745';
            input.value = '';
            
            setTimeout(() => {
                btn.innerHTML = '<i class="bi bi-send me-2"></i>Subscribe';
                btn.style.background = '';
            }, 3000);
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const heroImage = document.querySelector('.hero-image');
            if (heroImage && scrolled < 800) {
                heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
            }
        });

        // Product card hover sound effect (visual feedback)
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            });
        });

        // Category card click effect
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            });
        });
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });

    // Close menu when link is clicked
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    // Carousel Logic
    const galleryGrid = document.querySelector('.gallery-grid');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (galleryGrid && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            galleryGrid.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            galleryGrid.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    }

    // Existing Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));

    // Header Change on Scroll
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
        } else {
            header.style.padding = '15px 0';
        }
    });

    // Dynamic Guidance Rendering & SSLC Flow

    const sslcOptionsContainer = document.getElementById('sslc-options-container');
    const streamSelection = document.getElementById('streamSelection');
    const careerPathwaysContainer = document.getElementById('career-pathways-container');
    const guidanceGrid = document.getElementById('guidance-grid');
    const backBtnContainer = document.getElementById('backBtnContainer');
    const backBtn = document.getElementById('backBtn');

    const sslcOptions = [
        { id: 'science', name: 'Science', icon: '🔬', desc: 'Engineering, Medicine, Pure Sciences' },
        { id: 'commerce', name: 'Commerce', icon: '📊', desc: 'Business, Finance, CA, CS' },
        { id: 'humanities', name: 'Humanities', icon: '🎨', desc: 'Arts, Law, Social Sciences' },
        { id: 'polytechnic', name: 'Polytechnic', icon: '⚙️', desc: '3-Year Engineering Diploma' },
        { id: 'iti', name: 'ITI', icon: '🛠️', desc: 'Industrial Training (Technical)' },
    ];

    const streamMapping = {
        'pure-science': 'science',
        'engineering-technology': 'science',
        'medicine': 'science',
        'intl_licensing_paths': 'science',
        'commerce-management': 'commerce',
        'social-science-humanities': 'humanities',
        'islamic-studies': ['humanities', 'science', 'commerce'],
        'various-competitive-exams-india': ['science', 'commerce', 'humanities'],
        'education': ['humanities', 'science', 'commerce'],
        'short-term-career-programs': ['science', 'commerce', 'humanities', 'polytechnic', 'iti']
    };

    function renderSSLCSelection() {
        if (!streamSelection) return;
        streamSelection.innerHTML = sslcOptions.map(opt => `
            <div class="stream-card fade-in-up" onclick="handleSSLCClick('${opt.id}')">
                <span class="stream-icon">${opt.icon}</span>
                <h4>${opt.name}</h4>
                <p>${opt.desc}</p>
            </div>
        `).join('');

        // Observe new elements
        const newElements = streamSelection.querySelectorAll('.fade-in-up');
        if (typeof observer !== 'undefined') {
            newElements.forEach(el => observer.observe(el));
        }
    }

    window.handleSSLCClick = (type) => {
        if (sslcOptionsContainer) sslcOptionsContainer.style.display = 'none';
        if (careerPathwaysContainer) careerPathwaysContainer.style.display = 'block';
        if (backBtnContainer) {
            backBtnContainer.style.display = 'block';
            backBtnContainer.classList.add('active');
        }

        let filteredDomains = [];

        // specialized handling for polytechnic/iti vocational content
        if (type === 'polytechnic' || type === 'iti') {
            const vocational = window.careerData.domains.find(d => d.id === 'vocational');
            if (vocational) {
                filteredDomains.push({
                    ...vocational,
                    subdomains: vocational.subdomains.filter(s => s.id === type)
                });
            }
        }

        // Standard filtering for all streams (checks the mapping)
        const commonDomains = window.careerData.domains.filter(domain => {
            const stream = streamMapping[domain.id];
            if (Array.isArray(stream)) {
                return stream.includes(type);
            }
            return stream === type;
        });

        // Merge common domains (like short term courses) with special vocational ones
        commonDomains.forEach(d => {
            if (!filteredDomains.find(fd => fd.id === d.id)) {
                filteredDomains.push(d);
            }
        });

        renderCareerData(filteredDomains);
    };

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            if (sslcOptionsContainer) sslcOptionsContainer.style.display = 'block';
            if (careerPathwaysContainer) careerPathwaysContainer.style.display = 'none';
            if (backBtnContainer) backBtnContainer.style.display = 'none';
            if (guidanceGrid) guidanceGrid.innerHTML = '';
        });
    }

    window.toggleEducation = (liElement) => {
        // Find the education pathway div inside the clicked li
        const pathDiv = liElement.querySelector('.education-pathway');
        if (pathDiv) {
            const isVisible = pathDiv.classList.contains('active');

            if (isVisible) {
                pathDiv.classList.remove('active');
                liElement.classList.remove('active-tag');
            } else {
                // Accordion: Close all others
                document.querySelectorAll('.education-pathway.active').forEach(p => p.classList.remove('active'));
                document.querySelectorAll('.active-tag').forEach(t => t.classList.remove('active-tag'));

                // Open current
                liElement.classList.add('active-tag');
                pathDiv.classList.add('active');
                pathDiv.onclick = (e) => e.stopPropagation();
            }
        }
    };

    function renderCareerData(domains) {
        if (!guidanceGrid) return;
        guidanceGrid.innerHTML = domains.map((domain, index) => `
            <div class="guidance-card fade-in-up delay-100">
                <div style="font-size: 2.5rem; color: var(--secondary-color); margin-bottom: 20px;">${domain.icon}</div>
                <h4>${domain.name}</h4>
                <p style="margin-bottom: 15px; color: #666;">${domain.description}</p>
                
                <ul class="career-list">
                    ${domain.subdomains.map(sub => `
                        <li onclick="toggleEducation(this)">
                            ${sub.name}
                            <div class="education-pathway">
                                <h5>Education Pathway</h5>
                                ${sub.educationPath && sub.educationPath.undergraduate ? `
                                <div class="edu-step">
                                    <strong>UG: ${sub.educationPath.undergraduate.name}</strong>
                                    <small class="duration-label">Duration: ${sub.educationPath.undergraduate.duration}</small>
                                     ${sub.educationPath.undergraduate.institutions ? `
                                     <div class="inst-container">
                                        ${sub.educationPath.undergraduate.institutions.slice(0, 5).map(inst =>
            `<a href="https://www.google.com/search?q=${encodeURIComponent(inst + ' official website')}" target="_blank" class="inst-btn" title="Search for ${inst}">${inst}</a>`
        ).join('')}
                                     </div>` : ''}
                                </div>` : ''}
                                
                                ${sub.educationPath && sub.educationPath.postgraduate ? `
                                <div class="edu-step">
                                    <strong>PG: ${sub.educationPath.postgraduate.name}</strong>
                                    <small class="duration-label">Duration: ${sub.educationPath.postgraduate.duration}</small>
                                    ${sub.educationPath.postgraduate.institutions ? `
                                     <div class="inst-container">
                                        ${sub.educationPath.postgraduate.institutions.slice(0, 5).map(inst =>
            `<a href="https://www.google.com/search?q=${encodeURIComponent(inst + ' official website')}" target="_blank" class="inst-btn" title="Search for ${inst}">${inst}</a>`
        ).join('')}
                                     </div>` : ''}
                                </div>` : ''}
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join('');

        // Observe new elements
        const newElements = guidanceGrid.querySelectorAll('.fade-in-up');
        if (typeof observer !== 'undefined') {
            newElements.forEach(el => observer.observe(el));
        }
    }

    renderSSLCSelection();
});

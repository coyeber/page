document.addEventListener('DOMContentLoaded', function() {
   
    const title = document.querySelector('.header h1');
    const originalTitle = title.textContent;
    title.textContent = '';
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < originalTitle.length) {
            title.textContent += originalTitle.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 100);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

   
    const body = document.body;
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        body.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });

  
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.post-card').forEach(card => {
        observer.observe(card);
    });


    const filterButtons = document.createElement('div');
    filterButtons.className = 'filter-buttons';
    filterButtons.innerHTML = `
        <button class="filter-btn active" data-filter="all">Todos</button>
        <button class="filter-btn" data-filter="vehicle">Veículos</button>
        <button class="filter-btn" data-filter="skin">Skins</button>
    `;

    document.querySelector('.section-title').insertAdjacentElement('afterend', filterButtons);

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            document.querySelectorAll('.post-card').forEach(card => {
                if (filter === 'all' || card.querySelector(`.tag.${filter}`)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    
    document.querySelectorAll('.post-image').forEach(img => {
        img.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <img src="${this.src}" alt="${this.alt}">
                    <p>${this.nextElementSibling.querySelector('.post-title').textContent}</p>
                </div>
            `;
            document.body.appendChild(modal);
            
            modal.querySelector('.close-modal').addEventListener('click', () => {
                modal.remove();
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });

   
    const visitCounter = document.createElement('div');
    visitCounter.className = 'visit-counter';
    visitCounter.textContent = '⭐ ' + Math.floor(Math.random() * 1000) + ' visitantes';
    document.querySelector('.footer').prepend(visitCounter);


    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
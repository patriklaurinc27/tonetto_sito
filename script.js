document.addEventListener('DOMContentLoaded', () => {
    // 1. Inizializzare le icone Lucide
    lucide.createIcons();

    // 2. Navbar Scroll Effect e Mobile Menu
    const navbar = document.querySelector('.navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle icon: menu or x
        const icon = mobileBtn.querySelector('i');
        const isMenuIcon = icon.getAttribute('data-lucide') === 'menu';

        icon.setAttribute('data-lucide', isMenuIcon ? 'x' : 'menu');
        lucide.createIcons(); // Re-render icon
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileBtn.querySelector('i').setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });

    // 3. Scroll Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Solo una volta
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Scatta quando il 15% è visibile
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Renderizzazione Prodotti Dinamica
    const categoryFiltersContainer = document.getElementById('category-filters');
    const productsGrid = document.getElementById('products-grid');

    // Funzione per renderizzare la card di un prodotto
    function createProductCard(product, categoryName) {
        // Determiniamo quali tag da mostrare (misure, formati, o capacita)
        let primaryAttrKey = '';
        let primaryAttrValues = [];

        if (product.misure) { primaryAttrKey = 'Misure/Varianti'; primaryAttrValues = product.misure; }
        else if (product.formati) { primaryAttrKey = 'Formati'; primaryAttrValues = product.formati; }
        else if (product.capacita) { primaryAttrKey = 'Capacità'; primaryAttrValues = product.capacita; }

        const tagsHtml = primaryAttrValues.map(val => `<span class="tag">${val}</span>`).join('');

        // Badge personalizzabile
        const customBadge = product.personalizzabile
            ? `<div class="personalizzabile-badge"><i data-lucide="sparkles" width="14" height="14"></i> Personalizzabile</div>`
            : '';

        return `
            <div class="product-card reveal active">
                <div class="product-card-header">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
                        <span class="product-category-label" style="margin-bottom: 0;">${categoryName}</span>
                        ${customBadge}
                    </div>
                    <h3 class="product-title">${product.nome}</h3>
                </div>
                <div class="product-body">
                    <p class="product-description">
                        ${product.descrizione || ''}
                    </p>
                    <div class="product-details">
                        <div class="detail-row">
                            <i data-lucide="layers" class="detail-icon" width="18" height="18"></i>
                            <div class="detail-content">
                                <h5>Assortimento Disponibile</h5>
                                <div class="tag-list">
                                    ${tagsHtml}
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#contatti" class="btn btn-outline btn-full" style="color:var(--primary); border-color:var(--primary); margin-top:auto;" onclick="document.getElementById('messaggio').value='Richiedo informazioni per: ${product.nome}'">
                        Richiedi Info
                    </a>
                </div>
            </div>
        `;
    }

    // Funzione per inizializzare catalogo
    function initCatalog() {
        if (typeof shopData === 'undefined') {
            productsGrid.innerHTML = '<p>Errore nel caricamento dei dati. Assicurarsi che data.js sia caricato correttamente.</p>';
            return;
        }

        // Crea bottone "Tutti"
        const allBtn = document.createElement('button');
        allBtn.className = 'filter-btn active';
        allBtn.textContent = 'Tutti i Prodotti';
        allBtn.addEventListener('click', () => filterProducts('Tutti'));
        categoryFiltersContainer.appendChild(allBtn);

        // Estrai categorie e crea bottoni filtra
        shopData.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.textContent = cat.categoria;
            btn.addEventListener('click', () => filterProducts(cat.categoria, btn));
            categoryFiltersContainer.appendChild(btn);
        });

        // --- LOGICA SETTORI (NOVITÀ B2B) ---
        const sectorFiltersContainer = document.getElementById('sector-filters');

        // Estrai tutti i settori unici dal JSON
        const allSectors = new Set();
        shopData.forEach(cat => {
            cat.prodotti.forEach(prod => {
                prod.settori.forEach(s => allSectors.add(s));
            });
        });

        // Icone e Label per i Settori Individuali (come richiesto)
        const sectorData = [
            { id: "Macelleria", label: "Macelleria", icon: "beef" },
            { id: "Gastronomia", label: "Gastronomia", icon: "utensils-crossed" },
            { id: "Pescheria", label: "Pescheria", icon: "fish" },
            { id: "Ortofrutta", label: "Ortofrutta", icon: "apple" },
            { id: "Pasticceria", label: "Pasticceria & Panificio", icon: "cake" },
            { id: "Ristorazione", label: "Ristorazione & Horeca", icon: "chef-hat" },
            { id: "Logistica", label: "Logistica & Industria", icon: "truck" }
        ];

        sectorData.forEach(hub => {
            const sectorCard = document.createElement('div');
            sectorCard.className = 'sector-card';

            sectorCard.innerHTML = `
                <i data-lucide="${hub.icon}" width="40" height="40"></i>
                <span>${hub.label}</span>
            `;

            sectorCard.addEventListener('click', () => filterBySector(hub.id, sectorCard));
            sectorFiltersContainer.appendChild(sectorCard);
        });

        // Aggiunta manuale di una card per "Tutto il Catalogo" alla fine
        const allSectorsCard = document.createElement('div');
        allSectorsCard.className = 'sector-card';
        allSectorsCard.innerHTML = `
            <i data-lucide="layers" width="40" height="40"></i>
            <span>Tutto il Catalogo</span>
        `;
        allSectorsCard.addEventListener('click', () => {
            const catalogContainer = document.getElementById('catalog-container');
            catalogContainer.classList.add('active');
            filterProducts('Tutti');
            setTimeout(() => {
                catalogContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        });
        sectorFiltersContainer.appendChild(allSectorsCard);

        // --- LOGICA REVEAL CATALOGO ---
        const catalogContainer = document.getElementById('catalog-container');

        // Primo render (Caricato ma nascosto via CSS)
        renderProducts('Tutti', null);

        // Renderizza icone generate dinamicamente
        setTimeout(() => lucide.createIcons(), 50);
    }

    // Funzione per filtrare i prodotti PER CATEGORIA
    function filterProducts(categoryName, clickedBtn = null) {
        // Resetta filtri settore
        const sectorCards = document.querySelectorAll('.sector-card');
        sectorCards.forEach(card => card.classList.remove('active'));

        // Aggiorna stato active bottoni categoria
        const buttons = categoryFiltersContainer.querySelectorAll('.filter-btn');
        buttons.forEach(btn => btn.classList.remove('active'));

        if (clickedBtn) {
            clickedBtn.classList.add('active');
        } else {
            buttons[0].classList.add('active'); // Bottono "Tutti"
        }

        renderProducts(categoryName, null);
    }

    // NUOVO: Funzione per filtrare i prodotti PER SETTORE (Filtro Trasversale)
    function filterBySector(sectorName, clickedCard) {
        const catalogContainer = document.getElementById('catalog-container');

        // Svela il catalogo se è nascosto
        if (!catalogContainer.classList.contains('active')) {
            catalogContainer.classList.add('active');
        }

        // Resetta filtri categoria
        const categoryBtns = categoryFiltersContainer.querySelectorAll('.filter-btn');
        categoryBtns.forEach(btn => btn.classList.remove('active'));

        // Aggiorna stato active card settori
        const sectorCards = document.querySelectorAll('.sector-card');
        sectorCards.forEach(card => card.classList.remove('active'));
        clickedCard.classList.add('active');

        renderProducts(null, sectorName);

        // Scroll agli inizi dei risultati dopo un breve delay per permettere l'animazione CSS
        setTimeout(() => {
            catalogContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    // Funzione render modificata per accettare FILTRO CATEGORIA o FILTRO SETTORE
    function renderProducts(categoryFilter, sectorFilter) {
        productsGrid.innerHTML = '';
        let count = 0;

        shopData.forEach(catItem => {
            const hasCategoryMatch = (categoryFilter === 'Tutti' || catItem.categoria === categoryFilter);

            catItem.prodotti.forEach(prod => {
                // Se filtriamo per settore, il prodotto combacia se ha ESATTAMENTE quel settore, OPPUURE se è per "Tutti i settori"
                // Mappatura Settori -> Tag del DB
                const sectorMapping = {
                    "Macelleria": ["Macelleria", "Salumeria"],
                    "Gastronomia": ["Gastronomia", "Pastificio", "Latticini"],
                    "Pasticceria": ["Pasticceria", "Panificio", "Industria Alimentare"],
                    "Ristorazione": ["Ristorazione", "Bar", "Pizzeria", "Catering", "Take-Away"],
                    "Ortofrutta": ["Ortofrutta"],
                    "Pescheria": ["Pescheria"],
                    "Logistica": ["Logistica", "Magazzino", "Industria"]
                };

                const targetSectors = sectorMapping[sectorFilter] || [sectorFilter];

                const hasSectorMatch = sectorFilter
                    ? (targetSectors.some(s => prod.settori.includes(s)) || prod.settori.includes("Tutti i settori"))
                    : true;

                // Se filtriamo per settore ignora la categoria genitore, cerca trasversalmente
                if ((sectorFilter && hasSectorMatch) || (!sectorFilter && hasCategoryMatch && hasSectorMatch)) {
                    productsGrid.innerHTML += createProductCard(prod, catItem.categoria);
                    count++;
                }
            });
        });

        if (count === 0) {
            productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding: 2rem;">Nessun prodotto trovato per questa selezione.</p>';
        }

        // Ricrea icone per gli elementi appena aggiunti nel DOM
        lucide.createIcons();
    }

    // 5. LIGHTBOX LOGIC
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');

    // Mettiamo la funzione nel global scope per poterla chiamare dall'HTML inline
    window.openLightbox = function (productName) {
        // Placeholder images relative to the item type. 
        // In un sito reale queste verrebbero prese dal data.js
        const placeholderImg = `https://source.unsplash.com/800x600/?packaging,${encodeURIComponent(productName.split(' ')[0])}`;

        lightboxImg.src = placeholderImg;
        lightboxCaption.textContent = productName;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    lightboxClose.addEventListener('click', closeLightbox);

    // Chiudi lightbox se si clicca fuori dall'immagine
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        setTimeout(() => lightboxImg.src = '', 300); // Clear after fade out
    }



    // Avvia
    initCatalog();
});

class Site {
  DOMElements = {
    // nav
    mainNav: document.querySelector('[data-main-nav]'),

    // modal
    modalBackground: document.querySelector('[data-modal-background]'),
    modalBox: document.querySelector('[data-hero-modal-box]'),
    modalClose: document.querySelector('[data-modal-close]'),

    // hero
    hero: document.querySelector('[data-hero]'),
    logo: document.querySelector('[data-hero-logo]'),
    hamburgerBoxes: document.querySelectorAll('[data-hamburger]'),
    heroImage: document.querySelector('[data-hero-image]'),
    heroTitle: document.querySelector('[data-hero-title]'),
    heroInfoElements: document.querySelectorAll('[data-hero-info-item]'),

    // page 2
    productsSection: document.querySelector('[data-products]'),
    productMainImage: document.querySelector('[data-product-main-image]'),
    productItems: document.querySelectorAll('[data-product-item]'),

    // page 3 - history
    historyHeader: document.querySelector('[data-history-header]'),
    historyArt: document.querySelectorAll('[data-history-section-art]'),
  };

  InitializeApp() {
    this.scrollTriggerAnimation();
    this.addEventListeners();

    this.navOnScroll();
  }

  scrollTriggerAnimation() {
    gsap.set(
      [
        this.DOMElements.logo,
        this.DOMElements.heroInfoElements,
        this.DOMElements.historyArt,
        this.DOMElements.historyHeader,
      ],
      {
        autoAlpha: 0,
      }
    );

    gsap.set([this.DOMElements.heroImage], {
      autoAlpha: 0.2,
    });

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.fromTo(
      this.DOMElements.heroImage,
      { y: '+=50' },
      { y: '-=50', duration: 0.75, autoAlpha: 1 }
    )
      .fromTo(
        this.DOMElements.logo,
        { x: '+=100' },
        { x: '-=100', duration: 0.75, autoAlpha: 1 }
      )
      .fromTo(
        this.DOMElements.heroInfoElements,
        { y: '+=50' },
        { y: '-=50', duration: 0.75, autoAlpha: 1, stagger: 0.2 }
      );

    gsap.fromTo(
      this.DOMElements.productMainImage,
      { x: `-=100`, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 0.75,
        ease: 'easeInOut',
        scrollTrigger: {
          trigger: this.DOMElements.productMainImage,
          start: 'top 85%',
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      this.DOMElements.historyHeader,
      { y: `+=75`, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.75,
        ease: 'easeInOut',
        scrollTrigger: {
          trigger: this.DOMElements.historyHeader,
          start: 'top 90%',
        },
      }
    );

    [...this.DOMElements.productItems, ...this.DOMElements.historyArt].forEach(
      (item, i) => {
        gsap.fromTo(
          item,
          { x: `${i % 2 ? '-' : '+'}=100`, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.75,
            ease: 'easeInOut',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              // markers: true,
            },
          }
        );
      }
    );
  }

  addEventListeners() {
    this.DOMElements.hamburgerBoxes.forEach((hamburger) => {
      hamburger.addEventListener('click', () => this.showModal());
    });

    document.addEventListener('click', (e) => this.closeModal(e));
  }

  showModal() {
    this.DOMElements.modalBackground.classList.add('modal__background--active');
    this.DOMElements.modalBox.classList.add('modal--active');
    document.body.style.overflow = 'hidden';
  }

  closeModal(e) {
    if (
      e.target.classList.contains('modal__background--active') ||
      e.target.classList.contains('close__button')
    ) {
      this.DOMElements.modalBackground.classList.remove(
        'modal__background--active'
      );
      this.DOMElements.modalBox.classList.remove('modal--active');
      document.body.style.overflow = 'visible';
    }
  }

  navOnScroll() {
    // slide scroll
    const options = {
      rootMargin: '40px 0px 0px 0px',
    };

    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          this.DOMElements.mainNav.style.transform = 'translateY(0%)';
        } else {
          this.DOMElements.mainNav.style.transform = 'translateY(-100%)';
        }
      });
    }, options);

    heroObserver.observe(this.DOMElements.hero);
  }
}

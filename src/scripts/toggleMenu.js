function initMobileMenu() {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
  
    if (menuButton && mobileMenu) {
      const toggleMenu = () => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        menuButton.classList.toggle('rotate-90');
        mobileMenu.classList.toggle('hidden');
      };
  
      menuButton.addEventListener('click', toggleMenu);
  
      // Close menu if clicking outside
      document.addEventListener('click', (e) => {
        if (
          !menuButton.contains(e.target) &&
          !mobileMenu.contains(e.target) &&
          !mobileMenu.classList.contains('hidden')
        ) {
          menuButton.setAttribute('aria-expanded', 'false');
          menuButton.classList.remove('rotate-90');
          mobileMenu.classList.add('hidden');
        }
      });
  
      // Close menu on 'Escape' key press
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
          menuButton.setAttribute('aria-expanded', 'false');
          menuButton.classList.remove('rotate-90');
          mobileMenu.classList.add('hidden');
        }
      });
    }
  }
  
  if (typeof window !== 'undefined') {
    window.addEventListener('load', initMobileMenu);
  }
// LivelyCanvas — shared site behavior

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  // Newsletter forms — placeholder submit handler.
  // Swap the fetch() below for your provider (Mailchimp, ConvertKit, Beehiiv, etc.)
  document.querySelectorAll('form[data-newsletter]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const confirm = form.parentElement.querySelector('.newsletter-confirm');
      if (!emailInput || !emailInput.value) return;

      // --- Connect a real provider here ---
      // fetch('https://YOUR-PROVIDER-ENDPOINT', { method: 'POST', body: ... })

      if (confirm) {
        confirm.textContent = `Thanks — check ${emailInput.value} to confirm.`;
        confirm.style.display = 'block';
      }
      form.reset();
    });
  });
});

/**
 * Shared Header Component
 * Edit the navLinks array below to add/remove navigation items.
 * Changes here will automatically appear on all pages that include this script.
 */

(function() {
  // ============================================
  // EDIT NAVIGATION LINKS HERE
  // ============================================
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#work", label: "Work" },
    { href: "/#capabilities", label: "Capabilities" },
    { href: "/#contact", label: "Support" },
  ];

  // ============================================
  // HEADER GENERATION (no need to edit below)
  // ============================================

  // Determine current page for highlighting
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

  // Build navigation links HTML
  const linksHtml = navLinks.map(link => {
    const linkPath = link.href.replace(/\/$/, '') || '/';
    const isCurrent = currentPath === linkPath ||
                      (linkPath !== '/' && currentPath.startsWith(linkPath));
    const ariaCurrent = isCurrent ? ' aria-current="page"' : '';
    return `<a href="${link.href}"${ariaCurrent}>${link.label}</a>`;
  }).join('\n        ');

  // Build complete header HTML
  const headerHtml = `
    <div class="top-nav-inner">
      <a class="brand" href="/" aria-label="L&amp;L Programming home">L&amp;L PROGRAMMING LLC</a>
      <nav class="nav-links" aria-label="Site">
        ${linksHtml}
      </nav>
    </div>
  `;

  // Find and populate the header element
  document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('site-header');
    if (header) {
      header.innerHTML = headerHtml;
    }
  });
})();

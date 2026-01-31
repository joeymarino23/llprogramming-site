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
    { href: "/conquestofshadows", label: "Conquest of Shadows" },
    { href: "/waroftheheavens", label: "War of the Heavens" },
    { href: "/supernaturalslayer", label: "Supernatural Slayer" },
    { href: "/birdvsevil", label: "Bird vs Evil" },
    { href: "/mermaidmaths", label: "Mermaid Maths" },
    { href: "/star", label: "STAR" },
    { href: "/playbukharo", label: "Play Bukharo!" },
    { href: "/echoesofthegoetia", label: "Echoes of the Goetia" },
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
      <div class="brand">L&L PROGRAMMING LLC</div>
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

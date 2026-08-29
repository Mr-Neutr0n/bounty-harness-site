(() => {
  const measurementId = 'G-PXWCTGJMV3';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.trackAnalyticsEvent = function trackAnalyticsEvent(name, params = {}) {
    window.gtag('event', name, params);
  };

  const loader = document.createElement('script');
  loader.async = true;
  loader.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(loader);
  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const copyButton = target.closest('.copy-btn');
    if (copyButton) {
      window.trackAnalyticsEvent('install_command_copy', {
        command_id: copyButton.getAttribute('aria-label') || 'install_command',
        page_path: window.location.pathname,
      });
      return;
    }

    const link = target.closest('a[href]');
    if (!link) return;
    const url = new URL(link.href, window.location.href);
    const label = (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80);
    if (url.origin !== window.location.origin) {
      window.trackAnalyticsEvent('outbound_click', {
        destination_host: url.hostname,
        link_label: label,
        page_path: window.location.pathname,
      });
      return;
    }
    if (link.matches('.btn, .action-link, .text-link, [data-cta]')) {
      window.trackAnalyticsEvent('cta_click', {
        cta_label: label,
        destination_path: url.pathname,
        page_path: window.location.pathname,
      });
    }
  }, true);
})();

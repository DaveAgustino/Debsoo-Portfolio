/* ═══════════════════════════════════════════════════
   DAVE AGUSTIN PORTFOLIO — Interactions & Animations
   ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Scroll-triggered Reveal Animations ── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-left').forEach((el) => {
    revealObserver.observe(el);
  });

  /* ── Sticky Header — show/hide on scroll ── */
  const header = document.querySelector('.site-header');
  let lastScrollY = 0;
  let ticking = false;

  function updateHeader() {
    const currentScrollY = window.scrollY;
    const heroHeight = document.querySelector('.hero')?.offsetHeight || 600;

    // Past hero → add scrolled style
    if (currentScrollY > heroHeight - 100) {
      header.classList.add('scrolled');

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > heroHeight) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
    } else {
      header.classList.remove('scrolled');
      header.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });

  /* ── Mobile Nav Toggle ── */
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      navMenu.setAttribute('data-open', !expanded);

      // Prevent body scroll when menu is open
      document.body.style.overflow = expanded ? '' : 'hidden';
    });

    // Close menu on link click
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('data-open', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Smooth Scrolling for Anchor Links ── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Process Step Tabs ── */
  const stepTabs = document.querySelectorAll('.process-step-tab');
  const stepDetails = document.querySelectorAll('.process-detail');

  stepTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const step = tab.dataset.step;

      // Update active tab
      stepTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      // Update active detail
      stepDetails.forEach((d) => d.classList.remove('active'));
      const activeDetail = document.querySelector(
        `.process-detail[data-detail="${step}"]`
      );
      if (activeDetail) {
        activeDetail.classList.add('active');
      }
    });
  });

  /* ── Metrics Counter Animation ── */
  const metricObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateMetrics();
          metricObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  const metricsSection = document.querySelector('.metrics-section');
  if (metricsSection) {
    metricObserver.observe(metricsSection);
  }

  function animateMetrics() {
    const values = document.querySelectorAll('.metric-value');
    values.forEach((el) => {
      // Extract the number from the text content
      const text = el.textContent.trim();
      const match = text.match(/(\d+)/);
      if (!match) return;

      const target = parseInt(match[1], 10);
      const prefix = text.substring(0, text.indexOf(match[1]));
      const suffix = text.substring(text.indexOf(match[1]) + match[1].length);

      let current = 0;
      const duration = 1500; // ms
      const startTime = performance.now();

      function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        current = Math.round(eased * target);

        // Preserve the accent span
        const accentMatch = el.innerHTML.match(
          /<span class="metric-accent">.*?<\/span>/
        );
        const accentSpan = accentMatch ? accentMatch[0] : '';

        if (prefix === '#') {
          el.innerHTML = prefix + '<span class="metric-accent">' + current + '</span>';
        } else {
          el.innerHTML =
            current + '<span class="metric-accent">' + suffix.replace(/\d/g, '') + '</span>';
        }

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    });
  }

  /* ── Parallax effect on hero watermark ── */
  const watermark = document.querySelector('.hero-watermark');
  if (watermark) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroHeight = document.querySelector('.hero')?.offsetHeight || 600;
      if (scrollY < heroHeight) {
        const progress = scrollY / heroHeight;
        watermark.style.transform = `translate(-50%, calc(-50% + ${progress * 40}px)) scale(${1 + progress * 0.1})`;
        watermark.style.opacity = 0.08 - progress * 0.08;
      }
    });
  }

  /* ── Terminal typing effect on scroll ── */
  const terminalMockup = document.querySelector('.terminal-mockup');
  if (terminalMockup) {
    const terminalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lines = terminalMockup.querySelectorAll('.terminal-line');
            lines.forEach((line, i) => {
              line.style.opacity = '0';
              line.style.transform = 'translateY(5px)';
              line.style.transition = `opacity 0.3s ease ${i * 0.08}s, transform 0.3s ease ${i * 0.08}s`;
              requestAnimationFrame(() => {
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
              });
            });
            terminalObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    terminalObserver.observe(terminalMockup);
  }

  /* ── Project card hover tilt effect ── */
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ── Initial state ── */
  updateHeader();

})();

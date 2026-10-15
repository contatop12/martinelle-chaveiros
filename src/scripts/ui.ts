/** Interações de interface: menu, barra fixa, scroll-spy, revelações e utilidades. */

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initMenu() {
  const panel = document.getElementById('menu-mobile');
  const toggles = document.querySelectorAll<HTMLButtonElement>('.menu-toggle');
  if (!panel || !toggles.length) return;

  const setOpen = (open: boolean) => {
    panel.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    toggles.forEach((t) => {
      t.setAttribute('aria-expanded', String(open));
      t.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      t.querySelector('.icon-open')?.classList.toggle('hidden', open);
      t.querySelector('.icon-close')?.classList.toggle('hidden', !open);
    });
    if (open) panel.querySelector<HTMLAnchorElement>('a')?.focus({ preventScroll: true });
  };

  toggles.forEach((t) => t.addEventListener('click', () => setOpen(panel.hasAttribute('hidden'))));
  panel.addEventListener('click', (e) => {
    if ((e.target as Element).closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) {
      setOpen(false);
      toggles[toggles.length - 1]?.focus();
    }
  });
  window.matchMedia('(min-width: 64rem)').addEventListener('change', (m) => m.matches && setOpen(false));
}

/** Mobile: a barra compacta aparece depois que a linha superior sai da tela. */
export function initStickyBar() {
  const top = document.querySelector('.site-top');
  const bar = document.querySelector<HTMLElement>('.mobile-sticky');
  if (!top || !bar) return;
  new IntersectionObserver(([entry]) => {
    bar.dataset.state = entry.isIntersecting ? 'hidden' : 'shown';
  }).observe(top);
}

/** Destaca no menu a seção visível (sem reescrever a URL durante a rolagem). */
export function initScrollSpy() {
  const links = document.querySelectorAll<HTMLAnchorElement>('[data-nav]');
  if (!links.length) return;
  const ids = [...new Set([...links].map((l) => l.dataset.nav!))];
  const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
  if (!sections.length) return;

  const visible = new Map<string, number>();
  const update = () => {
    let best: string | null = null;
    let bestRatio = 0;
    visible.forEach((ratio, id) => {
      if (ratio > bestRatio) {
        bestRatio = ratio;
        best = id;
      }
    });
    links.forEach((l) => {
      if (l.dataset.nav === best) l.setAttribute('aria-current', 'true');
      else l.removeAttribute('aria-current');
    });
  };
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio);
        else visible.delete(e.target.id);
      });
      update();
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.01, 0.25, 0.5, 1] },
  );
  sections.forEach((s) => io.observe(s));
}

/** Adiciona .is-in quando o elemento entra na tela (títulos, fotos, grades). */
export function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal], [data-observe], .bitting');
  if (!('IntersectionObserver' in window) || reduceMotion()) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  // Elementos com máscara (clip-path) têm área visível zero para o IntersectionObserver:
  // nesses casos observamos o elemento pai e revelamos o filho.
  const targets = new Map<Element, HTMLElement[]>();
  els.forEach((el) => {
    const target = el.dataset.reveal === 'wipe' && el.parentElement ? el.parentElement : el;
    targets.set(target, [...(targets.get(target) ?? []), el]);
  });
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          targets.get(e.target)?.forEach((el) => el.classList.add('is-in'));
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  targets.forEach((_, target) => io.observe(target));
}

/** Ativa animações contínuas (sinal 24h, chave presencial) só enquanto visíveis. */
export function initLiveRegions() {
  const els = document.querySelectorAll<HTMLElement>('[data-live]');
  if (!els.length || reduceMotion()) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => e.target.classList.toggle('is-live', e.isIntersecting));
  });
  els.forEach((el) => io.observe(el));
}

/** Esconde a barra inferior enquanto o teclado está aberto num campo do formulário. */
export function initTypingState() {
  const isField = (t: EventTarget | null) => t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement;
  document.addEventListener('focusin', (e) => isField(e.target) && document.body.classList.add('typing'));
  document.addEventListener('focusout', (e) => isField(e.target) && document.body.classList.remove('typing'));
}

/** Botão flutuante some sobre o rodapé (que já tem os contatos). */
export function initFooterWatch() {
  const footer = document.querySelector('footer');
  if (!footer) return;
  new IntersectionObserver(([e]) => document.body.classList.toggle('near-footer', e.isIntersecting), {
    rootMargin: '0px 0px -40% 0px',
  }).observe(footer);
}

export function initYear() {
  const y = String(new Date().getFullYear());
  document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = y));
}

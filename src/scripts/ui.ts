/** Interações de interface: menu, barra fixa, scroll-spy, revelações e utilidades. */

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Menu mobile.
 * - O painel tem botão "Fechar" próprio (sempre visível).
 * - Abrir o menu cria uma entrada no histórico: o botão "voltar" do celular fecha o menu em vez de sair do site.
 * - Ao escolher uma seção, essa entrada é substituída pela âncora; "voltar" retorna ao ponto em que a pessoa estava.
 */
export function initMenu() {
  const root = document.querySelector<HTMLElement>('[data-menu-root]');
  const panel = document.getElementById('menu-mobile');
  const toggles = [...document.querySelectorAll<HTMLButtonElement>('.menu-toggle')];
  const closeBtn = panel?.querySelector<HTMLButtonElement>('.menu-close');
  if (!root || !panel || !toggles.length) return;

  let opener: HTMLElement | null = null;
  const isOpen = () => !root.hasAttribute('hidden');

  const render = (open: boolean, restoreFocus = true) => {
    root.hidden = !open;
    // trava a rolagem do fundo (html + body: necessário no iOS)
    document.documentElement.classList.toggle('menu-open', open);
    document.body.classList.toggle('menu-open', open);
    toggles.forEach((t) => t.setAttribute('aria-expanded', String(open)));
    if (open) closeBtn?.focus({ preventScroll: true });
    else if (restoreFocus) opener?.focus({ preventScroll: true });
  };
  const openMenu = (from: HTMLElement) => {
    opener = from;
    history.pushState({ mcMenu: true }, '');
    render(true);
  };
  const requestClose = () => {
    if (history.state?.mcMenu) history.back();
    else render(false);
  };

  window.addEventListener('popstate', () => isOpen() && render(false));
  toggles.forEach((t) => t.addEventListener('click', () => (isOpen() ? requestClose() : openMenu(t))));
  closeBtn?.addEventListener('click', requestClose);
  root.querySelector('[data-menu-backdrop]')?.addEventListener('click', requestClose);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) requestClose();
  });
  // Mantém o foco dentro do painel enquanto aberto
  panel.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const f = [...panel.querySelectorAll<HTMLElement>('a[href], button')];
    const first = f[0];
    const last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  panel.addEventListener('click', (e) => {
    const a = (e.target as Element).closest<HTMLAnchorElement>('a[href]');
    if (!a) return;
    const url = new URL(a.href, location.href);
    const fromMenu = history.state?.mcMenu;
    if (url.origin !== location.origin) {
      render(false, false);
      if (fromMenu) history.replaceState(null, '');
      return; // WhatsApp/telefone seguem normalmente
    }
    e.preventDefault();
    render(false, false);
    if (url.pathname === location.pathname && url.hash) {
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      rememberPosition();
      if (fromMenu) history.replaceState(null, '', url.hash);
      else history.pushState(null, '', url.hash);
      target?.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
      showReturn();
    } else if (fromMenu) {
      location.replace(url.href);
    } else {
      location.href = url.href;
    }
  });

  // Rotação/redimensionamento para layout de desktop: fecha o menu (nunca fica preso)
  window.matchMedia('(min-width: 64rem)').addEventListener('change', (m) => m.matches && isOpen() && requestClose());
}

/* ---------- "Voltar para onde você estava" ---------- */

let returnY: number | null = null;
let returnHash = '';
const pill = () => document.querySelector<HTMLButtonElement>('[data-return]');

function rememberPosition() {
  returnY = window.scrollY;
  returnHash = location.hash;
}
function showReturn() {
  const el = pill();
  if (!el || returnY === null) return;
  // só faz sentido se a navegação levou para longe
  window.setTimeout(() => {
    if (returnY !== null && Math.abs(window.scrollY - returnY) > window.innerHeight * 0.6) el.hidden = false;
  }, 900);
}

export function initReturnButton() {
  const el = pill();
  if (!el) return;
  // links de seção no menu do desktop (âncoras nativas: a URL é atualizada pelo navegador)
  document.querySelectorAll<HTMLAnchorElement>('.site-nav a[data-nav]').forEach((a) =>
    a.addEventListener('click', () => {
      const url = new URL(a.href, location.href);
      if (url.pathname !== location.pathname) return;
      rememberPosition();
      showReturn();
    }),
  );
  el.addEventListener('click', () => {
    if (returnY === null) return;
    const y = returnY;
    returnY = null;
    el.hidden = true;
    history.replaceState(null, '', returnHash || location.pathname + location.search);
    window.scrollTo({ top: y, behavior: reduceMotion() ? 'auto' : 'smooth' });
  });
  // some quando a pessoa volta sozinha para perto de onde estava
  window.addEventListener(
    'scroll',
    () => {
      if (el.hidden || returnY === null) return;
      if (Math.abs(window.scrollY - returnY) < 160) {
        el.hidden = true;
        returnY = null;
      }
    },
    { passive: true },
  );
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

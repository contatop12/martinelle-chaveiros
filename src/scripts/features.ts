/** Recursos interativos: formulário de orçamento, galeria com lightbox, vídeo de prova e mapa sob demanda. */
import { track } from './tracking';

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------- Formulário de orçamento → WhatsApp ---------------- */

const clean = (v: FormDataEntryValue | null, max: number) =>
  String(v ?? '')
    // remove caracteres de controle (mantém quebras de linha)
    .replace(/[^\P{C}\n]/gu, '')
    .trim()
    .slice(0, max);

export function initQuoteForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-quote-form]').forEach((form) => {
    const select = form.querySelector<HTMLSelectElement>('select[name="servico"]');
    const vehicle = form.querySelector<HTMLElement>('[data-vehicle-fields]');

    const syncVehicle = () => {
      const opt = select?.selectedOptions[0];
      const needsVehicle = opt?.dataset.vehicle === '1';
      if (vehicle) vehicle.hidden = !needsVehicle;
    };
    syncVehicle();

    select?.addEventListener('change', () => {
      syncVehicle();
      if (select.value) track('service_select', { service_name: select.value, button_location: form.dataset.location });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const opt = select?.selectedOptions[0];
      const service = opt?.textContent?.trim() ?? '';
      const lines = ['Olá! Vim pelo site da Martinelli Chaves e gostaria de um orçamento.', '', `*Serviço:* ${service}`];

      if (vehicle && !vehicle.hidden) {
        const veh = [clean(data.get('marca'), 40), clean(data.get('modelo'), 60), clean(data.get('ano'), 4)].filter(Boolean).join(' ');
        if (veh) lines.push(`*Veículo:* ${veh}`);
      }
      const problem = clean(data.get('problema'), 600);
      if (problem) lines.push(`*Problema:* ${problem}`);

      const number = form.dataset.wa!;
      const url = `https://wa.me/${number}?text=${encodeURIComponent(lines.join('\n'))}`;

      // Registro do evento sem dados pessoais e sem bloquear a abertura do WhatsApp
      track('quote_form_submit', { service_name: select?.value, button_location: form.dataset.location });

      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener';
      document.body.appendChild(a);
      a.click();
      a.remove();

      const status = form.querySelector<HTMLElement>('[data-status]');
      if (status) {
        status.hidden = false;
        status.textContent = 'Abrimos o WhatsApp com a sua mensagem pronta. É só tocar em enviar.';
      }
    });
  });
}

/* ---------------- Galeria com filtros e lightbox ---------------- */

export function initGalleries() {
  document.querySelectorAll<HTMLElement>('[data-gallery]').forEach((root) => {
    const items = [...root.querySelectorAll<HTMLElement>('[data-item]')];
    const filters = [...root.querySelectorAll<HTMLButtonElement>('[data-filter]')];
    const more = root.querySelector<HTMLButtonElement>('[data-more]');
    const empty = root.querySelector<HTMLElement>('[data-empty]');
    const initial = Number(root.dataset.initial ?? items.length);
    let filter = 'todos';
    let expanded = false;

    const apply = () => {
      let shown = 0;
      let matching = 0;
      items.forEach((it) => {
        const match = filter === 'todos' || (it.dataset.cats ?? '').split(' ').includes(filter);
        if (match) matching++;
        const visible = match && (filter !== 'todos' || expanded || matching <= initial);
        it.hidden = !visible;
        if (visible) shown++;
      });
      if (empty) empty.hidden = shown > 0;
      if (more) {
        const remaining = matching - shown;
        more.hidden = remaining <= 0;
        const count = more.querySelector('[data-count]');
        if (count) count.textContent = String(remaining);
      }
    };

    const withTransition = (fn: () => void) => {
      const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
      if (doc.startViewTransition && !reduceMotion()) doc.startViewTransition(fn);
      else fn();
    };

    filters.forEach((btn) =>
      btn.addEventListener('click', () => {
        filter = btn.dataset.filter!;
        filters.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        withTransition(apply);
      }),
    );
    more?.addEventListener('click', () => {
      expanded = true;
      const firstHidden = items.find((it) => it.hidden);
      withTransition(apply);
      firstHidden?.querySelector<HTMLButtonElement>('button')?.focus({ preventScroll: true });
    });
    apply();

    // Lightbox acessível (<dialog> nativo: foco preso, Esc fecha, foco volta ao gatilho)
    const dialog = root.querySelector<HTMLDialogElement>('dialog');
    if (!dialog) return;
    const img = dialog.querySelector<HTMLImageElement>('img')!;
    const title = dialog.querySelector<HTMLElement>('[data-lb-title]')!;
    const caption = dialog.querySelector<HTMLElement>('[data-lb-caption]')!;
    const counter = dialog.querySelector<HTMLElement>('[data-lb-counter]')!;
    let index = 0;

    const visibleItems = () => items.filter((it) => !it.hidden);
    const show = (i: number) => {
      const list = visibleItems();
      if (!list.length) return;
      index = (i + list.length) % list.length;
      const btn = list[index].querySelector<HTMLButtonElement>('button')!;
      img.classList.remove('is-loaded');
      img.src = btn.dataset.full!;
      img.alt = btn.dataset.alt ?? '';
      img.width = Number(btn.dataset.w);
      img.height = Number(btn.dataset.h);
      title.textContent = btn.dataset.title ?? '';
      caption.textContent = btn.dataset.caption ?? '';
      counter.textContent = `${index + 1} de ${list.length}`;
    };
    img.addEventListener('load', () => img.classList.add('is-loaded'));

    root.addEventListener('click', (e) => {
      const btn = (e.target as Element).closest<HTMLButtonElement>('[data-item] button');
      if (!btn) return;
      show(visibleItems().findIndex((it) => it.contains(btn)));
      dialog.showModal();
    });
    dialog.querySelector('[data-lb-prev]')?.addEventListener('click', () => show(index - 1));
    dialog.querySelector('[data-lb-next]')?.addEventListener('click', () => show(index + 1));
    dialog.querySelector('[data-lb-close]')?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) dialog.close();
    });
    dialog.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') show(index + 1);
      if (e.key === 'ArrowLeft') show(index - 1);
    });

    // Gesto de arrastar no celular
    let startX = 0;
    dialog.addEventListener('touchstart', (e) => (startX = e.touches[0].clientX), { passive: true });
    dialog.addEventListener(
      'touchend',
      (e) => {
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
      },
      { passive: true },
    );
  });
}

/* ---------------- Vídeo de prova (carregado só quando visível) ---------------- */

export function initProofVideos() {
  document.querySelectorAll<HTMLElement>('[data-proof-video]').forEach((wrap) => {
    const video = wrap.querySelector<HTMLVideoElement>('video')!;
    const toggle = wrap.querySelector<HTMLButtonElement>('[data-video-toggle]')!;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    const autoplay = !reduceMotion() && !saveData;
    let loaded = false;
    let userPaused = false;

    const load = () => {
      if (loaded) return;
      loaded = true;
      video.src = video.dataset.src!;
    };
    const setState = (playing: boolean) => {
      wrap.dataset.playing = String(playing);
      toggle.setAttribute('aria-label', playing ? 'Pausar vídeo' : 'Reproduzir vídeo');
    };
    video.addEventListener('play', () => setState(true));
    video.addEventListener('pause', () => setState(false));

    toggle.addEventListener('click', () => {
      load();
      if (video.paused) {
        userPaused = false;
        video.play().catch(() => {});
      } else {
        userPaused = true;
        video.pause();
      }
    });

    new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && autoplay && !userPaused) {
          load();
          video.play().catch(() => {});
        } else if (!e.isIntersecting && !video.paused) {
          video.pause();
        }
      },
      { threshold: 0.4 },
    ).observe(wrap);
  });
}

/* ---------------- Mapa do Google carregado somente após o clique ---------------- */

export function initMapFacades() {
  document.querySelectorAll<HTMLElement>('[data-map-facade]').forEach((wrap) => {
    const btn = wrap.querySelector<HTMLButtonElement>('button');
    btn?.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = wrap.dataset.src!;
      iframe.title = wrap.dataset.title ?? 'Mapa';
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      iframe.className = 'absolute inset-0 h-full w-full border-0';
      iframe.setAttribute('allowfullscreen', '');
      wrap.appendChild(iframe);
      wrap.dataset.loaded = 'true';
      iframe.focus();
    });
  });
}

/* ---------------- Abas acessíveis (carro/moto x casa/empresa) ---------------- */

export function initTabs() {
  document.querySelectorAll<HTMLElement>('[data-tabs]').forEach((root) => {
    const tabs = [...root.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
    const indicator = root.querySelector<HTMLElement>('.tab-indicator');
    const select = (i: number, focus = false) => {
      tabs.forEach((t, j) => {
        const on = i === j;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls') ?? '');
        if (panel) panel.dataset.active = String(on);
      });
      indicator?.style.setProperty('--tab-x', `${i * 100}%`);
      if (focus) tabs[i].focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(i));
      t.addEventListener('keydown', (e) => {
        const keys: Record<string, number> = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
        if (!(e.key in keys)) return;
        e.preventDefault();
        select((keys[e.key] + tabs.length) % tabs.length, true);
      });
    });
  });
}

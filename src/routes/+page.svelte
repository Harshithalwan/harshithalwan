<script lang="ts">
  import { onMount } from 'svelte';

  type JourneyItem = {
    year: string;
    short: string;
    title: string;
    organization: string;
    location: string;
    kind: string;
    logo?: string;
    logoClass?: string;
    mark?: string;
    summary: string;
    bullets: string[];
    tags: string[];
  };

  const roles = ['GENERALIST', 'FULL-STACK Engineer', 'AI / ML ENGINEER', 'SYSTEMS THINKER', 'TECHNICAL LEAD'];
  const roleLoop = [...roles, roles[0]];
  let roleIndex = 0;
  let animateRole = true;
  let activeIndex = 6;
  let heroElement: HTMLElement;
  let gridCanvas: HTMLCanvasElement;

  const journey: JourneyItem[] = [
    {
      year: '2013—16', short: 'PHYSICS', title: 'Bachelor of Science in Physics', organization: 'University of Delhi', location: 'New Delhi, India', kind: 'EDUCATION', logo: '/logos/university-delhi.png', logoClass: 'logo-du',
      summary: 'Started with physics—learning to reduce complicated systems to a few clear principles and testable ideas.',
      bullets: ['Built a quantitative foundation through mathematics, experimentation, and physical systems.', 'Developed the analytical mindset that later carried naturally into software engineering.'], tags: ['PHYSICS', 'MATHEMATICS', 'ANALYTICAL THINKING']
    },
    {
      year: '2017—20', short: 'DU', title: 'Master of Computer Applications', organization: 'Department of Computer Science, University of Delhi', location: 'New Delhi, India', kind: 'EDUCATION', logo: '/logos/university-delhi.png', logoClass: 'logo-du',
      summary: 'Built a rigorous computer-science foundation before moving into large-scale product engineering.',
      bullets: ['Studied at the Department of Computer Science.', 'Developed the systems and software fundamentals that shaped my engineering career.'], tags: ['COMPUTER SCIENCE', 'SYSTEMS', 'SOFTWARE ENGINEERING']
    },
    {
      year: '2020—23', short: 'CVENT', title: 'Software Engineer II', organization: 'Cvent Inc', location: 'Gurugram, India', kind: 'EXPERIENCE', logo: '/logos/cvent.png',
      summary: 'Promoted from intern while modernizing an enterprise hospitality platform used by hundreds of thousands of people.',
      bullets: ['Migrated SQL Server to PostgreSQL with RabbitMQ synchronization, achieving 99.99% database availability.', 'Replaced ASP.NET Web Forms with Java microservices and a Next.js/React frontend.', 'Cut UI load times by 50% and API response times by 30%.'], tags: ['JAVA', 'NEXT.JS', 'POSTGRESQL', 'RABBITMQ']
    },
    {
      year: '2024', short: 'GIGA', title: 'Founding Software Engineer', organization: 'GigaIntel Innovations', location: 'Delhi / Remote', kind: 'EXPERIENCE', mark: 'GI',
      summary: 'Moved closer to zero-to-one product building as the founding engineer for an intelligent trademark-search product.',
      bullets: ['Built a trademark similarity-search platform and its React/Next.js interface.', 'Reduced researchers’ manual trademark review time by 70%.'], tags: ['PYTHON', 'NEXT.JS', 'REACT', 'SEARCH']
    },
    {
      year: '2024', short: 'PALSPAY', title: 'Freelance Software Engineer', organization: 'Palspay — Expense Splitting', location: 'Delhi / Remote', kind: 'EXPERIENCE', mark: 'P',
      summary: 'Built the backend for Palspay, an expense-splitting application designed around shared money and group coordination.',
      bullets: ['Built a Python and MongoDB backend supporting groups, shared balances, group wallets, and in-app settlements.', 'Integrated Razorpay to enable money transfers inside the application.'], tags: ['PYTHON', 'MONGODB', 'RAZORPAY', 'FINTECH']
    },
    {
      year: '2024—26', short: 'TURING', title: 'Team Lead', organization: 'Turing', location: 'Remote', kind: 'EXPERIENCE', logo: '/logos/turing.png', logoClass: 'logo-turing',
      summary: 'Led model-evaluation work at the frontier of code generation and LLM post-training.',
      bullets: ['Promoted within six months to lead a six-person team, reducing rework from 20% to below 10%.', 'Integrated an LLM-as-a-judge workflow that reduced review time by more than 50%.', 'Evaluated production-scale code-generation systems across HTML, React, Java, and Svelte.'], tags: ['RLHF', 'LLM EVALUATION', 'RL GYMS', 'TEAM LEADERSHIP']
    },
    {
      year: '2024—26', short: 'BITS', title: 'M.Tech. Artificial Intelligence & Machine Learning', organization: 'BITS Pilani — WILP', location: 'Pilani, India', kind: 'EDUCATION', logo: '/logos/bits-pilani.png',
      summary: 'Deepened the theory behind the intelligent systems I was already helping build in practice.',
      bullets: ['Postgraduate study in artificial intelligence and machine learning.', 'Bridged academic ML foundations with hands-on work in evaluation, reinforcement learning, and RAG.'], tags: ['AI / ML', 'REINFORCEMENT LEARNING', 'WILP']
    }
  ];

  const journeyPositions = [
    { x: 4.5, y: 24 }, { x: 21, y: 76 }, { x: 36, y: 24 }, { x: 51, y: 76 },
    { x: 66, y: 24 }, { x: 81, y: 76 }, { x: 95.5, y: 24 }
  ];

  const mobileJourneyPositions = [
    { x: 18, y: 7 }, { x: 82, y: 21.5 }, { x: 18, y: 36 }, { x: 82, y: 50.5 },
    { x: 18, y: 65 }, { x: 82, y: 79.5 }, { x: 18, y: 94 }
  ];

  const projects = [
    {
      number: '01', title: 'Quill', subtitle: 'Document chat with grounded answers',
      summary: 'A real-time document chat application that combines a large language model with a vector database in a Retrieval-Augmented Generation architecture.',
      tags: ['Python', 'Flask', 'Next.js', 'React', 'Socket.IO', 'Gemini', 'Pinecone', 'EC2', 'Vercel'],
      links: [{ label: 'SERVER', href: 'https://github.com/Harshithalwan/quill-server' }, { label: 'UI', href: 'https://github.com/Harshithalwan/quill-ui' }]
    },
    {
      number: '02', title: 'Edge Visual Surveillance', subtitle: 'Natural-language search for CCTV footage',
      summary: 'An edge-based system that captions footage, extracts scene descriptions, retrieves events through plain-English queries, and supports real-time natural-language alerts.',
      tags: ['Python', 'LFM2.5-VL', 'YOLO', 'React', 'Qdrant'], links: []
    }
  ];

  const skillGroups = [
    { title: 'Programming languages', skills: ['Java', 'Python', 'JavaScript', 'TypeScript'] },
    { title: 'Frameworks & libraries', skills: ['React', 'Next.js', 'Svelte', 'Node.js', 'Flask', 'Dropwizard', 'WebdriverIO', 'Karate', 'MyBatis', 'NumPy'] },
    { title: 'Databases & search', skills: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Couchbase', 'Qdrant', 'Pinecone', 'Elasticsearch'] },
    { title: 'AI / ML', skills: ['LLM Evaluations', 'RLHF', 'Reinforcement Learning Gyms', 'RAG', 'LFM2.5-VL', 'YOLO'] },
    { title: 'Cloud, DevOps & tools', skills: ['AWS', 'EC2', 'S3', 'Docker', 'Jenkins', 'Git', 'GraphQL', 'RabbitMQ', 'Razorpay', 'Vercel'] }
  ];

  $: active = journey[activeIndex];

  onMount(() => {
    const timer = window.setInterval(() => {
      animateRole = true;
      roleIndex += 1;
    }, 2800);

    const context = gridCanvas.getContext('2d');
    if (!context) return () => window.clearInterval(timer);

    type Point = { ox: number; oy: number; x: number; y: number; vx: number; vy: number };
    let points: Point[] = [];
    let columns = 0;
    let rows = 0;
    let frame = 0;
    let running = false;
    let gridColor = '';
    let bounds = heroElement.getBoundingClientRect();
    const pointer = { x: -1000, y: -1000, active: false };
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const updateColor = () => {
      gridColor = getComputedStyle(document.documentElement).getPropertyValue('--color-grid-canvas').trim();
    };

    const draw = () => {
      const width = bounds.width;
      const height = bounds.height;
      context.clearRect(0, 0, width, height);
      context.strokeStyle = gridColor;
      context.fillStyle = gridColor;
      context.lineWidth = 1;
      context.beginPath();
      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const index = row * columns + column;
          const point = points[index];
          if (column < columns - 1) {
            const right = points[index + 1];
            context.moveTo(point.x, point.y);
            context.lineTo(right.x, right.y);
          }
          if (row < rows - 1) {
            const below = points[index + columns];
            context.moveTo(point.x, point.y);
            context.lineTo(below.x, below.y);
          }
        }
      }
      context.stroke();
      context.beginPath();
      for (const point of points) {
        context.moveTo(point.x + 1.2, point.y);
        context.arc(point.x, point.y, 1.2, 0, Math.PI * 2);
      }
      context.fill();
    };

    const rebuild = () => {
      bounds = heroElement.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      gridCanvas.width = Math.round(bounds.width * ratio);
      gridCanvas.height = Math.round(bounds.height * ratio);
      gridCanvas.style.width = `${bounds.width}px`;
      gridCanvas.style.height = `${bounds.height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const spacing = bounds.width < 640 ? 38 : 48;
      columns = Math.ceil(bounds.width / spacing) + 1;
      rows = Math.ceil(bounds.height / spacing) + 1;
      points = [];
      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const x = column * spacing;
          const y = row * spacing;
          points.push({ ox: x, oy: y, x, y, vx: 0, vy: 0 });
        }
      }
      updateColor();
      draw();
    };

    const tick = () => {
      let energy = 0;
      for (const point of points) {
        if (pointer.active) {
          const dx = point.x - pointer.x;
          const dy = point.y - pointer.y;
          const distance = Math.hypot(dx, dy) || 1;
          const radius = 125;
          if (distance < radius) {
            const force = (1 - distance / radius) * 2.15;
            point.vx += (dx / distance) * force;
            point.vy += (dy / distance) * force;
          }
        }
        point.vx += (point.ox - point.x) * .045;
        point.vy += (point.oy - point.y) * .045;
        point.vx *= .86;
        point.vy *= .86;
        point.x += point.vx;
        point.y += point.vy;
        energy += Math.abs(point.vx) + Math.abs(point.vy) + Math.abs(point.ox - point.x) + Math.abs(point.oy - point.y);
      }
      draw();
      if (pointer.active || energy > .12) frame = requestAnimationFrame(tick);
      else running = false;
    };

    const start = () => {
      if (!running && !reducedMotion) {
        running = true;
        frame = requestAnimationFrame(tick);
      }
    };
    const enter = () => { bounds = heroElement.getBoundingClientRect(); pointer.active = true; start(); };
    const move = (event: PointerEvent) => { pointer.x = event.clientX - bounds.left; pointer.y = event.clientY - bounds.top; pointer.active = true; start(); };
    const leave = () => { pointer.active = false; start(); };

    const resizeObserver = new ResizeObserver(rebuild);
    const themeObserver = new MutationObserver(() => { updateColor(); draw(); });
    resizeObserver.observe(heroElement);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    if (!reducedMotion) {
      heroElement.addEventListener('pointerenter', enter, { passive: true });
      heroElement.addEventListener('pointermove', move, { passive: true });
      heroElement.addEventListener('pointerleave', leave, { passive: true });
    }
    rebuild();

    return () => {
      window.clearInterval(timer);
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      heroElement.removeEventListener('pointerenter', enter);
      heroElement.removeEventListener('pointermove', move);
      heroElement.removeEventListener('pointerleave', leave);
    };
  });

  function finishRoleTurn() {
    if (roleIndex !== roles.length) return;
    animateRole = false;
    roleIndex = 0;
    requestAnimationFrame(() => requestAnimationFrame(() => (animateRole = true)));
  }
</script>

<svelte:head>
  <title>Harshit Halwan — Senior Software & AI Engineer</title>
  <meta name="description" content="Harshit Halwan is a senior software engineer with 6+ years of experience building scalable systems and AI-powered products." />
</svelte:head>

<main class="page-shell">
  <section class="hero" aria-labelledby="hero-title" bind:this={heroElement}>
    <canvas class="interactive-grid" bind:this={gridCanvas} aria-hidden="true"></canvas>
    <div class="hero-copy">
      <p class="eyebrow"><span></span> DELHI, INDIA · OPEN TO INTERESTING PROBLEMS</p>
      <h1 id="hero-title">Harshit<br /><em>Halwan.</em></h1>

      <div class="role-console" aria-label={`Expertise: ${roles[roleIndex % roles.length]}`}>
        <span class="console-prompt">I BUILD AS A</span>
        <div class="role-window">
          <div class:with-transition={animateRole} class="role-track" style={`transform: translateY(-${roleIndex * 1.15}em)`} on:transitionend={finishRoleTurn}>
            {#each roleLoop as role}<span>{role}</span>{/each}
          </div>
        </div>
        <span class="console-cursor">_</span>
      </div>

      <p class="hero-intro">Senior software engineer with <strong>6+ years</strong> building scalable web applications, distributed systems, and AI-powered products.</p>
      <div class="hero-actions">
        <a class="button primary" href="mailto:harshithalwan@gmail.com">LET'S TALK <span>↗</span></a>
        <a class="button secondary" href="#journey">FOLLOW THE JOURNEY <span>↓</span></a>
      </div>
    </div>

    <div class="portrait-stage" aria-label="Illustrated portrait of Harshit Halwan">
      <div class="portrait-frame"><img src="/portrait-cartoon-v3.png" alt="Cartoon portrait of Harshit Halwan" /></div>
      <div class="portrait-note">HELLO!<small>I MAKE THINGS WORK</small></div>
      <div class="code-chip">&lt;/&gt;</div>
    </div>
  </section>

  <section class="journey" id="journey" aria-labelledby="journey-title">
    <div class="journey-heading">
      <div>
        <p class="section-label">01 · THE JOURNEY SO FAR</p>
        <h2 id="journey-title">Journey.</h2>
      </div>
      <p>A winding path through education and engineering work. Hover, focus, or tap a stop to expand its details.</p>
    </div>

    <div class="journey-map" aria-label="Interactive journey timeline">
      <svg class="journey-path desktop-path" viewBox="0 0 1000 330" preserveAspectRatio="none" aria-hidden="true">
        <path class="path-base" pathLength="100" d="M45 80 C145 80 115 250 210 250 S280 80 360 80 S435 250 510 250 S585 80 660 80 S735 250 810 250 S880 80 955 80" />
        <path class="path-progress" pathLength="100" style={`stroke-dashoffset: ${100 - (activeIndex / (journey.length - 1)) * 100}`} d="M45 80 C145 80 115 250 210 250 S280 80 360 80 S435 250 510 250 S585 80 660 80 S735 250 810 250 S880 80 955 80" />
      </svg>
      <svg class="journey-path mobile-path" viewBox="0 0 360 740" preserveAspectRatio="none" aria-hidden="true">
        <path class="path-base" pathLength="100" d="M65 52 C295 52 295 160 65 160 S65 268 295 268 S295 376 65 376 S65 484 295 484 S295 592 65 592 S65 700 295 700" />
        <path class="path-progress" pathLength="100" style={`stroke-dashoffset: ${100 - (activeIndex / (journey.length - 1)) * 100}`} d="M65 52 C295 52 295 160 65 160 S65 268 295 268 S295 376 65 376 S65 484 295 484 S295 592 65 592 S65 700 295 700" />
      </svg>
      {#each journey as item, index}
        <button
          class:active={activeIndex === index}
          class:passed={activeIndex > index}
          style={`--x:${journeyPositions[index].x}%;--y:${journeyPositions[index].y}%;--mx:${mobileJourneyPositions[index].x}%;--my:${mobileJourneyPositions[index].y}%`}
          on:mouseenter={() => (activeIndex = index)}
          on:focus={() => (activeIndex = index)}
          on:click={() => (activeIndex = index)}
          aria-label={`${item.year}: ${item.title} at ${item.organization}`}
          aria-pressed={activeIndex === index}
        >
          <span class="journey-node"><i></i></span><strong>{item.short}</strong><small>{item.year}</small>
        </button>
      {/each}
    </div>

    <article class="journey-detail" aria-live="polite">
      <div class="detail-brand">
        <div class="logo-shell">
          {#if active.logo}<img class={active.logoClass ?? ''} src={active.logo} alt={`${active.organization} logo`} />{:else}<span>{active.mark}</span>{/if}
        </div>
        <div><span>{active.kind}</span><p>{active.year} · {active.location}</p></div>
      </div>
      <div class="detail-copy">
        <p class="organization">{active.organization}</p><h3>{active.title}</h3><p class="summary">{active.summary}</p>
        <ul>{#each active.bullets as bullet}<li>{bullet}</li>{/each}</ul>
        <div class="tags">{#each active.tags as tag}<span>{tag}</span>{/each}</div>
      </div>
    </article>
  </section>

  <section class="skills-section" aria-labelledby="skills-title">
    <div class="skills-inner">
      <div class="skills-heading">
        <div><p class="section-label">02 · THE TOOLKIT</p><h2 id="skills-title">Skills.</h2></div>
        <p>From product interfaces to distributed backends and AI evaluation—the tools I use to move an idea into production.</p>
      </div>
      <div class="skills-grid">
        {#each skillGroups as group, index}
          <article>
            <span>0{index + 1}</span>
            <h3>{group.title}</h3>
            <div>{#each group.skills as skill}<small>{skill}</small>{/each}</div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section class="projects-section" aria-labelledby="projects-title">
    <div class="projects-inner">
      <div class="projects-heading">
        <div><p class="section-label">03 · SELECTED PROJECTS</p><h2 id="projects-title">Projects.</h2></div>
        <p>Independent builds where I could explore new interfaces, model capabilities, and system architectures end to end.</p>
      </div>
      <div class="project-timeline">
        {#each projects as project}
          <article>
            <span class="project-checkpoint"><i>{project.number}</i></span>
            <div class="project-copy">
              <p>{project.subtitle}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div class="project-tags">{#each project.tags as tag}<span>{tag}</span>{/each}</div>
            </div>
            <div class="project-links">
              {#each project.links as link}<a href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>{/each}
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>
</main>

<style>
  :global(body) { overflow-x: hidden; }
  .page-shell { padding: 0; }
  .hero { position: relative; min-height: calc(100vh - 4.25rem); width: 100%; padding: 5rem max(2rem, calc((100% - 1180px) / 2)) 4rem; display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(340px, .82fr); align-items: center; gap: 4rem; overflow: hidden; border-bottom: 1px solid var(--color-border); background: var(--color-surface); color: var(--color-text); transition: background .3s, border-color .3s; }
  .interactive-grid { position: absolute; z-index: 0; inset: 0; width: 100%; height: 100%; pointer-events: none; mask-image: linear-gradient(100deg, black, transparent 88%); }
  .hero-copy, .portrait-stage { position: relative; z-index: 1; }
  .eyebrow, .section-label { font-size: .68rem; font-weight: 700; letter-spacing: .15em; color: var(--color-text-muted); }
  .eyebrow span { display: inline-block; width: .52rem; height: .52rem; margin-right: .55rem; border-radius: 50%; background: var(--color-accent); box-shadow: 0 0 0 5px color-mix(in srgb, var(--color-accent) 16%, transparent); animation: breathe 2.2s ease-in-out infinite; }
  @keyframes breathe { 50% { box-shadow: 0 0 0 9px color-mix(in srgb, var(--color-accent) 5%, transparent); } }
  h1 { margin: 1.5rem 0 1.4rem; font: 700 clamp(4.6rem, 8.4vw, 8.5rem)/.77 'Space Grotesk', sans-serif; letter-spacing: -.085em; text-transform: uppercase; }
  h1 em { color: var(--color-accent); font-family: 'DM Serif Display', Georgia, serif; font-weight: 400; font-style: italic; text-transform: none; letter-spacing: -.045em; }
  .role-console { display: flex; align-items: center; width: min(100%, 610px); height: 3.35rem; padding: 0 1.1rem; overflow: hidden; border-radius: 1.1rem; background: var(--color-text); color: var(--color-bg); box-shadow: 7px 7px 0 var(--color-accent); font-size: clamp(.72rem, 1.25vw, .92rem); font-weight: 700; letter-spacing: .08em; }
  .console-prompt { color: var(--color-bg); opacity: .7; white-space: nowrap; margin-right: .8rem; }.role-window { height: 1.15em; overflow: hidden; flex: 1; color: var(--color-bg); }.role-track { display: flex; flex-direction: column; will-change: transform; }.role-track.with-transition { transition: transform 680ms cubic-bezier(.76, 0, .24, 1); }.role-track span { height: 1.15em; line-height: 1.15em; white-space: nowrap; }.console-cursor { color: var(--color-bg); animation: blink .8s steps(1) infinite; } @keyframes blink { 50% { opacity: 0; } }
  .hero-intro { max-width: 590px; margin: 2rem 0; color: var(--color-text-muted); font-size: clamp(1.04rem, 1.5vw, 1.22rem); line-height: 1.65; }.hero-intro strong { color: var(--color-text); }
  .hero-actions { display: flex; flex-wrap: wrap; gap: .85rem; }.button { min-height: 3.35rem; padding: 0 1.35rem; display: inline-flex; align-items: center; gap: .8rem; border: 1.5px solid var(--color-text); border-radius: 1rem; font-size: .72rem; font-weight: 700; letter-spacing: .1em; transition: transform .22s, box-shadow .22s, background .22s; }.button.primary { background: var(--color-accent); color: var(--color-bg); box-shadow: 4px 4px 0 var(--color-text); }.button.secondary { background: var(--color-surface-raised); color: var(--color-text); }.button:hover { transform: translateY(-3px); box-shadow: 0 7px 0 color-mix(in srgb, var(--color-text) 85%, transparent); }
  .portrait-stage { width: min(100%, 470px); aspect-ratio: .84; justify-self: end; isolation: isolate; }.portrait-frame { position: absolute; inset: 0; display: flex; align-items: flex-end; justify-content: center; transition: transform .35s ease; }.portrait-stage:hover .portrait-frame { transform: translateY(-5px); }.portrait-frame img { width: 100%; height: 100%; object-fit: contain; object-position: 50% bottom; filter: drop-shadow(12px 16px 0 color-mix(in srgb, var(--color-shadow) 18%, transparent)); }.portrait-note { position: absolute; left: -5%; bottom: 9%; padding: .82rem 1rem; border: 1.5px solid var(--color-text); border-radius: .9rem; background: var(--color-surface-raised); color: var(--color-text); box-shadow: 4px 4px 0 var(--color-text); transform: rotate(-5deg); font-size: 1.08rem; font-weight: 800; line-height: 1; }.portrait-note small { display: block; margin-top: .25rem; color: var(--color-text-muted); font-size: .52rem; letter-spacing: .12em; }.code-chip { position: absolute; right: -2%; top: 14%; width: 4rem; height: 4rem; display: grid; place-items: center; border: 2px solid #171717; border-radius: 1.35rem; background: var(--color-blue); color: white; transform: rotate(8deg); font: 700 1rem/1 monospace; }

  .journey { width: 100%; margin: 0; padding: clamp(3.25rem, 6vw, 6.5rem) max(1.25rem, calc((100% - 1180px) / 2)); background: var(--color-card); transition: background .3s; }
  .journey-heading { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(260px, .6fr); gap: 4rem; align-items: end; }.section-label { color: var(--color-accent); }.journey-heading h2 { margin: 1rem 0 0; font: 700 clamp(2.8rem, 5.5vw, 5.4rem)/.94 'Space Grotesk', sans-serif; letter-spacing: -.065em; text-transform: uppercase; }.journey-heading > p { max-width: 430px; color: var(--color-text-muted); font-size: 1rem; line-height: 1.7; }
  .journey-map { position: relative; width: 100%; height: clamp(300px, 29vw, 350px); margin: clamp(2.5rem, 5vw, 4.5rem) 0 1.5rem; }.journey-path { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }.journey-path path { fill: none; stroke-width: 2.4; vector-effect: non-scaling-stroke; }.path-base { stroke: var(--color-border); stroke-dasharray: 4 7; }.path-progress { stroke: var(--color-accent); stroke-dasharray: 100; stroke-linecap: round; transition: stroke-dashoffset .45s cubic-bezier(.22, .8, .3, 1); }.mobile-path { display: none; }
  .journey-map button { position: absolute; z-index: 1; left: var(--x); top: var(--y); width: 7.5rem; transform: translate(-50%, -50%); display: flex; flex-direction: column; align-items: center; border: 0; background: none; color: var(--color-text-muted); cursor: pointer; }.journey-node { width: 2.6rem; height: 2.6rem; display: grid; place-items: center; border: 1.5px solid var(--color-border); border-radius: 50%; background: var(--color-card); transition: .25s ease; }.journey-node i { width: .55rem; height: .55rem; border-radius: 50%; background: var(--color-border); transition: .25s ease; }.journey-map button strong { margin-top: .6rem; padding: .12rem .35rem; background: var(--color-card); font-size: .68rem; letter-spacing: .06em; }.journey-map button small { padding: .06rem .35rem; background: var(--color-card); font-size: .56rem; font-weight: 700; letter-spacing: .08em; }.journey-map button:hover .journey-node, .journey-map button:focus-visible .journey-node, .journey-map button.active .journey-node { border-color: var(--color-accent); transform: translateY(-3px) scale(1.08); box-shadow: 0 5px 0 var(--color-accent-soft); }.journey-map button.active { color: var(--color-text); }.journey-map button.active .journey-node i { width: 1.15rem; height: 1.15rem; background: var(--color-accent); box-shadow: inset 0 0 0 4px var(--color-card); }.journey-map button.passed .journey-node i { background: var(--color-accent); }
  .journey-detail { min-height: 390px; display: grid; grid-template-columns: minmax(180px, .3fr) minmax(0, 1fr); gap: clamp(2rem, 6vw, 6rem); padding: clamp(1.5rem, 4vw, 3.5rem); border: 1px solid var(--color-border); border-radius: .75rem; background: var(--color-surface); box-shadow: 0 18px 60px rgb(0 0 0 / .07); animation: detail-in .35s cubic-bezier(.22, .8, .3, 1); } @keyframes detail-in { from { opacity: 0; transform: translateY(10px); } }
  .detail-brand { display: flex; flex-direction: column; justify-content: space-between; gap: 2rem; }.logo-shell { width: clamp(6rem, 11vw, 8.5rem); aspect-ratio: 1; display: grid; place-items: center; overflow: hidden; border: 1px solid var(--color-border); border-radius: .75rem; background: white; box-shadow: 5px 5px 0 var(--color-accent-soft); }.logo-shell img { width: 76%; height: 76%; object-fit: contain; }.logo-shell img[src*="cvent"] { width: 58%; height: 58%; }.logo-shell span { color: #171717; font-size: 2rem; font-weight: 800; }.detail-brand > div:last-child span { color: var(--color-accent); font-size: .64rem; font-weight: 700; letter-spacing: .15em; }.detail-brand > div:last-child p { margin-top: .35rem; color: var(--color-text-muted); font-size: .76rem; }
  .detail-copy { align-self: center; }.organization { color: var(--color-accent); font-size: .72rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }.detail-copy h3 { max-width: 800px; margin: .6rem 0 1.1rem; font: 700 clamp(2rem, 4.2vw, 4rem)/.98 'Space Grotesk', sans-serif; letter-spacing: -.055em; }.summary { max-width: 760px; color: var(--color-text-muted); font-size: 1.05rem; line-height: 1.65; }.detail-copy ul { max-width: 850px; margin: 1.4rem 0; display: grid; gap: .7rem; }.detail-copy li { position: relative; padding-left: 1.25rem; color: var(--color-text); line-height: 1.55; }.detail-copy li::before { content: '↳'; position: absolute; left: 0; color: var(--color-accent); }.tags { display: flex; flex-wrap: wrap; gap: .45rem; }.tags span { padding: .4rem .65rem; border: 1px solid var(--color-border); border-radius: 999px; background: var(--color-card); color: var(--color-text-muted); font-size: .58rem; font-weight: 700; letter-spacing: .08em; }

  .skills-section { width: 100%; padding: clamp(3.5rem, 7vw, 7rem) 0; border-top: 1px solid var(--color-border); background: var(--color-surface); }.skills-inner { max-width: 1180px; margin: 0 auto; padding: 0 2rem; }.skills-heading { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(260px, .6fr); gap: 4rem; align-items: end; }.skills-heading h2 { margin: 1rem 0 0; font: 700 clamp(2.8rem, 5.5vw, 5.2rem)/.94 'Space Grotesk', sans-serif; letter-spacing: -.06em; text-transform: uppercase; }.skills-heading > p { color: var(--color-text-muted); line-height: 1.7; }.skills-grid { margin-top: 4rem; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }.skills-grid article { position: relative; padding: 1.6rem; border: 1px solid var(--color-border); border-radius: .75rem; background: var(--color-card); transition: transform .22s, border-color .22s; }.skills-grid article:last-child { grid-column: 1 / -1; }.skills-grid article:hover { transform: translateY(-4px); border-color: var(--color-accent); }.skills-grid article > span { color: var(--color-accent); font-size: .62rem; font-weight: 700; letter-spacing: .12em; }.skills-grid h3 { margin: .65rem 0 1.25rem; font-size: 1.25rem; text-transform: capitalize; }.skills-grid article div { display: flex; flex-wrap: wrap; gap: .5rem; }.skills-grid small { padding: .4rem .65rem; border-radius: .4rem; background: var(--color-surface); color: var(--color-text-muted); font-size: .72rem; }

  .projects-section { width: 100%; padding: clamp(3.5rem, 7vw, 7rem) 0; border-top: 1px solid var(--color-border); background: var(--color-card); }.projects-inner { max-width: 1180px; margin: 0 auto; padding: 0 2rem; }.projects-heading { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(260px, .6fr); gap: 4rem; align-items: end; }.projects-heading h2 { margin: 1rem 0 0; font: 700 clamp(2.8rem, 5.5vw, 5.2rem)/.94 'Space Grotesk', sans-serif; letter-spacing: -.06em; text-transform: uppercase; }.projects-heading > p { color: var(--color-text-muted); line-height: 1.7; }
  .project-timeline { position: relative; margin-top: 4rem; padding-top: 5rem; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(1.5rem, 4vw, 4rem); }.project-timeline::before { content: ''; position: absolute; left: 0; right: 0; top: 2rem; height: 2px; background: linear-gradient(90deg, var(--color-accent), var(--color-border)); }.project-timeline article { position: relative; padding: 1.6rem; border: 1px solid var(--color-border); border-radius: .75rem; background: var(--color-surface); transition: transform .25s, border-color .25s; }.project-timeline article:hover { transform: translateY(-4px); border-color: var(--color-accent); }.project-checkpoint { position: absolute; top: -4.25rem; left: 1.5rem; width: 2.5rem; height: 2.5rem; display: grid; place-items: center; border: 2px solid var(--color-card); border-radius: 50%; background: var(--color-accent); box-shadow: 0 0 0 1px var(--color-accent), 0 5px 0 var(--color-accent-soft); }.project-checkpoint i { color: var(--color-bg); font-size: .62rem; font-weight: 800; font-style: normal; letter-spacing: .08em; }.project-copy > p:first-child { color: var(--color-accent); font-size: .64rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }.project-copy h3 { margin: .45rem 0 .75rem; font: 700 clamp(1.8rem, 4vw, 3.3rem)/1 'Space Grotesk', sans-serif; letter-spacing: -.045em; }.project-copy > p:not(:first-child) { max-width: 720px; color: var(--color-text-muted); line-height: 1.65; }.project-tags { display: flex; flex-wrap: wrap; gap: .45rem; margin-top: 1.25rem; }.project-tags span { padding: .4rem .65rem; border: 1px solid var(--color-border); border-radius: 999px; background: var(--color-card); color: var(--color-text-muted); font-size: .58rem; font-weight: 700; letter-spacing: .06em; }.project-links { display: flex; gap: .9rem; margin-top: 1.5rem; }.project-links a { padding-bottom: .2rem; border-bottom: 1px solid var(--color-accent); color: var(--color-text); font-size: .66rem; font-weight: 700; letter-spacing: .12em; }.project-links a:hover { color: var(--color-accent); }

  @media (max-width: 900px) {
    .hero { grid-template-columns: 1fr; padding-top: 4rem; gap: 3.5rem; }.portrait-stage { justify-self: center; width: min(80vw, 450px); }.journey-heading, .skills-heading, .projects-heading { grid-template-columns: 1fr; gap: 1.5rem; }.journey-heading > p, .skills-heading > p, .projects-heading > p { max-width: 620px; }.journey-detail { grid-template-columns: 1fr; min-height: 0; }.detail-brand { flex-direction: row; align-items: end; }
  }
  @media (max-width: 600px) {
    .hero { min-height: auto; padding: 3.4rem 1.1rem 4rem; } h1 { font-size: clamp(4rem, 22vw, 6rem); }.eyebrow { font-size: .57rem; }.role-console { border-radius: .7rem; box-shadow: 5px 5px 0 var(--color-accent); }.console-prompt { display: none; }.portrait-note { left: 0; }.code-chip { right: 0; }.journey { padding: 4rem 1rem; }.journey-heading { padding: 0; }.journey-map { height: 740px; margin-top: 2rem; }.desktop-path { display: none; }.mobile-path { display: block; }.journey-map button { left: var(--mx); top: var(--my); width: 7rem; }.journey-map button strong { font-size: .62rem; }.journey-detail { padding: 1.2rem; }.detail-brand { align-items: center; }.logo-shell { width: 5.2rem; }.detail-copy h3 { font-size: 2.1rem; }.summary { font-size: 1rem; }.skills-inner, .projects-inner { padding: 0 1rem; }.skills-grid { grid-template-columns: 1fr; margin-top: 3rem; }.skills-grid article:last-child { grid-column: auto; }.project-timeline { grid-template-columns: 1fr; gap: 1.25rem; padding: 0 0 0 3.5rem; }.project-timeline::before { left: 1rem; right: auto; top: 0; bottom: 0; width: 2px; height: auto; background: linear-gradient(180deg, var(--color-accent), var(--color-border)); }.project-timeline article { padding: 1.25rem; }.project-checkpoint { top: 1.2rem; left: -3.75rem; }.project-links { flex-direction: row; }
  }
  @media (prefers-reduced-motion: reduce) { .eyebrow span, .console-cursor { animation: none; }.role-track.with-transition { transition-duration: 1ms; }.journey-detail { animation: none; } }
</style>

<script lang="ts">
  const experience = [
    {
      title: "Software Engineer",
      company: "Turing Remote",
      period: "Jul 2024 – Present",
      highlights: [
        "Led a team of six managing project delivery for Anthropic",
        "Improved LLM model performance by creating high-quality technical datasets",
        "Enhanced RLHF evaluation tools, increasing evaluator productivity by 40%"
      ]
    },
    // {
    //   title: "Senior Software Engineer",
    //   company: "GigaIntel Innovations",
    //   period: "Feb 2024 – Jul 2024",
    //   highlights: [
    //     "Built a trademark similarity search engine using ML algorithms",
    //     "Reduced manual research efforts by 70%"
    //   ]
    // },
    {
      title: "Software Engineer 2",
      company: "Cvent Inc",
      period: "Jan 2022 – Oct 2023",
      highlights: [
        "Revamped decade-old application from ASP to modern React/NextJS",
        "Led SQL Server to PostgreSQL migration, improving efficiency by 40%",
        "Reduced UI page load times by 50% and API response times by 30%"
      ]
    }
  ];

  const skills = {
    languages: ["Java", "JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "NextJS", "Dropwizard", "JEST", "WDIO"],
    databases: ["PostgreSQL", "SQL Server", "Couchbase", "MongoDB"],
    tools: ["Docker", "AWS", "Jenkins", "GraphQL", "RabbitMQ", "ElasticSearch"]
  };
</script>

<svelte:head>
  <title>Harshit Halwan - Software Engineer</title>
</svelte:head>

<div class="container-narrow py-12">
  <section class="mb-16">
    <h1 class="text-4xl sm:text-5xl font-serif font-bold mb-4 text-balance">
      Harshit Halwan
    </h1>
    <p class="text-xl text-[var(--color-text-muted)] mb-6">
      Software Engineer specializing in AI/ML and full-stack development
    </p>
    
    <div class="flex flex-wrap gap-4 text-sm">
      <a href="mailto:harshithalwan@gmail.com" class="nav-link flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        harshithalwan@gmail.com
      </a>
      <a href="https://linkedin.com/in/harshithalwan" target="_blank" rel="noopener noreferrer" class="nav-link flex items-center gap-2">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
        LinkedIn
      </a>
      <a href="https://github.com/Harshithalwan" target="_blank" rel="noopener noreferrer" class="nav-link flex items-center gap-2">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </a>
    </div>
  </section>

  <section class="mb-16">
    <h2 class="text-2xl font-serif font-bold mb-6">About Me</h2>
    <div class="prose prose-lg dark:prose-invert max-w-none">
      <p class="text-lg leading-relaxed mb-4">
        I'm a software engineer based in Delhi with over five years of experience building scalable web applications and working on AI/ML projects. Currently pursuing my M.Tech. in AI & Machine Learning at BITS Pilani, I'm deeply passionate about the intersection of software engineering and artificial intelligence.
      </p>
      <p class="text-lg leading-relaxed mb-4">
        My journey has taken me through various roles—from building enterprise applications at Cvent to leading teams at Turing Remote, where I work with cutting-edge AI companies to improve LLM performance. I've developed a strong foundation in full-stack development, test automation, and distributed systems.
      </p>
      <p class="text-lg leading-relaxed mb-4">
        When I'm not coding, you'll find me exploring the latest research papers in machine learning, working on personal projects like Quill—a document chat application leveraging RAG architecture—or diving deep into the mechanics of transformer models.
      </p>
      <p class="text-lg leading-relaxed">
        I'm particularly interested in building systems that combine rigorous engineering practices with intelligent automation, and I'm always excited about opportunities to work on challenging problems at the forefront of technology.
      </p>
    </div>
  </section>

  <section class="mb-16">
    <h2 class="text-2xl font-serif font-bold mb-6">Experience</h2>
    <div class="space-y-8">
      {#each experience as exp}
        <div class="card">
          <div class="flex flex-wrap justify-between items-start gap-2 mb-3">
            <div>
              <h3 class="text-xl font-bold">{exp.title}</h3>
              <p class="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</p>
            </div>
            <span class="text-sm text-[var(--color-text-muted)]">{exp.period}</span>
          </div>
          <ul class="space-y-2">
            {#each exp.highlights as highlight}
              <li class="flex items-start gap-2 text-[var(--color-text)]">
                <span class="text-primary-600 dark:text-primary-400 mt-1">•</span>
                <span>{highlight}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </section>

  <section class="mb-16">
    <h2 class="text-2xl font-serif font-bold mb-6">Skills</h2>
    <div class="grid gap-6 sm:grid-cols-2">
      <div class="card">
        <h3 class="font-semibold mb-3">Languages</h3>
        <div class="flex flex-wrap gap-2">
          {#each skills.languages as skill}
            <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
              {skill}
            </span>
          {/each}
        </div>
      </div>
      <div class="card">
        <h3 class="font-semibold mb-3">Frameworks</h3>
        <div class="flex flex-wrap gap-2">
          {#each skills.frameworks as skill}
            <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
              {skill}
            </span>
          {/each}
        </div>
      </div>
      <div class="card">
        <h3 class="font-semibold mb-3">Databases</h3>
        <div class="flex flex-wrap gap-2">
          {#each skills.databases as skill}
            <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
              {skill}
            </span>
          {/each}
        </div>
      </div>
      <div class="card">
        <h3 class="font-semibold mb-3">Tools & Infrastructure</h3>
        <div class="flex flex-wrap gap-2">
          {#each skills.tools as skill}
            <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
              {skill}
            </span>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <section class="mb-16">
    <h2 class="text-2xl font-serif font-bold mb-6">Education</h2>
    <div class="space-y-4">
      <div class="card">
        <div class="flex flex-wrap justify-between items-start gap-2">
          <div>
            <h3 class="text-lg font-bold">M.Tech. Artificial Intelligence & Machine Learning</h3>
            <p class="text-primary-600 dark:text-primary-400">Birla Institute of Technology and Science, Pilani</p>
          </div>
          <span class="text-sm text-[var(--color-text-muted)]">2024 – 2026</span>
        </div>
      </div>
      <div class="card">
        <div class="flex flex-wrap justify-between items-start gap-2">
          <div>
            <h3 class="text-lg font-bold">Master of Computer Applications</h3>
            <p class="text-primary-600 dark:text-primary-400">University of Delhi</p>
          </div>
          <span class="text-sm text-[var(--color-text-muted)]">2017 – 2020</span>
        </div>
      </div>
      <div class="card">
        <div class="flex flex-wrap justify-between items-start gap-2">
          <div>
            <h3 class="text-lg font-bold">Bachelors in Physics</h3>
            <p class="text-primary-600 dark:text-primary-400">University of Delhi</p>
          </div>
          <span class="text-sm text-[var(--color-text-muted)]">2013 – 2016</span>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h2 class="text-2xl font-serif font-bold mb-6">Personal Projects</h2>
    <div class="card">
      <h3 class="text-xl font-bold mb-2">Quill - A Document Chat App</h3>
      <p class="text-[var(--color-text-muted)] mb-4">
        A web application enabling document-based chat using RAG architecture with real-time capabilities.
      </p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
          Python
        </span>
        <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
          Flask
        </span>
        <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
          NextJS
        </span>
        <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
          SocketIO
        </span>
        <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
          Gemini
        </span>
        <span class="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
          Pinecone
        </span>
      </div>
      <div class="flex gap-4 text-sm">
        <a href="https://github.com/Harshithalwan/quill-server" target="_blank" rel="noopener noreferrer" class="nav-link flex items-center gap-2">
          Server →
        </a>
        <a href="https://github.com/Harshithalwan/quill-ui" target="_blank" rel="noopener noreferrer" class="nav-link flex items-center gap-2">
          UI →
        </a>
      </div>
    </div>
  </section>
</div>

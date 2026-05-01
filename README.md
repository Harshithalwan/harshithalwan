# Portfolio Application

A minimal and elegant portfolio built with SvelteKit, Tailwind CSS, and TypeScript.

## Features

- **Homepage**: About me section with experience, skills, education, and projects
- **Blog**: File-based blog with Markdown support
- **Papers**: Technical paper analysis with Markdown support
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Responsive Design**: Mobile-first approach with clean typography
- **Fast Performance**: Built with SvelteKit and Vite

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS with typography plugin
- **Content**: Markdown files with frontmatter
- **Build Tool**: Vite
- **Package Manager**: npm

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Adding Content

### Blog Posts

Create a new Markdown file in `src/content/blogs/`:

```markdown
---
title: "Your Post Title"
date: "2024-12-15"
excerpt: "A brief description of your post"
tags: ["Tag1", "Tag2"]
---

Your content here...
```

The filename (without `.md`) becomes the URL slug. For example, `my-post.md` becomes `/blogs/my-post`.

### Paper Analyses

Create a new Markdown file in `src/content/papers/`:

```markdown
---
title: "Paper Title"
authors: "Author Names"
year: 2024
paperUrl: "https://example.com/paper"
excerpt: "Brief analysis summary"
tags: ["Tag1", "Tag2"]
---

Your analysis content...
```

The filename becomes the URL slug. For example, `attention-is-all-you-need.md` becomes `/papers/attention-is-all-you-need`.

## Project Structure

```
src/
├── lib/
│   ├── components/      # Reusable UI components
│   ├── stores/          # Svelte stores (theme)
│   └── utils/           # Utility functions
├── routes/
│   ├── +layout.svelte   # Main layout
│   ├── +page.svelte     # Homepage
│   ├── blogs/           # Blog section
│   │   ├── +page.svelte
│   │   └── [slug]/      # Individual blog posts
│   └── papers/          # Papers section
│       ├── +page.svelte
│       └── [slug]/      # Individual paper analyses
└── content/
    ├── blogs/           # Blog Markdown files
    └── papers/          # Paper Markdown files
```

## Customization

### Theme Colors

Edit `tailwind.config.js` to customize colors and typography.

### Personal Information

Edit `src/routes/+page.svelte` to update your personal information and experience.

### Contact Links

Update the links in the header and homepage to point to your profiles.

## License

MIT

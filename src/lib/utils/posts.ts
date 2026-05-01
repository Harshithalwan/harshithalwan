export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export interface PaperAnalysis {
  slug: string;
  title: string;
  authors: string;
  year: number;
  paperUrl: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export const blogModules = import.meta.glob('/src/content/blogs/*.md', { eager: true });
export const paperModules = import.meta.glob('/src/content/papers/*.md', { eager: true });

export function getAllBlogs(): BlogPost[] {
  return Object.entries(blogModules)
    .map(([path, module]: [string, any]) => {
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      return {
        slug,
        ...module.metadata
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  const path = `/src/content/blogs/${slug}.md`;
  const module = blogModules[path] as any;
  
  if (!module) return undefined;
  
  return {
    slug,
    ...module.metadata
  };
}

export function getAllPapers(): PaperAnalysis[] {
  return Object.entries(paperModules)
    .map(([path, module]: [string, any]) => {
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      return {
        slug,
        ...module.metadata
      };
    })
    .sort((a, b) => b.year - a.year);
}

export function getPaperBySlug(slug: string): PaperAnalysis | undefined {
  const path = `/src/content/papers/${slug}.md`;
  const module = paperModules[path] as any;
  
  if (!module) return undefined;
  
  return {
    slug,
    ...module.metadata
  };
}

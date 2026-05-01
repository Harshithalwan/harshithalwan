import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const allPaperModules = import.meta.glob('/src/content/papers/*.md');
  const path = `/src/content/papers/${params.slug}.md`;
  
  if (!allPaperModules[path]) {
    throw error(404, 'Paper analysis not found');
  }

  const module = await allPaperModules[path]() as any;
  
  return {
    paper: {
      slug: params.slug,
      ...module.metadata
    }
  };
}

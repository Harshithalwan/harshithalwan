import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const allBlogModules = import.meta.glob('/src/content/blogs/*.md');
  const path = `/src/content/blogs/${params.slug}.md`;
  
  if (!allBlogModules[path]) {
    throw error(404, 'Blog post not found');
  }

  const module = await allBlogModules[path]() as any;
  
  return {
    blog: {
      slug: params.slug,
      ...module.metadata
    }
  };
}

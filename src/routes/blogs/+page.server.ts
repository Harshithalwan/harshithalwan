import { getAllBlogs } from '$lib/utils/posts';

export function load() {
  const blogs = getAllBlogs();
  
  return {
    blogs
  };
}

import { getAllPapers } from '$lib/utils/posts';

export function load() {
  const papers = getAllPapers();
  
  return {
    papers
  };
}

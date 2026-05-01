import { c as getAllPapers } from "../../../chunks/posts.js";
function load() {
  const papers = getAllPapers();
  return {
    papers
  };
}
export {
  load
};

import { g as getAllBlogs } from "../../../chunks/posts.js";
function load() {
  const blogs = getAllBlogs();
  return {
    blogs
  };
}
export {
  load
};

import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://digitalfurnitureserver.vercel.app/blogs")
      .then((response) => response.json())
      .then((json) => setBlogs(json));
  }, [blogs]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {blogs &&
          blogs.map((blog) => <BlogCard key={blog._id} blog={blog}></BlogCard>)}
      </div>
    </div>
  );
};

export default Blogs;

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
        <div className="flex gap-3 flex-wrap">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    );
};

export default Blogs;
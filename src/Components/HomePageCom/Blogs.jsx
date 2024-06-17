import { useEffect, useState } from "react";
import BlogCard from "../../Pages/Blogs/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://digitalfurnitureserver.vercel.app/blogs")
      .then((response) => response.json())
      .then((json) => setBlogs(json));
  }, [blogs]);

  return (
    <div className="my-10">
      <h2 className="m-5 text-center text-green-500 text-3xl">Blogs</h2>
      <div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {blogs &&
              blogs.slice(0, 3).map((blog) => (
                <BlogCard key={blog._id} blog={blog}></BlogCard>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

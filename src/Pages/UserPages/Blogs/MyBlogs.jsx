import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import BlogCard from '../../Blogs/BlogCard';

const MyBlogs = () => {
    const {user}=useAuth()
    const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`https://digitalfurnitureserver.vercel.app/blogs/me/${user?.email}`)
      .then((response) => response.json())
      .then((json) => setBlogs(json));
  }, [blogs, user]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {blogs && blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;
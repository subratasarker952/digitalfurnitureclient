import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import BlogCard from '../BlogCard';

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
      <div className="flex gap-3 flex-wrap">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;
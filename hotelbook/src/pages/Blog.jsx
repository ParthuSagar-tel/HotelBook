import React from "react";
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import BlogCard from '../components/BlogCard';

const blogs = [
  { id: 1, title: "Top 10 Hotels in 2025", desc: "Explore the most luxurious hotels around the world.", image: 'https://source.unsplash.com/800x600/?hotel,luxury' },
  { id: 2, title: "Beach Resorts You Must Visit", desc: "Relax by the sea in these top resorts.", image: 'https://source.unsplash.com/800x600/?beach,resort' },
  { id: 3, title: "City Hotels for Business Travelers", desc: "Perfect stays for work trips.", image: 'https://source.unsplash.com/800x600/?city,hotel' }
];

const Blog = () => {
  return (
    <div className="container mt-5">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Blog
      </motion.h1>
      <Grid container spacing={3} className="mt-3">
        {blogs.map(blog => (
          <Grid item xs={12} md={4} key={blog.id}>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: blog.id * 0.2 }}>
              <BlogCard post={{ title: blog.title, excerpt: blog.desc, image: blog.image }} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Blog;

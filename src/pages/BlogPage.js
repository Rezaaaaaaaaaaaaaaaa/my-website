import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Section, { SectionHeader } from '../components/common/Section';
import BlogCard from '../components/common/BlogCard';
import { blogPosts } from '../data/blogPosts';

const BlogPage = () => {
  const [activeTag, setActiveTag] = useState('all');
  
  // Extract unique tags from all blog posts
  const allTags = ['all'];
  blogPosts.forEach(post => {
    if (post.tags && post.tags.length > 0) {
      post.tags.forEach(tag => {
        if (!allTags.includes(tag)) {
          allTags.push(tag);
        }
      });
    }
  });
  
  // Filter posts by active tag
  const filteredPosts = activeTag === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.tags && post.tags.includes(activeTag));
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };
  
  return (
    <>
      <Helmet>
        <title>Blog | Dr. Reza Moghaddam</title>
        <meta 
          name="description" 
          content="Insights and articles on environmental engineering, sustainable technologies, and research by Dr. Reza Moghaddam."
        />
      </Helmet>
      
      <div className="page">
        <section className="page-header">
          <div className="container">
            <h1>Blog</h1>
            <p>Thoughts and insights on environmental engineering and sustainable technologies</p>
          </div>
        </section>
        
        <Section background="light">
          <div className="blog-tags-filter">
            {allTags.map(tag => (
              <button
                key={tag}
                className={`tag-btn ${activeTag === tag ? 'active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag === 'all' ? 'All Posts' : tag}
              </button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag}
              className="blog-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <motion.div key={post.id} variants={itemVariants}>
                    <BlogCard post={post} />
                  </motion.div>
                ))
              ) : (
                <p className="text-center">No blog posts found for this tag.</p>
              )}
            </motion.div>
          </AnimatePresence>
        </Section>
      </div>
    </>
  );
};

export default BlogPage;

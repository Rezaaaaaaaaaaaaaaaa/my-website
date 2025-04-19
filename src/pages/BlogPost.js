import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowLeft } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blogPosts';
import { formatDate, calculateReadTime } from '../utils/helpers';
import Button from '../components/common/Button';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    const postId = parseInt(id);
    const blogPost = blogPosts.find(p => p.id === postId);
    
    // If post not found, redirect to blog page
    if (!blogPost) {
      navigate('/blog');
      return;
    }
    
    setPost(blogPost);
  }, [id, navigate]);
  
  if (!post) {
    return null; // Will redirect via useEffect if not found
  }
  
  return (
    <>
      <Helmet>
        <title>{post.title} | Blog | Dr. Reza Moghaddam</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <div className="page">
        <article className="blog-post-container">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button 
                as="link" 
                to="/blog" 
                variant="link" 
                className="back-link"
                icon={<FiArrowLeft />}
              >
                Back to all posts
              </Button>
              
              <header className="blog-post-header">
                <h1>{post.title}</h1>
                
                <div className="blog-post-meta">
                  <span className="post-date">
                    <FiCalendar />
                    {formatDate(post.date)}
                  </span>
                  
                  <span className="post-read-time">
                    <FiClock />
                    {post.readTime || calculateReadTime(post.content)}
                  </span>
                </div>
                
                {post.tags && post.tags.length > 0 && (
                  <div className="blog-tags">
                    {post.tags.map((tag, index) => (
                      <Link to={`/blog?tag=${tag}`} key={index} className="blog-tag">
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}
              </header>
              
              {post.image && (
                <div className="blog-post-image">
                  <img src={post.image} alt={post.title} />
                </div>
              )}
              
              <div className="blog-post-content">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
              
              <div className="blog-post-footer">
                <div className="author-bio">
                  <img src="/images/author.jpg" alt="Dr. Reza Moghaddam" className="author-image" />
                  <div>
                    <h3>Dr. Reza Moghaddam</h3>
                    <p>Environmental & Bioprocess Engineer with expertise in water treatment solutions and sustainable technologies.</p>
                  </div>
                </div>
                
                <div className="share-links">
                  <h4>Share this post</h4>
                  <div className="social-buttons">
                    <a href={`https://twitter.com/intent/tweet?text=${post.title}&url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="social-button">Twitter</a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="social-button">LinkedIn</a>
                  </div>
                </div>
              </div>
              
              <div className="related-posts">
                <h3>Related Posts</h3>
                <div className="related-posts-grid">
                  {blogPosts
                    .filter(p => p.id !== post.id && post.tags && p.tags && post.tags.some(tag => p.tags.includes(tag)))
                    .slice(0, 2)
                    .map(relatedPost => (
                      <div key={relatedPost.id} className="related-post-card">
                        <h4>
                          <Link to={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                        </h4>
                        <p>{relatedPost.excerpt}</p>
                      </div>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;

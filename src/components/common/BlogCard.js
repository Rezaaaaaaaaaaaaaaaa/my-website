import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock } from 'react-icons/fi';
import Card, { CardImage, CardBody, CardTitle, CardText } from './Card';
import { formatDate, calculateReadTime } from '../../utils/helpers';

const BlogCard = ({ post, featured = false }) => {
  return (
    <Card className={`blog-card ${featured ? 'card-featured' : ''}`}>
      {post.image && (
        <CardImage src={post.image} alt={post.title} className="blog-image" />
      )}
      
      <CardBody>
        <div className="blog-meta">
          <span className="blog-date">
            <FiCalendar />
            {formatDate(post.date)}
          </span>
          <span className="blog-read-time">
            <FiClock />
            {post.readTime || calculateReadTime(post.content || post.excerpt)}
          </span>
        </div>
        
        <CardTitle>{post.title}</CardTitle>
        
        {post.tags && post.tags.length > 0 && (
          <div className="blog-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="blog-tag">{tag}</span>
            )}
        
        <CardText className="blog-excerpt">{post.excerpt}</CardText>
        
        <div className="card-footer d-flex justify-content-between align-items-center">
          <Link to={`/blog/${post.id}`} className="blog-read-more">
            Read More
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default BlogCard;

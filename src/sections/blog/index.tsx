import React from 'react';

import './style.css';
interface BlogPost {
  id: number;
  title: string;
  summary: string;
  image: string;
  background: string;
  colorH:string;
  color:string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Why Should You Choose an ISV as Your Preferred Salesforce Partner?',
    summary: 'In the modern-day world, where digitalization is soaring high, businesses are constantly...',
    image: 'assets/blog/image1.png',
    background: 'rgba(186, 219, 247, 1)',
    colorH:'rgba(3, 45, 96, 1)',
    color:'rgba(0, 0, 0, 1)'
  },
  {
    id: 2,
    title: 'Choosing a Top Salesforce Partner: A Guide for Businesses Growth',
    summary: 'In the modern-day world, where digitalization is soaring high, businesses are constantly...',
    image: 'assets/blog/image2.png',
    background: 'rgba(219, 229, 255, 1)',
    colorH:'rgba(3, 45, 96, 1)',
    color:'rgba(0, 0, 0, 1)'
    
  },
  {
    id: 3,
    title: 'Optimizing Your Salesforce Investment: How Does Collaborating with a Top...',
    summary: 'In the modern-day world, where digitalization is soaring high, businesses are constantly...',
    image: 'assets/blog/image3.png',
    background: 'rgba(215, 243, 228, 1)',
    colorH:'rgba(3, 45, 96, 1)',
    color:'rgba(0, 0, 0, 1)'
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="blog-section">
      <div className="left-panel">
        <h2>Latest Blogs</h2>
        <a href="#" className="read-all-link">Read All ›</a>
      </div>
      <div className="blog-grid">
        {blogPosts.map(({ title,background, summary, image,color,colorH }) => (
          <div style={{background}} className={`blog-card`} key={title}>
          <div className="card-image-container">
            <img src={image} alt={title} className="card-image" />
          </div>
          <div className="card-content">
            <h3 style={{color:colorH}}>{title}</h3>
            <p style={{color}}>{summary}</p>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
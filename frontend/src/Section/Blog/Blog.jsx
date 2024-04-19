import React from "react";
import "./Blog.css";
import Heading from "../../Components/Section-Heading/Heading";
import { blog } from "../../assets/blog";

const Blog = () => {
  const Blog = ({ image, date, title, content }) => {
    return (
      <div className="blog-card">
        <div className="blog-image">
          <img src={image} className="blog-img" />
        </div>
        <div className="date-content">
          <p className="blog-date">{date}</p>
          <p className="blog-title">{title}</p>
          <p className="blog-content">{content}</p>
        </div>
      </div>
    );
  };
  return (
    <section id="blog" className="blog-section">
      <Heading title="Blog" text="Show More" />

      <div className="blog-container">
        <div className="blog-cards">
          {blog.map((data) => {
            return (
              <Blog
                key={data.id}
                image={data.image}
                date={data.date}
                title={data.title}
                content={data.content}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;

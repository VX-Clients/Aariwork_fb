import React from "react";
import { BedDouble as Needle, Sparkles, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import "../CSS/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content animate-fadeIn">
          <h1>Welcome to ADK Aari Creation</h1>
          <p>Empowering women through the art of Aari embroidery</p>
          <Link to="/courses" className="cta-button">
            Explore Courses
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container">
        <h2 className="text-center">Why Choose Us?</h2>
        <div className="grid grid-4">
          <div className="feature-card">
            <div className="icon-wrapper">
              <Sparkles />
            </div>
            <h3>Affordable Courses</h3>
            <p>High-quality training at competitive prices</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <Needle />
            </div>
            <h3>Expert Guidance</h3>
            <p>Hands-on training with experienced instructors</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <Users />
            </div>
            <h3>Growing Community</h3>
            <p>Over 500+ successful students and counting</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <BookOpen />
            </div>
            <h3>Special Programs</h3>
            <p>Free admissions for eligible candidates</p>
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="courses-preview">
        <div className="container">
          <h2 className="text-center">Our Popular Courses</h2>
          <p className="text-center subtitle">
            Transform your passion into profession
          </p>

          <div className="grid grid-3">
            {courses.map((course) => (
              <div key={course.title} className="course-card">
                <div className="course-image">
                  
                  <Link to="/courses">
                    <img src={course.image} alt={course.title} />
                  </Link>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <Link to="/courses" className="learn-more">
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container text-center">
          <h2>Ready to Start Your Creative Journey?</h2>
          <p>
            Join our community of skilled artisans and start learning today.
          </p>
          <Link to="/contact" className="cta-button">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

const courses = [
  {
    title: "Aari Embroidery",
    description:
      "Master 120+ stitches from basic to advanced techniques. Learn to customize designs for clients.",
    image: "Images/aari-work1.jpg",
  },
  {
    title: "Brooch Making",
    description:
      "Create unique and stylish brooches for sarees and dresses with expert techniques.",
    image: "Images/brooch-making.jpg",
  },
  {
    title: "Saree Pre-Plating",
    description:
      "Learn perfect pleating techniques and various draping styles for any occasion.",
    image: "Images/saree-pre.jpeg",
  },
];

export default Home;

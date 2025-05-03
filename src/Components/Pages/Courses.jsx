import React from 'react';
import PropTypes from 'prop-types';
import { BookOpen, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../CSS/Courses.css';

// CourseCard Component
const CourseCard = ({ title, description, learningPoints, pricing, image }) => {
  return (
    <div className="course-card">
      <div className="course-image-wrapper">
        <img src={image} alt={title} className="course-image" />
        <div className="course-overlay">
          <h3>{title}</h3>
        </div>
      </div>
      
      <div className="course-details">
        <p className="course-description">{description}</p>
        
        <div className="learning-points">
          <h4>
            <BookOpen className="icon" />
            What You'll Learn
          </h4>
          <ul>
            {learningPoints.map((point, index) => (
              <li key={index}>
                <CheckCircle2 className="icon success" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pricing-section">
          <h4>
            <Sparkles className="icon" />
            Pricing Options
          </h4>
          <div className="pricing-details">
            <div className="price-row">
              <span>With Material:</span>
              <span className="price">₹{pricing.withMaterial}</span>
            </div>
            <div className="price-row">
              <span>Without Material:</span>
              <span className="price">₹{pricing.withoutMaterial}</span>
            </div>
            <div className="price-row material-cost">
              <span>Material Cost:</span>
              <span>₹{pricing.materialCost}</span>
            </div>
          </div>
        </div>

        <Link to="/pay" className="enroll-button">
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

// PropTypes for Type Checking
CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  learningPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
  pricing: PropTypes.shape({
    withMaterial: PropTypes.number.isRequired,
    withoutMaterial: PropTypes.number.isRequired,
    materialCost: PropTypes.number.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired,
};

// Courses Component
function Courses() {
  return (
    <div className="courses">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content animate-fadeIn">
          <h1>Our Courses</h1>
          <p>Transform your creativity into a successful career with our comprehensive courses</p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-section">
        <div className="container">
          <div className="courses-grid">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Courses */}
      <section className="upcoming-courses">
        <div className="container">
          <h2>Upcoming Courses</h2>
          <div className="upcoming-grid">
            {upcomingCourses.map((course, index) => (
              <div key={index} className="upcoming-card">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button className="notify-button">
                  Get Notified →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

//  Course Data 
const courses = [
  {
    title: 'Aari Work',
    description: 'Master the art of Aari embroidery from basic to professional level.',
    learningPoints: [
      '120+ stitches from basic to advanced',
      'Customizing embroidery for clients',
      'Business insights for your Aari brand'
    ],
    pricing: {
      withMaterial: 2500,
      withoutMaterial: 500,
      materialCost: 1500
    },
    image: 'Images/aari-work1.jpg'
  },
  {
    title: 'Brooch Making',
    description: 'Learn to create unique and stylish brooches for various occasions.',
    learningPoints: [
      'Design unique brooches for sarees & dresses',
      'Step-by-step expert techniques',
      'Material selection and sourcing'
    ],
    pricing: {
      withMaterial: 2300,
      withoutMaterial: 500,
      materialCost: 1500
    },
    image: 'Images/brooch-making.jpg'
  },
  {
    title: 'Saree Pre-Plating',
    description: 'Perfect the art of saree pleating and create stunning drapes.',
    learningPoints: [
      'Perfect pleats and folding techniques',
      'Various draping styles for occasions',
      'Professional finishing touches'
    ],
    pricing: {
      withMaterial: 650,
      withoutMaterial: 100,
      materialCost: 550
    },
    image: 'Images/saree-pre.jpeg'
  },
  {
    title: 'Fabric Painting',
    description: 'Create stunning artwork on various textile materials.',
    learningPoints: [
      'Different painting techniques',
      'Color mixing and application',
      'Design creation and transfer'
    ],
    pricing: {
      withMaterial: 2800,
      withoutMaterial: 2000,
      materialCost: 1000
    },
    image: 'Images/fabric-painting.jpg'
  },
  {
    title: 'Thread Bangles',
    description: 'Master the art of creating beautiful thread-wrapped bangles.',
    learningPoints: [
      'Traditional & modern techniques',
      'Custom designs for occasions',
      'Color combination mastery'
    ],
    pricing: {
      withMaterial: 1500,
      withoutMaterial: 500,
      materialCost: 1000
    },
    image: 'Images/silk-thread-bangles.webp'
  }
];

const upcomingCourses = [
  {
    title: 'Tracing & Sketching Tutorials',
    description: 'Learn the fundamentals of design creation and pattern development.'
  },
  {
    title: 'Canvas Tutorial',
    description: 'Master mobile-focused design techniques for digital platforms.'
  },
  {
    title: 'Jewelry & Clay Making',
    description: 'Create stunning handcrafted jewelry and decorative items.'
  }
];

export default Courses;

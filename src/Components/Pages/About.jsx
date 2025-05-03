import React from "react";
import { Rocket, Target, Palette, Gem } from "lucide-react";
import "../CSS/About.css";
function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content animate-fadeIn">
          <h1>Our Story</h1>
          <p>From Passion to Empowerment: The Journey of ADK Aari Creation</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container py-16">
        <div className="story-content">
          <p>
            I'm Kalaiarasi, the CEO of ADK Aari Creation, and I'm excited to
            share my journey with you! Coming from a middle-class background, I
            started this business with a passion for Aari embroidery.
          </p>
          <p className="mb-4">
            During my 12th standard exam holidays, facing financial challenges
            at home, I was driven to develop a skill that could make a
            difference. While pursuing my degree at BMC Bhaktavatsalam Memorial
            College for Women in Chennai, I discovered my passion for Aari
            embroidery.
          </p>
          <p>
            What started as a personal journey has now transformed into a
            platform that empowers women through skill development and
            entrepreneurship opportunities.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="grid grid-2">
            <div className="feature-card">
              <div className="icon-wrapper">
                <Target />
              </div>
              <h3>Our Mission</h3>
              <p>
                Empowering women through affordable skill-based courses,
                enabling them to start their own businesses and achieve
                financial independence.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon-wrapper">
                <Rocket />
              </div>
              <h3>Our Vision</h3>
              <p>
                To expand beyond Aari work and create a full-fledged fashion
                school offering comprehensive courses in various creative
                domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Initiatives Section */}
      <section className="future-initiatives">
        <div className="container">
          <h2 className="text-center mb-12">Future Initiatives</h2>
          <div className="grid grid-4">
            {futureInitiatives.map((initiative) => (
              <div key={initiative.title} className="feature-card">
                <div className="icon-wrapper">{initiative.icon}</div>
                <h3>{initiative.title}</h3>
                <p>{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const futureInitiatives = [
  {
    title: "Women Entrepreneurship",
    description: "Comprehensive training on business management and leadership",
    icon: <Rocket className="h-6 w-6" />,
  },
  {
    title: "Jewelry & Clay Making",
    description: "Creative workshops for handcrafted jewelry and clay art",
    icon: <Gem className="h-6 w-6" />,
  },
  {
    title: "Canvas Design",
    description: "Mobile-focused design tutorials for digital artists",
    icon: <Palette className="h-6 w-6" />,
  },
  {
    title: "Hoop Embroidery",
    description: "Traditional and modern embroidery techniques",
    icon: <Target className="h-6 w-6" />,
  },
];

export default About;

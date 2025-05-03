import React from "react";
import "../CSS/Designs.css";
import { Link } from "lucide-react";

const Designs = () => {
  const categories = [
    {
      title: "Basic",
      images: [
        { src: "/Images/aariClass/basic/3dAariWork.jpg", name: "3D Aari Work" },
        { src: "/Images/aariClass/basic/aariwork.jpg", name: "Aari Work" },
        { src: "/Images/aariClass/basic/aariwork1.jpg", name: "Aari Work" },
        { src: "/Images/aariClass/basic/aariwork2.jpg", name: "Aari Work",},
        { src: "/Images/aariClass/basic/zadosiChainStitch.jpg", name: "Zadosi Chain Stitch" },
      ],
    },

    {
      title: "Brooches",
      images: [
        { src: "/Images/aariClass/brooches/basicClassLevel.jpg", name: "Basic Class Level" },
        { src: "/Images/aariClass/brooches/basic2.jpg", name: "Basic Level 2" },
        { src: "/Images/aariClass/brooches/advanceLevel.jpg", name: "Advance Level 1" },
        { src: "/Images/aariClass/brooches/advanceLevel2.jpg", name: "Advance Level 2" },
      ],
    },

    {
      title: "PRO",
      images: [
        { src: "/Images/aariClass/pro/HipBeltMaking.jpg", name: "Hip Belt Making" },
        { src: "/Images/aariClass/pro/jadaiMaking.jpg", name: "Jadai Making" },
        { src: "/Images/aariClass/pro/jewelleryMaking.jpg", name: "Jewellery Making" },
      ],
    },

    {
      title: "Advance",
      images: [
        { src: "/Images/aariClass/advance/lazyDaizyStitch.jpg", name: "lazy Daizy Stitch" },
        { src: "/Images/aariClass/fabricPainting.jpg", name: "Fabric Painting" },

      ],
    },
  ];

  return (
    <div className="design-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content animate-fadeIn">
          <h1>Designs</h1>
          <p>
            Our designs blend intricate detail with cultural elegance,
            showcasing the beauty of Aari embroidery in every stitch.
          </p>
        </div>
      </section>

      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h2 className="category-title">{category.title}</h2>
          <div className="card-grid">
            {category.images.map((image, i) => (
              <div className="card" key={i}>
                <img src={image.src} alt={image.name} className="card-image" />
                <p className="card-name">{image.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Designs;

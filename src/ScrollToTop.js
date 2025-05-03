import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;

import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // On surveille le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // apparaît après 300px de scroll
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // défilement fluide
    });
  };

  return (
        <button
      onClick={scrollToTop}
      className={`fixed bottom-8 w-14 h-14 left-8 z-50 p-4 rounded-full bg-white text-black shadow-sm shadow-black/40 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      } hover:bg-white/40 hover:text-white cursor-pointer transition-all duration-700`}
    >
          <KeyboardArrowUpIcon className="relative"/>
    </button>

  );
}
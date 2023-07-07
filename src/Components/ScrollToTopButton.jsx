import { useState, useEffect } from 'react';

// react icon
import ArrowUpIcon from "@heroicons/react/24/solid/ArrowUpIcon"

// sass
import "../Sass/ScrollToTopButton.scss"

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} id="myBtn" title="Go to top">
          <ArrowUpIcon width={25} height={25}/>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

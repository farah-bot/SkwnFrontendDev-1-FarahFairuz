import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Partners from "./components/Partners";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import useWindowSize from "./hooks/useWindowSize";


function App() {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(width < 400);
  const [isTablet, setIsTablet] = useState(width >= 400 && width < 1024);
  const [isDesktop, setIsDesktop] = useState(width >= 1024);

  useEffect(() => {
    setIsMobile(width < 400);
    setIsTablet(width >= 400 && width < 1024);
    setIsDesktop(width >= 1024);
  }, [width]);

  return (
    <div className="app-container">
      <Header isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />
      <main>
        <Hero isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />
        <Features
          isMobile={isMobile}
          isTablet={isTablet}
          isDesktop={isDesktop}
        />
        <Partners
          isMobile={isMobile}
          isTablet={isTablet}
          isDesktop={isDesktop}
        />
        <Categories
          isMobile={isMobile}
          isTablet={isTablet}
          isDesktop={isDesktop}
        />
        <Products
          isMobile={isMobile}
          isTablet={isTablet}
          isDesktop={isDesktop}
        />
        <Newsletter
          isMobile={isMobile}
          isTablet={isTablet}
          isDesktop={isDesktop}
        />
      </main>
      <Footer isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />
    </div>
  );
}

export default App;

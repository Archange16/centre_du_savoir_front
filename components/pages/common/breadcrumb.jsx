import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import shape from "../../../public/assets/img/shape/page-banner-shape.png";

const BreadCrumb = ({ title, innerTitle, description, backgroundImage }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const baseStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '450px 20px',
  };

  const mobileStyles = {
    backgroundSize: '120%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '0',
    margin: '0',
  };

  return (
    <div
      className="page__banner"
      style={{
        ...baseStyles,
        ...(isMobile ? mobileStyles : {}),
      }}
    >
      {/* Optional shape image */}
      {/* <div className="page__banner-shape">
          <img src={shape.src} alt="shape" />
      </div> */}

      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-7 col-lg-7">
            <div className="page__banner-content">
              <span className="mb-5">{description}</span>
              <h2>{title}</h2>
             {/*  <span>
                <Link href="/">Accueil</Link> <span>|</span> {innerTitle}
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;

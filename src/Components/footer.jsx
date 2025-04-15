import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footerSection">
        <div className="fSA">
          <div className="logo2">
            <h1 style={{ position: 'relative', zIndex: 2, fontFamily: 'Rock Salt' }}>REAL</h1>
            <p style={{ color: '#e76f51', position: 'relative', left: '35%' }}>ESTATE</p>
          </div>
          <div className="socials">
            <div className="social">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-x-twitter"></i>
            </div>
            <div className="estd">Established 2005</div>
          </div>
        </div>

        <div className="fSB">
          <div className="usefulLink">
            <strong>Useful Links</strong>
            <p>Our Work</p>
            <p>Ongoing Projects</p>
            <p>About Us</p>
            <p>Gallery</p>
            <p>Services</p>
          </div>
          <div className="reachUs">
            <strong>Reach Us</strong>
            <p>Email: aman8cse@gmail.com</p>
            <p>Phone: 7234xxxx07</p>
            <h1>OR</h1>
            <p>Expect a Call from Us</p>
          </div>
        </div>
      </div>

      <div className="closureFooter footer">
        <p>&copy; 2005, All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="box box1">
        <div className="logoBox"></div>
        <div className="cta"></div>
      </div>
      <div className="box">
        <h4>THE BASICS</h4>
        <p>About TMDB</p>
        <p>COntact Us</p>
        <p>Support Forums</p>
        <p>API Documentation</p>
        <p>System Status</p>
      </div>
      <div className="box">
      <h4>GET ENVOLVED</h4>
        <p>Contribution Bible</p>
        <p>Add New Movie</p>
        <p>Add New TV Show</p>
      </div>
      <div className="box">
      <h4>COMMUNITY</h4>
        <p>Guidlines</p>
        <p>Discussions</p>
        <p>Leaderboard</p>
      </div>
      <div className="box">
      <h4>LEGAL</h4>
        <p>Terms of Use</p>
        <p>API Terms of Use</p>
        <p>Privacy Policy</p>
        <p>DMCA Policy</p>
      </div>
    </div>
  );
};

export default Footer;
import React from "react";
import { ReactComponent as Logo } from './company-logo.svg';
import './App.css';

const InstagramLogo = () => (
  <div className="instagram-logo">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="instagram-svg"
    >
      <path d="M224.1 141c-63.6 0-115 51.5-115 115 0 63.6 51.5 115 115 115 63.6 0 115-51.5 115-115 0-63.6-51.4-115-115-115zm0 190c-41.4 0-75-33.6-75-75s33.6-75 75-75 75 33.6 75 75-33.6 75-75 75zm146.4-194.7c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9s12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.5s-57.8-34.5-93.5-36.2c-37-2.1-147.8-2.1-184.8 0-35.7 1.7-67.3 9.9-93.5 36.2S2.4 119.7.7 155.4c-2.1 37-2.1 147.8 0 184.8 1.7 35.7 9.9 67.3 36.2 93.5s57.8 34.5 93.5 36.2c37 2.1 147.8 2.1 184.8 0 35.7-1.7 67.3-9.9 93.5-36.2s34.5-57.8 36.2-93.5c2.1-37 2.1-147.7 0-184.7zM398.8 388c-7.8 19.5-23 34.7-42.5 42.5-29.5 11.7-99.5 9-132.3 9s-102.7 2.6-132.3-9c-19.5-7.8-34.7-23-42.5-42.5-11.7-29.5-9-99.5-9-132.3s-2.6-102.7 9-132.3c7.8-19.5 23-34.7 42.5-42.5 29.5-11.7 99.5-9 132.3-9s102.7-2.6 132.3 9c19.5 7.8 34.7 23 42.5 42.5 11.7 29.5 9 99.5 9 132.3s2.7 102.7-9 132.3z" />
    </svg>
  </div>
);

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-text-group">
          <Logo className="logo" />
          <div className="logo-text">
            <p className="text-header">White Elephant</p>
            <p className="text-subheader">Motion Picture</p>
          </div>
        </div>
      </header>
      <div className="main-content">
        <a
          href="https://www.instagram.com/_w.e.m.p_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="instagram-link"
        >
          <InstagramLogo />
        </a>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import './Footer.css'; 
import logo from '../../assets/logo/festivalogo.png'
const Footer = () => {
    return (
      <footer className="footer bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="footer-container w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="footer-header sm:flex sm:items-center sm:justify-between">
            <a href="/" className="footer-logo flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src= {logo} className="h-20" alt="Festiva Logo" />
              <span className="footer-logo-text self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Festiva</span>
            </a>
            <ul className="footer-links flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="https://facebook.com" className="footer-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="footer-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="footer-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" className="footer-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <hr className="footer-divider my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="footer-copy block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 Festiva All Rights Reserved.
          </span>
        </div>
      </footer>
    );
  };
  
  export default Footer;
import React from "react";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-item">
        <h1>Shop</h1>
        <ul>
          <li>
            <span>News</span>
          </li>
          <li>
            <span>Shop</span>
          </li>
          <li>
            <span>Our Story</span>
          </li>
          <li>
            <span>Giving Back</span>
          </li>
        </ul>
      </div>
      <div className="footer-item">
        <h1>Customer Service</h1>
        <ul>
          <li>
            <span>Contact Us</span>
          </li>
          <li>
            <span>Privacy Policy</span>
          </li>
          <li>
            <span>Terms of Use</span>
          </li>
        </ul>
      </div>
      <div className="footer-item footer-follow">
        <h1>Follow Us</h1>
        <ul className="footer-follow">
          <svg
            className="follow-svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M9.496 7.132A1 1 0 0 0 8 8v8a1 1 0 0 0 1.496.868l7-4a1 1 0 0 0 0-1.736zM13.984 12 10 14.277V9.723z"
              clipRule="evenodd"
            ></path>
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M0 12c0-3.75 0-5.625.955-6.939A5 5 0 0 1 2.06 3.955C3.375 3 5.251 3 9 3h6c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C24 6.375 24 8.251 24 12s0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C20.625 21 18.749 21 15 21H9c-3.75 0-5.625 0-6.939-.955A5 5 0 0 1 .955 18.94C0 17.625 0 15.749 0 12m9-7h6c1.92 0 3.198.003 4.167.108.932.1 1.337.276 1.596.465.255.185.479.409.664.664.189.26.364.664.465 1.596.105.969.108 2.248.108 4.167 0 1.92-.003 3.198-.108 4.167-.1.932-.276 1.337-.465 1.596q-.28.384-.664.664c-.259.189-.664.364-1.596.465-.969.105-2.248.108-4.167.108H9c-1.92 0-3.198-.003-4.167-.108-.932-.1-1.337-.276-1.596-.465a3 3 0 0 1-.664-.664c-.189-.259-.364-.664-.465-1.596C2.003 15.198 2 13.92 2 12c0-1.92.003-3.198.108-4.167.1-.932.276-1.337.465-1.596a3 3 0 0 1 .664-.664c.259-.189.664-.364 1.596-.465C5.802 5.003 7.08 5 9 5"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="follow-svg instagram"
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="800"
            fill="none"
            viewBox="0 -0.5 25 25"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15.5 5h-6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"
              clipRule="evenodd"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12.5 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
              clipRule="evenodd"
            ></path>
            <rect
              width="2"
              height="2"
              x="15.5"
              y="9"
              fill="currentColor"
              rx="1"
              transform="rotate(-90 15.5 9)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="16"
              y="8.5"
              stroke="currentColor"
              strokeLinecap="round"
              rx="0.5"
              transform="rotate(-90 16 8.5)"
            ></rect>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="follow-svg"
            viewBox="0 0 32 32"
          >
            <path d="M16.656 1.029c1.637-.025 3.262-.012 4.886-.025a7.76 7.76 0 0 0 2.189 5.213l-.002-.002A8.77 8.77 0 0 0 29 8.45l.028.002v5.036a13.3 13.3 0 0 1-5.331-1.247l.082.034a15.4 15.4 0 0 1-2.077-1.196l.052.034c-.012 3.649.012 7.298-.025 10.934a9.5 9.5 0 0 1-1.707 4.954l.02-.031c-1.652 2.366-4.328 3.919-7.371 4.011h-.014a9.071 9.071 0 0 1-5.139-1.31l.04.023C5.05 28.185 3.32 25.603 3 22.6l-.004-.041a23 23 0 0 1-.012-1.862c.49-4.779 4.494-8.476 9.361-8.476q.822.001 1.604.136l-.056-.008c.025 1.849-.05 3.699-.05 5.548a4.29 4.29 0 0 0-5.465 2.619l-.009.03c-.133.427-.21.918-.21 1.426q0 .31.037.61l-.002-.024a4.26 4.26 0 0 0 4.382 3.586h-.009a4.2 4.2 0 0 0 3.451-1.994l.01-.018c.267-.372.45-.822.511-1.311l.001-.014c.125-2.237.075-4.461.087-6.698.012-5.036-.012-10.06.025-15.083z"></path>
          </svg>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

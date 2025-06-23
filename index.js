import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure your CSS with animations is imported here
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import anime from 'animejs/lib/anime.es.js'; // Import Anime.js

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Wait until the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // 1. Fade in and scale the leaderboard title when the page loads
  anime({
    targets: '.leaderboard-title-banner',
    opacity: [0, 1],
    scale: [0.5, 1],
    easing: 'easeInOutQuad',
    duration: 1500,
  });

  // 2. Animate stars with opacity and position (twinkling effect)
  const stars = document.querySelectorAll('.star');
  
  stars.forEach((star, index) => {
    anime({
      targets: star,
      opacity: [1, 0.5, 1],
      translateY: anime.stagger([0, 10], { start: 1000 }),
      easing: 'easeInOutSine',
      duration: anime.stagger([2000, 3000], { start: 500 }),
      delay: anime.stagger(200, { start: index * 200 }),
      loop: true,
    });
  });

  // 3. Hover effect on leaderboard items (scale and shadow)
  const leaderboardItems = document.querySelectorAll('.leaderboard-item');

  leaderboardItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      anime({
        targets: item,
        scale: 1.05,
        boxShadow: '0 8px 16px rgba(255, 255, 255, 0.4)',
        duration: 300,
        easing: 'easeInOutQuad',
      });
    });

    item.addEventListener('mouseleave', () => {
      anime({
        targets: item,
        scale: 1,
        boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)',
        duration: 300,
        easing: 'easeInOutQuad',
      });
    });
  });
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

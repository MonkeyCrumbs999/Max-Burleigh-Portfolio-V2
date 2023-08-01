// Footer.jsx
import React from "react";
import withFadeTransitions from "./withFadeTransitions";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-12">
      <p className="text-sm">
        © {currentYear} - All Rights Reserved - Max Burleigh Portfolio
      </p>
    </footer>
  );
};

export default withFadeTransitions(Footer);

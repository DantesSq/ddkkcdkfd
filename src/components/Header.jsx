import React from "react";

const Header = () => {
  const scrollIntoElement = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="header">
      <ul className="header-items">
        <li className="header-item">Home</li>
        <li className="header-item" onClick={() => scrollIntoElement("shop")}>
          Shop
        </li>
        <li
          className="header-item"
          onClick={() => scrollIntoElement("about_us")}
        >
          About Us
        </li>
        <li className="header-item" onClick={() => scrollIntoElement("footer")}>
          Follow Us
        </li>
      </ul>
    </header>
  );
};

export default Header;

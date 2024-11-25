import React from "react";

const AboutUs = () => {
  return (
    <section className="about-us-section" id="about_us">
      <div className="about-us-header">
        <img className="about-us-background" src="/our_story.webp" alt="" />
        <h1 className="about-us-header-text">Our Story</h1>
      </div>
      <div className="about-us-content">
        <div className="about-us-history">
          <div className="about-us-text">
            <div className="logo-text">
              <img className="logo" src="/logo/logo.png" alt="" />
              <h1>Green Essence</h1>
            </div>
            <p>
              Green Essence Grocery, originally known as Green Essence Home and
              Farm, began its journey in 2022, founded by then High School
              Senior and visionary entrepreneur, Brooks-Carter. As the CEO and
              Founder of Green Essence Ventures, Brooks-Carter opened their
              first farmer’s market stand at the Piedmont Triad Farmers Market
              in Guilford County, North Carolina. From there, Green Essence
              began delivering fresh, local products directly to doorsteps
              across the Triad region, connecting families with sustainable,
              locally sourced goods.
            </p>
            <p>
              By 2023, Green Essence expanded its reach to include operations at
              the Charlotte Regional Farmers Market and the Western North
              Carolina Farmers Market, as well as participating in local pop-up
              markets and establishing partnerships with small wholesale
              accounts. Along with these expansions came an exciting
              diversification of offerings, featuring a robust selection of
              greenhouse and nursery stock and one of the state’s most extensive
              pumpkin selections.
            </p>
            <p>
              At the heart of Green Essence Grocery is a commitment to a simple
              yet impactful mission: to build an all-local marketplace that
              bridges the gap between regional producers and consumers. When you
              shop at Green Essence, you’ll find that every product is made
              right here in the Carolinas. With a collaborative network of local
              vendors, Green Essence makes shopping small more convenient than
              ever, providing your family with access to the finest local goods
              under the promise of being "Local All Together."
            </p>
          </div>
        </div>
        <div className="about-us-images">
          <img className="about-us-image" src="/our_story/img2.jpg" alt="" />
          <img className="about-us-image" src="/our_story/img3.png" alt="" />
          <img className="about-us-image" src="/our_story/img4.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

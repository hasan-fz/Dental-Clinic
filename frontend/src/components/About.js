import React from "react";
import NavBar from "./Navbar";

function About() {
  return (
    <>
      <NavBar />
      <div className="about">
        <p className="about-h1">About Us</p>
        <div className="about-h3">
          <h3>We value your smile.</h3>
        </div>
        <div className="about-div">
          <p className="about-p">
            "Radiant Smiles" dental clinic is a leading dental care center that
            takes pride in providing exceptional oral health services with a
            focus on patient comfort and satisfaction.
            <br /> <br /> Situated in a warm and welcoming environment, the
            clinic is equipped with state-of-the-art facilities and staffed by
            highly skilled and compassionate dental professionals. From routine
            check-ups to advanced dental treatments, "Radiant Smiles" offers a
            comprehensive range of services, including general dentistry,
            cosmetic dentistry, orthodontics, and more. <br /> <br /> Their team
            of experienced dentists and hygienists are dedicated to delivering
            personalized care, tailoring treatments to meet individual needs.
          </p>
          <img
            className="about-img"
            src="../../static/images/SmilingFaces.jpg"
          ></img>
        </div>
      </div>
    </>
  );
}

export default About;

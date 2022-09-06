import React from "react";

const AboutMe = ({ title }) => {
  const alertTitle = () => alert("Aboutme");

  return (
    <div className="card" onClick={alertTitle}>
      <p>{title}</p>
      <p></p>
      <p></p>
    </div>
  );
};

export default AboutMe;

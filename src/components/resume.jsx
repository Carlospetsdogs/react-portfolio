import React from 'react';
import resume from "../assets/CarlosRuiz.pdf"

const Resume = () => {
  const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

  return (
    <section>
      <h2>Resume</h2>
      <a href={resume} download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;

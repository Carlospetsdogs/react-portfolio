import React from 'react';

const Resume = () => {
  const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

  return (
    <section>
      <h2>Resume</h2>
      <a href="path-to-your-resume.pdf" download>Download Resume</a>
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
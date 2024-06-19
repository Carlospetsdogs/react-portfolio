import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'Marvel Movie Ratings', link: 'https://shanbeezy.github.io/marvel-movie-ratings/', repo: 'https://github.com/Shanbeezy/marvel-movie-ratings' },
    { title: 'Sounds of the KK', link: 'https://carlospetsdogs.github.io/Sounds-of-the-KK/', repo: 'https://github.com/Carlospetsdogs/Sounds-of-the-KK' },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={`path-to-project${index+1}-image.jpg`} alt={project.title} />
            </a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

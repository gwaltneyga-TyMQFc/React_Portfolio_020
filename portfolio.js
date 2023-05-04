import React from 'react';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Express Note Taker',
      image: 'https://via.placeholder.com/150',
      github: 'https://github.com/gwaltneyga-TyMQFc/Express_Note_Taker_011',
      url: 'https://gwaltney-express-note-taker.herokuapp.com/',
    },
    {
      id: 2,
      title: 'Work Day Scheduler',
      image: 'https://via.placeholder.com/150',
      github: 'https://github.com/gwaltneyga-TyMQFc/Work_Day_Scheduler_05',
      url: 'https://gwaltneyga-tymqfc.github.io/Work_Day_Scheduler_05/',
    },
    {
      id: 3,
      title: 'Marvelous Moves Collaboration Project',
      image: 'https://github.com/jakeroth0/marvelousMoves/raw/946542b52ab567f9edf718b09ad313f4b54d084a/assets/marvelousMovesScreenShot.png',
      github: 'https://github.com/jakeroth0/marvelousMoves',
      url: '',
    },
    {
      id: 4,
      title: 'Project 4',
      image: 'https://via.placeholder.com/150',
      github: 'https://github.com/mygithub/project4',
      url: 'https://myapp.com/project4',
    },
    {
      id: 5,
      title: 'Project 5',
      image: 'https://via.placeholder.com/150',
      github: 'https://github.com/mygithub/project5',
      url: 'https://myapp.com/project5',
    },
    {
      id: 6,
      title: 'Project 6',
      image: 'https://via.placeholder.com/150',
      github: 'https://github.com/mygithub/project6',
      url: 'https://myapp.com/project6',
    },
  ];

  return (
    <div className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <h3>{project.title}</h3>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <div className="links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.url} target="_blank" rel="noopener noreferrer">Live App</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
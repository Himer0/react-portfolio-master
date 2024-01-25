import React from 'react'
import './Achievement.css'
import ProjectCard from '../components/ProjectCard'

const Achievements = () => {
  // Manually define the project data
  const projectData = [
    {
      image_url: 'https://i.imgur.com/84fH3Mm.png',
      project_name:
        'Music Video for Mil and Hum',
      description:
        "During my time in Saint Columban College We have managed to make a musical video, the music video was about reminiscing in the past.",
      tech_stack: ['Pineapple', 'does not', 'belong on', 'pizza'],
      source_link:
        'https://www.youtube.com/watch?v=hPUSYT3aNEQ',
    },
  ]

  return (
    <div className="achievements" id="achievements">
      <h1 className="title achievement-title">Achievement Highlights</h1>
      <p className="projects-para">
        During my time at Saint Columban College I have managed to make alot of friends. Academically I've also somewhat maintained a bit of consistency.
      </p>
      <div className="projects-container">
        {projectData.map((project, id) => (
          <ProjectCard
            key={id}
            image={project.image_url}
            title={project.project_name}
            description={project.description}
            stacks={project.tech_stack}
            source_link={project.source_link}
          />
        ))}
      </div>
    </div>
  )
}

export default Achievements

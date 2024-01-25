import React from 'react'
import './Projects.css'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  // Manually define the project data
  const projectData = [
    {
      image_url:
        'https://i.imgur.com/84fH3Mm.png',
      project_name: 'Reminiscing',
      description:
        'For our Final project we were tasked to make a musical video for our subject Mil and Hum and this is what we made.',
      tech_stack: ['Filmora'],
      source_link:
        'https://www.youtube.com/watch?v=hPUSYT3aNEQ&t=12sutm_source=share&utm_medium=member_desktop',
    },
    // Add more projects as needed
  ]

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">Featured Projects</h1>
      <p className="projects-para">
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

export default Projects

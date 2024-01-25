import React from 'react'
import './Achievement.css'
import ProjectCard from '../components/ProjectCard'

const Achievements = () => {
  // Manually define the project data
  const projectData = [
    {
      image_url: 'https://i.imgur.com/84fH3Mm.png',
      project_name:
        'International University Carnival on E-Learning (IUCEL) 2022 - Gold Medal Winner',
      description:
        "My passion project, an Augmented Reality mobile application for learning the anatomy and physiology of respiratory system, has earned international recognition and a prestigious Gold Medal at IUCEL 2022! 🌐🏅🧬 What makes this achievement even more special is the invaluable impact it has on medical education. We all know that understanding the human body''s intricacies is a critical foundation for any healthcare professional, and my app aims to make this learning experience not only effective but also engaging and interactive.",
      tech_stack: ['IIDEL', 'IUCEL', 'Gold Medal', 'Adobe XD'],
      source_link:
        'https://www.youtube.com/watch?v=hPUSYT3aNEQ',
    },
  ]

  return (
    <div className="achievements" id="achievements">
      <h1 className="title achievement-title">Achievement Highlights</h1>
      <p className="projects-para">
        During my time at university, I've actively pursued involvement in
        various aspects of campus life. Academically, I've maintained a strong
        commitment to my studies, consistently striving to excel in my
        coursework and achieve second class upper honours. Simultaneously, I've
        also been highly engaged outside the classroom joining student clubs,
        organizations and extracurricular activities. My university years have
        been characterized by a balanced commitment to both academic excellence
        and active participation in extracurricular activities, fostering
        personal growth, and a well-rounded education.
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

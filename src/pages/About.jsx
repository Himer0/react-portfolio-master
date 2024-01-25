import React from 'react'
import './About.css'
import HTML from '../assets/html.png'
import VSCode from '../assets/vscode.png'
import ReactIcon from '../assets/react.png'
import GitLogo from '../assets/git.png'
import GitHublogo from '../assets/github.png'
import CSS from '../assets/css.png'
import BootStrap from '../assets/bootstrap.png'
import JavaScript from '../assets/javascript.png'
import Discord from '../assets/discord.png'
import Netlify from '../assets/netlify.svg'








const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="title about-title">aBOUT mE</h2>
      <p className="paragraph about-para">
        Hello, I am an 17 year old student in Saint Columban College. I am an front end developer that uses Html, Css, Javascript, and Bootstrap
        I also do not like pineapple on pizza.
      </p>
      <button className="music-video">
        <a
          href="https://www.youtube.com/watch?v=hPUSYT3aNEQ&t=19s&ab_channel=Narutouzom"
          target="_blank"
          rel="noreferrer"
        >
          Check our Music Video
        </a>
      </button>
      <div>
      <h2 className="skill-title">Front-End</h2>
       <div className="skills">
        <div className="skill">
          <img src={ReactIcon} alt="" />
          <p>React</p>
        </div>
        <div className="skill">
          <img src={JavaScript} alt="" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img src={HTML} alt="" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <img src={CSS} alt="" />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <img src={BootStrap} alt="" />
          <p>Bootstrap</p>
        </div>
       </div>
      </div>
      <h2 className="skill-title">Version Control & Deployment</h2>
      <div className="skills">
        <div className="skill">
          <img src={GitLogo} alt="" />
          <p>Git</p>
        </div>
        <div className="skill">
          <img src={GitHublogo} alt="" />
          <p>GitHub</p>
        </div>
        <div className="skill">
          <img src={Netlify} alt="" />
          <p>Netlify</p>
        </div>
      </div>
      <h2 className="skill-title">Tools</h2>
      <div className="skills">
        <div className="skill">
          <img src={VSCode} alt="" />
          <p>VS Code</p>
        </div>
      </div>

      <h2 className="skill-title">Communication</h2>
      <div className="skills">
      <div className="skill">
          <img src={Discord} alt="" />
          <p>Discord</p>
        </div>
      </div>
      <h2 className="skill-title">Soft Skills</h2>
      <div className="skills">
        <p className="soft-skill">Critical Thinking</p>
        <p className="soft-skill">Being Lazy¯\_(ツ)_/¯</p>
        <p className="soft-skill">Creativity</p>
        <p className="soft-skill">Problem Solving</p>
        <p className="soft-skill">Time Management</p>
      </div>
    </div>
  </section>
)

export default About

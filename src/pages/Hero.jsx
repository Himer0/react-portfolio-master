import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import Imu from "../assets/homer-hero-image.png";
import Typewriter from "typewriter-effect";

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">hELLO. i aM Kyeth Homer G. Carballo</h2>

        <h3 className="tagline">
         I play video games, eat, sleep :D
        </h3>
        
       
          
        
        <p className="paragraph">
         Pineapple doesnt belong on pizza because it is not a delicious pizza topping instead of something like pepperoni or at the very least olives you chose pineapple?
        </p>
        <div className="hero-btns">
          <button className="hire-me">
            <a
              href="https://youtu.be/hPUSYT3aNEQ"
              target="_blank"
              rel="noreferrer"
            >
              Check our Music Video
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              Say Hello
            </Link>
          </button>
        </div>
      </div>
      <img src={Imu} alt="Fiz" className="hero-image" />
    </div>
    <div className="social-icons">
      <a href="https://github.com/Himer0" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github" />
      </a>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-twitter" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCwg35jhluTCgLXjfTMQOyww"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-youtube" />
      </a>
      <a href="https://discord.gg/EhkJZpVyvX" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-discord" />
      </a>
    </div>
  </div>
);

export default Hero;

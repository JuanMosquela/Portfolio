import Title from "../title/Title"
import './about.css';
import git from '../../img/git.svg'
import html from '../../img/html.svg'
import css from '../../img/css.svg'
import javascript from '../../img/js.svg'
import react from '../../img/react.svg'
import bootstrap from '../../img/bootstrap.svg'
import sass from '../../img/sass.svg'
import github from '../../img/github.svg'
import material from '../../img/material.svg'


const About = () => {

  const icons = [
    html,
    css, 
    javascript, 
    react, 
    bootstrap,
    sass,
    git, 
    github, 
    material
  ]

  return (
      <section id="about">
          <div className="about-container">
            <div className="picture-profile">
              <figure>
                <img src="https://i.postimg.cc/50vxFCbY/IMG-6950-Editar.jpg" alt="" />
              </figure>
            </div>
            <div className="about-content">
              <Title title='Conoceme:' span='un poco sobre mi' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, temporibus laudantium alias veritatis iure omnis a, autem itaque veniam reiciendis dolores consectetur quos et similique porro est velit delectus sint nam. Adipisci dolorem qui totam non. Harum animi voluptatibus doloremque alias adipisci maxime, et blanditiis, commodi nemo hic soluta laudantium.</p>
              <Title title='Mis skills:' />              
              <div className="animation-wrapper">
              <figure className="icons-container">
                {
                  icons?.map((icon, index) => (
                    <img className="tec-icon" key={index} src={icon} alt="" />
                    
                  ))
                }
              </figure>
              </div>
            </div>
          </div>
      </section>
  )
}
export default About
import Title from "../title/Title"
import './about.css'

const About = () => {
  return (
      <section id="about">
          <div className="about-container">
            <figure>
              <img src="https://i.postimg.cc/50vxFCbY/IMG-6950-Editar.jpg" alt="" />
            </figure>
            <div className="about-content">
              <Title title='Sobre mi' span='un poco sobre mi' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, temporibus laudantium alias veritatis iure omnis a, autem itaque veniam reiciendis dolores consectetur quos et similique porro est velit delectus sint nam. Adipisci dolorem qui totam non. Harum animi voluptatibus doloremque alias adipisci maxime, et blanditiis, commodi nemo hic soluta laudantium.</p>
            </div>
          </div>
      </section>
  )
}
export default About
import { Link } from 'react-router-dom'
import './hero.css';
import JuanMosquellaCV from '../../img/cv.pdf'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className="content">
            <h1>Juan Manuel Mosquella</h1>
            <p>Soy desarrollador frontend</p>
            <a href={JuanMosquellaCV} download="Juan Mosquella-CV.pdf">Descargar CV</a>
            <Link to='/contacto'>Contactame</Link>
        </div>

    </section>
  )
}
export default Hero
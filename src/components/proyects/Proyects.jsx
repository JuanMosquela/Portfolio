import Slider from "../slider/Slider"
import './proyects.css'

const Proyects = () => {
  return (
    <section id="proyects" className="container-proyects">
        <div className="container">
            <h2>Proyectos que he realizado:</h2>
        
            <Slider />
        </div>
    </section>
  )
}
export default Proyects
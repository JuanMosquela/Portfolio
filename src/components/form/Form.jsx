import Title from "../title/Title"
import './form.css'

const Form = () => {
  return (
    <section id="contact">
        
        <div className="contact-wrapper">
          
          <div className="contact-info">
            <Title className='title' title='Contactame:' span='¿Te gusto mi trabajo?' />
            <div className="contact-list">
              <h3>Email:</h3>
              <p>jmosquella11@gmail.com</p>
            </div>
            <div className="contact-list">
              <h3>Email:</h3>
              <p>jmosquella11@gmail.com</p>
            </div>
            <div className="contact-list">
              <h3>Email:</h3>
              <p>jmosquella11@gmail.com</p>
            </div>
          </div>
          <form className="form-container" action="">
            <div className="input-group">
              <label htmlFor="">Nombre:</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label htmlFor="">Email:</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label htmlFor="">Mensaje:</label>
              <input type="text" />
            </div>
            <button type="submit">Enviar</button>
        </form>
        </div>
        
    </section>
  )
}
export default Form
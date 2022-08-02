import './proyectCard.css';


const ProyectCard = ({ title, description, img }) => {
  return (
    <div className="proyect-card">
        <figure>
            <img src={img} alt="" />
        </figure>       
        
    </div>
  )
}
export default ProyectCard
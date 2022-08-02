import './title.css'

const Title = ({ title, span }) => {
  return (
    <div className="heading">
        <span>{span}</span>
        <h2>{title}</h2> 
    </div>   
  )
}
export default Title
import "./slide.css"



const Slide = ({ img, title, description }) => {
  return (
    <div className="slide">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="content">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="https://github.com/JuanMosquela/ShoppingCart/deployments/activity_log?environment=github-pages">Leer mas</a>
        </div>
    </div>
  )
}
export default Slide
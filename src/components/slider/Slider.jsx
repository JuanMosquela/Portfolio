import Slide from "./Slide"
import Memo from "../../img/memo.png"
import './slider.css'
import Cart from '../../img/cart.png'
import Physical from '../../img/physical.png'

const Slider = () => {

  const slides = [

      {
        id:'1',
        title: 'Memorama Rick & Morty',
        img: '../../img/memo.png',
        description: 'Este es un juego de memoria hecho con Javascript'
      },
      {
        id:'2',
        title: 'Shopping Cart',
        img: '../../img/cart.png',
        description: 'Este es un carrito de compra hecho con puro Javascript, Local Storage y peticion de datos via Fetch'

      },
      {
        id:'3',
        title: 'Physical Point',
        img: '../../img/physical.png',
        description: 'Este es una pagina de presentacioin para uno de los gimnasios mas grtandes de zona sur'

      }

    ]

    {
      slides.map(el => console.log(el))
    }
    


  return (

    <div className="container-slides">
      {
        <Slide
          key={slides.id}
          title= {slides.title}
          img={slides.img}
          description= {slides.description}

        />
      }       

    </div>
  )
}
export default Slider
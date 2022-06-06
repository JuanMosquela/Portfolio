import './header.css'
import logo from '../../img/logo.png'

const Header = () => {
  return (
    <header className="header-container">
        <figure>
            <img src={logo} alt="" />
        </figure>
        <nav className="navbar">           
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#proyects">Proyects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

    </header>
  )
}
export default Header
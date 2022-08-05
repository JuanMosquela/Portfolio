import './header.css'
import logo from '../../img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider'
import {FaMoon, FaSun} from 'react-icons/fa'



const Header = () => {

  

  const { theme, handleTheme } = useContext(ThemeContext)

 

  const navBar = [
    'home',    
    'proyectos',
    'contacto'
  ]
  return (
    <header className="header-container" style={{backgroundColor: theme ? '#000' : '#FFF'}}>
        
        
        
        <nav className="navbar">           
            <ul>
                {navBar.map((li, i) => (
                  <Link key={i} to={`${li}`}><li style={{color: theme ? '#FFF' : '#000'}}>{li}</li></Link>
                ))}
            </ul>
        </nav>
        <div 
          className="theme-icons"
          onClick={() => handleTheme(!theme)}>
          {theme ? <FaSun /> : <FaMoon /> }
          
        </div>

    </header>
  )
}
export default Header
import './header.css'
import logo from '../../img/logo.png'
import { Link, useNavigate } from 'react-router-dom'



const Header = () => {

  const navigate = useNavigate()

 

  const navBar = [
    
    
    'proyectos',
    'contacto'
  ]
  return (
    <header className="header-container">
        
        <Link className='logo' to='/'>Mosquella</Link>
        
        <nav className="navbar">           
            <ul>
                {navBar.map((li, i) => (
                  <Link key={i} to={`${li}`}><li>{li}</li></Link>
                ))}
            </ul>
        </nav>

    </header>
  )
}
export default Header
import '../Components.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className="navbar">
            <div className='navbar-logo'>Mi App</div>
            <ul className='navbar-links'>
                <li><a href="/">Inicio</a></li>
                <li><a href="/books">Libros</a></li>
            </ul>
        </div>
    )
}

export default Navbar
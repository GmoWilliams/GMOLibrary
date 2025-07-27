import '../Components.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className="navbar">
            <div className='navbar-logo'>{'GMO Library'}</div>
            <ul className='navbar-links'>
                <li><a href="/">{'Home'}</a></li>
                <li><a href="/books">{'Books'}</a></li>
            </ul>
        </div>
    )
}

export default Navbar
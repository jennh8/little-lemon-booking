import './App.css';
import { Link } from 'react-router-dom';

export default function Nav() {
return(
    <>
        <nav className='nav'>
            <ul className="nav-ul">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link>About</Link>
                </li>
                <li>
                    <Link>Menu</Link>
                </li>
                <li>
                    <Link to="/Booking">Reservations</Link>
                </li>
                <li>
                    <Link>Order Online</Link>
                </li>
                <li>
                    <Link>Login</Link>
                </li>
            </ul>
        </nav>
    </>
)
}
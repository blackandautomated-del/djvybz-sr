import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav className='nav'>
      <Link to='/' className='nav__logo'>DJ VYBZ SR</Link>
      <ul className='nav__links'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/music'>Music</Link></li>
        <li><Link to='/events'>Events</Link></li>
      </ul>
      <Link to='/bookings' className='nav__cta'>Book Now</Link>
    </nav>
  );
}

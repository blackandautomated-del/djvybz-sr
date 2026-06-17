import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__logo'>DJ VYBZ SR</div>
      <nav className='footer__links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/music'>Music</Link>
        <Link to='/events'>Events</Link>
        <Link to='/bookings'>Bookings</Link>
      </nav>
      <div className='footer__social'>
        <span className='footer__dot' style={{ background: 'var(--green)' }} />
        <span className='footer__dot' style={{ background: 'var(--gold)' }} />
        <span className='footer__dot' style={{ background: 'var(--red)' }} />
        <span>@djvybz_sr</span>
      </div>
    </footer>
  );
}

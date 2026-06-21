import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className='nav'>
        <Link to='/' className='nav__logo'>SHARPRAZER SOUND</Link>
        <ul className='nav__links'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/music'>Music</Link></li>
          <li><Link to='/events'>Events</Link></li>
        </ul>
        <div className='nav__right'>
          <Link to='/bookings' className='nav__cta'>Book Now</Link>
          <button
            className={`nav__hamburger${open ? ' nav__hamburger--open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {open && (
        <div className='nav__overlay' onClick={() => setOpen(false)}>
          <div className='nav__drawer' onClick={(e) => e.stopPropagation()}>
            <ul className='nav__drawer-links'>
              <li><Link to='/' className='nav__drawer-link'>Home</Link></li>
              <li><Link to='/about' className='nav__drawer-link'>About</Link></li>
              <li><Link to='/music' className='nav__drawer-link'>Music</Link></li>
              <li><Link to='/events' className='nav__drawer-link'>Events</Link></li>
              <li><Link to='/bookings' className='nav__drawer-link nav__drawer-link--cta'>Book Now</Link></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

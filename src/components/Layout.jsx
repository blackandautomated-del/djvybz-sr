import { Outlet, useLocation, Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();
  const showMobileBar = pathname !== '/bookings';

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      {showMobileBar && (
        <div className='mobile-book-bar'>
          <Link to='/bookings' className='mobile-book-bar__cta'>Book Now →</Link>
        </div>
      )}
    </>
  );
}

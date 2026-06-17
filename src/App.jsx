import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';
import Events from './pages/Events';
import Bookings from './pages/Bookings';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/music' element={<Music />} />
        <Route path='/events' element={<Events />} />
        <Route path='/bookings' element={<Bookings />} />
      </Route>
    </Routes>
  );
}

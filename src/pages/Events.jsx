import FlagStripe from '../components/FlagStripe';
import { Link } from 'react-router-dom';
import posterLRFF from '../assets/london-reggae-food-festival-2026.jpg';

const UPCOMING = [
  {
    day: '28',
    month: 'June',
    year: '2026',
    name: 'London Reggae & Food Festival — Rooftop Edition',
    venue: 'Freight Brixton, London SW9 8PB',
    ticketUrl: 'https://www.skiddle.com/whats-on/London/Freight-Brixton/London-Reggae--Food-Festival---Rooftop-Edition/42267827/',
    poster: posterLRFF,
  },
];

const PAST = [
  {
    day: '25',
    month: 'May',
    year: '2026',
    name: 'City Splash',
    venue: 'Clapham Common, London',
    crowd: '30,000+ fans',
  },
  {
    day: '19',
    month: 'Apr',
    year: '2025',
    name: 'Lovers Rock',
    venue: 'London',
    crowd: '',
  },
];

export default function Events() {
  return (
    <div className='events-page'>
      <div className='events-page__inner'>
        <p className='section-label'>Live Dates</p>
        <h1 className='section-heading'>Events</h1>
        <FlagStripe />

        <section className='events-page__section'>
          <h2 className='events-page__section-title'>Upcoming</h2>
          <div className='events-list'>
            {UPCOMING.map((ev) => (
              <div key={ev.name} className='events-list__item'>
                {ev.poster && (
                  <img
                    src={ev.poster}
                    alt={ev.name + ' poster'}
                    className='events-list__poster'
                  />
                )}
                <div className='events-list__date'>
                  <span className='events-list__day'>{ev.day}</span>
                  <span className='events-list__monthyear'>{ev.month} {ev.year}</span>
                </div>
                <div className='events-list__info'>
                  <div className='events-list__name'>{ev.name}</div>
                  <div className='events-list__venue'>{ev.venue}</div>
                </div>
                <a
                  href={ev.ticketUrl}
                  className='btn-primary'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Get Tickets
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className='events-page__section events-page__section--past'>
          <h2 className='events-page__section-title'>Past Events</h2>
          <div className='events-list events-list--past'>
            {PAST.map((ev) => (
              <div key={ev.name + ev.year} className='events-list__item events-list__item--past'>
                <div className='events-list__date'>
                  <span className='events-list__day'>{ev.day}</span>
                  <span className='events-list__monthyear'>{ev.month} {ev.year}</span>
                </div>
                <div className='events-list__info'>
                  <div className='events-list__name'>{ev.name}</div>
                  <div className='events-list__venue'>{ev.venue}</div>
                  {ev.crowd && <div className='events-list__crowd'>{ev.crowd}</div>}
                </div>
                <span className='events-list__past-badge'>Past</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to='/bookings' className='btn-primary'>Book DJ Vybz SR</Link>
        </div>
      </div>
    </div>
  );
}

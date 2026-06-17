import { Link } from 'react-router-dom';
import FlagStripe from '../components/FlagStripe';
import djLogo from '../assets/djvybzsr-logo.png';
import './Home.css';

function Hero() {
  return (
    <section className='hero'>
      <div className='hero__bg' />
      <div className='hero__flag-bar'>
        <div style={{ background: 'var(--green)' }} />
        <div style={{ background: 'var(--gold)' }} />
        <div style={{ background: 'var(--red)' }} />
      </div>
      <div className='hero__inner'>
        <p className='hero__sound'>Sharprazer Sound</p>
        <img src={djLogo} alt='DJ Vybz SR' className='hero__logo-img' />
        <span className='hero__badge'>🇯🇲 &nbsp;JAMAICA</span>
        <p className='hero__sub'>London · Reggae · Dancehall · MC</p>
        <FlagStripe width={100} />
        <div className='hero__ctas'>
          <Link to='/bookings' className='btn-primary'>Book Now</Link>
          <Link to='/music' className='btn-ghost'>Listen</Link>
        </div>
      </div>
    </section>
  );
}

function AboutStrip() {
  return (
    <section className='about-strip'>
      <div className='about-strip__img'>PHOTO PLACEHOLDER</div>
      <div className='about-strip__text'>
        <p className='section-label'>About</p>
        <h2 className='section-heading'>True Jamaican.<br />London Built.</h2>
        <FlagStripe />
        <p>
          DJ Vybz SR is a London-based DJ, MC, and founding member of Sharprazer Sound —
          bringing authentic Jamaican dancehall and reggae culture to stages across the UK and Europe.
        </p>
        <p>
          From Wireless Festival to Lovers Rock, from The Yaad Stage to Freight Brixton —
          he's built a reputation on energy, authenticity, and pure riddim.
        </p>
        <Link to='/about' className='link-arrow'>Full Story →</Link>
      </div>
    </section>
  );
}

const UPCOMING_EVENTS = [
  { day: '28', month: 'June 2026', name: 'London Reggae & Food Festival', venue: 'Freight Brixton, London SW9 8PB', ticketUrl: 'https://www.skiddle.com/whats-on/London/Freight-Brixton/London-Reggae--Food-Festival---Rooftop-Edition/42267827/' },
];

function EventsPreview() {
  return (
    <section className='events-preview'>
      <p className='section-label'>Upcoming</p>
      <h2 className='section-heading'>Next Events</h2>
      <FlagStripe />
      <div className='events-grid'>
        {UPCOMING_EVENTS.map((ev) => (
          <div key={ev.name} className='event-card'>
            <div className='event-card__date'>{ev.day}</div>
            <div className='event-card__month'>{ev.month}</div>
            <div className='event-card__name'>{ev.name}</div>
            <div className='event-card__venue'>{ev.venue}</div>
            <a href={ev.ticketUrl} className='event-card__ticket'>Get Tickets</a>
          </div>
        ))}
      </div>
      <div className='events-preview__footer'>
        <Link to='/events' className='link-arrow'>All Events →</Link>
      </div>
    </section>
  );
}

const SC_LATEST_EMBED =
  'https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F264359230&color=%23FFD700&auto_play=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false';

function MixFeature() {
  return (
    <section className='mix-section'>
      <p className='section-label'>Latest Mix</p>
      <h2 className='section-heading'>Listen Up</h2>
      <FlagStripe />
      <div className='mix-player'>
        <iframe
          title='DJ Vybz SR — Latest Mix'
          width='100%'
          height='166'
          scrolling='no'
          frameBorder='no'
          allow='autoplay; encrypted-media'
          src={SC_LATEST_EMBED}
        />
      </div>
      <div className='mix-sc-link'>
        <a
          href='https://soundcloud.com/user-459623686'
          target='_blank'
          rel='noreferrer'
          className='link-arrow'
        >
          Explore all mixes on SoundCloud →
        </a>
      </div>
    </section>
  );
}

const PRESS_CREDITS = ['Wireless', 'Lovers Rock', 'The Yaad Stage', 'Proud City', 'London Reggae & Food Festival'];

function Press() {
  return (
    <section className='press-section'>
      <p className='section-label'>As Seen At</p>
      <h2 className='section-heading'>The Stages</h2>
      <FlagStripe width={80} />
      <div className='press-grid'>
        {PRESS_CREDITS.map((name) => (
          <div key={name} className='press-item'>{name}</div>
        ))}
      </div>
    </section>
  );
}

function BookingStrip() {
  return (
    <div className='booking-strip'>
      <div>
        <h2 className='booking-strip__heading'>Ready to Book?</h2>
        <p className='booking-strip__sub'>Festivals · Club Nights · Private Events · Sound Clashes</p>
      </div>
      <Link to='/bookings' className='btn-booking'>Get In Touch</Link>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStrip />
      <EventsPreview />
      <MixFeature />
      <Press />
      <BookingStrip />
    </>
  );
}

import { Link } from 'react-router-dom';
import FlagStripe from '../components/FlagStripe';
import useFadeIn from '../hooks/useFadeIn';
import './About.css';

const CREDITS = [
  { name: 'City Splash', venue: 'Clapham Common, London', note: '30,000+ fans', year: '2026' },
  { name: 'Wireless Festival', venue: 'Crystal Palace Park, London', note: "UK's flagship urban festival", year: '2024' },
  { name: 'SXSW London', venue: 'Various, London', note: 'International showcase', year: '2024' },
  { name: 'The Yaad Stage', venue: 'London', note: '', year: '' },
  { name: 'Proud City', venue: 'London', note: '', year: '' },
  { name: 'London Reggae & Food Festival', venue: 'Freight Brixton', note: '', year: '2026' },
  { name: 'Lovers Rock', venue: 'London', note: '', year: '2025' },
];

const ROLES = ['DJ', 'MC', 'Sound System Selector'];
const GENRES = ['Dancehall', 'Lovers Rock', 'Reggae', 'Roots', 'Bashment'];

export default function About() {
  const bioRef = useFadeIn();
  const creditsRef = useFadeIn();
  const rolesRef = useFadeIn();

  return (
    <div className='about-page'>
      <header className='about-page__hero'>
        <p className='section-label'>Sharprazer Sound</p>
        <h1 className='section-heading'>True Jamaican.<br />London Built.</h1>
        <FlagStripe />
      </header>

      <section ref={bioRef} className='about-bio fade-in-section'>
        <div className='about-bio__photo'>
          <div className='about-bio__photo-flag' />
        </div>
        <div className='about-bio__text'>
          <p>
            DJ Vybz SR is a London-based DJ, MC, and founding member of Sharprazer Sound — the
            sound system collective built on authentic Jamaican dancehall and reggae. With Jamaican
            roots and a career forged in the UK, he has earned his place on stages that demand
            more than good taste.
          </p>
          <p>
            As MC and selector for Sharprazer, Vybz SR doesn't just play records. He commands
            the room — reading crowds at festivals of 30,000 people with the same precision he
            brings to intimate reggae nights.
          </p>
          <p>
            From Wireless to SXSW London to City Splash, his reputation is built on energy,
            authenticity, and an uncompromising knowledge of the music. Whether it's deep roots,
            bashment, or lovers rock — he knows what the people need.
          </p>
          <Link to='/bookings' className='link-arrow' style={{ marginTop: '8px', display: 'inline-block' }}>
            Book DJ Vybz SR →
          </Link>
        </div>
      </section>

      <section ref={creditsRef} className='about-credits fade-in-section'>
        <div className='about-credits__inner'>
          <p className='section-label'>Credits</p>
          <h2 className='section-heading'>The Stages</h2>
          <FlagStripe />
          <div className='about-credits__grid'>
            {CREDITS.map((c) => (
              <div key={c.name} className='credit-card'>
                <div className='credit-card__main'>
                  <div className='credit-card__name'>{c.name}</div>
                  <div className='credit-card__venue'>{c.venue}</div>
                  {c.note && <div className='credit-card__note'>{c.note}</div>}
                </div>
                {c.year && <div className='credit-card__year'>{c.year}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={rolesRef} className='about-roles fade-in-section'>
        <div className='about-roles__inner'>
          <p className='section-label'>What He Does</p>
          <h2 className='section-heading'>Skills &amp; Genres</h2>
          <FlagStripe />
          <div className='about-roles__pills'>
            {ROLES.map((r) => (
              <span key={r} className='role-pill'>{r}</span>
            ))}
          </div>
          <div className='about-genres'>
            {GENRES.map((g) => (
              <span key={g} className='genre-pill'>{g}</span>
            ))}
          </div>
        </div>
      </section>

      <div className='about-cta'>
        <Link to='/bookings' className='btn-primary'>Book DJ Vybz SR</Link>
      </div>
    </div>
  );
}

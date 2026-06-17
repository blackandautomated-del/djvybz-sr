import { Link } from 'react-router-dom';
import FlagStripe from '../components/FlagStripe';
import useFadeIn from '../hooks/useFadeIn';
import pressPhoto from '../assets/vybz-sr-press.jpg';
import './About.css';

const CREDITS = [
  { name: 'City Splash', venue: 'Brockwell Park, London', note: '30,000+ fans', year: '2025' },
  { name: 'Wireless Festival', venue: 'Drip VIP Village, London', note: '', year: '' },
  { name: 'SXSW London', venue: "Becca D's Deadly Stage", note: '', year: '2025' },
  { name: 'The Yaad Stage', venue: 'Popcaan · Tarrus Riley · Spice', note: '', year: '' },
  { name: 'Proud City', venue: 'London', note: '', year: '' },
  { name: 'London Reggae & Food Festival', venue: 'Freight Brixton', note: '', year: '2026' },
  { name: 'Lovers Rock UK', venue: 'Resident DJ', note: '', year: '' },
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
          <img src={pressPhoto} alt='DJ Vybz SR performing at City Splash, Brockwell Park' className='about-bio__photo-img' />
          <p className='about-bio__caption'>City Splash · Brockwell Park · 2025</p>
          <div className='about-bio__photo-flag' />
        </div>
        <div className='about-bio__text'>
          <p>
            DJ Vybz SR is a London-based DJ, MC, and CEO of Sharprazer Sound. Of Jamaican heritage,
            he brings the authentic weight of dancehall, lovers rock, reggae, roots, and bashment to
            every room he works — whether that's a 30,000-strong festival crowd or an intimate
            sound system night.
          </p>
          <p>
            His credits span City Splash at Brockwell Park, Wireless Festival's Drip VIP Village,
            SXSW London 2025 on Becca D's Deadly stage, The Yaad Stage alongside Popcaan, Tarrus
            Riley, and Spice, and the London Reggae &amp; Food Festival at Freight Brixton. He holds
            a residency at Lovers Rock UK and serves as official host for Becca Dudley and Shayna T Marie.
          </p>
          <p>
            Vybz SR is available for festival bookings, club nights, brand activations, and hosted
            events. Enquiries via the bookings page.
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

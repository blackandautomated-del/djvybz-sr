import { useState } from 'react';
import FlagStripe from '../components/FlagStripe';
import useFadeIn from '../hooks/useFadeIn';
import './Bookings.css';

const EVENT_TYPES = [
  'Festival / Stage Show',
  'Club Night',
  'Sound System Event',
  'Private Hire',
  'Corporate Event',
  'Other',
];

const AVAILABLE_FOR = [
  {
    icon: '🎧',
    title: 'DJ Sets',
    desc: 'Dancehall, reggae, lovers rock, roots and bashment. Festival stages to intimate club nights.',
  },
  {
    icon: '🎤',
    title: 'MC Sets',
    desc: 'Full MC vocal performance. Dancehall toasting, crowd interaction, and energy control.',
  },
  {
    icon: '🔊',
    title: 'Sound System',
    desc: 'Sharprazer Sound in full effect. Clash-ready, authentic Jamaican sound system culture.',
  },
  {
    icon: '🎉',
    title: 'Private Hire',
    desc: 'Weddings, milestone birthdays, community events and private parties across the UK.',
  },
  {
    icon: '🏟️',
    title: 'Festival Stages',
    desc: 'Headline and support slots. Stage experience from 500 to 30,000+ fans.',
  },
  {
    icon: '🌙',
    title: 'Club Nights',
    desc: 'Late-night dance sessions. Keeps the room locked from 10pm to close.',
  },
];

export default function Bookings() {
  const availableRef = useFadeIn();
  const formRef = useFadeIn();

  const [form, setForm] = useState({
    name: '',
    organisation: '',
    eventType: '',
    eventDate: '',
    venue: '',
    message: '',
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Replace with Formspree endpoint → action="https://formspree.io/f/YOUR_FORM_ID"
    const subject = encodeURIComponent(
      `Booking Enquiry — ${form.eventType || 'General'} — ${form.eventDate || 'Date TBC'}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Organisation: ${form.organisation}`,
        `Event Type: ${form.eventType}`,
        `Event Date: ${form.eventDate}`,
        `Venue: ${form.venue}`,
        '',
        'Message:',
        form.message,
      ].join('\n')
    );
    // TODO: Replace BOOKING_EMAIL_PLACEHOLDER with client's booking email address
    window.location.href = `mailto:BOOKING_EMAIL_PLACEHOLDER?subject=${subject}&body=${body}`;
  }

  return (
    <div className='bookings-page'>
      <header className='bookings-hero'>
        <p className='section-label'>Sharprazer Sound</p>
        <h1 className='section-heading'>Book DJ Vybz SR</h1>
        <FlagStripe />
        <p className='bookings-hero__sub'>
          Available for festivals, club nights, sound system events and private hire
          across the UK and Europe.
        </p>
      </header>

      <section ref={availableRef} className='bookings-available fade-in-section'>
        <div className='bookings-available__inner'>
          <p className='section-label'>Available For</p>
          <h2 className='section-heading'>What He Does</h2>
          <FlagStripe />
          <div className='available-grid'>
            {AVAILABLE_FOR.map((item) => (
              <div key={item.title} className='available-card'>
                <span className='available-card__icon'>{item.icon}</span>
                <h3 className='available-card__title'>{item.title}</h3>
                <p className='available-card__desc'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={formRef} className='bookings-form-section fade-in-section'>
        <div className='bookings-form-inner'>
          <p className='section-label'>Get In Touch</p>
          <h2 className='section-heading'>Send An Enquiry</h2>
          <FlagStripe />
          <form className='booking-form' onSubmit={handleSubmit}>
            <div className='booking-form__row'>
              <div className='booking-form__field'>
                <label>Name *</label>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder='Your full name'
                />
              </div>
              <div className='booking-form__field'>
                <label>Organisation</label>
                <input
                  type='text'
                  name='organisation'
                  value={form.organisation}
                  onChange={handleChange}
                  placeholder='Promoter / company / event name'
                />
              </div>
            </div>
            <div className='booking-form__row'>
              <div className='booking-form__field'>
                <label>Event Type *</label>
                <select name='eventType' value={form.eventType} onChange={handleChange} required>
                  <option value=''>Select event type</option>
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className='booking-form__field'>
                <label>Event Date</label>
                <input
                  type='date'
                  name='eventDate'
                  value={form.eventDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='booking-form__field'>
              <label>Venue / Location</label>
              <input
                type='text'
                name='venue'
                value={form.venue}
                onChange={handleChange}
                placeholder='Venue name and city'
              />
            </div>
            <div className='booking-form__field'>
              <label>Message *</label>
              <textarea
                name='message'
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder='Tell us about your event — expected attendance, set duration, anything else we should know.'
              />
            </div>
            <button type='submit' className='btn-primary'>Send Enquiry</button>
          </form>

          <div className='bookings-direct'>
            <p className='bookings-direct__label'>Prefer to reach out directly?</p>
            <a
              href='https://www.instagram.com/djvybz_sr/'
              target='_blank'
              rel='noopener noreferrer'
              className='bookings-direct__handle'
            >
              @djvybz_sr
            </a>
            <span className='bookings-direct__note'>Instagram DM for urgent enquiries</span>
          </div>
        </div>
      </section>
    </div>
  );
}

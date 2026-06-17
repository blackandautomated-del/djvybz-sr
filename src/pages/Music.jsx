import './Home.css';

const SC_PROFILE_EMBED =
  'https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F264359230&show_artwork=true&color=%23F97316&auto_play=false&show_comments=false';

export default function Music() {
  return (
    <main className='music-page'>
      <section className='music-hero'>
        <p className='section-label'>Sharprazer Sound</p>
        <h1 className='section-heading'>Music &amp; Mixes</h1>
        <p className='music-hero__sub'>
          Authentic Jamaican dancehall and reggae — straight from the sound system to your ears.
        </p>
      </section>

      <section className='music-player-section'>
        <div className='music-player-wrap'>
          <iframe
            title='Sharprazer Sound — DJ Vybz SR'
            width='100%'
            height='450'
            scrolling='no'
            frameBorder='no'
            allow='autoplay; encrypted-media'
            src={SC_PROFILE_EMBED}
          />
        </div>
        <div className='music-sc-link'>
          <a
            href='https://soundcloud.com/user-459623686'
            target='_blank'
            rel='noreferrer'
            className='btn-ghost'
          >
            Open on SoundCloud →
          </a>
        </div>
      </section>
    </main>
  );
}

import { useState } from 'react';
import './PasswordGate.css';

const SESSION_KEY = 'sr_auth';
const VALID_USER = 'BESTBES';
const VALID_PASS = 'bestbes';

export default function PasswordGate({ children }) {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(SESSION_KEY) === '1');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);

  if (authed) return children;

  function handleSubmit(e) {
    e.preventDefault();
    if (user === VALID_USER && pass === VALID_PASS) {
      sessionStorage.setItem(SESSION_KEY, '1');
      setAuthed(true);
    } else {
      setError(true);
    }
  }

  return (
    <div className='gate'>
      <div className='gate__box'>
        <p className='gate__label'>SHARPRAZER SOUND</p>
        <h1 className='gate__heading'>Coming Soon</h1>
        <p className='gate__sub'>Enter your credentials to preview the site.</p>
        <form className='gate__form' onSubmit={handleSubmit}>
          <input
            className='gate__input'
            type='text'
            placeholder='Username'
            autoComplete='username'
            value={user}
            onChange={(e) => { setUser(e.target.value); setError(false); }}
          />
          <input
            className='gate__input'
            type='password'
            placeholder='Password'
            autoComplete='current-password'
            value={pass}
            onChange={(e) => { setPass(e.target.value); setError(false); }}
          />
          {error && <p className='gate__error'>Incorrect credentials.</p>}
          <button className='gate__btn' type='submit'>Enter</button>
        </form>
      </div>
    </div>
  );
}

import React, { useRef, useState } from 'react';

//utility functions
import { generatePassword } from '../utiles/Form.utiles';

export default function Form() {
  const numberRef = useRef();
  const symbolsRef = useRef();
  const lengthRef = useRef();

  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let newPassword = generatePassword(
      numberRef.current.checked,
      symbolsRef.current.checked,
      lengthRef.current.checked || 6
    );

    setPassword(newPassword);
  };

  return (
    <form className='password_form'>
      <h2>Generate a secure password</h2>
      <div className='password_inputs'>
        <h4 className='password_text'>{password}</h4>
        <div className='flex'>
          <label htmlFor='password-length'>Password Length</label>
          <input
            type='number'
            max={72}
            min={6}
            name='password-length'
            style={{ maxWidth: '8ch' }}
            ref={lengthRef}
          />
        </div>
        <div className='flex'>
          <label htmlFor='numbers'>Include numbers ?</label>
          <input type='checkbox' name='numbers' ref={numberRef} />
        </div>
        <div className='flex'>
          <label htmlFor='symbols'>Include symbols ?</label>
          <input type='checkbox' name='symbols' ref={symbolsRef} />
          <button className='btn'>Generate</button>
        </div>
      </div>
    </form>
  );
}

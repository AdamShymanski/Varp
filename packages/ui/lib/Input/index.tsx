import {css} from '@emotion/react';
import React from 'react';

const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: transparent;
  }

  margin-top: 3.4vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  position: relative;

  .label {
    color: #7f7f7f;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }
  .error-msg {
    font-family: 'Poppins', sans-serif;
    color: #0082ff;
    font-size: 0.8vw;
    font-weight: 500;
    margin-top: 8px;
  }
  .inputWrapper {
    position: relative;
    display: flex;
    align-items: center;

    button {
      position: absolute;
      right: -22%;

      padding: 4px 22px;

      border: none;
      background: #0082ff;
      border-radius: 5px;

      font-size: 1em;
      font-weight: 600;
      font-family: 'Poppins', sans-serif;
    }
    p {
      position: absolute;
      right: 0;

      margin-top: 0.9%;

      padding: 2.5% 20px;
      background: #161616;

      font-size: 1em;
      font-family: 'Poppins', sans-serif;
      color: #7f7f7f;
    }
  }
  .input {
    margin: 7px 0 3px 0;
    padding: 0 10px;

    color: #f4f4f4;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;

    border: none;
    outline: none;
    border-radius: 1px 4px 4px 1px;
    border-left: 3px solid #5c5c5c;

    background: #161616;
    border-radius: 2px 0 0 2px;
    transition: 350ms;
  }
  input:focus {
    border-left: 3px solid #0082ff;
    transition: 350ms;
  }

  .small {
    .label {
      font-size: 0.7em;
    }
    .input {
      width: 210px;
      height: 32px;
      font-size: 0.8em;
    }
  }
  .medium {
    .label {
      font-size: 0.8em;
    }
    .input {
      width: 270px;
      height: 40px;
      font-size: 0.95em;
    }
  }
  .big {
    .label {
      font-size: 1.2em;
    }
    .input {
      width: 500px;
      height: 50px;
      font-size: 1.1em;
    }
  }
`;

export interface Props {
  size: string;
  label: string;

  error?: any;
  name?: string;
  type?: string;
  reference?: any;
  variant?: string;
  evState?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: any;
}

export function Input(props: Props) {
  const {
    onChange,
    placeholder,
    label = 'Storybook',
    variant = 'regular',
    name = 'password',
    evState,
    size = 'medium',
    disabled = false,
    error,
    reference,
    type = '',
  } = props;
  if (variant === 'withButton') {
    return (
      <main css={style}>
        <div className={size}>
          <p className={`label`}>{label}</p>
          <div className={'inputWrapper'}>
            <input
              name={name}
              className={`input`}
              type={type}
              disabled={disabled}
              ref={reference}
              placeholder={placeholder}
              onChange={onChange}
            />
            {evState && <p>Email not verified</p>}
            {evState && <button type={'button'}>Verify</button>}
          </div>

          <p className="error-msg">{error && error.message}</p>
        </div>
      </main>
    );
  }
  return (
    <main css={style}>
      <div className={size}>
        <p className={`label`}>{label}</p>
        <input
          name={name}
          className={`input`}
          type={type}
          disabled={disabled}
          ref={reference}
          placeholder={placeholder}
        />
        <p className="error-msg">{error && error.message}</p>
      </div>
    </main>
  );
}

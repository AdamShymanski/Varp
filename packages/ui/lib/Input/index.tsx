import {css} from '@emotion/react';
import React from 'react';
// import {Disabled} from '../Button/Button.stories';

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
  .input {
    margin: 7px 0 3px 0;
    padding: 0 10px;

    color: #f4f4f4;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;

    border: none;
    outline: none;
    border-radius: 1px 4px 4px 1px;
    border-left: 2px solid #5c5c5c;

    background: #121212;
    transition: 350ms;
  }
  input:focus {
    border-left: 2px solid #0082ff;
    transition: 350ms;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;

    position: relative;

    button {
      padding: 5px 23px;
      position: absolute;

      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      color: #121212;

      background: #0082ff;
      border: none;
      border-radius: 4px;
      right: -22%;
      font-size: 1em;
    }
    p {
      position: absolute;
      margin-top: 3px;
      right: 6%;

      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 1em;
      color: #5c5c5c;
    }
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
      display: flex;
      img {
        margin: 0 1rem;
      }
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
  onChange?: void;
  reference?: any;
  variant?: string;
  labelIcon?: string;
  disabled?: boolean;
  evStatus?: boolean;
  placeholder?: string;
  defaultValue?: string;
}

export function Input(props: Props) {
  const {
    evStatus = true,
    variant = 'regular',
    label = 'Storybook',
    name = 'password',
    size = 'medium',
    placeholder = '',
    disabled = false,
    error,
    reference,
    type = '',
    labelIcon = '',
    onChange = () => {},
    defaultValue = '',
    // ...rest
  } = props;
  if (variant === 'withButton') {
    return (
      <main css={style}>
        <div className={size}>
          <p className={`label`}>
            {label}
            {labelIcon.length > 1 && <img src={labelIcon} alt="label icon" />}
          </p>
          <div className="wrapper">
            <input
              name={name}
              type={type}
              ref={reference}
              className={`input`}
              disabled={disabled}
              onChange={onChange}
              {...(defaultValue && {value: defaultValue})}
            />
            <p>{`${evStatus ? '' : 'Email is not verified'}`}</p>
            <button>Verify</button>
          </div>

          <p className="error-msg">{error && error.message}</p>
        </div>
      </main>
    );
  }
  return (
    <main css={style}>
      <div className={size}>
        <p className={`label`}>
          {label}
          {labelIcon.length > 1 && <img src={labelIcon} alt="label icon" />}
        </p>
        <input
          name={name}
          type={type}
          ref={reference}
          className={`input`}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          {...(defaultValue && {value: defaultValue})}
        />
        <p className="error-msg">{error && error.message}</p>
      </div>
    </main>
  );
}

import {css} from '@emotion/react';
import React, {useState} from 'react';

import {Input} from './../Input';
import {Button} from './../Button';
import ClipLoader from 'react-spinners/ClipLoader';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const styleHide = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  display: none;
`;

const styleShow = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  top: 0;
  left: 0;
  position: absolute;

  width: 100vw;
  height: 100vh;
  background: #0000008d;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #f4f4f4;
    font-weight: 600;
    font-size: 2em;
    font-family: 'Poppins', sans-serif;
  }
  .divLine {
    background-color: #0082ff;
    height: 3px;
    width: 50px;
    margin: 10px 0 30px;
    border-radius: 4px;
  }

  form {
    background: #1b1b1b;
    width: 580px;
    height: 300px;
    padding: 30px;
    border-radius: 8px;
    position: relative;
    svg {
      position: absolute;

      width: 20px;
      top: 25px;
      right: 25px;
    }
    svg path {
      fill: gray !important;
    }
    .errMsg {
      font-family: 'Poppins', sans-serif;
      font-size: 1em;
      color: red;
    }
  }
  .buttonWrapperPW {
    right: 50px;
    bottom: 30px;
    position: absolute;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    main {
      margin-left: 30px;
    }
  }
`;

export interface Props {
  show: boolean;
  setState: Function;
  reauth: Function;
  changeEmail: Function;
  newCredentials: {
    email: string;
    name: string;
    age: string;
    country: string;
    referralCode: string;
  };
  updateProfile: Function;
}

export function Popup(props: Props) {
  const {
    show,
    setState,
    reauth,
    changeEmail,
    newCredentials,
    updateProfile,
  } = props;
  const [errorState, setErrorState] = useState<string>();
  const [loadingSpinner, setLoadingSpinner] = useState<boolean>(false);

  const schema = yup.object().shape({
    password: yup.string().required('Password is required!'),
  });

  interface FormProps {
    password: string;
  }

  const onSubmit = async (data: FormProps) => {
    try {
      setLoadingSpinner(true);
      await reauth(data.password);
      if (newCredentials.email !== '') {
        await changeEmail(newCredentials.email);
      }
      await updateProfile(newCredentials);

      setLoadingSpinner(false);
      setState(false);
      window.location.reload();
    } catch (error) {
      setErrorState(error);
    }
  };

  const {handleSubmit, register, errors} = useForm({
    resolver: yupResolver(schema),
  });

  if (show) {
    return (
      <main css={styleShow}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Reauthenticate</h1>
          <div className="divLine" />
          {/* <Input
            label="Email"
            reference={register}
            size="big"
            name="email"
            error={errors.email}
            type={'email'}
          /> */}
          <Input
            label="Password"
            reference={register}
            size="big"
            name="password"
            error={errors.password}
            // type={'password'}
          />
          <aside className="buttonWrapperPW">
            <div className="placeHolder" />
            <ClipLoader
              color={'#0082FF'}
              loading={loadingSpinner}
              // width={20}
              // height={35}
              // margin={80}
              // radius={20}
            />
            <Button variant={'primary'} size={'medium'} type="submit">
              Submit
            </Button>
          </aside>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setState(false);
            }}
          >
            <g>
              <path
                d="M23.8876 2.06532L21.9256 0.10336C21.793 -0.0292281 21.5781 -0.0292281 21.4455 0.10336L0.103951 21.4449C-0.0286372 21.5775 -0.0286109 21.7924 0.103977 21.925L2.06594 23.887C2.19852 24.0196 2.41348 24.0196 2.54607 23.887L23.8876 2.54548C24.0202 2.41289 24.0202 2.19791 23.8876 2.06532Z"
                fill="#FF1D00"
              />
              <path
                d="M2.06532 0.111439L0.10336 2.0734C-0.0292281 2.20599 -0.0292281 2.42097 0.10336 2.55356L21.4449 23.8951C21.5775 24.0277 21.7924 24.0276 21.925 23.895L23.887 21.9331C24.0196 21.8005 24.0196 21.5855 23.887 21.453L2.54548 0.111439C2.41289 -0.0211484 2.19791 -0.0211483 2.06532 0.111439Z"
                fill="#FF1D00"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p className="errMsg">{errorState && errorState}</p>
        </form>
      </main>
    );
  }
  return <main css={styleHide}></main>;
}

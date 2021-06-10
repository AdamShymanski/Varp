import React, {useState} from 'react';

import './../../sass/SettingsPageElements/Account-style.scss';

import {Button, Input} from '@varp/ui';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import PacmanLoader from 'react-spinners/PacmanLoader';

import {useAuth} from '../../contexts/AuthContext';

function Account(params) {
  const onlyLettersRegEx = /^[A-Za-z\s]+$/;
  // const onlyLetterNumberRegEx = /^[A-Za-z0-9]+$/;
  const strongPasswordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{8,}$/;

  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required!'),
    name: yup
      .string()
      .required('Name is required!')
      .matches(onlyLettersRegEx, 'No symbol or number allowed!'),
    password: yup
      .string()
      .min(8, 'Too Short!')
      .matches(
        strongPasswordRegEx,
        'At least one number, one capital letter, one lower letter, and one symbol',
      )
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
    age: yup
      .number()
      .typeError('Please enter numerical value only!')
      .required('Please fill your age!'),
    country: yup.string().required('Please fill your country'),
  });

  const {currentUser} = useAuth();

  interface FormProps {
    email: string;
    name: string;
    password: string;
    repeatPassword: string;
    age: number;
    country: string;
  }

  const [loadingPacman, setLoading] = useState<boolean>(false);
  // eslint-disable-next-line
  const [errorState, setError] = useState<string>('');
  // eslint-disable-next-line
  const [tokenAmount, setTokenAmount] = useState<string>('');
  const onSubmit = async (data: FormProps) => {
    setLoading(true);
    console.log(data);
    setLoading(false);
  };

  const {handleSubmit, register, errors} = useForm({
    resolver: yupResolver(schema),
  });

  //Email Verification Indicator
  // eslint-disable-next-line
  function EVI(props: number) {
    //if props = 1 it means EVI will return boolean for elements which will be used to toggle between hide and show classes

    if (props === 1) {
      if (currentUser) {
        if (currentUser.emailVerified) return true;
        return false;
      }
    }

    if (currentUser) {
      if (currentUser.emailVerified) return 'Email Verified';
      return 'Email not verified';
    } else {
      return 'Account not found';
    }
  }

  return (
    <main
      className={`accountWrapper columnFlex ${
        params.elementState == 0 ? 'show' : 'hide'
      }`}
    >
      <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          reference={register}
          size="big"
          name="email"
          error={errors.email}
        />
        <div className="verification">
          <p>{EVI(0)}</p>
        </div>
        <div className="verifyButton">
          <Button
            type="submit"
            size="medium"
            children="Verify"
            variant="primary"
          />
        </div>
        <Input
          label="Full Name"
          reference={register}
          size="big"
          name="name"
          error={errors.name}
        />
        <Input
          label="Password"
          reference={register}
          size="big"
          name="password"
          type="password"
          error={errors.password}
        />
        <Input
          label="Confirm Password"
          reference={register}
          size="big"
          name="confirmPassword"
          type="password"
          error={errors.confirmPassword}
        />
        <Input
          label="Age"
          reference={register}
          size="big"
          name="age"
          type="number"
          error={errors.age}
        />
        <Input
          label="Country"
          reference={register}
          size="big"
          name="country"
          error={errors.country}
        />
        <Input
          label="Referral Code"
          reference={register}
          size="big"
          name="referral"
        />
        {tokenAmount && (
          <p>
            <span>{tokenAmount}</span> tokens have been added to your account
          </p>
        )}

        <p className="errorMessage poppinsFont">{errorState}</p>
        <div className="buttonWrapper">
          <Button
            type="submit"
            size="medium"
            children="Submit"
            variant="primary"
          />
          <PacmanLoader color={'#0082FF'} loading={loadingPacman} size={15} />
        </div>
      </form>
    </main>
  );
}

export default Account;

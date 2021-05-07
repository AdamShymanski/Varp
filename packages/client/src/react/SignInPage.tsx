import React, {useState, useEffect} from 'react';
import './../sass/SignInPage-style.scss';
import {useHistory} from 'react-router-dom';

import {Button, Input} from '@varp/ui';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useAuth} from '../contexts/AuthContext';

import logo from './../resources/icons/logo.png';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

interface FormProps {
  email: string;
  password: string;
}

export default function SignInPage() {
  const [errorState, setError] = useState<string>('');
  const history = useHistory();
  const {signIn, currentUser, loading} = useAuth();

  const {handleSubmit, register, errors} = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    currentUser !== null && history.push("/")
  })

  const onSubmit = async (data: FormProps) => {
    const {email, password} = data;
    const result = await signIn(email, password);
    if (result) setError('Wrong password or email!');
  };

  return (
    (currentUser == null && loading == false) ? <div className="si-wrapper flexColumn">
    <div className="logoWrapper">
      <img
        src={logo}
        alt="Logo"
        className="logo"
        onClick={() => {
          history.push('/home');
        }}
      />
    </div>
    <h1 className="robotoFont">Sign In</h1>
    <p className="robotoFont description-s  "></p>
    <form className="flexColumn" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        reference={register}
        size="big"
        name="email"
        error={errors.email}
      />
      <Input
        label="Password"
        reference={register}
        size="big"
        name="password"
        type="password"
        error={errors.password}
      />
      <div className="divider" />
      <Button
        type="submit"
        size="medium"
        children="Submit"
        variant="primary"
      />
      <p className="errorMessage poppinsFont">{errorState}</p>
    </form>
  </div> : <div></div>
    
  );
}

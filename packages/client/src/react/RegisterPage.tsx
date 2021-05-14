import React, {useState} from 'react';
import './../sass/RegisterPage-style.scss';

import {Button, Input} from '@varp/ui';
import logo from './../resources/icons/logo.png';
import PacmanLoader from 'react-spinners/PacmanLoader';

import {useHistory} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const onlyLettersRegEx = /^[A-Za-z\s]+$/;
const onlyLetterNumberRegEx = /^[A-Za-z0-9]+$/;
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

interface FormProps {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
  age: number;
  country: string;
}

function RegisterPage() {
  const {callRegister, currentUser, loading} = useAuth();
  const [errorState, setError] = useState<string>('');
  const [loadingPacman, setLoading] = useState<boolean>(false);

  const history = useHistory();

  const {handleSubmit, register, errors} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormProps) => {
    setLoading(true);
    const result = await callRegister(data);
    setError(result + '!');
    setLoading(false);
  };

  return (

    (currentUser == null && loading == false) ? 
    <div className="reWrapper flexColumn">
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
      <h1 className="robotoFont">Register</h1>
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
    </div>
    : <div></div>
    
  );
}
export default RegisterPage;

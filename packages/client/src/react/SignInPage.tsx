import React from 'react';
import './../sass/SignInPage-style.scss';
import {useHistory} from 'react-router-dom';

import {Button, Input} from '@varp/ui';
import {makeStyles} from '@material-ui/core/styles';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import firebase from 'firebase';

const onlyLettersRegEx = /^[A-Za-z\s]+$/;
const onlyLetterNumberRegEx = /^[A-Za-z0-9]+$/;
const strongPasswordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{8,}$/;

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  // fullName: yup
  //   .string()
  //   .matches(onlyLettersRegEx, "No symbol or number allowed!")
  //   .required("Name is required!"),
  // username: yup
  //   .string()
  //   .min(3, "Too Short!")
  //   .max(25, "Too Long!")
  //   .matches(onlyLetterNumberRegEx, "No space or symbol!")
  //   .required(),
  password: yup
    .string()
    .min(8, 'Too Short!')
    .matches(
      strongPasswordRegEx,
      'At least 1 number, 1 capital letter, 1 lower letter, 1 one special character',
    )
    .required(),
  // passwordCheck: yup
  //   .string()
  //   .oneOf([yup.ref("password"), null], "Password must match"),
  // age: yup
  //   .number()
  //   .typeError("Please enter numerical value only!")
  //   .required("Please fill your age!"),
  // country: yup.string().required("Please fill your country")
});

const useStyles = makeStyles({
  exclamationIcon: {
    color: '#3a3a3a',
    fontSize: '1.4vw',

    left: '23vw',
    position: 'absolute',
  },
});

interface FormProps {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
  age: number;
  country: string;
}

export default function RegisterPage() {
  const history = useHistory();

  const {handleSubmit, register, errors} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormProps) => {
    console.log({email: data.email, password: data.password});

    const createAccount = firebase.functions().httpsCallable('createUserTest');

    createAccount({email: data.email, password: data.password})
      .then((result) => {
        console.log(result);
        console.log('result');
      })
      .catch((error) => {
        console.log(error);
        const code = error.code;
        const message = error.message;
        const details = error.details;
        console.log(code, message, details);
      });
  };

  const classes = useStyles();

  return (
    <div className="wrapper flexColumn">
      <h1 className="robotoFont">Sign In</h1>
      <p className="robotoFont description-s  "></p>
      <form className="flexColumn" onSubmit={handleSubmit(onSubmit)}>
        <Input
          size="big"
          label="Email"
          name="email"
          ref={register}
          error={errors.email && errors.email.message}
        />
        <Input
          size="big"
          label="Passowrd"
          name="password"
          type="password"
          ref={register}
          error={errors.email && errors.email.message}
        />
        {/* <div className="inputWrapper flexColumn">
          <p className="label robotoFont">Email</p>
          <input className="robotoFont" name="email" ref={register} />
          <p className="error poppinsFont">
            {errors.email && errors.email.message}
          </p>
        </div> */}
        {/* <div className="inputWrapper flexColumn">
          <p className="label robotoFont ">Password</p>

          <div className="passowrdInputWrapper flexRow">
            <div className="flexColumn">
              <input
                className="robotoFont"
                type=""
                name="password"
                ref={register}
              />
              <p className="error poppinsFont">
                {errors.password && errors.password.message}
              </p>
            </div>
            <ErrorOutlineIcon className={classes.exclamationIcon} />
            <div id="talkbubble"></div>
          </div>
        </div> */}
        <div className="buttonWrapper">
          <Button
            type="submit"
            size="medium"
            children="Submit"
            variant="primary"
          />
        </div>
      </form>
    </div>
  );
}

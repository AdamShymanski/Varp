import React, {useState} from 'react';

import './../../sass/SettingsPageElements/Account-style.scss';

import {Button, Input, Popup, MessageBox} from '@varp/ui';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useAuth} from '../../contexts/AuthContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {number} from 'yup/lib/locale';

function Account(params) {
  const onlyLettersRegEx = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  const exceptSpecialCharactersRegEx = /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g;

  const {
    currentUser,
    userData,
    deleteAccount,
    resetPassword,
    changeEmail,
    reauthenticate,
    updateProfile,
    handleReferralCodeUse,
    checkReferralCode,
  } = useAuth();

  // eslint-disable-next-line
  const [errorState, setError] = useState<string>('');
  const [popupState, setPopupState] = useState<boolean>(false);
  const [newCredentials, setNewCredentials] = useState<any>({});

  interface FormProps {
    age: number;
    name: string;
    email: string;
    country: string;
    referralCode: string;
  }
  const onSubmit = async (data: FormProps) => {
    console.log('submit');
    setNewCredentials(data);
    setPopupState(true);
  };

  const testScheme = async (value: any, type: string) => {
    if (type === 'string') {
      if (value === '' || value.match(onlyLettersRegEx)) return true;
      return false;
    }
    if (type === 'number') {
      if (value === '' || value.type(number)) return true;
      return false;
    }
    if (type === 'referralCode') {
      if (value === currentUser?.uid) return false;
      var queryResult: boolean | string;
      if (value == '' || null) {
        queryResult = await checkReferralCode('empty');
      } else {
        queryResult = await checkReferralCode(value);
      }
      if (queryResult === true) return true;
      return false;
    }
    if (value === '' || value.match(exceptSpecialCharactersRegEx)) return true;
    return false;
  };

  const schema = yup.object().shape({
    email: yup.string().email('Invalid email'),
    name: yup
      .string()
      .test('correct', 'No symbol or number allowed!', (value) =>
        testScheme(value, 'string'),
      ),
    age: yup
      .mixed()
      .test('correct', 'Please enter numerical value only!', (value) =>
        testScheme(value, 'number'),
      ),
    country: yup
      .string()
      .test('correct', 'No symbol or number allowed!', (value) =>
        testScheme(value, 'string'),
      ),
    referralCode: yup
      .mixed()
      .test('correct', 'Wrong Referral Code!', (value) =>
        testScheme(value, 'referralCode'),
      ),
  });

  const {handleSubmit, register, errors} = useForm({
    resolver: yupResolver(schema),
  });

  //Email Verification Indicator
  // eslint-disable-next-line
  function EVI() {
    if (currentUser) {
      if (currentUser.emailVerified) return true;
      return false;
    }
    return false;
  }

  return (
    <main
      className={`accountWrapper  ${
        params.elementState === 0 ? 'show' : 'hide'
      }`}
    >
      <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          reference={register}
          size="big"
          name="email"
          error={errors.email}
          variant="withButton"
          evState={EVI}
          placeholder={currentUser ? currentUser?.email : ''}
        />
        <Input
          label="Full Name"
          reference={register}
          size="big"
          name="name"
          error={errors.name}
          placeholder={userData?.name}
        />
        <Input
          label="Age"
          reference={register}
          size="big"
          name="age"
          type="number"
          error={errors.age}
          placeholder={userData?.age}
        />
        <Input
          label="Country"
          reference={register}
          size="big"
          name="country"
          error={errors.country}
          placeholder={userData?.country}
        />
        <div className="inputBoxWrapper">
          <Input
            label="Referral Code"
            reference={register}
            size="big"
            name="referralCode"
            error={errors.referralCode}
            placeholder={userData?.utilizedReferralCode}
            disabled={userData?.utilizedReferralCode}
          />
          <div
            className={`insideBox ${
              userData?.utilizedReferralCode ? 'exist' : 'absent'
            }`}
          >
            {userData?.utilizedReferralCode !== '' ? (
              <FontAwesomeIcon icon={faCheck} color="green" />
            ) : (
              <FontAwesomeIcon icon={faTimes} color="red" />
            )}
          </div>
          <p className={'poppinsFont noteText'}>
            {userData?.utilizedReferralCode &&
              '100 tokens have already been added to your account.'}
          </p>
        </div>
        <p className="errorMessage poppinsFont">{errorState}</p>
        <div className="buttonWrapper">
          <Button type="submit" size="medium" variant="primary">
            Submit Changes
          </Button>
        </div>
      </form>
      <aside className="flexColumn buttonWrapperA">
        <Button action={deleteAccount}>Delete Account</Button>
        <Button action={resetPassword}>Change Password</Button>
      </aside>
      <Popup
        show={popupState}
        setState={setPopupState}
        reauth={reauthenticate}
        changeEmail={changeEmail}
        updateProfile={updateProfile}
        newCredentials={newCredentials}
        handleReferralCodeUse={handleReferralCodeUse}
      />
      <MessageBox />
    </main>
  );
}

export default Account;

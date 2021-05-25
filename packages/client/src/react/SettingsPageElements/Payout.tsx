import React, {useState, useEffect} from 'react';
import {Button, Input} from '@varp/ui';
import './../../sass/SettingsPageElements/Payout-style.scss';

interface PayoutProps {
  elementState: number
}
function Payout(params:PayoutProps) {
  return (
    <main className={`accountWrapper columnFlex ${params.elementState == 2 ? 'show' : 'hide'}`}>
      <form className="flexColumn">
        <Input
          label="Email"
          size="big"
          name="email"
        />
        <Input
          label="Full Name"
          size="big"
          name="name"
        />
        <Input
          label="Password"
          size="big"
          name="password"
          type="password"
        />
        <Input
          label="Confirm Password"
          size="big"
          name="confirmPassword"
          type="password"
        />
        <Input
          label="Age"
          size="big"
          name="age"
          type="number"
        />
        <Input
          label="Country"
          size="big"
          name="country"
        />

        <p className="errorMessage poppinsFont"></p>
        <div className="buttonWrapper">
          <Button
            type="submit"
            size="medium"
            children="Submit"
            variant="primary"
          />
          {/* <PacmanLoader color={'#0082FF'} loading={""} size={15} /> */}
        </div>
      </form>
    </main>
  );
}

export default Payout;

import React, {useState, useEffect} from 'react';
import {Button, Input} from '@varp/ui';
import './../../sass/SettingsPageElements/Payout-style.scss';

interface PayoutProps {
  elementState: number
}
function Payout(params:PayoutProps) {
  return (
    <main className={`payoutWrapper columnFlex ${params.elementState == 2 ? 'show' : 'hide'}`}>
      <form className="flexColumn">
        <Input
          label="PayPal"
          size="big"
          name="email"
        />
        <Input
          label="BankAcccount"
          size="big"
          name="name"
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

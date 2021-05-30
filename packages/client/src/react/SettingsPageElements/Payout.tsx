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
        <div className="flexRow">
          <Input
            label="PayPal"
            size="big"
            name="email"
          />
          <input type="checkbox" className="inputCheckboxPayout" name="" id="" /></div>
        <div className="flexRow">
          <Input
            label="BankAcccount"
            size="big"
            name="name"
          />
          <input type="checkbox" className="inputCheckboxPayout" name="" id="" />
        </div>
        
        
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

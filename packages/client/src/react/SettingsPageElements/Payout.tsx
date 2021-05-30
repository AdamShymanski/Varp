import React, {useState, useEffect} from 'react';
import {Button, Input} from '@varp/ui';
import './../../sass/SettingsPageElements/Payout-style.scss';
import EditIcon from "../../resources/icons/edit-3.svg"

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
            labelIcon={EditIcon}
          />
          <label className="payloadCheckboxContainer">
            <input type="checkbox" className="inputCheckboxPayout" name="" id=""/>
            <span className="payloadCheckmark"/>
          </label>
        </div>
        <div className="flexRow">
          <Input
            label="BankAcccount"
            size="big"
            name="name"
          />
          <label className="payloadCheckboxContainer">
            <input type="checkbox" className="inputCheckboxPayout" name="" id="" />
            <span className="payloadCheckmark"/>
          </label>
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

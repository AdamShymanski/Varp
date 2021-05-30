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
        <div className="flexRow payoutInformation">
          <h4>Payout Method</h4>
          <p >If you win the game the prize will be paid as soon as possible within 24 hours. Choose one of the withdrawal methods. Make sure to enter a valid address. In case of any problems, please contact our <a>support team.</a></p>
        </div>
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
            labelIcon={EditIcon}
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

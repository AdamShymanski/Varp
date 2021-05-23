import React, {useState, useEffect} from 'react';

function Payout(params) {
  return (
    <main className={`${params.elementState == 2 ? 'show' : 'hide'}`}>
      <p className="poppinsFont">Payout</p>
    </main>
  );
}

export default Payout;

import React, {useState, useEffect} from 'react';

function Referrals(params) {
  return (
    <main className={`${params.elementState == 1 ? 'show' : 'hide'}`}>
      <p className="poppinsFont">Referrals</p>
    </main>
  );
}

export default Referrals;

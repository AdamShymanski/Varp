import React, {useState, useEffect} from 'react';

interface PayoutProps {
  elementState: number
}
function Payout(params:PayoutProps) {
  return (
    <main className={`${params.elementState == 2 ? 'show' : 'hide'}`}>
      <p className="poppinsFont">Payout</p>
    </main>
  );
}

export default Payout;

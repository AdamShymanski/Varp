import React, {useState, useEffect} from 'react';

const Payout:React.FC = (params:any) => {
  return (
    <main className={`${params.elementState == 2 ? 'show' : 'hide'}`}>
      <p className="poppinsFont">Payout</p>
    </main>
  );
}

export default Payout;

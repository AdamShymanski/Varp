import React, {useState, useEffect} from 'react';

interface Props {
  params: any
}
const Payout:React.FC<Props> = (params:any) => {
  return (
    <main className={`${params.elementState == 2 ? 'show' : 'hide'}`}>
      <p className="poppinsFont">Payout</p>
    </main>
  );
}

export default Payout;

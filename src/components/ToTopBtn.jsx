import React from 'react';
import './totopbtn.css'

function ToTopbtn() {
  const totopfunc=()=>{
    console.log("fired");
  }
  return (
    <div>
      <button id='totopbtn' onClick={totopfunc}> &uarr;to the top</button>
      
    </div>
  )
}

export default ToTopbtn

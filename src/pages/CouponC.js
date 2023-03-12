import React from 'react'
import './CouponC.css'
const CouponC = () => {
    // let cpnbtn = document.getElementById("cpnbtn");
    // let cpncode = document.getElementById("cpncode");
    // cpnbtn.onclick = ()=>{
    //     navigator.clipboard.writeText(cpncode.innerHTML);
    //     cpnbtn.innerHTML="Copied!";
    //     setTimeout(function(){
    //         cpnbtn.innerHTML="Copy Code";
    //     },3000)
    // }
  return (
    <div className='cacard'>
        <div className='coupons-card'>
       <h2>BoAt</h2>
            <h3>Flat 20% off on G340 Headphones</h3>
            <p>Expires In 5 Days</p>
            <div className='coupons-row'>
                <span id='cpncodes'>BoAtG340</span>
                <span id='cpnbtns'>Copy Code</span>
            </div>
            <div className='circle1s'></div>
            <div className='circle2s'></div>
        </div>
    </div>
  )
}

export default CouponC

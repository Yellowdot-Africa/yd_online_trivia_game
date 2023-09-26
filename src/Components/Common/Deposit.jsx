import React from 'react';
import "../../Styles/Deposit.css";
import CustomButton from './CustomButton'

const Deposit =()=> {
    const buttonStyle = {
        borderRadius: "23px",
        background: "#939393",
        color: "#FFFFFF",
        fontFamily: "Inter,sans-serif",
        fontSize: "16px",
        fontWeight: "500",
        padding: "0",
        width:"222px",
      };
    
  return (
    <>
        {/* <div className='dep-dep'> */}
        <div className='dep-container'>
            <h3>Deposit</h3>
            <hr />
            <p>Dear user, Please note that all transactions are conducted with our payment partners using a valid debit card</p>
            <input type="text"
            placeholder='Input amount' />

            <CustomButton
             buttonText={"Continue"}
             style={buttonStyle}/>
            {/* </div> */}
        </div>
    </>
  )
}

export default Deposit
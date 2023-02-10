import React, { useState } from "react";
import './Accordian.css';

const MyAccordian = ({question, answer}) =>{
    const [show, setShow] = useState(false)
  return (
    <>
        <div className="main-head">
           <p onClick={() =>{setShow(!show)}}>{show? "➖":"➕"}</p>
           <h3>{question}</h3>
        </div>
        {show && <span>{answer}</span>}
        
    </>
  )

}
 
export default MyAccordian;
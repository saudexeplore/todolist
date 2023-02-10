import React, { useState } from "react";
import questions from "./Api";
import MyAccordian from './MyAccordian';

const Accordian = () =>{
    const [data, setData] =useState(questions);

    return (
        <>
        <div className="main-div">
            { data.map((currEl) =>{
                const {id} = currEl;
                return <MyAccordian key={id} {...currEl} />
            })}
        </div>
        </>
    )
}

export default Accordian;
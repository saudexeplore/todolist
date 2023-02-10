import React, { useState } from 'react'
import Sresult from "./Sresult";

const Search = () => {
    const [num, setNum] = useState("");

    const inputEvent = (event)=>{
        console.log(event.target.value);
        const data = event.target.value;
        setNum(data);
    }
    
  return (
    <>
    <input  type="text" placeholder="search anything" value={num} onChange={inputEvent}/>
    <Sresult />
    </>
  )
}

export default Search

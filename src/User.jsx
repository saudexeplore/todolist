import React from "react";
import { useParams } from "react-router-dom";

const User = ()=>{
    const {fname, lname} = useParams();
     console.log(fname);
     console.log(lname);
    return  <h1>this is {fname} {lname} user</h1>
    
}

export default User;
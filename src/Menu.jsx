import React from "react";
import { Link } from "react-router-dom";

const Menu = () =>{

    return(
        <>
            <Link to='/'> about</Link>
            <Link to='/contact'> contact</Link>
            <Link to='/user/:userId'> user</Link>
        </>
    )

}


export default Menu;
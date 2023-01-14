import React from "react";
import { BsFillPatchMinusFill } from "react-icons/bs";
const ToDoLists = (props) =>{
    return  <>
            <div className="delBtn">
            <div className="cross" onClick={() =>{props.onSelect(props.id)}}><BsFillPatchMinusFill/></div>
            <li>{props.text}</li>
            </div>
            </>
}

export default ToDoLists
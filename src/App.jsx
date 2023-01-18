import React, { useState } from "react";
import ToDoLists from "./ToDoLists";


const App = () => {

    const [itemList, setItemList] = useState("");
    const [Items, setItems] = useState([]);


    const eventValue = (event) => {
        setItemList(event.target.value);
    }

    const listOfItems = (e) => {
        if (itemList === "") {
            alert("please enter a valid Name")
        } else {
            setItems((oldItems) => {
                return [...oldItems, itemList]
            })
            
        }
        setItemList("");
    }
    
    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElement, index) => {
                return index !== id;
            })
        })
    }


    return (
        <>
            <div className="main-div">
                <h1>ToDo List App</h1>
                <div className="field-div">
                    <input type="text" value={itemList} placeholder="Add a Item..." onChange={eventValue}

                    />
                    <button onClick={listOfItems}>+</button>
                </div>

                <ol>

                    {Items.map((itemVal, index) => {
                        return <ToDoLists text={itemVal} key={index} id={index} onSelect={deleteItem} />
                    })}
                </ol>

            </div>
        </>
    )
}


export default App;
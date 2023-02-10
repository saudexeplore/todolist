import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import ToDoLists from "./ToDoLists";
import User from "./User";
import Search from "./Search";



// const App = () => {

//     const [itemList, setItemList] = useState("");
//     const [Items, setItems] = useState([]);


//     const eventValue = (event) => {
//         setItemList(event.target.value);
//     }

//     const listOfItems = (e) => {
//         if (itemList === "") {
//             alert("please enter a valid Name")
//         } else {
//             setItems((oldItems) => {
//                 return [...oldItems, itemList]
//             })
            
//         }
//         setItemList("");
//     }
    
//     const deleteItem = (id) => {
//         setItems((oldItems) => {
//             return oldItems.filter((arrElement, index) => {
//                 return index !== id;
//             })
//         })
//     }


//     return (
//         <>
//             <div className="main-div">
//                 <h1>ToDo List App</h1>
//                 <div className="field-div">
//                     <input type="text" value={itemList} placeholder="Add a Item..." onChange={eventValue}

//                     />
//                     <button onClick={listOfItems}>+</button>
//                 </div>

//                 <ol>

//                     {Items.map((itemVal, index) => {
//                         return <ToDoLists text={itemVal} key={index} id={index} onSelect={deleteItem} />
//                     })}
//                 </ol>

//             </div>
//         </>
//     )
// }


// const App = () =>{
//     const [num, setNum] = useState(0);
//     useEffect(()=>{
//         alert('clicked')
//         // document.title = `u clicked me ${num} times`
//     });
//         return(
//             <>
//                 <button onClick={()=>{setNum(num+1)}}>click me {num}</button>
//             </>
//         )
// }

// const App = () =>{
//     const [num, setNum] = useState(1);
//     const [name, setName] = useState();
//     const [moves, setMoves] = useState();

//     useEffect(() =>{
//         async function getData(){
//             const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
//             setName(res.data.name);
//             setMoves(res.data.moves.length);
//         }
//         getData();
//     })
//     return(
//         <>
//             <h1>you choosed {num} number</h1>
//             <h1>My name is {name} </h1>
//             <h1>I have {moves} </h1>
//             <select value={num} onChange={(event) =>{
//                 setNum(event.target.value)
//             }}>
//                 <option value={1}>1</option>
//                 <option value={25}>25</option>
//                 <option value={3}>3</option>
//                 <option value={4}>4</option>
//                 <option value={5}>5</option>
//             </select>
//         </>
//     )
// }

// const App = ()=>{

//     return(
//         <>
//         <Menu />
//         <Routes>
//             <Route exact path="/" element={<About />}/>
//             <Route path="/contact" element={<Contact />}/>
//             <Route path="/user/:fname/:lname" element={<User />}/>
//             <Route path="*" element={<Error/>} />
//         </Routes>
//         </>
//     )
// }


const App = () =>{
    return (
        <>
            <Search />            
        </>
    )
}

export default App;
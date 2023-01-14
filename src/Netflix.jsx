import React from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";

const Netflix = () =>{
return(

    <div className='main-head'>
                <Cards 
                src={Sdata[1].imgsrc}
                category={Sdata[1].title}
                cardname={Sdata[1].sname}
                link={Sdata[1].link}
                />
            </div>
)

}

export default Netflix;
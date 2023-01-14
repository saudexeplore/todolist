import React from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";

const Amozon = () =>{
return(

    <div className='main-head'>
                <Cards 
                src={Sdata[3].imgsrc}
                category={Sdata[3].title}
                cardname={Sdata[3].sname}
                link={Sdata[3].link}
                />
            </div>
)

}

export default Amozon;
import React from "react";

function Cards(Props){
    return(
        
        <div className="cards">
            <div className="card">
                <img src={Props.src} alt="myImage"/>
            </div>
            <div className="card-info">
                <span className="card-category">{Props.category}</span>
                <div className="card-title">{Props.cardname}</div>
                <a href={Props.link} className="button-css">Watch Now</a>
            </div>
        </div>

    )
}

export default Cards;
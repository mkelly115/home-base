import React, { useState, useEffect } from "react";
import PICTURES from './data/pictures'

export default function Gallery(){

    const [index, setIndex] = useState(0);
    


    return(
        <div className="gallery">
            <img 
            src={PICTURES[index].image}
            alt="gallery"
            />
        </div>
    )


}
import "./Restaurant.css"
import { useState } from "react"
import image1 from "./svg/image1.svg"
import image2 from "./svg/image2.svg"
import image3 from "./svg/image3.svg"
import image4 from "./svg/image4.svg"
import image5 from "./svg/image5.svg"
import heart from "./svg/heart.svg"
import image6 from "./svg/image6.svg"

const svgMap={
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
}
function Restaurant({type}){
    const [click,setClick]=useState(0)

    const handleClick=()=>{
        setClick(click+1)

    }
    return <div className="image-show">
        <img className="restaurant" alt="restaurant" src={svgMap[type]} />
        <img className="heart" alt="heart" 
        src={heart}
        onClick={handleClick}
        style={{ width:10+10*click+'px'} } />
    </div>
}
export default Restaurant
import "./App.css"
import Restaurant from "./Restaurant";
import { useState } from "react";
function getRandomimage(){
    let restaurant=['image1','image2','image3','image4','image5','image6']
    return restaurant[Math.floor(Math.random()*restaurant.length)]
}

function App(){
   const [restaurant,setImages]=useState([]) 
    const handleClick=()=>{       
       setImages([...restaurant,getRandomimage()])               
    }

    const renderedImage=restaurant.map((restaurant,index)=>{
       return <Restaurant type={restaurant} key={index} />

    })
    return <div className="app">
        <button onClick={handleClick}>Add Restaurant Images</button>
        <div className="image-list">{renderedImage}</div>
        
    </div>
}
export default App
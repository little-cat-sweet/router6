import React,{useState} from "react";
import {Navigate} from 'react-router-dom'
export default function Home(){
    const [sum,setSum] = useState(1)
    return(
        <div>
            <h2>
                I am the home component.
            </h2>
            The sum is {sum === 2 ? <Navigate to="/about" replace={true}/> : <h4>{sum}</h4>}
            <br/>
            <button onClick={()=>setSum(2)}>change The sum</button>
        </div>
    )
}
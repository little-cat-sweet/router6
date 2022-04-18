import React,{useState} from "react";
import {Link,Outlet} from "react-router-dom";

export default function Message(){

    const [messages] = useState([
        {
            id:'001', title:'data1', content:'This is not right'
        },
        {
            id:"002", title:"data2", content: "Hello world"
        },
        {
            id:"003", title:"data3", content: "fucking this shit world..."
        }
    ])
    return(
        <div>
            <ul>
                {
                    messages.map((m)=>{
                        return(
                            <li key={m.id}>
                                <Link to={`detail/${m.id}/${m.title}/${m.content}`}>my title is {m.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <hr/>
            <Outlet/>
        </div>
    )
}
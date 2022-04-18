import React,{useState} from "react";
import {Link,Outlet, useNavigate} from "react-router-dom";

export default function Message(){
    const navigate = useNavigate();

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
    function showDetail(m){
        navigate(`detail`,{
            replace:false,
            state:{
                id:m.id,
                title:m.title,
                content:m.content
            }
        })
    }
    return(
        <div>
            <ul>
                {
                    messages.map((m)=>{
                        return(
                            <li key={m.id}>
                                <Link to="detail" state={
                                    {
                                        id:m.id,
                                        title:m.title,
                                        content:m.content
                                    }
                                }>my title is {m.title}</Link>
                                <button onClick={()=>showDetail(m)}>show the detail</button>
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
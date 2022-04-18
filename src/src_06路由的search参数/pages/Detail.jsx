import React from "react";
import {useSearchParams} from 'react-router-dom'
export default function Detail(){
    const [search, setSearch] = useSearchParams();
    console.log(search)
    const id = search.get('id');
    const title = search.get('title');
    const content = search.get('content');

    return(
        <ul>
            <li>
                <button onClick={()=>setSearch('id=007&title=jack&content=Awesome')}>click me to
                change the content</button>
            </li>
            <li>
                {id}
            </li>
            <li>
                {title}
            </li>
            <li>
                {content}
            </li>
        </ul>
    )
}
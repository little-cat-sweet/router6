import React from "react";
import {Link, Outlet} from "react-router-dom";

export default function Home(){
    return(
        <div>
            <h2>
                I am the home component.
            </h2>
            <div>
                <ui className="nav nav-tabs">
                    <li>
                        <Link className="list-group-item" to="news">News</Link>
                    </li>
                    <li>
                        <Link className="list-group-item" to="message">message</Link>
                    </li>
                </ui>
                {/*指定路由位置*/}
                <Outlet />
            </div>

        </div>
    )
}
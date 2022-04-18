import React from "react";
import {Link,useRoutes} from "react-router-dom";
import routes from './routes'
import Header from "./components/Header";
export default function App(){
    const element = useRoutes(routes)
    return(
        <div>
            <div>
                <div className="row">
                    <Header/>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <Link className="list-group-item" to="/about">About</Link>
                            <Link className="list-group-item" to="/home">Home</Link>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {element}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
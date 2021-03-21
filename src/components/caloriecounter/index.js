import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const index=()=>{
    return (
            ReactDOM.render(<App />, document.getElementById("root"))
    )
    
}
serviceWorker.unregister();
export default index;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


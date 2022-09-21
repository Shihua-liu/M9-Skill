// importeer react  
import React from "react";
//importeet reachtdom
import ReactDOM  from "react-dom";
//importeren onze component
import App from "./App/App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
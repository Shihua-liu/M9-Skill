// importeer react  
import React from "react";
//importeet reachtdom
import ReactDOM  from "react-dom/client";
//importeren onze component
import App from "./components/App/App";
//schieten onze component in de dom
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
import react from "react";
import reactDom from "react-dom";
import "./style.css"
import App from "./App";
import SignInContextProvider from "./Context/SignInContextProvider";

const root = reactDom.createRoot(document.getElementById('root'));
root.render(
    <SignInContextProvider>
        <App />
    </SignInContextProvider>
    );
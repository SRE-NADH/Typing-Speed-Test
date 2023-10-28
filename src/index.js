
import reactDom from "react-dom/client";
import "./style.css"
import App from "./App";
// import SignInContextProvider from "./Context/SignInContextProvider";

const root = reactDom.createRoot(document.getElementById('root'));
root.render(
    // <SignInContextProvider>
        <App />
    //  {/* </SignInContextProvider> */}
    );
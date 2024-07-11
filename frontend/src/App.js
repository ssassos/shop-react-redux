import './App.css';
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

import "react-toastify/dist/ReactToastify.css"

import {Route, Routes} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./components/Navbar/NavBar";
import NotFound from "./components/NotFound/NotFound";



function App() {
    return (
        <div className="App">
            <NavBar/>
            <ToastContainer/>
            <div className="container">
                <Routes>

                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/cart" exact element={<Cart/>}/>
                    <Route path="*" element={<NotFound/>}/>

                </Routes>
            </div>

        </div>
    );
}

export default App;

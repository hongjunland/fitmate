import NavBar from "./components/NavBar";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "./views/Home";
import Stylist from "./views/Stylist";
import Stylebook from "./views/Stylebook";
import Qna from "./views/Qna";
import Notice from "./views/Notice";
import Signin from "./views/Signin"
import Signup from "./views/Signup"
import {useEffect} from "react";

function App() {
    useEffect(()=>{

    },[])
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/stylist"  element ={<Stylist/>}/>
                <Route path="/stylebook" element ={<Stylebook/>}/>
                <Route path="/qna" element ={<Qna/>}/>
                <Route path="/notice" element ={<Notice/>}/>
                <Route path="/signup" element ={<Signup/>}/>
                <Route path="/signin" element ={<Signin/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

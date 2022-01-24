import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
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

function App() {
  return (
    <div className="App">
      <NavBar/>
        <BrowserRouter>
            <Routes>
                <Route path="/" elememt ={<Home/>}></Route>
                <Route path="/stylist" elememt ={<Stylist/>}></Route>
                <Route path="/stybook" elememt ={<Stylebook/>}></Route>
                <Route path="/qna" elememt ={<Qna/>}></Route>
                <Route path="/notice" elememt ={<Notice/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

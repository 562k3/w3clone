import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarone from "./components/Navbarone";
import Navbartwo from "./components/Navbartwo";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Htmlpage from "./components/Htmlpage";
import Mainpage from "./components/Mainpage";
import Phppage from "./components/Phppage";
import Csspage from "./components/Csspage";
import Jspage from "./components/Jspage";
import Bootstrap from "./components/Bootstrap";
import C from "./components/C";
import Chash from "./components/Chash";
import Cplus from "./components/Cplus";
import Excel from "./components/Excel";
import Googlesheets from "./components/Googlesheets";
import Jquerypage from "./components/Jquerypage";
import Kotlin from "./components/Kotlin";
import Nodejs from "./components/Nodejs";
import Pythonpage from "./components/Pythonpage";
import R from "./components/R";
import Reactpage from "./components/Reactpage";
import Sqlpage from "./components/Sqlpage";
import Javascript from "./components/Javascript";
import Certificatepage from "./components/Certificatepage";

// import Signup from './components/Signup';

function App() {
  return (
    <header className="App-header">
      <Router>
        <Navbarone />
        <Navbartwo />
        <Routes>
          {/* <Route path="/" element={} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/htmlpage" element={<Htmlpage />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/phppage" element={<Phppage />} />
          <Route path="/csspage" element={<Csspage />} />
            <Route path="/bootstrap" element={<Bootstrap />} />
            <Route path="/c" element={<C />} />
            <Route path="/chash" element={<Chash />} />
            <Route path="/cplus" element={<Cplus />} />
            <Route path="/excel" element={<Excel />} />
            <Route path="/googlesheets" element={<Googlesheets />} />
            <Route path="/javascript" element={<Javascript />} />
            <Route path="/jquerypage" element={<Jquerypage />} />
            <Route path="/jspage" element={<Jspage />} />
            <Route path="/kotlin" element={<Kotlin />} />
            <Route path="/nodejs" element={<Nodejs />} />
            <Route path="/pythonpage" element={<Pythonpage />} />
            <Route path="/sqlpage" element={<Sqlpage />} />
            <Route path="/r" element={<R />} />
            <Route path="/reactpage" element={<Reactpage />} />
            <Route path="/certificatepage" element={<Certificatepage />} />
        </Routes>
      </Router>
      
      
    </header>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Programme from "./pages/Programme";
import Contact from "./pages/Contact";
import "./style.css";
import "./index.css";
import "./fonts.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" Component={Home}></Route>
          <Route exact path="/home" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/programme" Component={Programme}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

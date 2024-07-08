import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Update from "./components/Update";
import AllUsers from "./components/AllUsers";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/all" element={<AllUsers/>}/>
      </Routes>
    </Router>
  );
}

export default App;

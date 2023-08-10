import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import Update from "./components/Update";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          {/* <Route exact path="/create" element={<Create />} /> */}
          <Route exact path="/edit/:id?" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

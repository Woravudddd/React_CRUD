import { Route, Routes } from "react-router-dom";
import Login from "./components/page/auth/Login";
import Register from "./components/page/auth/Register";
import Homepage from "./components/page/Homepage";
//import register from "./components/page/auth/Register";
import Navbar from "./components/layouts/Navbar";
function App() {
  return (
    <div className="App">
     <section>
        <h1>React Web</h1>
        <Navbar />
       <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
       </Routes>
      
     </section>
    </div>
  );
}

export default App;

import { Route, Router, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./paginas/Home";
import RegistrarMarcas from "./paginas/RegistrarMarcas";
import RegistrarRutina from "./paginas/RegistrarRutina";
import Provider from "./context/Provider";
import MisRutinas from "./paginas/MisRutinas";
import GuiaEjercicios from "./paginas/GuiaEjercicios";
import Principal from "./paginas/Principal";
import Router1 from "./routes/Router1";



function App() {
  return (
    <>
    
    {/* <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/registrarPr' element={<RegistrarMarcas></RegistrarMarcas>}></Route>
        <Route path="/registrarRutinas" element={<RegistrarRutina></RegistrarRutina>}></Route>
        <Route path="/misRutinas" element={<MisRutinas></MisRutinas>}></Route>
        <Route path="/guiaEjercicios" element={<GuiaEjercicios></GuiaEjercicios>}></Route>
        <Route path="/principal" element={<Principal></Principal>}></Route>
        
    </Routes> */}

    <Router1></Router1>
    
    </>
  );
}

export default App;

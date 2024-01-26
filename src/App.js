import { Route, Router, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/Login.css';
import './css/Navbar.css';
import './css/RegistrarMarcasPage.css';
import './css/RegistrarRutinaPage.css';
import './css/MisRutinasPage.css';
import './css/GuiaPage.css';
import './css/ModalGuia.css';
import './css/ModalMisRutinas.css';
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

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


function App() {
  return (
    <>
    <Provider>
    <Routes>
        <Route path='/' element={<Principal></Principal>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/registrarPr' element={<RegistrarMarcas></RegistrarMarcas>}></Route>
        <Route path="/registrarRutinas" element={<RegistrarRutina></RegistrarRutina>}></Route>
        <Route path="/misRutinas" element={<MisRutinas></MisRutinas>}></Route>
        <Route path="/guiaEjercicios" element={<GuiaEjercicios></GuiaEjercicios>}></Route>
        <Route path="/principal" element={<Principal></Principal>}></Route>
    </Routes>
    <ToastContainer />
    </Provider>
    </>
  );
}

export default App;

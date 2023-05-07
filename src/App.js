import { Route, Router, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import RegistrarMarcas from "./paginas/RegistrarMarcas";
import RegistrarRutina from "./paginas/RegistrarRutina";


function App() {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/registrarPr' element={<RegistrarMarcas></RegistrarMarcas>}></Route>
        <Route path="/registrarRutinas" element={<RegistrarRutina></RegistrarRutina>}></Route>
    </Routes>
    </>
  );
}

export default App;

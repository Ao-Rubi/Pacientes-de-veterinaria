import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Formulario from "./components/Formulario"

function App() {
  return (
    <div className="App container">
      <h1 className='text-center display-5 mb-3 mt-2'>Administrador pacientes de veterinaria</h1>
      <Formulario></Formulario>
    </div>
  );
}

export default App;

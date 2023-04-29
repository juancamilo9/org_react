// Siempre que se vaya a usar un estado, se debe de importar
import {useState} from 'react';
import './App.css';
// Estamos importando nuestro componente
import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import MiOrg from './components/MiOrg';

function App() {
  const [showForm,updateState] = useState(false);

  const changeShow = () => {
    updateState(!showForm);
  }

  //Ternario --> codición ? caminoVerdadero : caminoFalso 
  return (
    <div>
      {/* Llamamos nuestro componente */}
      <Header />
      {showForm && <Form />}
      <MiOrg updateShow={changeShow}/>
    </div>
  );
}

export default App;

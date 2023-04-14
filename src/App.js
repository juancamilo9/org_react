import './App.css';
// Estamos importando nuestro componente
import Header from './components/Header/Header.js'
import Form from './components/Form/Form.js'

function App() {
  return (
    <div>
      {/* Llamamos nuestro componente */}
      <Header />
      <Form />
    </div>
  );
}

export default App;

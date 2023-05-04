// Siempre que se vaya a usar un estado, se debe de importar
import {useState} from 'react';
import './App.css';
// Estamos importando nuestro componente
import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import MiOrg from './components/MiOrg';
import Team from './components/Team';
import Collaborator from './components/Collaborators';
import Footer from './components/Footer';


function App() {
  const [showForm,updateState] = useState(false);
  const [collaborators, updateCollaborators] = useState([]);

  const changeShow = () => {
    updateState(!showForm);
  }
  // Lista de equipos: contiene el nombre, los colores de cada equipo en un objeto
  const teams =[
    {
      title:'Programación',
      primaryColor:'#57C278',
      secondaryColor:'#D9F7E9',
    },
    {
      title:'Front End',
      primaryColor:'#82CFFA',
      secondaryColor:'#E8F8FF',
    },
    {
      title:'Data Science',
      primaryColor:'#A6D157',
      secondaryColor:'#F0F8E2',
    },
    {
      title:'DeVops',
      primaryColor:'#E06B69',
      secondaryColor:'#FDE7E8',
    },
    {
      title:'UX y Diseño',
      primaryColor:'#DB6EBF',
      secondaryColor:'#FAE9F5',
    },
    {
      title:'Móvil',
      primaryColor:'#FFBA05',
      secondaryColor:'#FFF5D9',
    },
    {
      title:'Innovasión y Gestión',
      primaryColor:'#FF8A29',
      secondaryColor:'#FFEEDF',
    }
  ];

  const registerCollaborator = (collaborator) => {
    // Spread Operator --> se representa con ... y lo que hace es una copia de lo que hay en un arreglo y le agrega lo que esta en el segundo parametro
    // collaborators -->  representa el valor incial del hook updateCollaborators
    updateCollaborators([...collaborators, collaborator]);
  }

  //Ternario --> codición ? caminoVerdadero : caminoFalso 
  return (
    <div>
      {/* Llamamos nuestro componente */}
      <Header />
      {
        showForm && <Form
            teams={teams.map((team)=> team.title)}
            registerCollaborator={registerCollaborator}
        />
      }
      <MiOrg updateShow={changeShow}/>
      {
        teams.map((team) => <Team 
          team={team} 
          key={team.title}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.title)}
        />)
      }
      <Footer />
    </div>
  );
}
export default App;

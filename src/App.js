// Siempre que se vaya a usar un estado, se debe de importar
import {useState} from 'react';
import './App.css';
// ? Estamos importando nuestro componente
import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import MiOrg from './components/MiOrg';
import Team from './components/Team';
import Collaborator from './components/Collaborators';
import Footer from './components/Footer';
import { v4 as uuid } from 'uuid';



function App() {
  const [showForm,updateState] = useState(false);
  const [collaborators, updateCollaborators] = useState([
    {
      id: uuid(),
      name: "Harland Lohora",
      rol: "desarrollador",
      photo: "https://github.com/harlandlohora.png",
      team: "Programación",
      favorite:false
    },
    {
      id: uuid(),
      name: "Genesys",
      rol: "Product Owner",
      photo: "https://github.com/genesysaluralatam.png",
      team: "Data Science",
      favorite:false
    }
  ]);

  const [teams, updateTeams] = useState([
    {
      'id': uuid(),
      title:'Programación',
      primaryColor:'#57C278',
      secondaryColor:'#D9F7E9',
    },
    {
      'id': uuid(),
      title:'Front End',
      primaryColor:'#82CFFA',
      secondaryColor:'#E8F8FF',
    },
    {
      'id': uuid(),
      title:'Data Science',
      primaryColor:'#A6D157',
      secondaryColor:'#F0F8E2',
    },
    {
      'id': uuid(),
      title:'DeVops',
      primaryColor:'#E06B69',
      secondaryColor:'#FDE7E8',
    },
    {
      'id': uuid(),
      title:'UX y Diseño',
      primaryColor:'#DB6EBF',
      secondaryColor:'#FAE9F5',
    },
    {
      'id': uuid(),
      title:'Móvil',
      primaryColor:'#FFBA05',
      secondaryColor:'#FFF5D9',
    },
    {
      'id': uuid(),
      title:'Innovasión y Gestión',
      primaryColor:'#FF8A29',
      secondaryColor:'#FFEEDF',
    }
  ]);

  const changeShow = () => {
    updateState(!showForm);
  }

  // Actualizar color de equipo
  const updateColor = (color, id) => {
    const teamsUpdate = teams.map((team)=>{
      if (team.id === id ){
        team.primaryColor = color
      }
      return team
    });
    updateTeams(teamsUpdate)
  }

  const registerCollaborator = (collaborator) => {
    // Spread Operator --> se representa con ... y lo que hace es una copia de lo que hay en un arreglo y le agrega lo que esta en el segundo parametro
    // collaborators -->  representa el valor incial del hook updateCollaborators
    updateCollaborators([...collaborators, {...collaborator, id:uuid()}]);
  }

  // ! Función para eliminar colaboradores
  const deleteCollaborator = (id) =>{
    console.log("delete collaborator", id);
    const collaboratorsNew = collaborators.filter((collaborator)=>collaborator.id !== id);
    updateCollaborators(collaboratorsNew);
  }

  // Función para agregar colaboradores a favoritos
  const addFavorite = (id) =>{
        const collaboratorsUpdates = collaborators.map((collaborator)=>{
          if (collaborator.id === id){
              collaborator.favorite =  !collaborator.favorite;
          }
          return collaborator;
        })
        updateCollaborators(collaboratorsUpdates);
  }

  const createTeam = (team) => {
    console.log(team);
    updateTeams([...teams,{...team,id:uuid()}]);
  } 

  // * Ternario --> codición ? caminoVerdadero : caminoFalso 
  return (
    <div>
      {/* Llamamos nuestro componente */}
      <Header />
      {
        showForm && <Form
            teams={teams.map((team)=> team.title)}
            registerCollaborator={registerCollaborator}
            createTeam = {createTeam}
        />
      }
      <MiOrg updateShow={changeShow}/>
      {
        teams.map((team) => <Team 
          team={team} 
          key={team.title}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.title)}
          deleteCollaborator={deleteCollaborator}
          updateColor = {updateColor}
          addFavorite = {addFavorite}
        />)
      }
      <Footer />
    </div>
  );
}
export default App;

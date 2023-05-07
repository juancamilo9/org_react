// Vicnulamos nuestro css
import {useState} from 'react';
import './Form.css';
import Field from '../Field';
import OptionList from '../OptionList';
import Botton from '../Botton';
import { v4 as uuid } from 'uuid';


const Form = (props)=>{
    
    const [name,setName] = useState("");
    const [rol,setRol] = useState("");
    const [photo,setPhoto] = useState("");
    const [team,setTeam] = useState("");

    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");

    const { registerCollaborator, createTeam } = props
    // Creamos una función que nos permita prevenir el comportamiento predeterminado del formulario
    
    const manageShipping = (e)=>{
        e.preventDefault();
        let dateSend = {
                            name,
                            rol,
                            photo,
                            team
                        }
        registerCollaborator(dateSend);
    };

    const manageNewShipping = (e) =>{
        e.preventDefault();
        createTeam({title,primaryColor:color});
    }

    return (
        <section className='form'>
            {/* Evento onsubmit de HTML en react es onSubmit */}
            <form onSubmit={manageShipping}>
                <h2> Rellena el formulario para crear el colaborador.</h2>
                <Field 
                    title='Nombre' 
                    placeholder='Ingresar nombre' 
                    required 
                    val={name} 
                    updateValue={setName}
                />
                <Field 
                    title='Puesto' 
                    placeholder='Ingresar puesto' 
                    required
                    val={rol} 
                    updateValue={setRol}
                />
                <Field 
                    title='Foto' 
                    placeholder='Ingresa dirección de la foto' 
                    required
                    val={photo} 
                    updateValue={setPhoto}
                />
                <OptionList 
                    required
                    val={team} 
                    updateValue={setTeam}
                    teams = {props.teams}
                />
                <Botton text='Crear'/>
            </form>

            <form onSubmit={manageNewShipping}>
                <h2> Rellena el formulario para crear el equipo.</h2>
                <Field 
                    title='Titulo' 
                    placeholder='Ingresar titulo' 
                    required 
                    val={title} 
                    updateValue={setTitle}
                />
                <Field
                    type='color'
                    title='Color'  
                    required
                    val={color} 
                    updateValue={setColor}
                />
                <Botton text='Registrar Equipo'/>
            </form>
        </section>
    );
}

// * Exportamos nuestra función que retorna el componente
export default Form;
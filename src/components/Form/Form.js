// Vicnulamos nuestro css
import {useState} from 'react';
import './Form.css';
import TextField from '../TextField';
import OptionList from '../OptionList';
import Botton from '../Botton';
const Form = ()=>{
    // Creamos una función que nos permita prevenir el comportamiento predeterminado del formulario
    const manageShipping = (e)=>{
        e.preventDefault();
        let dateSend = {
                            name,
                            rol,
                            photo,
                            team

                        }
        console.log(dateSend);
    };

    const [name,setName] = useState("");
    const [rol,setRol] = useState("");
    const [photo,setPhoto] = useState("");
    const [team,setTeam] = useState("");
    return (
        <section className='form'>
            {/* Evento onsubmit de HTML en react es onSubmit */}
            <form onSubmit={manageShipping}>
                <h2> Rellena el formulario para crear el colaborador.</h2>
                <TextField 
                    title='Nombre' 
                    placeholder='Ingresar nombre' 
                    required 
                    val={name} 
                    updateValue={setName}
                />
                <TextField 
                    title='Puesto' 
                    placeholder='Ingresar puesto' 
                    required
                    val={rol} 
                    updateValue={setRol}
                />
                <TextField 
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
                />
                
                <Botton text='Crear'/>
            </form>
        </section>
    );
}

// * Exportamos nuestra función que retorna el componente
export default Form;
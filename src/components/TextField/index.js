import {useState} from 'react';
import './index.css'

const TextField = (props) => {
    const [value,setValue] = useState();
    const placeholderModificado = `${props.placeholder}...`;
    
    // ? Función para manejar los cambios en los input 
    const getChange = (e) => {
        props.updateValue(e.target.value);
    }
    
    return (
        <div className='form-group'>
            <label>{props.title}</label>
            <input 
                placeholder={placeholderModificado} 
                required={props.required} 
                value={value}
                // *Cada vez que el usuario interactue con el input
                onChange={getChange}
            />
        </div>
    )
}

export default TextField
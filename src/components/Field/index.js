import {useState} from 'react';
import './index.css'

const Field = (props) => {
    const [value,setValue] = useState();
    const placeholderModificado = `${props.placeholder}...`;
    
    const {type='text'} = props
    // ? Función para manejar los cambios en los input 
    const getChange = (e) => {
        props.updateValue(e.target.value);
    }
    
    return (
        <div className={`form-group field-${type}`}>
            <label>{props.title}</label>
            <input
                type={type}
                placeholder={placeholderModificado} 
                required={props.required} 
                value={value}
                // *Cada vez que el usuario interactue con el input
                onChange={getChange}
            />
        </div>
    )
}

export default Field
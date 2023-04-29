// importamos el hook useState
import { useState } from 'react';
import './MiOrg.css'

const MiOrg = (props) =>{
    // Estado - hooks 
    // Declaracion de estados para componentes
    // useState()
    // const [nombrevariable,función que actualiza] = useState(valorInicia)
    
    // const [show,updateShow] =useState(true);
    // const manageClick = ()=>{
    //     updateShow(!show)
    // }
    
    return <section className='org-section'>
        <h3 className='title-section'>Mi Organización</h3>
        <img src='/img/add.png' alt='imagen boton' onClick={props.updateShow} />
    </section>

} 

export default MiOrg
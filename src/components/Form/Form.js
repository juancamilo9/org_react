// Vicnulamos nuestro css
import './Form.css'
import TextField from '../TextField'
import OptionList from '../OptionList';
import Botton from '../Botton';
const Form = ()=>{
    return (
        <section className='form'>
            <form>
                <h2> Rellena el formulario para crear el colaborador.</h2>
                <TextField title='Nombre' placeholder='Ingresar nombre'/>
                <TextField title='Puesto' placeholder='Ingresar puesto'/>
                <TextField title='Foto' placeholder='Ingresa dirección de la foto' />
                <OptionList/>
                <Botton text='Crear'/>
            </form>
        </section>
    );
}

// * Exportamos nuestra función que retorna el componente
export default Form;
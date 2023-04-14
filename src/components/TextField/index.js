import './index.css'

const TextField = (props) => {
    const placeholderModificado = `${props.placeholder}...`;
    return (
        <div className='form-group'>
            <label>{props.title}</label>
            <input placeholder={placeholderModificado} />
        </div>
    )
}

export default TextField
import './OptionList.css'

const OptionList = () =>{
    const teams =[
        'Programación',
        'Front End',
        'Data Science',
        'DeVops',
        'UX y Diseño',
        'Móvil',
        'Innovasión y Gestión'
    ];
    /* método Map -> array.map((team)=>{
        return <option></option>
    }) */
    return (
        <div className='form-group'>
            <label>Equipos</label>
            <select>
                {teams.map((team, index) => <option key={index}>{team}</option>)}
            </select>
        </div>
    );
}

export default OptionList;
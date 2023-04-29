import './OptionList.css'

const OptionList = (props) =>{
    const teams =[
        'Programación',
        'Front End',
        'Data Science',
        'DeVops',
        'UX y Diseño',
        'Móvil',
        'Innovasión y Gestión'
    ];
    const manageChange = (e) =>{
        console.log("change",e.target.value);
        props.updateValue(e.target.value);
    }
    /* método Map -> array.map((team)=>{
        return <option></option>
    }) */
    return (
        <div className='form-group'>
            <label>Equipos</label>
            <select value={props.value} onChange={manageChange}>
                <option value="" disabled defaultValue="" hidden >Selecccionar Equipo</option>
                {teams.map((team, index) => <option key={index} value={team}>{team}</option>)}
            </select>
        </div>
    );
}

export default OptionList;
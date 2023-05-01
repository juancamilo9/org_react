import './OptionList.css'

const OptionList = (props) =>{
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
                {props.teams.map((team, index) => <option key={index} value={team}>{team}</option>)}
            </select>
        </div>
    );
}

export default OptionList;
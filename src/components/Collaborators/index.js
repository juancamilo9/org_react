import "./Collaborators.css"

const Colaborador = (props) => {
    
    const {name,rol,team,photo} = props.data
    const {primaryColor} = props
    return <div className="collaborator">
        <div className="header" style={{backgroundColor:primaryColor}}>
            <img src={photo} alt={name}/>
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{rol}</h5>
        </div>
    </div>
}

export default Colaborador
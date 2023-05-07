import "./Collaborators.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

const Colaborador = (props) => {
    
    const {id,name,rol,team,photo, favorite} = props.data
    const {primaryColor, deleteCollaborator, addFavorite} = props

    return <div className="collaborator">
        <AiFillCloseCircle className="delete" onClick={() =>{deleteCollaborator(id)}} />
        <div className="header" style={{backgroundColor:primaryColor}}>
            <img src={photo} alt={name}/>
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{rol}</h5>
            {favorite ? <AiFillHeart color='red'onClick={()=>{ addFavorite(id)}}/>: <AiOutlineHeart onClick={()=>{ addFavorite(id)}}/> }
        </div>
    </div>
}

export default Colaborador
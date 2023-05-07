import Collaborator from '../Collaborators';
import './Team.css';
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
    //Destructuración:
    const {id,secondaryColor,primaryColor, title } = props.team; 
    const { collaborators, deleteCollaborator, updateColor, addFavorite } = props
    
    const changeColor = (e) =>{
        updateColor(e.target.value,id);
    }
    return <>
        {
            // Evaluamos si los collaborators, tienen una longitud mayor a 0, muestre el section
            collaborators.length > 0 &&
            <section className='team' style={{backgroundColor:hexToRgba(primaryColor,0.5)}}>
                <input className='color'
                    type='color'
                    value={primaryColor}
                    onChange={changeColor}

                />
                <h3 style={{borderColor:primaryColor}}>{title}</h3>
                <div className='collaborators'>
                    {
                        collaborators.map((collaborator,index) => <Collaborator 
                            data={collaborator} 
                            key={index} 
                            primaryColor={primaryColor}
                            deleteCollaborator={deleteCollaborator}
                            addFavorite={addFavorite}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Team
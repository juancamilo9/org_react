import Collaborator from '../Collaborators';
import './Team.css';

const Team = (props) => {
    //Destructuración:
    const { secondaryColor, primaryColor, title } = props.team; 
    const { collaborators } = props

    return <>
        {
            // Evaluamos si los collaborators, tienen una longitud mayor a 0, muestre el section
            collaborators.length > 0 &&
            <section className='team' style={{backgroundColor:secondaryColor}}>
                <h3 style={{borderColor:primaryColor}}>{title}</h3>
                <div className='collaborators'>
                    {
                        collaborators.map((collaborator,index) => <Collaborator 
                        data={collaborator} 
                        key={index} 
                        primaryColor={primaryColor}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Team
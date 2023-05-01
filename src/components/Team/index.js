import './Team.css';

const Team = (props) => {
    //Destructuración:
    const { secondaryColor, primaryColor, title } = props.team; 
    return <section className='team' style={{backgroundColor:secondaryColor}}>
        <h3 style={{borderColor:primaryColor}}>{title}</h3>
        <div className='collaborators'>

        </div>
    </section>
}

export default Team
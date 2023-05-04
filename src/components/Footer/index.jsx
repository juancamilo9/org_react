import './Footer.css';

const Footer = () =>{
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
                <div className='redes'>
                    <a href=''>
                        <img src="/img/facebook.png" alt='Facebook' />
                    </a>
                    <a href='https://linkedin.com/in/juan-camilo-duque-gil'>
                        <img src="/img/linkedin.png" alt='linkedin' />
                    </a>
                </div>
                <img src='/img/Logo.png' alt='org' />
                <strong>Desarrollado por Juan Camilo Duque Gil</strong>
            </footer>
}

export default Footer
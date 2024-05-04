import logo from '../../assets/img/logo.svg'
import NavIcon1 from '../../assets/img/nav-icon1.svg'
import NavIcon2 from '../../assets/img/nav-icon2.svg'
import NavIcon3 from '../../assets/img/nav-icon3.svg'
import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.styles.css'
import Resume from '../../assets/Resume.pdf'
import { HashLink as Link} from 'react-router-hash-link';

const NavBar = () => {
    const [activeLink,setActiveLink] = useState('home')
    const [scrolled,setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () =>{
            if (window.scrollY>50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll)

        return () => window.removeEventListener("scroll",onScroll)
    }, [])

    const updateActiveLink = (link) =>{
        setActiveLink(link)
    }

    return (
        <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='TradeMark'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href="#achievements" className={activeLink === 'achievements' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('achievements')}>Achievements</Nav.Link>
                    <Nav.Link href={Resume} target='Resume' className='navbar-resume'>Resume</Nav.Link>  
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/zohaib-ehtesham-7b3638224/'><img src={NavIcon1} alt=''/></a>
                        <a href='https://github.com/Zohaib-Eh'><img src={NavIcon2} alt=''/></a>
                        <a href='https://www.instagram.com/zohaib_lol?igsh=MTllaTYyNjNpa2pnMA=='><img src={NavIcon3} alt=''/></a>
                    </div>
                    <Link smooth to="/#connect" className='connect'>
                        <button className='connect' onClick={() => console.log('connect')}> <span>Let's Connect </span> </button>
                    </Link>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
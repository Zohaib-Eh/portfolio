import { Container,Row , Col } from "react-bootstrap"
import { Tab, Nav } from "react-bootstrap";
import ProjectCard from "../project-card/project-card.component";
import proj1 from '../../assets/img/project1.png'
import Signly from  '../../assets/img/Signly.jpg'
import GoFish from '../../assets/img/FishGo.png'
import Buzzer from '../../assets/img/Buzzer.png'
import StudyBuddy from '../../assets/img/Study Buddy.png'
import AOR from '../../assets/img/Automated Retriever.jpg'
import LineLauncher from '../../assets/img/LineLauncher.jpg'
import BankSupermarket from '../../assets/img/Supermarket.jpg'
import HomeMonitor from '../../assets/img/HomeMonitor.jpg'
import HRI from '../../assets/img/HRI.jpg'
import controlSys from '../../assets/img/ControlSystem.jpg'
import emotionPred from '../../assets/img/EmotionPrediction.png'

import './projects.styles.css'

const Projects = () => {
    const perprojects = [
        {
            title:"Signly",
            description: "Collaborated with a team of four to develop a British Sign Language (BSL) Learning website built on Django framework. Led front-end development using JavaScript",
            imgUrl: Signly,
        },
        {
            title:"Zoobs Clothing",
            description: "Built an e-commerce site with React.js, understanding components, context, and properties. Styled with SASS CSS and styled components.",
            imgUrl: proj1,
        },
        {
            title:"GoFish",
            description: "Created a fish tank monitoring system to allow user to get a short video/gif, control tank lights and feed the fish via Whatsapp or Discord",
            imgUrl: GoFish,
        },
        {
            title:"Buzzer Game",
            description: "Developed a small buzzer game using Raspberry Pi Pico, understanding ports, I/O, pull-up and pull-down resistors and electrical wiring",
            imgUrl: Buzzer,
        },
        {
            title:"Study Buddy",
            description: "Designed a UI/UX solution using Figma enabling better collaboration between students with their fellow peers and teachers",
            imgUrl: StudyBuddy,
        },
    ]
    const uniprojects = [
        {
            title:"Automated Object Retriever",
            description: "Constructed an Automated Object Retriever with Arduino, ultrasonic sensors, and motors. Engineered an optimal pathfinding algorithm.",
            imgUrl: AOR,
        },
        {
            title:"Line Launcher",
            description: "Engineered a line launcher to throw a squash ball with a line connected to it between 2m and 6m",
            imgUrl: LineLauncher,
        },
        {
            title:"Banking Software - Supermarket Software",
            description: "Developed GUI-based Banking and Supermarket software using Java and NetBeans IDE. Used OOP and integrated the systems together",
            imgUrl: BankSupermarket,
        },
        {
            title:"Home Monitoring System",
            description: "Developed a Home Monitoring System with a PIC microcontroller, tracking temperature, humidity, and burglar detection with alarms.",
            imgUrl: HomeMonitor,
        },
        {
            title:"Loneliness Prediction Model",
            description: "Created an emotion prediction model from scratch, leveraged the emotion prediction model to extract features to create loneliness prediction model",
            imgUrl: emotionPred,
        },
        {
            title:"HRI with UR5e",
            description: "Calculated direct and inverse kinematic solution and used Computer Vision to allow user to give command to the UR5 using camera for human robot interaction",
            imgUrl: HRI,
        },
        {
            title:"State Machine for Conveyor Belt (LabView)",
            description: "Created a state machine to impelement a Conveyor Belt system in LABVIEW",
            imgUrl: controlSys,
        },
    ]
    return  (
        <section className="project" id='project'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>My portfolio features projects in electronics, robotics, web development, machine learning, digital systems, and UI/UX design. Each represents my dedication to innovation across diverse fields.</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey='university'>
                            <Nav fill variant="tabs" className="nav-pills mb-5 justify-content-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey='university'>University Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="personal">Personal Projects</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <br/>
                            <Tab.Content>
                                <Tab.Pane eventKey = "personal">
                                    <Row>
                                        {
                                            perprojects.map((project, index) => {
                                                return(
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "university">
                                    <Row>
                                        {
                                            uniprojects.map((project, index) => {
                                                return(
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects
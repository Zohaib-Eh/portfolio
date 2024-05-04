import { Container,Row , Col } from "react-bootstrap"
import { Tab, Nav } from "react-bootstrap";
import ProjectCard from "../project-card/project-card.component";
import proj1 from '../../assets/img/project1.png'
import Signly from  '../../assets/img/Signly.jpg'
import MR from '../../assets/img/MR.jpg'
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
import digitalSys from '../../assets/img/DigitalSystem.jpg'

import './projects.styles.css'

const Projects = () => {
    const perprojects = [
        {
            title:"Signly",
            description: "Desc 1",
            imgUrl: Signly,
        },
        {
            title:"Monsters Rolodex",
            description: "Desc 1",
            imgUrl: MR,
        },
        {
            title:"Zoobs Clothing",
            description: "Desc 1",
            imgUrl: proj1,
        },
        {
            title:"GoFish",
            description: "Desc 1",
            imgUrl: GoFish,
        },
        {
            title:"Buzzer Game",
            description: "Desc 1",
            imgUrl: Buzzer,
        },
        {
            title:"Study Buddy",
            description: "Desc 1",
            imgUrl: StudyBuddy,
        },
    ]
    const uniprojects = [
        {
            title:"Automated Object Retriever",
            description: "Desc 1",
            imgUrl: AOR,
        },
        {
            title:"Line Launcher",
            description: "Desc 1",
            imgUrl: LineLauncher,
        },
        {
            title:"Banking Software - Supermarket Software",
            description: "Desc 1",
            imgUrl: BankSupermarket,
        },
        {
            title:"Home Monitoring System",
            description: "Desc 1",
            imgUrl: HomeMonitor,
        },
        {
            title:"Loneliness Prediction Model",
            description: "Desc 1",
            imgUrl: emotionPred,
        },
        {
            title:"HRI with UR5e",
            description: "Desc 1",
            imgUrl: HRI,
        },
        {
            title:"State Machine for Conveyor Belt (LabView)",
            description: "Desc 1",
            imgUrl: controlSys,
        },
        {
            title:"Digital System (Quartus)",
            description: "Desc 1",
            imgUrl: digitalSys,
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
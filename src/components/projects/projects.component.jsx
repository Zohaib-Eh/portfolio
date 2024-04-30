import { Container,Row , Col } from "react-bootstrap"
import { Tab, Nav } from "react-bootstrap";
import ProjectCard from "../project-card/project-card.component";
import proj1 from '../../assets/img/project1.png'

import './projects.styles.css'

const Projects = () => {
    const projects = [
        {
            title:"Sample 1",
            description: "Desc 1",
            imgUrl: proj1,
        },
        {
            title:"Sample 1",
            description: "Desc 1",
            imgUrl: proj1,
        },
        {
            title:"Sample 1",
            description: "Desc 1",
            imgUrl: proj1,
        },
        {
            title:"Sample 1",
            description: "Desc 1",
            imgUrl: proj1,
        },
        {
            title:"Sample 1",
            description: "Desc 1",
            imgUrl: proj1,
        },
        {
            title:"Sample 1",
            description: "Desc 1",
            imgUrl: proj1,
        },
        {
            title:"Sample 1",
            description: "Desc 1",
            imgUrl: proj1,
        },
        {
            title:"Sample 1",
            description: "Desc 1",
            imgUrl: proj1,
        },
    ]
    return  (
        <section className="project" id='project'>
            <Container>
                <Row>
                    <Col>
                        <h2> Projects</h2>
                        <p>About Projects</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                            <Nav fill variant="tabs" className="nav-pills mb-5 justify-content-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <br/>
                            <Tab.Content>
                                <Tab.Pane eventKey = "first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "second">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "third">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
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
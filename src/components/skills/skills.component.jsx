import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import FrontendIcon from '../../assets/img/frontent.svg'
import BackendIcon from '../../assets/img/backend.svg'
import MLIcon from '../../assets/img/machine-learning.svg'
import DataIcon from '../../assets/img/data-analysis.svg'
import RoboIcon from '../../assets/img/robotic.svg'
import NetworkIcon from '../../assets/img/data-networks.svg'
import ControlIcon from '../../assets/img/control-systems.svg'
import EmbedIcon from '../../assets/img/embedded-systems.svg'
import './skills.styles.css'

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className="skill">
            <Container >
                <Row>
                    <Col>
                    <div className="skill-bx" id="skills">
                        <h2>
                            Skills
                        </h2>
                        <p className="about-skill">With a background rich in diverse experiences, I bring a versatile skill set to the table.
                           From crafting seamless user experiences to engineering solutions for complex systems, 
                           I thrive on the challenge of mastering new domains.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={FrontendIcon} alt='img'/>
                                <h5>Frontend Developement</h5>
                                <h6>JavaScript, HTML, CSS, React.js and BootStrap</h6>
                            </div>
                            <div className="item">
                                <img src={BackendIcon} alt='img'/>
                                <h5>Backend Developement</h5>
                                <h6>Django, Flask, Firebase and SQL</h6>
                            </div>
                            <div className="item">
                                <img src={MLIcon} alt='img'/>
                                <h5>Machine Learning</h5>
                                <h6>scikit-learn and TensorFlow</h6>
                            </div>
                            <div className="item">
                                <img src={RoboIcon} alt='img'/>
                                <h5>Robotics</h5>
                                <h6>Fundamentals of robotics, forward kinematics, inverse kinematics and ROS</h6>
                            </div>
                            <div className="item">
                                <img src={NetworkIcon} alt='img'/>
                                <h5>Data Networks and Security</h5>
                                <h6>Data networks, including network planning, OSI layer, and topologies.</h6>
                            </div>
                            <div className="item">
                                <img src={DataIcon} alt='img'/>
                                <h5>Data Analysis</h5>
                                <h6>Data preparation, descriptive statistics, relationships, Pandas, NumPy, IBM SPSS</h6>
                            </div>
                            <div className="item">
                                <img src={EmbedIcon} alt='img'/>
                                <h5>Embedded Systems</h5>
                                <h6>Digital systems design, reliabiluty engineering, Verilog, Quartus</h6>
                            </div>
                            <div className="item">
                                <img src={ControlIcon} alt='img'/>
                                <h5>Control Systems</h5>
                                <h6>PID Controllers, Simulink, LabView and MATLAB</h6>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills
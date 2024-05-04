import { Col, Container, Row } from "react-bootstrap"
import ListGroup from 'react-bootstrap/ListGroup';
import './achievements.styles.css'
import IISC from '../../assets/IISC.pdf'
import Hacxmas from '../../assets/Haxcsmas.pdf'
import RWDC from '../../assets/RWDC.pdf'


const Achievements = () => {
    return (
        <section className="achievements">
            <Container>
                <Row>
                    <Col>
                        <div className="achievements-bx" id="achievements">
                            <h2>Achievements</h2>
                            <ListGroup variant="flush" className="achievement-lists bg-dark text-white">
                                <ListGroup.Item className="achievement-item"><a href={RWDC} target='cert'>2020 International Real World Design Challenge - Grand Prize</a></ListGroup.Item>
                                <ListGroup.Item className="achievement-item"><a href={Hacxmas} target='cert'>2021 Google Hacxmas Hackathon - Winner (in Education Track)</a></ListGroup.Item>
                                <ListGroup.Item className="achievement-item"><a href="https://devpost.com/software/gofish-7x2ktj">2023 Royal Hackaway V6 - 3rd Place Winner</a></ListGroup.Item>
                                <ListGroup.Item className="achievement-item"><a href={IISC} target='cert'>2023 Received Turing Fellowship for Internship at Indian Institute of Science (IISc)</a></ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Achievements 
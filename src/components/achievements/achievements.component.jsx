import { Col, Container, Row } from "react-bootstrap"
import ListGroup from 'react-bootstrap/ListGroup';
import './achievements.styles.css'

const Achievements = () => {
    return (
        <section className="achievements">
            <Container>
                <Row>
                    <Col md={10}>
                        <div className="achievements-bx" id="achievements">
                            <h2>Achievements</h2>
                            <ListGroup variant="flush" className="achievement-lists bg-dark text-white">
                                <ListGroup.Item className="achievement-item">Cras justo odio</ListGroup.Item>
                                <ListGroup.Item className="achievement-item">Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item className="achievement-item">Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item className="achievement-item">Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Achievements
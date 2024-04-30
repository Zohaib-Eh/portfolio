import { useState } from "react"
import { Row, Col, Container } from "react-bootstrap";
import contactImg from '../../assets/img/contactImg.svg'
import './contact.styles.css'

const Contact = () => {
    const formInitialDetails = {
        firstName : '',
        lastName : '',
        email : '',
        phone : '',
        message : '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status,setStatus] = useState({});

    const onFormUpdate = (category,value) => {
        setFormDetails({
            ...formDetails,
            [category] : value
        })
    }

    const submitHandler = () => {

    }

    return (
        <section className="contact" id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt="contact"/>
                    </Col>
                    <Col md={6}>
                        <h2>Let's Connect</h2>
                        <h4>Drop me a line and let's sync up like flawless software updates!</h4>
                        <form onSubmit={submitHandler}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                </Col>
                                <textarea row='6' value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}/>
                                <button type="submit"><span>{buttonText}</span></button>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "failed" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact
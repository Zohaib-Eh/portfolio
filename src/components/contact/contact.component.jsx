import { useState, useRef } from "react"
import { Row, Col, Container } from "react-bootstrap";
import contactImg from '../../assets/img/contactImg.svg'
import './contact.styles.css'
import emailjs from '@emailjs/browser';

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

    const serviceId = 'service_bulfi79'
    const templateId = 'template_prbe0g7'
    const publicKey = 'xG-GbAvM_t_ULdyvQ'

    const onFormUpdate = (category,value) => {
        setFormDetails({
            ...formDetails,
            [category] : value
        })
    }
    const formRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(
            (response) => {
                setStatus({ success: true, message: 'Email sent successfully' });
                console.log('Email sent successfully:', response);
            },
            (error) => {
                setStatus({ success: false, message: 'Failed to send email' });
                console.error('Email sending failed:', error);
            }
        );
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
                        <form ref={formRef} onSubmit={(e) => submitHandler(e)}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name='firstName' value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name='lastName' value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name='email' value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" name='phone' value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                </Col>
                                <textarea row='6' name='message' value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}/>
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
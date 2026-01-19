import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [formData, setFormData] = useState({
        from_name: "Akash",
        reply_to: "akashanbu2018@gmail.com",
        phone: "6369310722",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setDone(false);
        setNotDone(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.from_name || !formData.reply_to || !formData.message) {
            setNotDone(true);
        } else {
            emailjs
                .sendForm(
                    "service_niilndo",
                    "template_6z5idye",
                    form.current,
                    "VOBt6Akm1LhI5CZG-"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setDone(true);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    return (
        <Container style={{ paddingTop: '50px' }}>
            <Row>
                <Col md={6} className="c-left">
                    <h1>Get in Touch</h1>
                    <h1 className="yellow">Contact me</h1>

                    {/* Display your contact info */}
                    <div className="contact-info">
                        <p><strong>Name:</strong> Akash A</p>
                        <p><strong>Email:</strong> akashanbu2018@gmail.com</p>
                        <p><strong>Phone:</strong> 6369310722</p>
                    </div>
                </Col>
                <Col md={6} className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="from_name"
                            className="user"
                            placeholder="Name"
                            value={formData.from_name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="reply_to"
                            className="user"
                            placeholder="Email"
                            value={formData.reply_to}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="phone"
                            className="user"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            className="user"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <span className='not-done'>
                            {notDone && "Please, fill all the input fields"}
                        </span>
                        <Button type="submit" className="button" disabled={done}>Send</Button>
                        <span className='done'>
                            {done && "Thanks for contacting me! I have received your email. If this is a test, everything works perfectly. I will reply to serious queries soon. You can also contact me on LinkedIn."}
                        </span>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;

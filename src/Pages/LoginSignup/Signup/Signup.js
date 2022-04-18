import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Signup = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passwordRef.current.value;
    }
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');

    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>SignUp Here</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" requireds />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Already have an account? <span className='text-danger' onClick={navigateLogin}>Please log in</span></p>
        </div>

    );
};

export default Signup;
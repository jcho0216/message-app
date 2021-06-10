import { Container, Form, Button } from 'react-bootstrap'
import React, { useRef } from 'react';
import { v4 as uuidV4 } from 'uuid'
function Login({ onIdSubmit }) {
    const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    function createNewId() {
        onIdSubmit(uuidV4())
    }

    return (
        <Container className="align-items-ceter d-flex" style={{height: "100vh"}}>
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type="text" ref={idRef} required></Form.Control>
                </Form.Group>
                <Button type="submit" className="mr-2">Login</Button>
                <Button onClick={createNewId}variant="secondary">Create A New Id</Button>
            </Form>
        </Container>
    )
}

export default Login;
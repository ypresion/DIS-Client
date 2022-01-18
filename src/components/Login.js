import React from 'react';
import { Form, Button, Container, Row } from "react-bootstrap";


/**
 * A login component.
 * 
 * It will render a login form.
 * 
 * @author Sylwia Krupa | w18015597
 */
class Login extends React.Component {

  render() {
    return (
      <Container className="justify-content-center">
        <Row className="my-3 col-12 col-md-6">
          <Form className="">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={this.props.email}
                onChange={this.props.handleEmail}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={this.props.password}
                onChange={this.props.handlePassword}
              />
            </Form.Group>
            <Button variant='primary' onClick={this.props.handleLoginClick}>Log in</Button>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default Login;
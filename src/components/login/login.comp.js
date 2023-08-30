import React from 'react'
import PropTypes from 'prop-types';
import {Container,Row,Col,Form, FormGroup,Button} from 'react-bootstrap'
export const LoginForm = ({handleOnChange,handleOnSubmit,formSwitcher,email,pass}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-info text-center'>Client Login</h1>
                <hr />
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
                    <FormGroup>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                        type='email' 
                        name='email'
                        value={email}
                        onChange={handleOnChange} 
                        placeholder='sam123@gmail.com' 
                        required 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type='password' 
                        name='password'
                        onChange={handleOnChange}
                        value={pass} 
                        placeholder='Enter password' 
                        required 
                        />
                    </FormGroup>
                    <br/>
                    <Button type='submit'>Login</Button>
                </Form>
                <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
            <a href='!#' onClick={()=>formSwitcher('reset')}>Forgot Password?</a>
            </Col>
        </Row>
    </Container>
  )
}
LoginForm.propTypes={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
}
//before we are recieving in the function we make sure that it will come in the proper way i.e the data type of the thing
//so that it doesnot crash the application if the data is coming wrong 
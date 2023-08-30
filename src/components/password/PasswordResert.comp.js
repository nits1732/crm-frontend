import React from 'react'
import PropTypes from 'prop-types';
import {Container,Row,Col,Form, FormGroup,Button} from 'react-bootstrap'
export const PasswordReset = ({handleOnChange,handleOnResetSubmit,formSwitcher,email}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-info text-center'>Reset Password</h1>
                <hr />
                <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
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
                    <br/>
                    <Button type='submit'>Reset Password</Button>
                </Form>
                <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
            <a href='!#' onClick={()=>formSwitcher('login')}>Login!</a>
            </Col>
        </Row>
    </Container>
  )
};
PasswordReset.propTypes={
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}
//before we are recieving in the function we make sure that it will come in the proper way i.e the data type of the thing
//so that it doesnot crash the application if the data is coming wrong 
import React from 'react'
import { Form,Button,FormGroup, Row, Col} from 'react-bootstrap'
import {PropTypes} from 'prop-types'
import './add-ticket-form.style.css'

export const AddTicketForm = ({handleOnSubmit,handleOnChange,formdata,errordata}) => {
  console.log(formdata)
  return (
    <div className="p-5 mb-4 form-box mt-3 add-new-ticket">
      <h1 className='text-info text-center'>Add New Ticket</h1>
      <hr/>
      <Form autoComplete='off' onSubmit={handleOnSubmit}>
        <FormGroup as={Row}>
            <Form.Label column sm={3}>Subject</Form.Label>
            <Col sm={9}>
            <Form.Control 
            name='subject'
            value={formdata.subject}
            onChange={handleOnChange} 
            placeholder='Enter Subject' 
            // required 
            />
            <Form.Text className='text-danger'>
              {errordata.subject && "Subject is Required!"}
            </Form.Text>
            </Col>
        </FormGroup>
        <FormGroup as={Row}>
            <Form.Label column sm-={3}>Date</Form.Label>
            <Col sm={9}>
            <Form.Control 
            type='date' 
            name='issueDate'
            onChange={handleOnChange}
            value={formdata.issueDate} 
            // placeholder='Enter password' 
            required 
            />
            </Col>
        </FormGroup>
        <FormGroup>
            <Form.Label>Issue</Form.Label>
            <Form.Control 
            as='textarea'
            name='details'
            rows={'5'}
            onChange={handleOnChange}
            value={formdata.details}  
            // placeholder='Enter password' 
            required 
            />
        </FormGroup>
        <br/>
        <Button type='submit' variant='info' className='w-100'>Create</Button>
    </Form>
    </div>
  )
}

AddTicketForm.propTypes={
  handleOnChange:PropTypes.func.isRequired,
  handleOnSubmit:PropTypes.func.isRequired,
  formdata:PropTypes.object.isRequired,
  errordata:PropTypes.object.isRequired,
}
import React from 'react'
import { Form,Button } from 'react-bootstrap'
import PropTypes from 'prop-types' 

export const UpdateTicket = ({msg,handleOnChange,handleOnSubmit}) => {
  return (
    <div>
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <br/>
            <Form.Text>Please reply your message heare or update the ticket</Form.Text>
            <Form.Control
            name=""
            value={msg}
            onChange={handleOnChange}
            as='textarea'
            row='10'
            // name='details'
            />
            <div className='text-end mt-3 mb-3'>
            <Button varient='info' type='submit'>Reply</Button>
            </div>
            
        </Form>
    </div>
  )
}
UpdateTicket.propTypes={
    msg:PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired
}   

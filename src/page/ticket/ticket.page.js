import React,{useEffect, useState} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import tickets from "../../assets/data/dummy-tickets.json"
import { MessageHistory } from '../../components/message-history/MessageHistory.comp'
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp'
const ticket1=tickets[0]
export const Ticket = () => {
  const [message, setmessage] = useState('');
  useEffect(() => {}, [message])
  
  const handleOnChange=e=>{
    setmessage(e.target.value)
  }
  const handleOnSubmit=()=>{
    alert('Form Updated')
  }
  return (
    <div>
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Ticket"/>
                </Col>
            </Row>
            <Row>
              <Col className='text-weight-bolder text-secondary'>
              <div className='subject'>Subject : {ticket1.subject}</div>
              <div className='date'>Ticket Opened : {ticket1.addedat}</div>
              <div className='Status'>Status : {ticket1.status}</div>
              </Col>
              <Col className='text-end'>
              <Button variant='outline-info'>Close Ticket</Button>
              </Col>
            </Row>
            <Row className='mt-5'>
              <Col>
              <MessageHistory msg={ticket1.history}/>
              </Col>
            </Row>
            <Row>
              <Col>
              <UpdateTicket msg={message}
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}/> 
              </Col>
            </Row>
        </Container>
    </div>
  )
}

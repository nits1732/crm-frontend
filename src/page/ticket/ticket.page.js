import React,{useEffect, useState} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import tickets from "../../assets/data/dummy-tickets.json"
import { MessageHistory } from '../../components/message-history/MessageHistory.comp'
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp'
import { useParams } from 'react-router-dom'
// const ticket=tickets[0]
export const Ticket = () => {
  const {tid}=useParams()
  const [message, setmessage] = useState('');
  const [ticket, setticket] = useState('');
  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if(tickets[i].id==tid){
        setticket(tickets[i])
        continue;
      }
    }
  }, [message,tid])
  
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
              <div className='subject'>Subject :{ticket.subject}</div>
              <div className='date'>Ticket Opened :{ticket.addedat}</div>
              <div className='Status'>Status :{ticket.status}</div>
              </Col>
              <Col className='text-end'>
              <Button variant='outline-info'>Close Ticket</Button>
              </Col>
            </Row>
            <Row className='mt-5'>
              <Col>
              {ticket.history && <MessageHistory msg={ticket.history}/>}
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

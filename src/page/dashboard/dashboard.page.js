import React from 'react'
import { TicketTable } from '../../components/ticketcomponet/TicketTable.comp'
import tickets from "../../assets/data/dummy-tickets.json"
import { Container,Row,Col,Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { Link } from 'react-router-dom'
export const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Dashboard"/>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-5 mb-2'>
                <Link to='/add-ticket'>
                <Button variant='info' style={{'fontSize':'2rem','padding':'10px 30px'}}>Add New Ticket</Button>
                </Link>
            
            </Col>
        </Row>
        <Row>
            <Col className='text-center mb-2'>
            <div>Total Ticket : 50</div>
            <div>Pending Ticket: 5</div>
            </Col>
        </Row>
        <Row>
            <Col className='mt-2'>
            Recenty Added Tickets
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col className='recent-ticket'>
                {/* passing the ticket as a props to the ticket table */}
            <TicketTable tickets={tickets}/>
            </Col>
        </Row>
    </Container>
  )
}

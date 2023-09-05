import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp'
import { shortText } from '../../utils/validations'

const initialFormData={
  subject:'',
  issueDate: '',
  details: ''
};
const initialErrorData={
  subject:false,
  issueDate: false,
  details: false
}
export const AddTicket = () => {
  const [formdata,setformdata]=useState(initialFormData);
  const [errordata,seterrordata]=useState(initialErrorData);
  const handleOnChange= (e)=>{
    const {name,value}=e.target;
    // useEffect(() => {}, [formdata])
    

    setformdata({
      ...formdata,
      [name]:value
    });
    console.log(name,value);
  }
  const handleOnSubmit =async (e)=>{
    e.preventDefault()
    seterrordata(initialErrorData)
    const isSubjectvalid = await shortText(formdata.subject)
    seterrordata({
      ...initialErrorData,
      subject:! isSubjectvalid
    })
    console.log('Form Submit Request Recieved')
  }
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="New Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col>
            <AddTicketForm
            handleOnChange={handleOnChange}
            formdata={formdata}
            handleOnSubmit={handleOnSubmit}
            errordata={errordata}
            />
            </Col>
        </Row>
    </Container>
  )
}

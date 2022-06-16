import React from 'react'
import './Previous.css';
import {CardTitle, CardText, Card,Button, CardImg, CardBody, CardSubtitle, CardLink, Form, Label, Input, FormGroup} from 'reactstrap';
import Header from './Header';

function Previous() {
  return (
    <>
    <Header/>
      <div>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} id='previous'>
        <CardTitle><strong>19th February 2022</strong></CardTitle>
        <br></br><br></br>
        <CardText>
          Name :  Vedica Singh <br></br><br></br>
          Project Title :  Springboot-react project <br></br><br></br>
          Description :  Today we have completed the ui part of the project as well as the data connectivity. <br></br><br></br>
          Sent To :  Eben Thomas, Rashmi Rahi, Pavan Khatri
        </CardText>
        <Button id='btn'>Resend</Button>
      </Card>

    </div>
    </>
  )
}

export default Previous

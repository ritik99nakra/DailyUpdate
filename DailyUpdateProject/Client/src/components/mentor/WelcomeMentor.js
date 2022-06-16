import React from 'react'
import MentorHeader from './MentorHeader';
import { CardBody, Card, CardTitle, CardSubtitle } from 'reactstrap'

function WelcomeMentor() {
   
    return (
      <>
      <MentorHeader/>
      <div>
       <Card id='c'>
           <CardBody >
             
           </CardBody>
       </Card>
       <Card id='c2'>
           <CardBody id='crc'>
              <CardTitle><br></br><h3><strong>ABOUT</strong></h3></CardTitle>
              <br></br>
              <CardSubtitle><h4> PDG Consulting is a firm of technologists with extensive experience developing large-scale custom applications, and delivering best-of-breed business intelligence solutions. We specialize in Custom Enterprise Software Development, Business Intelligence, and Digital Transformation.</h4></CardSubtitle>
           </CardBody>
       </Card>
       <Card id='c3' body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
           <CardBody>
              <CardTitle><br></br><h3><strong>Our Work</strong></h3></CardTitle>
              <br></br>
              <CardSubtitle><h4>We design, develop, and deliver innovative solutions to complex business, operational, and reporting needs to meet our clients' business objectives. We collaborate hand-in-hand with our clients to deliver creative solutions to existing and future challenges and transform their goals into reality.</h4></CardSubtitle>
           </CardBody>
       </Card>
      </div>
      </>
    )}

export default WelcomeMentor


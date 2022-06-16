import React from 'react'
import './Contact.css';
import{Row, Button, Card, CardBody, CardGroup, CardText, Col, CardTitle} from 'reactstrap';
import Header from './Header';
function Contact() {
  return (
    <>
    <Header/>
    <div>
      <Row>
      <Col sm="6">
        <Card body id='card1'>
          <CardTitle><h2>LOS ANGELES</h2></CardTitle><br></br>
          <h4>-------</h4>
          <CardText>
              <h5>PDG Consulting</h5>
              <p>714 S. Hill St M1<br />
                Los Angeles, CA 90014, USA<br />
                (323) 347-4640</p>

          </CardText>
          <Button id='btn' disabled>Contact Us!</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body id='card2'>
          <CardTitle><h2>MUMBAI</h2></CardTitle> <br></br>
          <h4>-------</h4>
          <CardText>
          <h5>PDG Software India Pvt. Ltd.</h5>
          <p>302, Zenia, Hiranandani Estate<br />
Thane MH 400607 IN<br />
022 42816612</p>
          </CardText>
          <Button id='btn' disabled>Contact Us!</Button>
        </Card>
      </Col>
    </Row>
    </div>
    </>
  )
}

export default Contact

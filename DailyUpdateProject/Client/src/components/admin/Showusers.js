// import React from 'react'
// import{Col, CardColumns, CardTitle, CardText, Row, Button, CardImg, CardBody, CardSubtitle, CardLink, Form, Label, Input, FormGroup, Card} from 'reactstrap'
// import Adminheader from './Adminheader';
// import './Showusers.css';

// function Showusers() {
//   return (
//     <>
//     <Adminheader/>
//     <div>
//       <Card id='card'>
//         <CardBody >
//           <CardTitle id='title'><h3>View All Your Tasks Here!</h3></CardTitle>
//       <Row>
      
//       <Col sm="6">
//         <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} id='card1'>
//         <CardTitle id='t'>User #1</CardTitle>
//         <CardText>
//           Name :  Vedica Singh <br></br>
//           Email id :  vedicasingh2@gmail.com <br></br>
//           Role :  Managing Director
//         </CardText>
//         <Button className='Danger'>Delete User</Button>
//       </Card>
//       </Col>
//       <Col sm="6">
//       <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} id='card2'>
//         <CardTitle id='t'>User #2</CardTitle>
//         <CardText>
//           Name :  Vedica Singh <br></br>
//           Email id :  vedicasingh2@gmail.com <br></br>
//           Role :  Managing Director
//         </CardText>
//         <Button className='Danger'>Delete User</Button>
//       </Card>
//       </Col>
//     </Row>
//     <Row>
//       <Col sm="6">
//       <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} id='card1'>
//         <CardTitle id='t'>User #3</CardTitle>
//         <CardText>
//           Name :  Vedica Singh <br></br>
//           Email id :  vedicasingh2@gmail.com <br></br>
//           Role :  Managing Director
//         </CardText>
//         <Button className='Danger'>Delete User</Button>
//       </Card></Col>
//       <Col sm="6">
//       <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} id='card2'>
//         <CardTitle id='t'>User #4</CardTitle>
//         <CardText>
//           Name :  Vedica Singh <br></br>
//           Email id :  vedicasingh2@gmail.com <br></br>
//           Role :  Managing Director
//         </CardText>
//         <Button className='Danger'>Delete User</Button>
//       </Card>
//       </Col>
//     </Row>
//     <Row>
//     <Col sm="6">
//     <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} id='card1'>
//         <CardTitle id='t'>User #5</CardTitle>
//         <CardText>
//         Name :  Vedica Singh <br></br>
//           Email id :  vedicasingh2@gmail.com <br></br>
//           Role :  Managing Director
//         </CardText>
//         <Button className='Danger'>Delete User</Button>
//       </Card>
//       </Col>
//       <Col sm="6">
//       <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} id='card2'>
//         <CardTitle id='t'>User #6</CardTitle>
//         <CardText>
//         Name :  Vedica Singh <br></br>
//           Email id :  vedicasingh2@gmail.com <br></br>
//           Role :  Managing Director
//         </CardText>
//         <Button className='Danger'>Delete User</Button>
//       </Card>
//       </Col>
//     </Row>
//     <Row>
//     <Col sm="6">
//     <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} id='card1'>
//         <CardTitle id='t'>User #7</CardTitle>
//         <CardText>
//         Name :  Vedica Singh <br></br>
//           Email id :  vedicasingh2@gmail.com <br></br>
//           Role :  Managing Director
//         </CardText>
//         <Button className='Danger'>Delete User</Button>
//       </Card>
//       </Col>
//       <Col sm="6">
//       <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} id='card2'>
//         <CardTitle id='t'>user #8</CardTitle>
//         <CardText>
//         Name :  Vedica Singh <br></br>
//           Email id :  vedicasingh2@gmail.com <br></br>
//           Role :  Managing Director
//         </CardText>
//         <Button className='Danger'>Delete User</Button>
//       </Card>
//       </Col>
//     </Row>
//     </CardBody>
//     </Card>

//     </div>
//     </>
//   )
// }

// export default Showusers


import React, { useEffect, useState } from 'react'
import axios from 'axios';
import base_url from '../api/bootapi';
import EmpCard from '../EmpCard';
import Adminheader from './Adminheader';

const Showusers = () => {
  const updateUser=(id)=>{
    setEmp(emp.filter((c)=> c.id !== id));
};

  const getAllEmp = () => {
    axios.get(`${base_url}/users`).then(
      (response) => {
        console.log(response.data);
        setEmp(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  useEffect(() => {
    getAllEmp();
  },[]);

  const [emp, setEmp] = useState([]);

  return (
    <>
    <Adminheader/>
    <div>
      <h3>List of all the emp</h3>
      {
        emp.length>0 ? 
        emp.map((i)=> <EmpCard empcard ={i} update = {updateUser}/>)
        :"No Record Found"
      }
    </div>
    </>
  )
}

export default Showusers;
// import React from 'react'
// import './Alltasks.css';

// import{Col, CardColumns, CardTitle, CardText, Row, Button, CardImg, CardBody, CardSubtitle, CardLink, Form, Label, Input, FormGroup, Card} from 'reactstrap'
// import Header from './Header';

// function Alltasks() {
//   return (
//     <>
//     <Header/>
//     <div>
//       <Card id='card'>
//         <CardBody >
//           <CardTitle id='title'><h3>View All Your Tasks Here!</h3></CardTitle>
//       <Row>
      
//       <Col sm="6">
//         <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} id='card1'>
//         <CardTitle id='t'>19th February 2022</CardTitle>
//         <CardText>
//           Name :  Vedica Singh <br></br>
//           Project Title :  Springboot-react project <br></br>
//           Description :  Today we have completed the ui part of the project as well as the data connectivity. <br></br>
//           Sent To :  Eben Thomas, Rashmi Rahi, Pavan Khatri
//         </CardText>
//         <Button className='Danger'>Resend</Button>
//       </Card>
//       </Col>
//       <Col sm="6">
//       <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} id='card2'>
//         <CardTitle id='t'>20th February 2022</CardTitle>
//         <CardText>
//           Name :  Vedica Singh <br></br>
//           Project Title :  Springboot-react project <br></br>
//           Description :  Today we have completed the ui part of the project as well as the data connectivity. <br></br>
//           Sent To :  Eben Thomas, Rashmi Rahi, Pavan Khatri
//         </CardText>
//         <Button className='Danger'>Resend</Button>
//       </Card>
//       </Col>
//     </Row>
//     <Row>
//       <Col sm="6">
//       <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} id='card1'>
//         <CardTitle id='t'>21st February 2022</CardTitle>
//         <CardText>
//           Name :  Vedica Singh <br></br>
//           Project Title :  Springboot-react project <br></br>
//           Description :  Today we have completed the ui part of the project as well as the data connectivity. <br></br>
//           Sent To :  Eben Thomas, Rashmi Rahi, Pavan Khatri
//         </CardText>
//         <Button className='Danger'>Resend</Button>
//       </Card></Col>
//       <Col sm="6">
//       <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} id='card2'>
//         <CardTitle id='t'>22nd February 2022</CardTitle>
//         <CardText>
//           Name :  Vedica Singh <br></br>
//           Project Title :  Springboot-react project <br></br>
//           Description :  Today we have completed the ui part of the project as well as the data connectivity. <br></br>
//           Sent To :  Eben Thomas, Rashmi Rahi, Pavan Khatri
//         </CardText>
//         <Button className='Danger'>Resend</Button>
//       </Card>
//       </Col>
//     </Row>
//     <Row>
//     <Col sm="6">
//     <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} id='card1'>
//         <CardTitle id='t'>23rd February 2022</CardTitle>
//         <CardText>
//           Name :  Vedica Singh <br></br>
//           Project Title :  Springboot-react project <br></br>
//           Description :  Today we have completed the ui part of the project as well as the data connectivity. <br></br>
//           Sent To :  Eben Thomas, Rashmi Rahi, Pavan Khatri
//         </CardText>
//         <Button className='Danger'>Resend</Button>
//       </Card>
//       </Col>
//       <Col sm="6">
//       <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} id='card2'>
//         <CardTitle id='t'>24th February 2022</CardTitle>
//         <CardText>
//           Name :  Vedica Singh <br></br>
//           Project Title :  Springboot-react project <br></br>
//           Description :  Today we have completed the ui part of the project as well as the data connectivity. <br></br>
//           Sent To :  Eben Thomas, Rashmi Rahi, Pavan Khatri
//         </CardText>
//         <Button className='Danger'>Resend</Button>
//       </Card>
//       </Col>
//     </Row>
//     <Row>
//     <Col sm="6">
//     <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} id='card1'>
//         <CardTitle id='t'>25th February 2022</CardTitle>
//         <CardText>
//           Name :  Vedica Singh <br></br>
//           Project Title :  Springboot-react project <br></br>
//           Description :  Today we have completed the ui part of the project as well as the data connectivity. <br></br>
//           Sent To :  Eben Thomas, Rashmi Rahi, Pavan Khatri
//         </CardText>
//         <Button className='Danger'>Resend</Button>
//       </Card>
//       </Col>
//       <Col sm="6">
//       <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} id='card2'>
//         <CardTitle id='t'>26th February 2022</CardTitle>
//         <CardText>
//           Name :  Vedica Singh <br></br>
//           Project Title :  Springboot-react project <br></br>
//           Description :  Today we have completed the ui part of the project as well as the data connectivity. <br></br>
//           Sent To :  Eben Thomas, Rashmi Rahi, Pavan Khatri
//         </CardText>
//         <Button className='Danger'>Resend</Button>
//       </Card>
//       </Col>
//     </Row>
//     </CardBody>
//     </Card>
//     </div>
//     </>
//   )
// }

// export default Alltasks

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import base_url from './api/bootapi';
import Header from './Header';
import Adminheader from './admin/Adminheader';
import AuthContext from './store/auth-context';
import Task from './Task';
function AllTask() {
  let navigate = useNavigate();

  const authCtx = useContext(AuthContext);
  const userid = authCtx.token;
    const userRole = authCtx.token1;

    useEffect(()=>{
        getAllCoursesFromServer();

    },[]);



    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/user/task/${userid}`).then(
            (response)=>{
               console.log(response.data);
               alert("All tasks");
               setCourses(response.data);
            },
            (error)=>{
                console.log(error);
            }
        )
    }
    
    
    
    const [courses,setCourses]=useState([
       

    ]);
    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=> c.id !== id));
    };

    


  return (
      
    <>    
    <Header/>
    <div>
        

       {/* <h1 className="text-white text-center">All Tasks</h1> */}
       <br></br><br></br>
       {
           courses.length>0 ?
           courses.map((item)=><Task course={item} update={updateCourses}/>)
           :"No task"
        }
    </div>
    </>
  )
    }

export default AllTask;
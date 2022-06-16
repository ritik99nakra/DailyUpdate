import axios from 'axios';
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, Container } from 'reactstrap';
import base_url from './api/bootapi';
import AuthContext from './store/auth-context';



function Task({course,update}) {

  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const userid = authCtx.token;
  const usermanager = authCtx.token2;
  const usermentor = authCtx.token3;

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/task/${id}`).then(
            (response)=>{
                alert("task deleted");
                update(id);
            },
            (error)=>{
                alert("task not deleted")
            }
        )
    };
   
  return (
      <div style={{marginLeft : "450px"}}>
    <Card className='my-3 border border-dark mx-auto' style={{width:"40rem"}} >
     
        <CardBody>
            <CardSubtitle className='font-weight-bold text-center ' style={{fontSize:"30px" }}>{course.project_title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <CardFooter className="text-muted">
            cc : {course.manager}, {course.mentor} <br></br>
            Date : {course.date}
            <Container className="text-center">
                <Button color="danger ml-3 "   onClick={()=>
                {
                    deleteCourse(course.task_id);
                }
                }>Delete</Button>
            </Container>
            </CardFooter>
            
            
            
           
        </CardBody>


    </Card>
    </div>
      
    
  )
}

export default Task
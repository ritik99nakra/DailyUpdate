import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, CardBody, Container, Form, FormGroup, Input, Card, CardTitle } from 'reactstrap'
import base_url from './api/bootapi';
import Header from './Header';
import AuthContext from './store/auth-context';


function Profile({profile}) {
    let navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const userid = authCtx.token;
    
    const [employee,setEmployee]=useState({});

    const handleForm=(e)=>{
        console.log(employee);
        // window.location.href="http://localhost:3000/"
        //this.props.history.push('/view-task');
        
       postDatatoServer(employee);
       authCtx.logout();
        navigate("/");
       
        e.preventDefault();
    } 
    //post data
    const postDatatoServer=(data)=>{
        axios.put(`${base_url}/user/${profile.id}`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                alert("updated  successsfully");
                
                
            },
            (error)=>{
                console.log("error");
            }
        );
    };
    

    return (
        <>
        <Header/>
    <div className="text-black" style={{marginLeft : "470px"}}>
        <Card style={{width: "600px", padding: "20px"}}>
            <CardTitle><h4 className='text-center'>UPDATE YOUR PROFILE</h4></CardTitle>
            <CardBody>
                
      <Form onSubmit={handleForm} >
             
            <FormGroup>
                <label for="name">Name : </label>

                <Input  type="text" placeholder="Enter Name" id="name" defaultValue={profile.name}
                onChange={(e)=>{
                    setEmployee({...employee,name :e.target.value});
                }}
                ></Input>
               
                   
            </FormGroup>
            <FormGroup>
              <label for="name" className='mt-2'>Email : </label>
 
             < Input type="text" placeholder="Enter email" id="email" defaultValue={profile.email}
             onChange={(e)=>{
                setEmployee({...employee,email :e.target.value});
            }}
             >

             </Input>

            </FormGroup>
            <FormGroup>
              <label for="name" className='mt-2'>Role : </label>
 
             < Input type="text" placeholder="Enter role" id="role" disabled defaultValue={profile.role} 
             onChange={(e)=>{
                setEmployee({...employee,role :e.target.value});
            }}></Input>

            </FormGroup>
            <FormGroup>
              <label for="name" className='mt-2'>Manager : </label>
 
             < Input type="text" placeholder="Enter manager" id="manager" defaultValue={profile.manager} 
             onChange={(e)=>{
                setEmployee({...employee,manager :e.target.value});
            }}></Input>

            </FormGroup>

            <FormGroup>
              <label for="name" className='mt-2'>Mentor : </label>
 
             < Input type="text" placeholder="Enter mentor" id="mentor" defaultValue={profile.mentor} 
             onChange={(e)=>{
                setEmployee({...employee,mentor :e.target.value});
            }}></Input>

            </FormGroup>

            <FormGroup>
              <label for="password" className='mt-2'>Password : </label>
 
              < Input type="password" placeholder="Enter password" id="password" defaultValue={profile.password}
              onChange={(e)=>{
                setEmployee({...employee,password :e.target.value});
            }}></Input>
            </FormGroup>
            <Container className='text-center '> 
                <Button color='info mt-3' type='submit' >Update</Button>
                
                
            </Container>

        






      </Form>
      </CardBody>
      </Card>
    </div>
    </>
  )
}

export default Profile;
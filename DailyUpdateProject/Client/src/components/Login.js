// import React from 'react';
import './Login.css';
import React, { useState, useContext } from 'react'
import { Form, FormGroup, Label, Input, Button, CardTitle, CardSubtitle } from 'reactstrap'
import { useNavigate } from 'react-router';
import AuthContext from './store/auth-context';
// import {useNavigate} from 'react-router-dom';


let email1 = "";

const Login = () => {

  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);


  const [enteredemail, setEmail] = useState("");
  const [enteredpassword, setPassword] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //  console.log(data);
    fetch(
      "http://localhost:8080/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: enteredemail,
          password: enteredpassword,
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed , Wrong Credientials";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        email1 = data.email;
        alert(data.email + " logged in with id=" + data.id);
        authCtx.login(data.id);
        authCtx.role(data.role);
        authCtx.manager(data.manager);
        authCtx.mentor(data.mentor);
        if(data.role==="Admin"){
          navigate("/adminhome");
        }
        else if(data.role==="Mentor"||data.role==='Manager'){
          navigate("/welcomeMentor");}
        
        else{
        navigate("/welcome");}
      })

      .catch((err) => {
        alert(err.message);
      });


  };

  return (


      <div>
        <div className="Login">
            <card>
              <CardSubtitle><h2 >&nbsp;&nbsp;Login</h2></CardSubtitle>
        
        <Form className="form" onSubmit={submitHandler}>
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="user@example.com"
                onChange={emailHandler}
            />
          </FormGroup>
          <FormGroup className='mt-3'>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
                onChange={passwordHandler} 
            />
          </FormGroup>
          <br></br>
        <Button type = " submit" id = 'btn'>Login</Button>
      </Form>
      </card>
    </div>
    </div>
    );
};



 export default Login
 export {email1}

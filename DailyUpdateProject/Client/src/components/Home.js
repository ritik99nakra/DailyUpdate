import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import emailjs from "emailjs-com";
import {
  CardTitle,
  CardText,
  Container,
  Card,
  Button,
  CardImg,
  CardBody,
  CardSubtitle,
  CardLink,
  Form,
  Label,
  Input,
  FormGroup,
} from "reactstrap";
import Header from "./Header";
import AuthContext from "./store/auth-context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import base_url from "./api/bootapi";
import { email1 } from "./Login";

function Home() {
  let navigate = useNavigate();

  const authCtx = useContext(AuthContext);
  const userid = authCtx.token;
  const manager1 = authCtx.token2;
  const mentor1 = authCtx.token3;
  useEffect(() => {}, []);

  const [manager, setMan] = useState({});
  const [mentor, setMen] = useState({});

  const [course, setCourse] = useState({});
  const handleForm = (e) => {
    e.preventDefault();
    console.log(course);
    emailjs
      .sendForm(
        "service_6o1yjzi",
        "template_8kulac4",
        e.target,
        "yqyXxBVGFH38tGe2e"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    postDatatoServer(course);
  };
  //   post data
  const postDatatoServer = (data) => {
    axios.post(`${base_url}/user/task/${userid}`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        alert("Task updated successsfully");
        navigate("/alltasks");
      },
      (error) => {
        console.log("error");
      }
    );
  };

  // useEffect(() => {
  // setCourse({manager: {manager1}})
  // },[]);

  return (
    <>
      <Header />

      <div>
        <Card id="home">
          <CardBody>
            <CardTitle>
              <h2>Update Task</h2>
            </CardTitle>
            <br></br>
            <CardSubtitle>
              <h4>Update Your Daily Report Here!!</h4>
            </CardSubtitle>

            <CardText>
              <Form onSubmit={handleForm} id="form">
                <FormGroup>
                  <label for="manager">Enter manager</label>

                  <Input
                    type="text"
                    placeholder="Enter manager"
                    id="manager"
                    name="manager"
                    defaultValue={manager1}
                    disabled
                    onMouseOver={(e) => {
                      setCourse({ ...course, manager: e.target.value });
                    }}
                  />
                </FormGroup>

                <FormGroup>
                  <label for="mentor">Enter mentor</label>

                  <Input
                    type="text"
                    placeholder="Enter mentor"
                    id="mentor"
                    name="mentor"
                    defaultValue={mentor1}
                    disabled
                    onMouseOver={(e) => {
                      setCourse({ ...course, mentor: e.target.value });
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <label for="date" className="mt-2">
                    Enter Date
                  </label>

                  <Input
                    type="text"
                    placeholder="Enter date like 1999-09-02"
                    id="date"
                    name="date"
                    onChange={(e) => {
                      setCourse({ ...course, date: e.target.value });
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <label for="project_title" className="mt-2">
                    Enter Title
                  </label>

                  <Input
                    type="text"
                    placeholder="Enter title here"
                    id="project_title"
                    name="project_title"
                    onChange={(e) => {
                      setCourse({ ...course, project_title: e.target.value });
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <label for="description" className="mt-2">
                    Description
                  </label>

                  <Input
                    type="textarea"
                    placeholder="Enter Description"
                    id="description"
                    name="description"
                    style={{ height: 100 }}
                    onChange={(e) => {
                      setCourse({ ...course, description: e.target.value });
                    }}
                  />
                  <Input
                    type="email"
                    placeholder="email"
                    id="email"
                    name="email"
                    defaultValue="vedicasingh2@gmail.com"
                  />
                </FormGroup>
                <Button
                  type="submit"
                  color="success mr-2"
                  style={{ marginLeft: "10em" }}
                >
                  Add
                </Button>
                <Button
                  type="reset"
                  color="warning my-2"
                  style={{ marginLeft: "2em" }}
                >
                  clear
                </Button>
              </Form>
            </CardText>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Home;


import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Alltasks from "./components/Alltasks";
import Previous from "./components/Previous";
import Adminheader from "./components/admin/Adminheader";
import Adminhome from "./components/admin/Adminhome";
import Createuser from "./components/admin/Createuser";
import Showusers from "./components/admin/Showusers";
import {Routes,Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import Employee from "./components/Employee";
import Showtask from "./components/Showtask";
import { useContext } from "react";
import AuthContext from "./components/store/auth-context";
import Adminalltask from "./components/admin/Adminalltask";
import Team from "./components/team/Team";
import WelcomeMentor from "./components/mentor/WelcomeMentor";
import MentorTeam from "./components/mentor/MentorTeam";
import MentorAllTask from "./components/mentor/MentorAllTask";
import Aemail from "./components/Aemail";
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
       <Routes>

      <Route path="/" element={<Login/>} exact />
      {authCtx.isLoggedIn && (<Route path="/welcome" element={<Welcome/>} exact />)}
      {authCtx.isLoggedIn && (<Route path="/header" element={<Header/>} exact />)}
      {authCtx.isLoggedIn && (<Route path="/home" element={<Home/>} exact />)}
      {authCtx.isLoggedIn && (<Route path="/ptask" element={<Previous/>} exact />)}
      {authCtx.isLoggedIn && (<Route path="/contact" element={<Contact/>} exact />)}
      {authCtx.isLoggedIn && (<Route path="/alltasks" element={<Alltasks/>} exact />)}
      {authCtx.isLoggedIn && (<Route path="/adminhome" element={<Adminhome/>} exact />)}
      {authCtx.isLoggedIn && (<Route path="/createuser" element={<Createuser/>} exact />)}
      {authCtx.isLoggedIn && (<Route path="/allusers" element={<Showusers/>} exact />)}
      {authCtx.isLoggedIn && (<Route path="/profile" element={<Employee/>} exact />)}
      {authCtx.isLoggedIn && (<Route path="/showtasks" element={<Showtask/>} exact />)}
      {authCtx.isLoggedIn && (<Route path="/adminalltasks" element={<Adminalltask/>} exact />)}

      {authCtx.isLoggedIn && (<Route path="/team" element={<MentorTeam/>} exact />)}
      {authCtx.isLoggedIn && (<Route path="/welcomeMentor" element={<WelcomeMentor/>} exact />)}
      {authCtx.isLoggedIn && (<Route path="/mentorTask" element={<MentorAllTask/>} exact />)}
      


      </Routes>
      <Footer></Footer>
      {/* 1- login page */}
      {/* <Login></Login> */}

                                         {/* -----Employee---- */}
  
      {/* 2- home page- update task */}
      {/* <Header></Header>
      <Home></Home>
      <Footer></Footer> */}

      {/* 3- Contact Us */}
      {/* <Header></Header>
      <Contact></Contact>
      <Footer></Footer> */}

      {/* 4- Alltasks */}
      {/* <Header></Header>
      <Alltasks></Alltasks>
      <Footer></Footer>       */}

      {/* 5- Last Task */}
      {/* <Header></Header>
      <Previous></Previous>
      <Footer></Footer> */}

                                                  {/* ADMIN */}
                            
      {/* 2- Admin Home */}
      {/* <Adminheader></Adminheader>
      <Adminhome></Adminhome>
      <Footer></Footer> */}

      {/* 3- Create User */}
      {/* <Adminheader></Adminheader>
      <Createuser></Createuser>
      <Footer></Footer> */}

      {/* 4- All users and delete user */}
      {/* <Adminheader></Adminheader>
      <Showusers></Showusers>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
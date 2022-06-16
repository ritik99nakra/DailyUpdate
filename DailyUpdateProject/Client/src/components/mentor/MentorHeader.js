
import React, { useContext } from 'react'


import { Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse, Nav, UncontrolledDropdown, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, NavbarText } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth-context';



function MentorHeader() {

    let navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const LogoutHandler = () => {
      authCtx.logout();
      navigate("/");
    }



  return (
    <div>
    <div>
<Navbar
  // color="dark"
  dark
  expand="md"
  fixed="top"
  full
  light
  style={{backgroundColor:"#000000", height:"50px"}}
>
<img style={{paddingLeft:"10px",height:"30px",width:"60px"}} src="https://media-exp1.licdn.com/dms/image/C560BAQEO6y_-N2U4yg/company-logo_200_200/0/1636489071875?e=2159024400&v=beta&t=7ZMjgCcnGKqt8lxvO0-eT3SFC4X-ntQAA0gDBgLd6sY"></img>

  {/* <NavbarBrand href="/">
   
  </NavbarBrand> */}
  <NavbarToggler onClick={function noRefCheck(){}} />
  <Collapse navbar>
    <Nav
      className="me-auto"
      navbar
    >
      <NavItem>
        <NavLink>
          <Link  action to="/welcomeMentor" tag="a"  className="nav-item nav-link active text-light">Home</Link>
        </NavLink>
      </NavItem>
      <NavItem>
          <NavLink>
          <Link  action to="/home" tag="a" className="nav-item nav-link active text-light">Update Task</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            
            <Link  action to="/alltasks" tag="a"  className="nav-item nav-link active text-light">All Tasks</Link>
          </NavLink>
        </NavItem>
     
      <NavItem>
          <NavLink>
            
            <Link  action to="/contact" tag="a"  className="nav-item nav-link active text-light">Contact Us</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            
            <Link  action to="/profile" tag="a" className="nav-item nav-link active text-light">Profile</Link>
          </NavLink>
        </NavItem>
        <NavItem>
        <NavLink>
          
          <Link  action to="/team" tag="a"  className="nav-item nav-link active text-light">Team</Link>
        </NavLink>
      </NavItem>
    </Nav>
    <NavbarText id='txt'>
       
      <Link  action to="/" tag="a" onClick={LogoutHandler}  className="nav-item nav-link active text-light">Logout</Link>

    </NavbarText>
  </Collapse>
</Navbar>
</div>

  </div>
  )
}

export default MentorHeader

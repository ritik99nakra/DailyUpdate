import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  token1: "",
  token2: "",
  token3: "",
  isLoggedIn: false,
  login: (token) => {},
  role: (token1) => {},
  manager: (token2) =>{},
  mentor: (token3) =>{},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const initialToken1 = localStorage.getItem("token1");
    const [token1,setToken1] = useState(initialToken1);

  const userIsLoggedIn = !!token;

    const roleHandler = (token1) => {
        setToken1(token1);
        localStorage.setItem("token1",token1);
    };

    const initialToken2 = localStorage.getItem("token2");
    const [token2,setToken2] = useState(initialToken2);

    const managerHandler = (token2) => {
      setToken2(token2);
      localStorage.setItem("token2",token2);
  };

    const initialToken3 = localStorage.getItem("token3");
    const [token3,setToken3] = useState(initialToken3);

    const mentorHandler = (token3) => {
      setToken3(token3);
      localStorage.setItem("token3",token3);
  };

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    setToken1(null);
    setToken2(null);
    setToken3(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    token1: token1,
    token2: token2,
    token3: token3,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    role: roleHandler,
    manager: managerHandler,
    mentor: mentorHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
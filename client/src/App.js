import logo from "./logo.svg";
import "./App.css";
import { UserList } from "./components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddNewOne } from "./components/AddNewOne";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DetailUser } from "./components/DetailUser";

import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "./components/NavBar";
// import { getUsers } from "./redux/action";
// import { useEffect } from "react";

import "./pp.scss"
import { Login } from "./components/Login";
import  Contact from "./components/Contact";



function App() {

  const { users, loading } = useSelector((state) => state);

  // console.log(users)
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUsers());
  // }, []);



  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
        <Route path="/" element={<div> <AddNewOne />  <UserList />  </div>}/>
        <Route path="/product/:id" element={<DetailUser  info={users} loading={loading} />}/>
        <Route path="/Login" element={<Login   />}/>

        <Route path="/Contact" element={<Contact/>}/>

          {/* <UserList /> */}
          {/* <AddNewOne /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

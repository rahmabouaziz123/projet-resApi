
// import React from 'react'

// export const UserList = () => {
//   return (
//     <div>UserList</div>
//   )
// }


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/action";
import { UserCard } from "./UserCard";
import Spinner from 'react-bootstrap/Spinner';

export const UserList = () => {
   
  const { users, loading } = useSelector((state) => state);

  console.log(users)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <div className="cardtotale" >
    {loading? <Spinner animation="border" variant="primary" />:
    React.Children.toArray(users.map(el=><UserCard user={el}/>))}
    </div>;
};


// import React from "react";

// export const UserCard = () => {
//   return <div>UserCard</div>;
// };

import React from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { deleteUser, getOneUser, getUsers } from "../redux/action";
import { EditeUser } from "./EditeUser";
import { Link } from "react-router-dom";

export const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  return (
    // <div>
    //   <Card style={{ width: "18rem" }}>
    //     <Card.Body>
    //       <Card.Title>{user.fullName}</Card.Title>
    //       <Card.Text>
    //         {user.email}
    //         {user.phone}
    //         {user._id}
    //       </Card.Text>
    //       <Button
    //         variant="primary"
    //         onClick={() => {
    //           dispatch(deleteUser(user._id));
    //           dispatch(getUsers());
    //         }}
    //       >
    //         delete
    //       </Button>
    //       {/* <button> info</button> */}
    //       <Link to={`/product/${user._id}`}>
    //         {" "}
    //         <Button
    //           onClick={() => {
    //             dispatch(getOneUser(user._id));
    //           }}
    //           variant="primary"
    //         >
    //           info
    //         </Button>
    //       </Link>
    //     </Card.Body>
    //     <EditeUser user={user} />
    //   </Card>
    // </div>


<div  className="cardtotale">
<ul className="card-wrapper  cardtotale">
  <li className="card">
    {/* <img src='https://images.unsplash.com/photo-1611916656173-875e4277bea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400' alt=''/> */}
    <img src='data:image/jpeg;base64,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' alt=''/>
    <h3>{user.fullName}</h3>

   <div className="btn">
   <Button
            variant="primary"
            className="btnDelete"
            onClick={() => {
            if( window.confirm("Are you sure delete"))  {
              dispatch(deleteUser(user._id))
              dispatch(getUsers());
                 }
                else{
                  dispatch(getUsers());
                }}
            }
             
          >
            delete
          </Button>


          <Link to={`/product/${user._id}`}>
            {" "}
           <Button
           className="btnInfo"
              onClick={() => {
                 dispatch(getOneUser(user._id));
               }}
               variant="primary"
            >
              info
            </Button>
         </Link>

          <EditeUser user={user} />
   </div>
   
  
  </li>
  </ul>
</div>


  );
};

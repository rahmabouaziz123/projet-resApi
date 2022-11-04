import React from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
// import  { useEffect } from "react";
// import { getOneUser } from '../redux/action';

export const DetailUser = ({ info, loading }) => {
  console.log(info);
  //console.log(loading)

  const { id } = useParams();
  // console.log(id)

  //const dispatch = useDispatch();

  //  useEffect(() => {
  //         dispatch(getOneUser(id));
  //       }, []);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        React.Children.toArray(
          info.map((el) => (
            <div>
              {/* <h1> {el.fullName}</h1>
              <h1>{el.email}</h1>
              <h1> {el.phone}</h1> */}

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="data:image/jpeg;base64,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"
                />
                <Card.Body>
                  <Card.Title>{el.fullName}</Card.Title>
                  <Card.Text>{el.email}</Card.Text>
                  <Card.Text>{el.phone}</Card.Text>
                  {/* <Button variant="primary">Ok</Button> */}

                  <Link to="/">
                    {" "}
                    <Button variant="primary">Ok</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))
        )
      )}
    </div>
  );
};

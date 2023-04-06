import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import "./Home.css";
import { parentContext } from "../../ParentContext/ParentContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // eslint-disable-next-line
  const { indivisualPage, setindivisual } = useContext(parentContext);
  const baseURL = "https://reqres.in/api/users?page=2";
  const [userData, setUserData] = useState([]);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  useEffect(() => {
    const getRepo = async () => {
      try {
        // eslint-disable-next-line
        const response1 = await fetch(baseURL)
          .then((res) => res.json())
          .then((data) => {
            const userlist1 = data.data;
            setUserData(userlist1);
          });
      } catch (error) {
        if (error.response) {
          //response status is an error code
          console.log(error.response.status);
        } else if (error.request) {
          //response not received though the request was sent
          console.log(error.request);
        } else {
          //an error occurred when setting up the request
          console.log(error.message);
        }
      }
    };
    getRepo();
  }, []);

  const navigate = useNavigate();

  const handleViewClick = (e) => {
    let id = e.target.id;
    let individualValue = userData.filter((value) => {
      // eslint-disable-next-line
      return value.id == id;
    });
    setindivisual(individualValue);
    // setShow(true);
    navigate("/homedetails");
  };
  return (
    <div>
      <Container>
        <div className="row">
          {userData.map((user) => (
            <div className="col-md-4">
              <div className="userdiv1" key={user.id}>
                <h6>Email : {user.email}</h6>
                <h6 onClick={handleViewClick} id={user.id}>
                  Name : {user.first_name} {user.last_name}
                </h6>
                <div>
                  <img
                    alt="avatar"
                    src={user.avatar}
                    className="img-fluid div1image1"
                  ></img>
                </div>
              </div>
            </div>
          ))}
          {/* </UserContext.Provider> */}
        </div>
      </Container>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            {indivisualPage.map((user) => (
              <div className="userdiv1 position-relative" key={user.id}>
                <h6>Email: {user.email}</h6>
                <h6>
                  Name : {user.first_name} {user.last_name}
                </h6>
                <div>
                  <img
                    alt="avatar"
                    src={user.avatar}
                    className="img-fluid div1image1"
                  ></img>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};
export default Home;

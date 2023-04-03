import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Button, Container, Modal } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import yogagirl1 from "../../Images/Home_Images/g1.png";
// import boy1 from "../../Images/Home_Images/b1.png";
import "./Home.css";
const Home = () => {
  const baseURL = "https://reqres.in/api/users?page=2";
  const [userData, setUserData] = useState([]);
  const [indivisualPage, setindivisual] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  useEffect(() => {
    const getRepo = async () => {
      try {
        const response1 = await fetch(baseURL)
          .then((res) => res.json())
          .then((data) => {
            const userlist1 = data.data;
            setUserData(userlist1);
            console.log(userlist1);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getRepo();
  }, []);

  const handleViewClick = (e) => {
    let id = e.target.id;
    let individualValue = userData.filter((value) => {
      return value.id == id;
    });
    setindivisual(individualValue);
    setShow(true);
  };

  return (
    <div>
      {/* <section className="section1P1">
        <Container>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="s1div1">
                <h6>Lorem Ipsum</h6>
                <h1>Helping you to take fitness to the top level</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi,
                  accumsan, est, maecenas varius quisque libero ultricies.
                  Ultrices dolor, urna semper lectus risus.
                </p>
                <Anchor className="register-btn" href="/home">
                  Reach Out
                </Anchor>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="yogagirl1">
                <img className="img-fluid" alt="g1" src={yogagirl1}></img>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="section2P1">
        <Container>
          <div className="row">
            <div className="col-md-6">
              <div className="div2s2">
                <img alt="b1" src={boy1} className="img-fluid"></img>
              </div>
            </div>
            <div className="col-md-6">
              <div className="div2s2-headings">
                <h6>Lorem</h6>
                <h2>About Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  amet mus tempor amet eget commodo, imperdiet. Senectus nulla
                  consectetur magna euismod. Nam sit sed id elementum orci in.
                  Sit leo, viverra potenti at ultrices penatibus amet egestas
                  nulla. Lacus adipiscing fermentum feugiat hendrerit id nisl
                  molestie.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Id amet mus tempor amet eget commodo, imperdiet.
                  Senectus nulla consectetur magna euismod. Nam sit sed id
                  elementum orci in. Sit leo, viverra potenti at ultrices
                  penatibus amet egestas nulla. Lacus adipiscing fermentum
                  feugiat hendrerit id nisl molestie.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section> */}
      <Container>
        <div className="row">
          {userData.map((user) => (
            <div className="col-md-4">
              <div className="userdiv1 position-relative" key={user.id}>
                <h6>Email : {user.email}</h6>
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
                <button
                  type="button"
                  className="mt-2"
                  onClick={handleViewClick}
                  id={user.id}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Modal show={show} onHide={handleClose}>
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
                {/* <button type="button" onClick={handleViewClick} id={user.id}>
                  View
                </button> */}
              </div>
              // </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Home;

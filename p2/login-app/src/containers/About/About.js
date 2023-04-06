import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Home/Home.css";
export const About = () => {
  const [aboutData, setAboutData] = useState([]);
  const baseAboutURL = "https://reqres.in/api/unknown";
  useEffect(() => {
    const getAboutApi = async () => {
      try {
        // eslint-disable-next-line
        const response1 = await fetch(baseAboutURL)
          .then((res) => res.json())
          .then((data) => {
            const userlist1 = data.data;
            setAboutData(userlist1);
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
    getAboutApi();
  }, []);
  return (
    <div>
      <Container>
        <div className="row">
          {aboutData.map((user) => (
            <div className="col-md-6 col-lg-4">
              <div className="aboutdiv1" key={user.id}>
                <h6>Name : {user.name}</h6>
                <h6>Year : {user.year}</h6>
                <h6>Color : {user.color}</h6>
                <h6>Pantone_value : {user.pantone_value}</h6>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

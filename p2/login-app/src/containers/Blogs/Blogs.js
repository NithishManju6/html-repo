import React from "react";
import { Container } from "react-bootstrap";
import "../Home/Home.css";
import { json } from "../Blogs/data";
export const Blogs = () => {
  return (
    <div>
      <Container>
        <div className="row">
          {json.data.map((userblog) => (
            <div className="col-md-6 col-lg-4">
              <div className="aboutdiv1">
                <h6>Name : {userblog.name}</h6>
                <h6>Color : {userblog.color}</h6>
                <h6>Year : {userblog.year}</h6>
                <h6>Pantone_value : {userblog.pantone_value}</h6>
                <img
                  src={userblog.avatar}
                  alt="avatar"
                  className="img-fluid div1image1"
                ></img>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

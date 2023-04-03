import React from "react";
import { Anchor, Container } from "react-bootstrap";
import yogagirl1 from "../../Images/Home_Images/g1.png";
import boy1 from "../../Images/Home_Images/b1.png";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <section className="section1P1">
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
                <Anchor className="register-btn" href="/">
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
      </section>
    </div>
  );
};
export default Home;

import React, { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Register.css";
const Register = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("https://reqres.in/api/register", userData)
      .then((response) => {
        console.log(response.status);
        console.log(userData);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const value = event.target.value;
    setData({
      ...data,
      [event.target.name]: value,
    });
  };
  return (
    <div>
      <section className="section1">
        <Container>
          <h2 className="h2-s1">Register</h2>
          <form class="formValidation" onSubmit={handleSubmit}>
            <div class=" ">
              <div class="form-group form1">
                <label>Email address</label>
                <input
                  placeholder="Enter the Email"
                  class="form-control"
                  type="email"
                  multiple="multiple"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <p>Please Enter the Email</p>}
              <div class="form-group ">
                <label>Password</label>
                <input
                  placeholder="Enter the Password"
                  class="form-control"
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                  })}
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && <p>Please Enter the Password</p>}
            </div>
            <a type="submit" class="btn register-btn" href="/">
              Submit
            </a>
            <a href="/" class="btn register-btn float-right">
              Login
            </a>
          </form>
        </Container>
      </section>
    </div>
  );
};
export default Register;

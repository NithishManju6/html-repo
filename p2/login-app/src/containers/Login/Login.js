import React, { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "../Register/Register.css";
const LoginPage = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("https://reqres.in/api/login", userData)
      .then((response) => {
        console.log(response.status);
        console.log(userData);
        if (response?.status === 200) navigate("/home");
        else {
          alert(response?.message);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
          document.getElementById("errorid").innerHTML =
            "UserEmail is not Found";
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
          <h2 className="h2-s1"> Login</h2>
          <form class="formValidation" onSubmit={handleSubmit}>
            <div>
              <div class="form-group form1">
                <label>Email address</label>
                <input
                  placeholder="Enter the Email"
                  class="form-control"
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <p id="errorid"></p>
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
            <button type="submit" class="btn register-btn" href="/home">
              Submit
            </button>
            <a href="/register" class="btn register-btn float-right">
              Register
            </a>
          </form>
        </Container>
      </section>
    </div>
  );
};
export default LoginPage;

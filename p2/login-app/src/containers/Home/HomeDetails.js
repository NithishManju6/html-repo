import React, { useContext } from "react";
import { parentContext } from "../../ParentContext/ParentContext";
import { Container } from "react-bootstrap";

export const HomeDetails = () => {
  const { indivisualPage } = useContext(parentContext);

  return (
    <div>
      <Container>
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
      </Container>
    </div>
  );
};

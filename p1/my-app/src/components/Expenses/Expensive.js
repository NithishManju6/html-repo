import React, { useState } from "react";
import ExpenseDate from "./ExpensesDate";
import "./Expensive.css";

const Expensivediv = (props) => {
  const [title, setTitle] = useState(props.title);
  const yeh_click = () => {
    setTitle("updated!");
    console.log("clicked===!", title);
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={yeh_click}>change me</button>
    </div>
  );
};
export default Expensivediv;

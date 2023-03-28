// import Card from "./Card";
import ExpenseDate from "./ExpensesDate";
// import Card from "./Card";
import "./Expensive.css";

function Expensivediv(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}
export default Expensivediv;

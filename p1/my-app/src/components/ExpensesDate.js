import "./Expensive.css";
function ExpenseDate(props) {
  const month = props.date.toLocaleDateString("en-us", { month: "long" });
  const day = props.date.toLocaleDateString("en-us", { day: "2-digit" });
  const year = props.date.toLocaleDateString("en-us", { year: "numeric" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
export default ExpenseDate;

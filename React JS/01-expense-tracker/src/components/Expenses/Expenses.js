import React, { useState } from "react";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter";
import "../../style/Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart.js";

const Expenses = (props) => {
  ////////////////
  const [filteredYear, setfilteredYear] = useState("2020")
  const filterChangeHandler = selectYear => {
    setfilteredYear(selectYear);
    console.log(selectYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  ////////////////
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;

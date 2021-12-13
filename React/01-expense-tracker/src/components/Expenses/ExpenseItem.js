import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card.js";
import "../../style/ExpenseItem.css";

const ExpenseItem = (props) => {
  // second index is a state updating function
  // const [title, setTitle] = useState(props.title);
  // console.log("ExpenseItem evaluated by React");

  // const clickHandler = () => {
  //   setTitle("Updated!"); // Happens per component
  //   console.log("Clicked button");
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

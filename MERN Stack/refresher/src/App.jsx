import React, { useState } from "react";

import "./App.css";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the course" },
    { id: "cg2", text: "Learn all about the Course Main Topics" },
    { id: "cg3", text: "Help other students in the Course Q&amp;A" },
  ]);

  const addNewGoalHandler = newGoal => {
    //setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals , app">
      <h1>Course Goals 🎖️</h1>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;

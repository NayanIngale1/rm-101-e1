import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ handleAddTask }) => {
  // NOTE: do not delete `data-testid` key value pair
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    handleAddTask(task);
    setTask("");
  };
  return (
    <div className={styles.addTask}>
      <input
        data-testid="add-task-input"
        type="text"
        value={task}
        placeholder="Add task..."
        onChange={(e) => setTask(e.target.value)}
      />
      <button data-testid="add-task-button" onClick={handleSubmit}>
        +
      </button>
    </div>
  );
};

export default AddTask;

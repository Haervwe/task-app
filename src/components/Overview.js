import React from "react";
import { useState } from "react";

const Overview = (props) => {
  const tasks = props.tasks;
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
    console.log("value is:", event.target.value);
  };
  return (
    <ul>
      {tasks.map((task, i) => {
        if (task.text === "" || task.text === undefined) {
          return (
            <li key={task.id}>
              {i}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                key={`${task.id}form`}
              >
                <label htmlFor="taskInput">Enter task</label>
                <input
                  type="text"
                  id="renameTaskInput"
                  name="message"
                  value={message}
                  onChange={handleChange}
                ></input>
                <button
                  key={`${task.id}Delete`}
                  type="submit"
                  onClick={() => {
                    props.deleteTask(task);
                  }}
                >
                  Delete
                </button>
                <button
                  key={`${task.id}Rename`}
                  type="submit"
                  onClick={() => props.renameTask(message, task)}
                >
                  Rename
                </button>
              </form>
            </li>
          );
        } else {
          return (
            <li key={task.id}>
              {i}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                key={`${task.id}form`}
              >
                {task.text}
                <button
                  key={`${task.id}Delete`}
                  type="submit"
                  onClick={() => {
                    props.deleteTask(task);
                  }}
                >
                  Delete
                </button>
                <button
                  key={`${task.id}Rename`}
                  type="submit"
                  onClick={() => {
                    props.renameTask("", task);
                  }}
                >
                  Rename
                </button>
              </form>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Overview;

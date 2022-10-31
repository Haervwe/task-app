import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: "", key: uniqid() },
      tasks: [],
    };
  }
  handleChange = (e) => {
    this.setState({
      task: {
        id: uniqid(),
        text: e.target.value,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "", id: uniqid() },
    });
  };

  deleteTask = (task) => {
    for (let i = 0; i < this.state.tasks.length; i++) {
      if (task.id === this.state.tasks[i].id) {
        this.setState({
          task: this.state.tasks.splice(i, 1),
          tasks: this.state.tasks,
        });
      }
    }
  };

  renameTask = (input, task) => {
    console.log("input:", input);
    for (let i = 0; i < this.state.tasks.length; i++) {
      if (task.id === this.state.tasks[i].id) {
        let id = task.id;
        this.setState({
          task: this.state.tasks.splice(i, 1, { text: input, id: id }),
          tasks: this.state.tasks,
        });
        console.log(input, this.state.tasks, "rename");
      }
    }
  };

  render() {
    const { task, tasks } = this.state;
    return (
      <div id="inputs">
        <h2>Task List 3000</h2>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview
          tasks={tasks}
          deleteTask={this.deleteTask}
          renameTask={this.renameTask}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;

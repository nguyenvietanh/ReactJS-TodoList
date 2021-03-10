import "./TodoList.css";
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoListName: props.name, taskName: "", tasks: [] };
  }

  myTaskChangeHandler = (event) => {
    this.setState({ taskName: event.target.value });
  };

  addTask = () => {
    if (this.state.taskName === "") {
      return;
    }
    const id = this.state.tasks.length;
    const name = this.state.taskName;

    this.state.tasks.push({ id, name, done: false });

    this.setState({ taskName: "" });
  };

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks });
  };

  completeTask = (id) => {
    
    const tasks = this.state.tasks;
    tasks.forEach(task=> {
      if (task.id === id) {
        task.done = true;
      }
    });
    
    this.setState({tasks});
  };

  render() {
    return (
      <div className="todoList">
        {this.state.todoListName}
        <br />
        <div className="aligned">
          <img
            src="./assets/iconfinder_plus-add-new-create-attach-maximize_2931155.png"
            alt="Add Task"
            width="20"
            style={{ cursor: "pointer" }}
            title="Bấm để thêm task"
            onClick={() => this.addTask()}
          />
          <input
            className="input"
            type="text"
            value={this.state.taskName}
            onChange={this.myTaskChangeHandler}
          />
        </div>
        <ul style={{ paddingLeft: "10px" }}>
          {this.state.tasks.map((value, index) => {
            return (
              <Todo
              ref="todo"
                key={index}
                id={value.id}
                value={value.name}
                deleteTask={this.deleteTask}
                completeTask={this.completeTask}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default TodoList;

import { Component } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

interface State {
  todo: string;
  todos: Todo[];
}

export default class App extends Component {
  state: State = {
    todo: "",
    todos: [],
  };

  setTodo(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ todo: e.target.value });
  }

  setTodos(todo: string): void {
    this.setState({
      todos: [...this.state.todos, { id: Date.now(), todo, isDone: false }],
    });
  }

  handleAdd(e: React.FormEvent): void {
    e.preventDefault();
    if (this.state.todo) {
      this.setTodos(this.state.todo);
      this.setState({ todo: "" });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="instruction">
          <p className="instruction-heading">Let's add what you have to do!</p>
          <p className="instruction-details">
            Fill the input and click button or "Enter" to add a new task into
            the list. <br />
            To mark as completed, just click directly to the task
          </p>
        </div>
        <InputField
          todo={this.state.todo}
          setTodo={this.setTodo.bind(this)}
          handleAdd={this.handleAdd.bind(this)}
        />
        <TodoList
          todos={this.state.todos}
          setTodos={this.setTodos.bind(this)}
        />
      </div>
    );
  }
}
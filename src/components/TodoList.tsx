import { Component } from "react";
import { Todo } from "../model";
import "../styles/styles.css";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos(todos: Todo[]): void;
}

interface State {
  filter: string;
}

export default class TodoList extends Component<Props, State> {
  state = {
    filter: "all",
  };

  forceUpdateTodoList(): void {
    this.forceUpdate();
  }

  renderTodos() {
    const { todos, setTodos } = this.props;
    const { filter } = this.state;

    let filteredTodos: Todo[];
    if (filter === "all") {
      filteredTodos = todos;
    } else if (filter === "todo") {
      filteredTodos = todos.filter((todo) => !todo.isDone);
    } else {
      filteredTodos = todos.filter((todo) => todo.isDone);
    }

    return filteredTodos.map((todo, index) => (
      <SingleTodo
        todo={todo}
        key={todo.id}
        index={index + 1}
        todos={todos}
        setTodos={setTodos}
        forceUpdateTodoList={this.forceUpdateTodoList.bind(this)}
      />
    ));
  }

  render() {
    return (
      <div className="list">
        <div className="list-heading">
          <p>List:</p>
          <select
            name="mode"
            id="mode"
            onChange={(e) => this.setState({ filter: e.target.value })}
          >
            <option value="all">All</option>
            <option value="todo">To do</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="list-container">{this.renderTodos()}</div>
      </div>
    );
  }
}

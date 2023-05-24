import { Component } from "react";
import { Todo } from "../model";
import "../styles/styles.css";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos(todo: string): void;
}

export default class TodoList extends Component<Props> {
  render() {
    const { todos, setTodos } = this.props;

    return (
      <div className="list">
        <div className="list-heading">
          <p>List:</p>
          <select name="mode" id="mode">
            <option value="all">All</option>
            <option value="todo">To do</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="list-container">
          {todos.map((todo, index) => (
            <SingleTodo
              todo={todo}
              key={todo.id}
              index={index + 1}
              setTodos={setTodos}
            />
          ))}
        </div>
      </div>
    );
  }
}

import { Component } from "react";
import { Todo } from "../model";
import "../styles/styles.css";

interface Props {
  todo: Todo;
  index: number;
  setTodos(todo: string): void;
}

export default class SingleTodo extends Component<Props> {
  handleDelete(id: number): void {
    console.log(id);
  }

  render() {
    const { todo, index } = this.props;

    return (
      <div className="list-item">
        <p className="list-item__content">
          {index}. {todo.todo}
        </p>
        <i
          className="fa-solid fa-trash"
          onClick={() => this.handleDelete(todo.id)}
        ></i>
      </div>
    );
  }
}

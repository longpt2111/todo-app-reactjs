import { Component } from "react";
import { Todo } from "../model";
import "../styles/styles.css";

interface Props {
  todo: Todo;
  index: number;
  todos: Todo[];
  setTodos(todos: Todo[]): void;
}

interface State {
  isDone: boolean;
}

export default class SingleTodo extends Component<Props, State> {
  state = {
    isDone: this.props.todo.isDone,
  };

  handleDelete(id: number): void {
    this.props.setTodos(this.props.todos.filter((todo) => todo.id !== id));
  }

  render() {
    const { todo, index } = this.props;
    const { isDone } = this.state;

    return (
      <div
        className="list-item"
        onClick={() => {
          this.setState({ isDone: !isDone });
          todo.isDone = !isDone;
        }}
      >
        {isDone ? (
          <p className="list-item__content line-through text-gray-400">
            {index}. {todo.todo}
          </p>
        ) : (
          <p className="list-item__content">
            {index}. {todo.todo}
          </p>
        )}
        <i
          className="fa-solid fa-trash"
          onClick={() => this.handleDelete(todo.id)}
        ></i>
      </div>
    );
  }
}

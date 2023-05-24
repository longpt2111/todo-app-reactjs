import { Component } from "react";
import "../styles/styles.css";

interface Props {
  todo: string;
  setTodo(e: React.ChangeEvent<HTMLInputElement>): void;
  handleAdd(e: React.FormEvent): void;
}

export default class InputField extends Component<Props> {
  render() {
    const { todo, setTodo, handleAdd } = this.props;

    return (
      <form
        className="form"
        onSubmit={(e) => {
          handleAdd(e);
        }}
      >
        <input
          type="text"
          className="form-input"
          value={todo}
          onChange={(e) => setTodo(e)}
        />
        <button type="submit" className="form-submit">
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    );
  }
}

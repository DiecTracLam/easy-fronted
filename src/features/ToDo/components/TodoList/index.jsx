import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.css";
TodoList.propTypes = {
  onTodoclick: PropTypes.func,
};
TodoList.defaultProps = {
  onTodoclick: null,
};

function TodoList({ todoList, onTodoclick }) {
  function handleTodoClick(todo,ind) {
    if (!onTodoclick) {
      return;
    }
    onTodoclick(todo,ind)
  } 
  return (
    <ul className="todo-list">
      {todoList.map((todo, inx) => {
        return (
          <li
            className={classnames({ completed: todo.status === "completed" })}
            key={todo.id}
            onClick={() => handleTodoClick(todo, inx)}
          >
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;

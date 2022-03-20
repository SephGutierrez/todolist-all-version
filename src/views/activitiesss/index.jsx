import React, { useState } from "react";
import Modal from "./modal";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
//Redux
import { connect } from "react-redux";
import { removed, update } from "../../redux/Activities/actions";

function Index({ todos, removed, update }) {
  const [list, setList] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (newList) => {
    update({ id: list.id, text: newList.text });
    setList({ id: null, value: "" });
  };
  if (list.id) {
    return <Modal list={list} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id}>{todo.text}</div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removed(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setList({ id: todo.id, text: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

function mapStateToProps(state) {
  const { todos } = state.activities;
  return { todos };
}

export default connect(mapStateToProps, { removed, update })(Index);

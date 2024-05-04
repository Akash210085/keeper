import React from "react";

function Note(props) {
  function DeleteItem() {
    props.deleteItem(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={DeleteItem}>DELETE</button>
    </div>
  );
}

export default Note;

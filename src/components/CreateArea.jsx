import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          onChange={props.onChanged}
          name="title"
          placeholder="Title"
          value={props.titleValue}
        />
        <textarea
          onChange={props.onChanged}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.contentValue}
        />
        <button onClick={props.onClicked}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

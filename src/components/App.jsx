import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  const [list, setList] = useState([]);

  // const [temp, setTemp] = useState({
  //   title: "",
  //   content: "",
  // });

  function handleChange(event) {
    // const newInput = event.target.value;
    // const name = event.target.name;
    const { name, value } = event.target;
    // if (name === "title") {
    //   setInput({ title: value, content: input.content });
    // } else {
    //   setInput({ title: input.title, content: value });
    // }
    setInput((preValue) => {
      if (name === "title") {
        return { title: value, content: preValue.content };
      } else {
        return { title: preValue.title, content: value };
      }
    });
    
  }

  function handleClick(event) {
    event.preventDefault();
    // setTemp(input);
    setList((preValue) => {
      return [...preValue, input];
    });
    setInput({ title: "", content: "" });
  }

  function deleteItem(id) {
    setList((preValue) => {
      return preValue.filter((item, index) => {
        return id !== index;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea
        onChanged={handleChange}
        onClicked={handleClick}
        titleValue={input.title}
        contentValue={input.content}
      />
      {list.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            deleteItem={deleteItem}
          />
        );
      })}
      {/* <Note key={1} title={temp.title} content={temp.content} /> */}
      <Footer />
    </div>
  );
}

export default App;

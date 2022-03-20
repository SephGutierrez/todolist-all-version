import React, {useState, useEffect, useRef} from "react";
import { Button, Input } from "@mui/material";


const Modal = (props) => {
    console.log(props);
    const [input, setInput] = useState(props.list ? props.list.text : "");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = (e) => setInput(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
           id: Math.floor(Math.random() * 10000),
           text: input,
        });
        setInput("");
    };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        {props.list ?(
        <>
            <Input
                type = "text"
                placeholder = "Update the Todo"
                value = {input}
                name = "text"
                className = "todo-input edit"
                onChange = {handleChange}
                ref = {inputRef}
            />&nbsp;
            <Button type = "submit" variant = "contained"> Update </Button>
            
        </>

        ) : (
        
        <>
         <Input
                type = "text"
                placeholder = "Add a Todo"
                value = {input}
                name = "text"
                className = "todo-input"
                onChange = {handleChange}
                ref = {inputRef}
            />&nbsp;
            
            <Button type = "submit" variant = "contained"> Add To Do </Button>
        </> 

        
        )} 
    </form>
  );
};

export default Modal;
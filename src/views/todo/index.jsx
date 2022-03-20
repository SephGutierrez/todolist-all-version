import React,{useState} from "react";
import {RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";
import Modal from "./modal";
import useTodos from "../../hooks/useTodos";

function Index() {
    const [list, setList] = useState({
        id: null,
        value: "",
    });
    
const {removed, update, todos } = useTodos();

    const submitUpdate = (newList) => {
        update({id: list.id, text: newList.text});
        setList({ id: null, value: ""});
    };

    if (list.id) {
        return <Modal list = {list} onSubmit = {submitUpdate} />;
    }

  return todos.map((todo, index) => (
    <div key = {index}>
        <div key = {todo.id}> {todo.text} </div>
        <div className = "icons">
            <TiEdit onClick = {() => setList({ id: todo.id, text: todo.text})} />
            <RiCloseCircleLine onClick = {() => removed(todo.id)} />    
        </div>
    </div>
  ));
}

export default Index;
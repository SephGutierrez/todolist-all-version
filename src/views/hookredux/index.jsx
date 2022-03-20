import React,{useState} from "react";
import {RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";
import Modal from "./modal";
//hook-redux

import {useSelector, useDispatch} from "react-redux";
import {removed, update} from '../../redux/Activities/actions'

function Index() {
    const [list, setList] = useState({
        id: null,
        value: "",
    });

    const dispatch = useDispatch();
    const works = useSelector((state) => state.activities.todos);
    // const activities = useSelector((state) => state.activities.todos);

    

    const submitUpdate = (newList) => {
       dispatch (update({id: list.id, text: newList.text}));
        setList({ id: null, value: ""});
    };

    if (list.id) {
        return <Modal list = {list} onSubmit = {submitUpdate} />;
    }

  return works.map((todo, index) => (
    <div key = {index}>
        <div key = {todo.id}> {todo.text} </div>
        <div className = "icons">
            <TiEdit onClick = {() => setList({ id: todo.id, text: todo.text})} />
            <RiCloseCircleLine onClick = {() => dispatch(removed(todo.id))} />    
        </div>
    </div> 
  ));
}

export default Index;
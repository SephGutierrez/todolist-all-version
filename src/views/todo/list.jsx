import React from "react";
import Index from "./index";
import useTodos from "../../hooks/useTodos";
import Modal from "./modal";

function Todo() {

    const {add} = useTodos();

    return (

        <div className="wowie">

            <h1 className="text-h1">What's the Plan for Today? BY CONTEXT</h1>

            <Modal onSubmit = {add} />

            <Index />

        </div>

    );
}

export default Todo;
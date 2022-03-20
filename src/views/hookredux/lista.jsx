import React from "react";
import Index from "./index";
import {useDispatch} from 'react-redux';
import {add} from '../../redux/Activities/actions'
import Modal from "./modal";

function Lista() {

const dispatch = useDispatch();
const handleSubmit = (work) => {
    dispatch(add(work));
};


    return (

        <div className="wowie">

            <h1 className="text-h1">What's the Plan for Today? HOOK-REDUX YARNN</h1>

            <Modal onSubmit = {handleSubmit} />

            <Index />

        </div>

    );
}

export default Lista;
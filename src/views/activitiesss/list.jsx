import React from "react";
import Modal from "./modal";
import Index from "./index";
// redux
import { connect } from "react-redux";
import { add } from "../../redux/Activities/actions";

function Activities({ add }) {
  return (
    <div className="wowie">
      <h1 className="text-h1">What's the Plan for Today? BY REDUX</h1>
      <Modal onSubmit={add} />
      <Index />
    </div>
  );
}

export default connect(null, { add })(Activities);

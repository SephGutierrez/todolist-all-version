import React from "react";
import Modal from '../../component/modal';
import Index from "./index";
//redux
import { connect } from "react-redux";
import { add } from "../../redux/BREAD/actions";



function Activities({ add }) {
return (
<div>
<h1>What's the Plan for today? by API</h1>
<Modal onSubmit={add} />
<Index />
<p>
        latitude: <span id="lat"></span><br />
        longitude: <span id="lon"></span><br />
    </p>   
</div>
);
}



export default connect(null, { add })(Activities)
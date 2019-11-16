import React from 'react';
import {connect} from "react-redux";

function Hello(props) {
    return <>
        <h3>Hello {props.field.width}</h3>
        </>

}

export default connect((state) => {
    return state;
})(Hello);
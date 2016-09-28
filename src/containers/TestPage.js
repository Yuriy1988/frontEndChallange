import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

function Videos (props) {
    return <div>{props.test}</div>
}

export default connect(
    (state)=>({
        test: state.test,
    })
)(Videos);
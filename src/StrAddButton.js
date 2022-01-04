import React, {Component} from "react";
import { connect } from "react-redux";
import {add} from './actions';

class StrAddButton extends Component{
    render(){
        return(
            <input value="Add200" type="button" onClick={this.addString}/>
        )
    }
}

let mapDispatchProps = (dispatch, props) => {
    console.log('Props from App.js : ' + props.AppProps)
    return{
        addString: () => dispatch(add())
    };
}

StrAddButton = connect(null, mapDispatchProps)(StrAddButton);

export default StrAddButton;
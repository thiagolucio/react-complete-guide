import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return(
        <div className={classes.Person}>
            <p>I'm <b>{props.name}</b> and I have <b>{props.age}</b> years old.</p>  
            <p>{props.children}</p>
            <div className={"input-group mb-3"}>
                <input type="text" className={"form-control"} onChange={props.changed} value={props.name} />
                <div className={"input-group-append"}>
                <button className={"btn btn-danger"} type="button" id="button-addon2" onClick={props.click}>
                     <i className={"fas fa-trash-alt"}></i>
                </button>
                </div>
            </div>     
        </div>
    ) 
};

export default person;
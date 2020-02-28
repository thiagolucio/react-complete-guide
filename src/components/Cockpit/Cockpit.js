import React, {useEffect} from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
    });
    
    let fontClass = '';
    const assignedClasses = [];

    if (props.showPersons) {
        fontClass = classes.red;
    }

    
    if(props.persons.length <= 2) {
      assignedClasses.push( classes.red );      
    }

    if(props.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }

    return (
        <div className={classes.Cockpit}>
            <div className={"row"}>
                <div className={"container mt-5"}>
                    <div className={"jumbotron"}>
                    <div className={"col-12"}>
                    <h1 className={fontClass}>{props.title}</h1>
                    <p className={assignedClasses.join(' ')}>This is really working!</p>
                    <button className={"btn btn-primary"}  onClick={props.clicked}>
                        {props.showPersons === true ? "Show Persons" : "Hide Persons"}
                    </button>
                    </div>                
                    </div>
                </div>
            </div>   
        </div>
    );
};

export default cockpit;

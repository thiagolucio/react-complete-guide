import React, {Component}  from 'react';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return(
            <div className={classes.Person}>
                <p>I'm <b>{this.props.name}</b> and I have <b>{this.props.age}</b> years old.</p>
                <p>{this.props.children}</p>
                <div className={"input-group mb-3"}>
                    <input type="text" className={"form-control"} onChange={this.props.changed} value={this.props.name} />
                    <div className={"input-group-append"}>
                        <button className={"btn btn-danger"} type="button" onClick={this.props.click}>
                            <i className={"fas fa-trash-alt"}/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Person;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '01', name: 'Max', age: 28 },
      { id: '02', name: 'Manu', age: 29 },
      { id: '03', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    
    persons[personIndex] = person;
    this.setState( {persons: persons} );

  }


  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; //criou constante criando um novo array persons com spread operator (...)
    persons.splice(personIndex, 1); // deu splice pra remover um elemento da repeticao do array
    this.setState({persons: persons}); // recriou o array com as alteracoes feitas
  }


  togglePersonsHandler = (btnMsg) => {
    const doesShow = this.state.showPersons; //showPersons: false (linha 13)
    this.setState({showPersons: !doesShow}); //showPersons = true / doesShow = false    
  }



  render () {

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person  
              click={() => this.deletePersonHandler(index)}          
              name={person.name}
              age={person.name} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
            }
          )
        }             
        </div>
      );
    }


    return (
      <div className="App">
        <div className="row">
          <div className="container">
            <div className="jumbotron">
            <div className="col-12">
              <h1>Hi, I'm a React App</h1>
              <p>This is really working!</p>
              <button className={"btn btn-primary"} onClick={this.togglePersonsHandler}>
                {this.state.showPersons === true ? "Show Persons" : "Hide Persons"}
              </button>
            </div>
                {persons}
            </div>
          </div>
        </div>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

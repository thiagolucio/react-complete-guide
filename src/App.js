import React, { Component } from 'react';
import classes from './App.css';
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '01', name: 'Max', age: 28 },
      { id: '02', name: 'Manu', age: 29 },
      { id: '03', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState( {persons: persons} );

  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //criou constante criando um novo array persons com spread operator (...)
    persons.splice(personIndex, 1); // deu splice pra remover um elemento da repeticao do array
    this.setState({persons: persons}); // recriou o array com as alteracoes feitas
  }

  togglePersonsHandler = (btnMsg) => {
    const doesShow = this.state.showPersons; //showPersons: false (linha 13)
    this.setState({showPersons: !doesShow}); //showPersons = true / doesShow = false    
  }

  render () {

    console.log('[App.js] render');
    let persons = null;    

    if ( this.state.showPersons ) {
      persons = (
        <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />
      );
      
    }

    return (
      <div className={classes.App}>
          <Cockpit title={this.props.appTitle} showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

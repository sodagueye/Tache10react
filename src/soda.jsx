import React from 'react';
import './Todo.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      tableau: [],
      editItem: null, // État pour gérer la tâche actuellement en cours de modification
      editText: ''    // État pour gérer le texte modifié
    }
  }

  onChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  ajoutTodo(event) {
    if (this.state.input.trim() === '') {
      return;
    }
    event.preventDefault();
    this.setState({
      input: '',
      tableau: [...this.state.tableau, this.state.input]
    });
  }

  suprimerTodo(item) {
    const array = this.state.tableau;
    const index = array.indexOf(item);
    array.splice(index, 1);
    this.setState({
      tableau: array
    });
  }

  updateTodo() {
    const array = [...this.state.tableau];
    const index = array.indexOf(this.state.editItem);
    if (index !== -1) {
      array[index] = this.state.editText;
      this.setState({
        tableau: array,
        editItem: null,
        editText: ''
      });
    }
  }

  renderAjoutTodo() {
    return this.state.tableau.map((item) => {
      if (this.state.editItem === item) {
        return (
          <div className='list-group-item ajouter w-50' key={item}>
            <input
              type="text"
              value={this.state.editText}
              onChange={(e) => this.setState({ editText: e.target.value })}
            />
            <button onClick={this.updateTodo.bind(this)}>Mettre à jour</button>
          </div>
        );
      }
      return (
        <div className='list-group-item ajouter w-50' key={item}>
          <span>{item}</span>
          <div className='coler'>
            <button onClick={() => this.suprimerTodo(item)}>
              <i className="fa-solid fa-trash"></i>
            </button>
            <button onClick={() => this.setState({ editItem: item, editText: item })}>
              <i className="fa-solid fa-pen"></i>
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='text-center'>
        <h1>Todolist</h1>
        <form className='form-row align-items-center formulaure'>
          <input
            type='text'
            value={this.state.input}
            placeholder=''
            className='form-contol-mb-2'
            onChange={this.onChange.bind(this)}
          />
          <button className='btn btn-primary large m-3' onClick={this.ajoutTodo.bind(this)}>Ajouter</button>
        </form>
        <div className='list-group'>
          {this.renderAjoutTodo()}
        </div>
      </div>
    );
  }
}

export default TodoList;

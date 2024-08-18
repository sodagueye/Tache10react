import React from 'react'; 
import './Todo.css'; 

class TodoList extends React.Component { // Définition d'un composant de classe TodoList
  constructor(props) { // Définition du constructeur du composant
    super(props); // Appel au constructeur de la classe parente (React.Component)
    this.state = { // Initialisation de l'état local du composant
      input: '', // Initialisation de la valeur de l'entrée à une chaîne vide
      tableau: [] // Initialisation du tableau des todos à un tableau vide
    }
  }

  onChange(event) { // Méthode pour gérer le changement de l'entrée
    this.setState({ // Mise à jour de l'état avec la nouvelle valeur de l'entrée
      input: event.target.value
    });
  }

  ajoutTodo(event) { // Méthode pour ajouter un todo
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
    this.setState({ // Mise à jour de l'état pour ajouter un nouveau todo
      input: '', // Réinitialisation de la valeur de l'entrée à une chaîne vide
      tableau: [...this.state.tableau, this.state.input] // Ajout de la nouvelle entrée au tableau des todos
    });
  }

  suprimerTodo(event) { // Méthode pour supprimer un todo
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
    const array = this.state.tableau; // Copie du tableau des todos
    const index = array.indexOf(event.target.value); // Recherche de l'indice de l'élément à supprimer
    array.splice(index, 1); // Suppression de l'élément du tableau
    this.setState({ // Mise à jour de l'état avec le tableau mis à jour
      tableau: array
    });
  }

  renderAjoutTodo() { // Méthode pour rendre la liste des todos
    return this.state.tableau.map((items) => { // Mapping sur chaque élément du tableau des todos
      return (
        <div className='list-group-item ajouter w-50' key={items}> {/* Rendu de chaque todo avec un bouton de suppression */}
          {items}<button onClick={this.suprimerTodo.bind(this)}><i class="fa-solid fa-trash"></i></button>
        </div>
      )
    })
  }

  render() { // Méthode pour rendre le composant TodoList
    return (
      <div className='text-center'> 
        <h1>Todolist</h1> 
        <form className='form-row align-items-center formulaure'> 
          <input type='text' value={this.state.input} placeholder='' className='form-contol-mb-2'
            onChange={this.onChange.bind(this)} /> {/* Gestionnaire d'événements pour le changement de l'entrée */}
          <button className='btn btn-primary large m-3' onClick={this.ajoutTodo.bind(this)}>Ajouter</button> {/* Bouton pour ajouter un nouveau todo */}
        </form>
        <div className='list-group'>
          {this.renderAjoutTodo()} {/* Appel à la méthode pour rendre les todos */}
        </div>
      </div>
    );
  }
}

export default TodoList; // Exportation du composant TodoList



// constructor(props): Initialise l'état initial de la classe TodoList.
// onChange(event): Met à jour le champ de saisie input de l'état.
// ajoutTodo(event): Ajoute un nouveau todo au tableau tableau de l'état.
// suprimerTodo(item): Supprime un todo spécifique du tableau tableau de l'état.
// renderAjoutTodo(): Affiche la liste des todos à partir du tableau tableau de l'état.
// render(): Méthode de rendu principal qui affiche le titre de la todolist, le formulaire pour ajouter un nouveau todo, et la liste des todos.




// La méthode bind() en JavaScript est utilisée pour lier une fonction à un contexte spécifique. 
// Le contexte détermine la valeur de this à l'intérieur de la fonction lors de son exécution.
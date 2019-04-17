import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import { establishments } from './establishments/fixtures'


// Un Component implémente la méthode render() et reçoit en paramètre ses props
// Le paramètre title est ajouté aux props que nous fournit la classe Component

class App extends Component {

    // Notre fameuse méthode render()
    // On utilise dans cette méthode la syntaxe JSX
  render() {


    const listEstablishment = establishments.map ( (establishment) => { // La méthode map() crée un nouveau tableau composé des images des éléments d’un tableau par une fonction donnée en argument. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map . Ici, avec la fonction (establishment) => {} (notation es6), nous retournons l’élément JSX <li ... > ... Ce qui permet par la suite d’afficher les établissements sous forme de liste avec la variable { listEstablishment }.
      return (

            <li
                key = { establishment.id } // L'attribut "key" permet à React d'identifier les éléments. Cela améliore les performances lors de l'ajout, la modification et la suppression d'un élément.
                className = 'establishment' // 
            >
              <h3>{ establishment.name }</h3>
              { establishment.description }
            </li>
              
      )
    })

    // On peut ainsi facilement l'utiliser grâce à l'objet this.props
    // Les props sont pour l'instant le Title
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to { this.props.title }</h2> 
        </header>
        <p className="App-intro">
          { listEstablishment }
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from '../assets/water.gif';
import '../css/App.css';
import { establishments } from './establishments/fixtures';
import Establishment from './establishments/Establishment';


// Un Component implémente la méthode render() et reçoit en paramètre ses props
// Le paramètre title est ajouté aux props que nous fournit la classe Component

class App extends Component {

  constructor(props) {
      // Ne pas oublier d'appeler le constructeur père ! (Obligatoire)
      super(props); // "super" n'est appellé que lorsqu'on a un constructeur
      // On définit le state de notre component que l'on hérite de la classe "Component"
      // Cela remplace la fonction "getInitialState"
      this.state = { // this. peut être appellé à partir du moment que le state est initialisé
          pseudo : "Inconnu"
      }
  }
  


  incrementCounter = incrementValue => {
    this.setState(prevstate => ({
      counter: prevstate.counter + incrementValue
    }))
  }


  // On définit la fonction appelée lors d'un clic sur le lien "Changer le pseudo !"
  // la syntaxe  " nomFonction = () => {} " nous permet de conserver le contexte `this` du scope courant. (Ici, la classe App)
  randomPseudo = () => {
    // (now, have fun they said...)
    let randomPseudo = ""
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const size = Math.floor(Math.random() * 10) + 5
    for( let i=0; i < size; i++){
        randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length ))
    }
    // On met à jour le state via la fonction "setState" héritée de la classe Component
    this.setState({
      pseudo : randomPseudo
    })
  }

    // Notre fameuse méthode render()
    // On utilise dans cette méthode la syntaxe JSX
  render() {

    const listEstablishment = establishments.map ( (establishment) => { // La méthode map() crée un nouveau tableau composé des images des éléments d’un tableau par une fonction donnée en argument. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map . Ici, avec la fonction (establishment) => {} (notation es6), nous retournons l’élément JSX <li ... > ... Ce qui permet par la suite d’afficher les établissements sous forme de liste avec la variable { listEstablishment }.
        return (
            <Establishment
                key={ establishment.id}  
                establishment={establishment} // on n'a pas oublié la props "establishment" :)
            />,

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
          <h2>Welcome "{ this.state.pseudo }" to { this.props.title }</h2> 
        </header>
        <div className="App-intro">
          {/* On appelle notre fonction lors du clic sur le lien */}
          <p> 
            <a onClick={this.randomPseudo} >Changer le pseudo !</a> 
          </p>
          <section>
          { listEstablishment }
          </section>
        </div>
      </div>
    );
  }
}

export default App;

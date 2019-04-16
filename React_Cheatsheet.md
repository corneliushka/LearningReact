# Learning React 

Sources :  
[Coursera : Learn Frontl-End React](https://www.coursera.org/learn/front-end-react/)

## 1.1 Initialisation et creation nouvel projet

Stephings to install before using React (in folder) : 
-  (install create react app) npm install -g create-react-app

Step 1 : *create-react-app <name-app>* pour générer un nouvel projet, nettoyer le dossier si nécessaire (rm src/App.* src/index.css src/logo.svg).

Step 2 : ouvrir *src/index.js*, effacer tout le contneu et y écrire :
*import React from 'react';*
*import ReactDOM from 'react-dom';*
et ce, afin d'importer dans le dossier les packages npm installés

Pour lancer le projet : *$ npm start*

## 1.2 Le JSX et syntaxe React

### 1.2.1 Le ReactDOM.render 

Le ReactDOM, va prendre 2 arguments : 
- ce qui sera rendu (component ou element React)
- où cela sera rendu (un element DOM réel)

Pour les components : nous avons les ES6 classes et les React.createClass (deprecated).

### 1.2.2 JSX Quoi et Pourquoi 

JSX est la syntaxe inventé par React, c'est comme du HTML mais compilé en vrai Javascript, grâce à un outil appellé **Babel**, qui va transformer le code en ES5 valide pour les browsers. 
Chaque élément JSX devient un appel de fonction, où ses arguments sont ses attributs ("props") et son contenu ("children").

L'autre penchant de l'écriture en React est la signature en fonction React.createElement :

    React.createElement(
        element|string,
        [propsObject],
        [children...]
    )

- *element|string* décrivent le tag HTML
- *propsObject* et *children* sont optionnels.

On peut penser que combiner la vue et la logique peut donner un code confus, et il peut être vrai. 
Mais le pattern de React avec la construction en *components* prévient cela. 


#### Comparaisons JSX et sa compilation en JS avec Babel 

La 

EX 1 :
    return <span>Hello!</span>;   
    
    ↓

    return React.createElement(
        'span',
        {},
        'Hello!'
    );

EX 2 : 
    <span className='song-name'>
        {props.song.name}
    </span>

    ↓ 

    React.createElement(
        'span',
        { className: 'song-name' },
        props.song.name
    );


La convention parmi la communauté des développeurs est d'écrire en JSX. Ecrire en React.createElement n'est pas une approche commune. 

### 1.2.3 Travailler avec le JSX 

#### Composer les components 

Maintenant nous pouvons au sein du même fichier .js créer plusieurs components internes : 

    function Hello() {
    return <span>Hello</span>;
    }

    function World() {
    return <span>World</span>;
    }

Et les inclure dans notre component principal HelloWorld() : 

    function HelloWorld() {
        return (
            <div>
                <Hello/> <World/> !
            </div>
        )
    }
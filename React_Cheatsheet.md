# Learning React 

Sources :  
[Coursera : Learn Frontl-End React](https://www.coursera.org/learn/front-end-react/)

Pre-requis VS Code: 
- ES7 React/Redux/GraphQL/React-Native snippets
- Sublime Babel



## 0 Erreurs et autres galères 

- ENOSPC, nombre de watches limités : https://github.com/gatsbyjs/gatsby/issues/11406

- Pour faire une copie d'un folder pour bosser dedans, se mettre un niveau de folder au-dessus (parent) et exécuter dans le terminal : 
    cp -a <nomfolderadupliquer> <nouvelnomfolder> && cd <nouvelnomfolder>
    npm start 


- GitHUb Pages : avoir la page github compilée avec React 

1) dans package.json, insérer: "homepage": "https://becodeorg.github.io/PiloteMedia-Boeing/"
2) se positionner sur la master branch
3) npm run build
4) npm run deploy (lorsque build ok)
5) Si 4. ne fonctionne pas, faire "npm install gh-pages"

## 1.1 Initialisation et creation nouvel projet

Stephings to install before using React (in folder) : 
-  (install create react app) npm install -g create-react-app

Step 1 : *create-react-app <name-app>* pour générer un nouvel projet, nettoyer le dossier si nécessaire (rm src/App.* src/index.css src/logo.svg).

Step 2 : ouvrir *src/index.js*, effacer tout le contneu et y écrire :
*import React from 'react';*
*import ReactDOM from 'react-dom';*
et ce, afin d'importer dans le dossier les packages npm installés

Pour lancer le projet : *$ npm start*


### Installation material UI 

[Doc](https://material-ui.com/getting-started/installation/)

npm install @material-ui/core




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


- Une fonction component doit retourner un seul élément. 

#### Le JavaScript dans JSX 

On peut insérer des réelles expressions .js dans le code JSX. Cela ressemble à cela : 

        function SubmitButton() {
            var buttonLabel = "Submit";
            return (
                <button>{buttonLabel}</button>
            );
        }

A ne pas oublier que cela sera compilé dans le Javascript, et que le JS doit avoir une expression a l'intérieur qui produit une valeur. Les déclarations ne produisent pas de valeur et ne peuvent être utilisées dans le JSX. 

Exemples d'expressions:
    1 + 2
    buttonLabel
    aFunctionCall()
    aFunctionName

Exemples de déclarations:
    var a = 5
    if(true) { 17;}
    while(i < 7) { i++ }


**Alors commment utiliser le "If" dans JSX ?**

- Tout d'abord on a les opérations ternaires :

    function ValidIndicator() {
        var isValid = true;
        return (
            <span>
                {isValid ? 'valid' : 'not valid'} 
            </span>
        )
    }


- Ensuite on a les opérateurs booléens tels que && : 
    
    function ValidIndicator() {
        var isValid = true;
        return (
            <span>
                {isValid && 'valid'}
                {!isValid && 'not valid'}
            </span>
        );
    }


**Commentaires dans JSX**

Il faut les mettres dans un block JSX, tel que : 
    
    function ValidIndicator() {
        var isValid = true;
        return (
            <span>
                {/* voici un commentaire*/}
                {isValid && 'valid'}
                {!isValid && 'not valid'}
                {
                    // on peut faire ceci pour
                    // le multi lignes
                }
            </span>
        );
    }

**Capitaliser les noms des components**

Les componenets doivent commencer par une majuscule.
EX :
    UserList
    Menu
    SubmitButton
    ...

En JSX les componenets en minuscules sont des éléments l'HTML ou SVG.

### 1.3 Création d'un component 

Lorsqu'on parle de la hiérarchie des components, procède-t-on Top-Down ou Bottom-Up ? 

Pour les petits projets (lorsqu'un parent a quelques enfants) c'est l'approche Top-Down à privilégier car le plus facile.

Pour les projets plus complexes, faire du Bottom-Up car permet de tester au fur et à mesure ses components s'ils sont réactifs. Par induction, leur combinaison fait grossir le projet. 

<!-- Quand vous construisez un component, posez-vous ces questions :

- [ ] Ma variable m’est passée par mon parent via les props ? Ne la mettez pas dans le state

- [ ] Ma variable peut être créée à partir d’autres variables du state ou des props ? Ne la mettez pas dans le state

- [ ] Ma variable ne remplie aucun des cas ci-dessus ? Alors sa place est surement dans le state
 -->


Le .CSS qu'on importe dans un fichier parent peut etre visible dans la console -> elements -> dans la balise <head> il y a <style></style> (vite, mais index.css est appelé dedans).


### 1.3 Props - Arguments to Components

Si le HTMl a ses attributs, les components React ont des props (= propriétés). 
Des components React peuvent être écrits en fonctions. C'est donc naturel de penser qu'on peut penser des arguments à ces fonctions. 
Les **props** sont des *arguments* / *parametres* que l'on passe a d'autres componenets. 
Basiquement, l'esprit de React est de casser les choses en morceaux, cad en components, et de les utiliser quand l'on en a besoin. 
Les props sont des caractéristiques définies que contiennent les components et elles sont accessibles ou envoyées lorsque requises.
Les datas des props peuvent être de différentes natures : strings, fonctions, tableaux. 


#### 1.3.1 Passer des props 

- On passe un props appellé *name* avec la valeur string "Dave"
    <Person name='Dave'/>

- On passe un props *className* avec la valeur "person"

    <div className='person'/>

Les div sont auto-fermantes, chaque component peut etre auto-fermant, si'il n'a pas d'enfants. 

Il est important de se rappeller que dans JS les brackets sont une expression, par une déclaration. Voici ce qu'on peut faire à l'intérieur des expressions JSX : 

- Math, concatenation: {7 + 5} or {'Your' + 'Name'}
- Function calls: {this.getFullName(person)}
- Ternary (?) operator: {name === 'Dave' ? 'me' : 'not me'}
- Boolean expressions: {isEnabled && 'enabled'}

Ce qu'on ne peut pas faire : 

- Define new variables with var
- Use if, for, while, etc.
- Define functions with function

#### 1.3.2 Recevoir des props



### React Router 

La meilleure maniere d'utiliser un Router pour React est d'utiliser le "React Router DOM".
On l'installe. 

On importe la librairie et les differents components a l'interieur de l'app.js : Router, Route, Link.

On va y mettre le component "router" dans lequel on va mettre en *path="/"* les differentes routes. 

https://tylermcginnis.com/react-router-route-config/
[Getting Start with react router](https://codeburst.io/getting-started-with-react-router-5c978f70df91)
[React Route Config](https://tylermcginnis.com/react-router-route-config/)
[Stackoverflow](https://stackoverflow.com/questions/43026690/declaring-react-routes-in-a-separate-file-and-importing)

### React Redux


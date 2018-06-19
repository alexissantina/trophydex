import React, { Component } from 'react';
import './App.css';
import trophydexJson from './trophydex.json';

class TrophyCell extends React.Component {
  render () {
    let emoji = this.props.emoji
    return (
      <td>
        <a>{emoji}</a>
      </td> 
    );  
  }
}

class TrophyRow extends React.Component {
  render() {
    let trophies = this.props.trophies;
    console.log(trophies);
    let name = this.props.category;
    const cells = [];

    trophies.forEach((trophy) => {
      cells.push(
        <TrophyCell
          emoji={trophy.emoji}
        />
      );
    });

    return(
      <thead>
        <tr>
          <th>{name}</th>
          {cells}
        </tr>
      </thead>
    );
  }
}

class TrophyTable extends React.Component {
  render () {
    let categories = this.props.getCategories();
    console.log(categories)

    const rows = [];
    categories.forEach((category) => {
      rows.push(
        <TrophyRow
          trophies={category.trophies}
          category={category.name}
        />
      );
    });
    return(
      <table>
        {rows}
      </table>
    );
  }
}

//return an object with a name key, and a trophy: array that has emoji and instructions
function getCategories() {
  var catArray = []
  var cat = {
    name: "",
    trophies: []
  }
  catArray = trophydexJson.content.map(function(category) {
      if (category.type == "category") {
        cat = {
          name: category.name,
          trophies: category.content
        }
        return cat;
      } else { 
        return undefined
      }
  }).filter(function(n){ return n != undefined });
  return catArray;
}

//create an array of the emoji and the description
// function trophyArray(obj) {
//   let trophy = {
//     emoji: obj.emoji,
//     description: obj.description
//   }
//   let trophyArray = []

//   categories.forEach((category) => {
//     categories.trophies.forEach((trophy) =>
//       trophy = 
//         )
//     })
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <TrophyTable getCategories={getCategories}/>
      </div>
    );
  }
}

export default App;

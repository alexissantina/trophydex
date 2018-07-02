import React, { Component } from 'react';
import './App.css';
import trophydexJson from './trophydex.json';

function TrophyCell (props) {
  let emoji = props.emoji
  return (
    <td>
      <a>{emoji}</a>
    </td> 
  );  
}

function TrophyRow (props) {
  let trophies = props.trophies;
  let name = props.category;
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

function TrophyTable (props) {
  let categories = props.getCategories();

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

//return an object with a name key, and a trophy: array
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

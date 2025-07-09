
import { useState, useEffect, use } from 'react';

import CardList from './components/card-list/card-list.component';
import './App.css'


const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  // console.log(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      setMonsters(data);
      setFilteredMonsters(data);
    });
    }, [])

  return (
      <>
      <input 
      type='search' 
      onChange={(event) => {
        const searchString = event.target.value.toLowerCase();
        const newFilteredMonsters = monsters.filter((monster) => 
          monster.name.toLowerCase().includes(searchString));
        setFilteredMonsters(newFilteredMonsters);
        }}
        />
        <CardList monsters={filteredMonsters} />
      </>
  );
};

export default App;

import React, {useState} from 'react';
import Table from './Table';

const characters = [
  {
    name: 'Charlie',
    job: 'Janitor',
  },
  {
    name: 'Mac',
    job: 'Bouncer',
  },
  {
    name: 'Dee',
    job: 'Aspring actress',
  },
  {
    name: 'Dennis',
    job: 'Bartender',
  },
];


function MyApp() {
  const [characters, setCharacters] = useState([
      {
        name: 'Charlie',
        job: 'Janitor',
         // the rest of the data
         
      },
    ]);  

function removeOneCharacter (index) {
  const updated = characters.filter((character, i) => {
      return i !== index
    });
    setCharacters(updated);
    
  }
}

export default MyApp;
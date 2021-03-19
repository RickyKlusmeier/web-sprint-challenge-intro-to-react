import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'
import CharacterList from './components/CharacterList';
import Header from './components/Header'


const App = (props) => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charData, setCharData] = useState([])

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then((res) => {
      // console.log(res.data);
      setCharData(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <div className="App">
        <Header />
        <CharacterList charData={charData} />
    </div>
  )
    }

export default App;

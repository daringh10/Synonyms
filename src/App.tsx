import React, { useState } from 'react'
import {fetchSynonyms} from '../api/fetchSynonyms';
import { Synonym } from './model/Synonym';
import './App.css'
import { useGetSynonyms } from './hooks/useGetSynonyms';

function App() {

  const [word, setWord] = useState('');
  const {isLoading, synonyms, getSynonyms} = useGetSynonyms();

  const handleChangeWord = async (
   word: Synonym) => {
    setWord(word.word);
    getSynonyms(word.word)

  }

  const handleFetchSynonyms = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // SO form doesnt refresh page
    getSynonyms(word)

  }


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }

  return (
    <div className="App">
      <form onSubmit={handleFetchSynonyms}>
        <label htmlFor='word-input'>Type Word</label>

        <input value={word} 
        onChange={handleInputChange} 
        id='word-input'></input>
        <button>Submit</button>
      </form>
      <hr />
      <h3>Word is: {word}</h3>
      {isLoading ? <div>Loading...</div> :
      <div className='SynonymList'>
        <ul>
          {synonyms.map((obj) => {
            return <li onClick={()=> handleChangeWord(obj)} key={obj.word}>{obj.word}</li>
          })}
        </ul>
      </div>}
    </div>
  )
}

export default App

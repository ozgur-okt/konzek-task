import { useState } from 'react'
import { useCharacters } from '../hooks/useCharacters'
import { useCharacter } from '../hooks/useCharacter'
import AllCharacters from '../components/AllCharacters'
import SearchedCharacters from '../components/SearchedCharacters'
import '../styles/Main.css'


function CharacterList() {

  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [searchStarted, setSearchStarted] = useState(false);
  const { loading, error, data } = useCharacters();
  const { loading: loadingItem, error: errorItem, data: searchedItem } = useCharacter(search);

  const searchCharacter = (e: any) => {
    e.preventDefault();
    setSearch(input);
    setSearchStarted(true);
  };
  const clearSearch = (e: any) => {
    e.preventDefault();
    setInput('');
    setSearchStarted(false);
  };


  return (
    <>
      <div className='Search'>
        <input className="Input" type="text" placeholder="Type any character name to search..." value={input} onChange={(e) => setInput(e.target.value)} />
        <button disabled={!input} className={input ? "Button" : "Button disabled"} onClick={searchCharacter}>SEARCH</button>
        {searchStarted && <button className="Button" onClick={clearSearch}> CLEAR & COME BACK </button>}
      </div>

      {searchStarted ?
        <SearchedCharacters loadingItem={loadingItem} searchedItem={searchedItem} errorItem={errorItem} />
        :
        <AllCharacters loading={loading} data={data} error={error} />
      }
    </>
  )
};

export default CharacterList;
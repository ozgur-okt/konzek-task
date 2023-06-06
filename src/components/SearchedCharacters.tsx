import { useEffect, useState } from 'react'
import { SearchedCharactersProps } from '../interfaces/SearchedCharactersProps'
import { Character } from '../interfaces/Character'
import "../styles/Main.css"



export default function SearchedCharacters({ loadingItem, searchedItem, errorItem }: SearchedCharactersProps) {
  const [selectedItem, setSelectedItem] = useState<Character | null>(null);

  const getItemColor = (item: Character): string => {
    return item === selectedItem ? 'red' : '';
  };

  useEffect(() => {
    const items: Character[] | undefined = searchedItem?.characters.results;
    if(!items) return;
    if (items.length < 10 && items.length > 0) {
      setSelectedItem(items[items.length - 1]);
    } else if (items.length >= 10) {
      setSelectedItem(items[9]);
    } else {
      setSelectedItem(null);
    }
  }, [searchedItem]);

  return (
    <div className='CharacterList'>
    {loadingItem && <p>Loading character...</p>}
    {errorItem && <p>Error with item!</p>}
    {searchedItem ? (
      searchedItem.characters.results.map((character: any, index: number) => (
        <div key={index} className='Character'
        style={{
          backgroundColor: getItemColor(character),
        }}>
          <p className='Name'>{character.name}</p>
          <img src={character.image} alt={character.name} />
        </div>
      ))
    ) : null}
  </div>
  )
}

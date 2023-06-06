import { useState } from 'react'
import { AllCharactersProps } from '../interfaces/AllCharactersProps'
import { Character } from '../interfaces/Character'
import '../styles/Main.css'


const colorSet: string[] = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'teal', 'brown', 'gray'];

function AllCharacters({ loading, data, error }: AllCharactersProps) {

  const [selectedItems, setSelectedItems] = useState<Character[]>([]);

  const handleItemClick = (item: Character) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  
  const getItemColor = (item: Character): string => {
    if (selectedItems.includes(item)) {
      const index = selectedItems.indexOf(item);
      return colorSet[index % colorSet.length];
    }
    return '';
  };

  return (
    <div className='CharacterList' >
      {loading && <p>Loading character list...</p>}
      {error && <p>Error!</p>}
      {data ? (
        data.characters.results.map((character: any, index: number) => (
          <div key={index} className='Character' onClick={() => handleItemClick(character)}
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

export default AllCharacters
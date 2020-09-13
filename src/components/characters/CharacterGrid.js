import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../Spinner'

function CharacterGrid({items, isLoading}) {
    return isLoading ? 
    (<Spinner/>) : 
    
    (  <section className="cards">
        { items.length > 0 ? (
            items.map(item => (
                <CharacterItem key={item.char_id} item={item}/>
             ))
        ) : ( <h1>No results found</h1>)   }
    </section>)
}

export default CharacterGrid

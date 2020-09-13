import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from './components/Header'
import Search from './components/Search'
import CharacterGrid from './components/characters/CharacterGrid'
import Paginations from './components/Paginations'
import './App.css';


const  App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    const fetchItems =  async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])

  // Get Curren Items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  //Change Page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid
        isLoading={isLoading}
        items={currentItems}
      />
      <Paginations
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;

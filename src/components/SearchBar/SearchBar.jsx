import { useState, useEffect, createContext} from 'react';
import React from 'react'
import "./SearchBar.scss"
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";

export const SearchBarContext = createContext();

function SearchBar ({onDataFromChild, fx} ) {
    const [books, setBooks] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const[searchInput, setSearchInput] = useState('');
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        console.log(searchValue)
    }
     const handleSubmit = async (e) => {
        console.log("Working")
        e.preventDefault();
        await fetch('http://localhost:3001/Shop/searchWord', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              searchWord: searchInput,
            }),
          }),
          fetchAllBooks();

    };
    
        const fetchAllBooks = async () => {
          try {
            console.log("Getting sql query");
            await axios.get("http://localhost:3001/Shop/searchWord").then(response => {
              setBooks(response.data);

              setLoading(true);
            })
            // console.log(res.data);
            // setBooks(res.data);

          } catch (err) {
            console.log(err);
          }
        };
        if (isLoading) {
          console.log(books);
          setLoading(false);
          console.log("Sending data to parent");
          onDataFromChild(books);
        }
       
    

    
    function test(event){
      console.log("Testing");
      handleSubmit(event);
      
    } 

    const contextValue = handleSubmit();

    return(
      <SearchBarContext.Provider value={contextValue}>
        <div className="searchBar">
            <div className="searchInputs">
                <input className="searchInput" placeholder="Enter Search Input"
                onChange={(e) => searchItems(e.target.value)} />
                <button onClick={(event) => {
                  test(event);
                }}><SearchIcon></SearchIcon></button>

              
            </div>
            <div className="dataResult">
                    
            </div>
        </div>
        </SearchBarContext.Provider>
    )
}

export default SearchBar;

        
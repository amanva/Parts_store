import { useState, useEffect, createContext} from 'react';
import React from 'react'
import "./SearchBar.scss"
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";



function SearchBar ({onDataFromChild, name}) {
    const [books, setBooks] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [load, setLoad] = useState(true);
    const[firstRender, setFirstRender] = useState(false)
    const[searchInput, setSearchInput] = useState('');
    //
    /*
      if slide.name = spoiler && searchValue == null && firstload
        load slide.name
      if slide.name = spoiler && searchValue = rims
        load searchValue
    */
    // const searchItems = (searchValue) => {
    //   if(searchValue === name && firstRender === false){
    //     setFirstRender(true);
    //     setSearchInput(searchValue);
    //     handleSubmit(searchValue);

    //   }
    //   else if(searchValue === ""){
    //     setSearchInput("");
    //   }
    //   else{
    //     setSearchInput(searchValue);
    //   }
    // }

    const handleSubmit = async (value) => {
      if(value === name){
        setSearchInput("");
      }
      else{
        setSearchInput(value);
      }
      try{
      await fetch('http://localhost:3001/Shop/searchWord', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            searchWord: value,
          }),
        })
        // name = null;
      fetchAllBooks()}
        catch(error){
          console.log("ERRRORO");
        }
  };

  const fetchAllBooks = async () => {
    try {
      await axios.get("http://localhost:3001/Shop/searchWord").then(response => {
        console.log(response.data);
        setBooks(response.data);
        console.log(books);
        setLoading(true);
      })
    } catch (err) {
      console.log(err);
    }
  };
  if (isLoading) {
    console.log("Sending data to parent");
    onDataFromChild(books);
    setLoading(false);
  }
 

  
  // Set the initial value of searchInput
  useEffect(() => {
    if(name === ":type"){
      console.log("TESTING");
      handleSubmit("");
    }
    else{
      handleSubmit(name);
    }
  }, []);
    return <>
        <div className="searchBar">
            <div className="searchInputs">
                <input className="searchInput" placeholder="Enter Search Input"
                onChange={(e) => handleSubmit(e.target.value)} />
                <button onClick={() => handleSubmit(searchInput)}>
                <SearchIcon></SearchIcon></button>

              
            </div>
            <div className="dataResult">
                    
            </div>
        </div>
    
    </>
}

export default SearchBar;

import { useState, useEffect, createContext} from 'react';
import React from 'react'
import "./SearchBar.scss"
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";



function SearchBar ({onDataFromChild, name}) {
    const [books, setBooks] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [load, setLoad] = useState(true);

    const[searchInput, setSearchInput] = useState('');
    //
    /*
      if slide.name = spoiler && searchValue == null && firstload
        load slide.name
      if slide.name = spoiler && searchValue = rims
        load searchValue
    */
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        console.log(searchValue)
    }

    const handleSubmit = async (e) => {
      console.log("Working")

      if (e && e.preventDefault) { e.preventDefault(); }
      try{
      await fetch('http://localhost:3001/Shop/searchWord', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            searchWord: searchInput,
          }),
        })
      fetchAllBooks()}
        catch(error){
          console.log("ERRRORO");
        }
  };

  const fetchAllBooks = async () => {
    try {
      console.log("Getting sql query");
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
 
   useEffect(() => { 
    console.log("USE EFFECT");
    if(searchValue !== null){
      setSearchInput(name);
    }
    if(searchInput){
      handleSubmit();
    }
    // setSearchInput(name);
    // console.log("UseEffect");
    // handleSubmit();
  
}, [searchInput]);
// useEffect(() => {  POSSIBLY NOT NEEDED
//   console.log("books updated", books);
// },[books]);
     
     
    
   
    
        
    

    

    return <>
        <div className="searchBar">
            <div className="searchInputs">
                <input className="searchInput" placeholder="Enter Search Input"
                onChange={(e) => searchItems(e.target.value)} />
                <button onClick={handleSubmit}>
                <SearchIcon></SearchIcon></button>

              
            </div>
            <div className="dataResult">
                    
            </div>
        </div>
    
    </>
}

export default SearchBar;

{/* <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search blog posts</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search blog posts"
                name="s" 
            />
            <button type="submit">Search</button>
        </form> */}
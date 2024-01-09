import React, { useCallback } from 'react'
import { useState,useEffect } from 'react';
import debounce from 'lodash/debounce';

const mockResults=['John','Jane','Joe','Jill'];

const getSearchResults=async (searchTerm:string)=>{
    console.log('making api request');
    await new Promise((resolve)=>setTimeout(resolve,1000));

    return mockResults.filter((result)=>
        result.toLocaleLowerCase().includes(searchTerm.toLowerCase())
    )
}
function Search() {

    const [searchResults,setSearchResults]=useState<string[]>([]);
    const [searchTerm,setSearchTerm]=useState<string>('');
    // const handleSearch=async (searchTerm: string)=>{
    //     const results=await getSearchResults(searchTerm);
    //     setSearchResults(results);
    // }
   const request=debounce(
        async (searchTerm:string)=>{
            const results=await getSearchResults(searchTerm)
            setSearchResults(results);
        },1000);
   
   const debounceRequest=useCallback(
    (searchTerm:string)=>request(searchTerm),[])
    useEffect(() => {
        debounceRequest(searchTerm);
      }, [searchTerm, debounceRequest]);
    
   const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchTerm(e.target.value);
        //debounceRequest(e.target.value);
   }
   return (
    <div>
        <input type='text' id='search' value={searchTerm} onChange={onChange} />
        <div style={{border:'2px solid brown'}}>
            Results:
            {searchResults.map((result)=>(
              <div key={result}>{result}</div>
            )

            )}

            
        </div>
    </div>
  )
}

export default Search;
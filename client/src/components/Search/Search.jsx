import React from "react";

const Search = ({value , onChange}) => {
  return (
 <div className="search-bar">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword" value={value} onChange={onChange}/>
        <i className="bi bi-search"></i>
    </div> 
  );
};

export default Search;

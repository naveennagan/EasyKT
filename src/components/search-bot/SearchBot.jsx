import React, { useEffect, useState } from "react";
import { workflowData } from "../../data/workflowData";
import { Pill } from "./Pill";
import "./SearchBot.css";

export const SearchBot = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [suggestions, setSuggestions] = useState(null);

  useEffect(() => updateSuggestions(), [searchInput]);

  const updateSuggestions = () => {
    const results = workflowData.reduce((acc, workflow) => {
      if (workflow.name.toLowerCase().includes(searchInput.toLowerCase())) {
        acc.push(workflow.name);
      }
      return acc;
    }, []);
    setSuggestions(results);
  };

  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      onSearchClick();
    }
  };

  const onSearchClick = () => {
    setSearchTitle(searchInput);
    setSearchInput("");
  };

  const onSearchClear = () => {
    setSearchTitle("");
    setSearchInput("");
    setSearchResults([]);
  };

  return (
    <>
      <div className="search-bot row d-flex justify-content-center p-5">
        <div className="card p-2">
          <h2 className="card-title">{searchTitle}</h2>
          <div className="card-body">Search Results will be shown here</div>
        </div>
        <div className="m-5 px-5 col">
          <input
            className="input-lg search-rounded px-4"
            type="text"
            value={searchInput}
            onChange={onInputChange}
            onKeyUp={onEnterPress}
            placeholder="Search for anything..."
          />
          <i
            className="bi bi-search m-5 font-size-large"
            onClick={onSearchClick}
          ></i>
          <i className="bi bi-x-lg font-size-large" onClick={onSearchClear}></i>
        </div>
        <div className="text-bg-dark p-2">
          {suggestions?.map((suggestion, index) => (
            <Pill
              text={suggestion}
              onClick={()=>setSearchInput(suggestion)}
              key={index}
            />
          )) || <> Search suggestion will be shown here</>}
        </div>
      </div>
    </>
  );
};


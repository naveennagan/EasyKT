import React, { useState } from "react";
import "./SearchBot.css";

export const SearchBot = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

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
    <div className="search-bot row d-flex justify-content-center p-5">
      <div className="card p-2">
        <h2 class="card-title">{searchTitle}</h2>
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
        <i class="bi bi-search m-5 font-size-large" onClick={onSearchClick}></i>
        <i class="bi bi-x-lg font-size-large" onClick={onSearchClear}></i>
      </div>
      <div class="card text-bg-dark p-2">
        {" "}
        Search suggestion will be shown here
      </div>
      <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

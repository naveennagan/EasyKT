import React from "react";
import "./SearchBot.css";

export const SearchBot = () => {
  return (
    <div className="search-bot row d-flex justify-content-center p-5">
      <div className="card">
        <div className="card-body">Search Results will be shown here</div>
      </div>
      <div className="m-5 px-5 col">
        <input className="input-lg search-rounded px-4" type="text" />
        <i class="bi bi-search m-5 font-size-large"></i>
      </div>
      <div class="card text-bg-dark"> Search suggestion will be shown here</div>
    </div>
  );
};

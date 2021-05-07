import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <form className="ui form" onSubmit={onFormSubmit}>
      <div className="search-bar ui segment">
        <label>Search Video</label>
        <input type="text" value={term} onChange={onInputChange} />
      </div>
    </form>
  );
};
export default SearchBar;

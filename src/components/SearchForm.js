import React from "react";

function SearchForm(props) {
  return (
    <form>
      <img src="logo.png" alt="logo" />
      <div className=" form-group">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Safari Animal"
          id="search"
        />

        <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary mt-3"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;

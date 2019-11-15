import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className=" form-group col">
        <h1>Safari Box</h1>
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an Animal"
          id="search"
        />
        <br></br>
        <br></br>
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

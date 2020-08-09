import React, { Component } from "react";

import "./Search.scss";
class Search extends Component {
  state = {
    search: "",
  };
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    return (
      <div className="serachBar">
        <form>
          <input
            onChange={this.handleChange}
            type="search"
            name="search"
            className="searchBar__input"
            placeholder="Search"
            value={this.state.search}
          />
        </form>
      </div>
    );
  }
}

export default Search;

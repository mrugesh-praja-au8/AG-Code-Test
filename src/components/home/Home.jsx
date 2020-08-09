import React, { Component } from "react";
import "./Home.scss";
import AddRole from "./components/header/AddRole";
import Activerole from "./components/header/Activerole";
import Search from "./components/search/Search";
import UserCard from "./components/userCard/UserCard";
import UserAccess from "./components/userAccess/UserAccess";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__head">
          <Activerole />
          <AddRole />
        </div>
        <div className="search">
          <Search />
        </div>
        <div className="user_group">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
        <div className="user_table">
          <UserAccess />
        </div>
      </div>
    );
  }
}

export default Home;

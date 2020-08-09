import React, { Component } from "react";
import "./UserCard.scss";
class UserCard extends Component {
  render() {
    return (
      <div className="uc">
        <div className="uc__im">
          <div className="uc__im--h">A</div>
        </div>
        <div className="uc__t">
          <p>Admin</p>
        </div>
        <div className="uc__d">
          <p>24 access points</p>
        </div>
        <div className="uc__imgp"></div>
        <div className="uc__tgl">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="uc__tgl--inp"
          />
          <span>Active</span>
        </div>
      </div>
    );
  }
}

export default UserCard;

import React from "react";

import "../styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    const { firstName, lastName, avatar, jobTitle, twitter } = this.props;
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={confLogo} alt="logo de la conferencia" />
        </div>
        <div className="badge_section-name">
          <img className="badge_avatar" src={avatar} alt="avatar" />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </div>
        <div className="badge_section-info">
          <h3>{jobTitle}</h3>
          <span>{twitter}</span>
        </div>
        <div className="badge_footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;

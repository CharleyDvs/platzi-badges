import React from "react";

class BadgeList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => (
          <li key={badge.id}>
            <p>
              {badge.firstName} {badge.lastName}
            </p>
          </li>
        ))}
      </ul>
    );
  }
}

export default BadgeList;

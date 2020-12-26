import React from "react";

class BadgeForm extends React.Component {
  handleChange = (e) => {
    console.log({
      value: e.target.value,
      name: e.target.name,
    });
  };
  handleClick = (e) => {
    console.log("Button was clicked");
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="firstName"
                className="form-control"
              />
            </div>
            <button
              type="button"
              onClick={this.handleClick}
              className="btn btn-primary"
            >
              Save
            </button>
          </form>
        </h1>
      </div>
    );
  }
}

export default BadgeForm;

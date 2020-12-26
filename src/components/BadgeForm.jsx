import React from "react";

class BadgeForm extends React.Component {
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
                onChange={this.props.onChange}
                type="text"
                name="firstName"
                className="form-control"
                value={this.props.formValues.firstName}
              />
              <label>Last Name</label>
              <input
                onChange={this.props.onChange}
                type="text"
                name="lastName"
                className="form-control"
                value={this.props.formValues.lastName}
              />
              <label>Email</label>
              <input
                onChange={this.props.onChange}
                type="email"
                name="email"
                className="form-control"
                value={this.props.formValues.email}
              />
              <label>Job Title</label>
              <input
                onChange={this.props.onChange}
                type="text"
                name="jobTitle"
                className="form-control"
                value={this.props.formValues.jobTitle}
              />
              <label>Twitter</label>
              <input
                onChange={this.props.onChange}
                type="text"
                name="twitter"
                className="form-control"
                value={this.props.formValues.twitter}
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

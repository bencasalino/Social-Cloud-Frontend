import React from "react";

export class SearchAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "0"
    };
  }

  generateLocations = location => {
    return (
      <option key={location.id} id={location.id} value={location.id}>
        {location.Name}
      </option>
    );
  };

  render() {
    return (
      <div>
        <h2 id="api-search">Search for Location</h2>
        <form id="search-form" onSubmit={this.props.searchAPILocations}>
          <label htmlFor="APIWoeid">Find your location:</label>
          <select
            name="APIWoeid"
            id="APIWoeid"
            value={this.state.id}
            onChange={this.change}
            onClick={this.change}
            onKeyUp={this.change}
            onMouseLeave={this.change}
          >
            <option value="" disabled selected>
              Select something...
            </option>
            {this.props.woeidData.map(this.generateLocations)}
          </select>
          <input type="submit" id="search-button" value="Check Location" />
        </form>
      </div>
    );
  }
}
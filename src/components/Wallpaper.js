import React from "react";
import "../css/Home.css";

class Wallpaper extends React.Component {
  constructor() {
    super();
    this.state = {
      locationId: 0,
    };
  }

  handleChange = (event) => {
    const locationId = event.target.value;
    if (locationId !== 0) {
      sessionStorage.setItem("locationId", locationId);
    }
  };

  render() {
    const { locationsData } = this.props;
    return (
      <>
        <div className="wallpaper">
          <img src="assets/wallpaper.png" alt="wallpaper" />
        </div>
        <div class="logoContainer">
          <div class="logo">
            <p>e!</p>
          </div>
        </div>
        <div class="heading">Find the best restaurants, cafés, and bars</div>
        <div className="location">
          <div>
            <select
              className="location-dropdown-home"
              onChange={(e) => this.handleChange(e)}
            >
              <option value="0">Please choose a location</option>
              {locationsData.map((item) => {
                return (
                  <option value={item.location_id} key={item.location_id}>
                    {`${item.name}, ${item.city}`}
                  </option>
                );
              })}
            </select>
          </div>
          <div id="searchBar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input
              type="text"
              className="search"
              placeholder="Search a restaurant"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Wallpaper;

import React from "react";
import "../css/RestaurantPageDetails.css";
import RestaurantInfo from "../components/RestaurantInfo";
import RestaurantContact from "../components/RestaurantContact";

import {withRouter} from 'react-router-dom'

class RestaurantPageDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      overview: "overview-show",
      contact: "contact-hidden",
      overviewTab: "selected",
      contactTab: "unselected"
    };
  }

  handleOverviewClick() {
    if (this.state.overview !== "overview-show") {
      this.setState({
        overviewTab: "selected",
        contactTab: "unselected",
        overview: "overview-show",
        contact: "contact-hidden",
      });
    }
  }

  handleContactClick() {
    if (this.state.contact !== "contact-show") {
      this.setState({
        contactTab: "selected",
        overviewTab: "unselected",
        contact: "contact-show",
        overview: "overview-hidden",
      });
    }
  }

  

  render() {
    const { restaurant } = this.props;
    return (
      <>
        {restaurant.map((item) => {
          return (
            <>
              <div id="navBar">
                <div id="restaurant">
                  <div id="restaurantName">{item.name}</div>
                </div>
                <div id="navTab">
                  <div style={{ display: "flex", "align-items": "flex-end" }}>
                    <nav>
                      <li
                        className={`listStyle ${this.state.overviewTab}`}
                        onClick={() => this.handleOverviewClick()}
                      >
                        Overview
                      </li>
                      <li
                        className={`listStyle ${this.state.contactTab}`}
                        onClick={() => this.handleContactClick()}
                      >
                        Contact
                      </li>
                    </nav>
                  </div>
                  <div id="placeOrder">
                    <button>Place online order</button>
                  </div>
                </div>
                <hr />
              </div>
              <div className={`detailsOverview ${this.state.overview}`}>
                <RestaurantInfo cusine={item.cusine} minPrice={item.min_price}/>
              </div>
              <div className={`detailsContact ${this.state.contact}`}>
                <RestaurantContact contact={item.contact_number} name={item.name} locality={item.locality} city={item.city}/>
              </div>
            </>
          );
        })}
      </>
    );
  }
}

export default withRouter(RestaurantPageDetails);

import React from "react";
import "../css/RestaurantPageImage.css";
import { Modal, ModalBody, Carousel } from "reactstrap";

const customStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%,-50%",
  },
};

class RestaurantPageImage extends React.Component {
  constructor() {
    super();
    this.state = {
      galleryModalIsOpen: false,
    };
  }

  toggle = () => {
    let temp = this.state.galleryModalIsOpen;
    this.setState({ galleryModalIsOpen: !temp });
  };

  render() {
    let { galleryModalIsOpen } = this.state;
    let { restaurant } = this.props;
    let image = restaurant.map(item => item.thumb[0]);
    console.log(image);
    console.log(image);
    return (
      <div id="restaurantImage">
        <img src={ image ? `../${image}`: ''} alt="breakfast" />

        <div id="buttonDiv">
          <button onClick={this.toggle}>Click to See Image Gallery</button>
        </div>
      </div>
    );
  }
}

export default RestaurantPageImage;

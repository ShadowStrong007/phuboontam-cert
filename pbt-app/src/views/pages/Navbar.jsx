import React from "react";
import logo from "../../assets/images/test/Logo/pbt-logo.png"
import star from "../../assets/images/bg/star.png"

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {}

  render() {
    return (
      <div class="mt-4 nav-bar">
      <div class="nav-bar-image">
        {/* Logo Here */}
        <img
          class="nav-bar-image-logo"
          src={logo}
          alt=""
          draggable="false"
        />
      </div>
      <div class="nav-bar-wrp">
        <div class="nav-bar-item">
          <div class="nav-bar-item-image">
            <img
              class="w-100"
              src={star}
              alt=""
              draggable="false"
            />
          </div>
          <a  href="/" class="nav-bar-item-label nav-font-size"> หน้าหลัก </a>
        </div>
        <div class="nav-bar-item">
          <div class="nav-bar-item-image">
            <img
              class="w-100"
              src={star}
              alt=""
              draggable="false"
            />
          </div>
          <a href="#about-me" class="nav-bar-item-label nav-font-size"> ติดต่อเรา </a>
        </div>
      </div>
    </div>
    );
  }
}


export default Banner;

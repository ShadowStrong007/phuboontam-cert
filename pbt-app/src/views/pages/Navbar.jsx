import React from "react";
import logo from "../../assets/images/test/Logo/pbt-logo.png"

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {}

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">หน้าหลัก</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">ติดต่อเรา</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}


export default Banner;

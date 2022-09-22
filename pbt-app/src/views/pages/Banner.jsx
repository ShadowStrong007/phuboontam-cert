import React from "react";


class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {}

  render() {
    return (
      <div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.discordapp.com/attachments/836899783347798016/1021683462069043261/image-20220831-121316.png" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src="https://cdn.discordapp.com/attachments/836899783347798016/1021683462069043261/image-20220831-121316.png" class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
      </div>
    );
  }
}


export default Banner;

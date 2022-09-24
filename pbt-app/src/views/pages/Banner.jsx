import React from "react";
import CallBanner from "../../api/CallBanner";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    banner : []
    };
  }


  componentWillMount() {
    this.innitBanner();
  }

  innitBanner = () =>{ 
    CallBanner().then((results)=>{
      this.setState({banner:results.data.Banners.map((o) => { return <div className={"carousel-item banner-image " + (o.Seq === 1 ? "active" : "")}><img key={o.BannerId} src={o.Image_Url} class={"d-block w-100"} alt="..."/></div>})})
    }).catch((error) => {

    }); 
  }

  render() {
    return (
      <div className="banner">
        <div id="carouselExampleControls" class="carousel slide border rounded-1" data-bs-ride="carousel">
          <div class="carousel-inner">
            {this.state.banner}
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

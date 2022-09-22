import React from "react";
import starname from "../../assets/images/bg/start-name.png"

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {}

  render() {
    return (
      <div class="container">
        <img src={starname} alt="Pineapple" className="header-image"/>
        <p className="font-size-2rem header-text "> ชื่อพระเครื่อง</p>
        <img src={starname} alt="Pineapple" className="header-image t"/>
        <img src="https://pbtdata.blob.core.windows.net/image/20220918025549_TestDraw_S__7192645 2.jpg" class="img-fluid" alt="..."/>
      </div>
    );
  }
}


export default Product;

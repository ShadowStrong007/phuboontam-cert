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
      <div class="container bg-body">
        <img src={starname} alt="Pineapple" className="header-image"/>
        <p className="header-text "> ทดลองใส่</p>
        <img src={starname} alt="Pineapple" className="header-image"/>
        {/* <img src="https://pbtdata.blob.core.windows.net/image/20220918025549_TestDraw_S__7192645 2.jpg" class="img-fluid" alt="..."/> */}
        <img src="https://cdn.discordapp.com/attachments/836899783347798016/1021683462069043261/image-20220831-121316.png" class="img-fluid" alt="..."/>
      </div>
    );
  }
}


export default Product;

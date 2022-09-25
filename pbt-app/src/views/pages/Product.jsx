import React, { Component } from "react";
import CallProduct from "../../api/CallProduct";
import Banner from "./Banner";
import Navbar from "./Navbar";

export default class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:"",
      products:"",
      products_front:"",
      products_back:"",
      product_desc :"",
      product_descs:[]
    };
  }


  componentDidMount() {}

  componentWillMount() {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let ref = url.searchParams.get("ref");
    if(ref){
      sessionStorage.setItem('ref',ref);
      CallProduct(ref).then((results)=>{
        console.log(results.data);
        this.setState({
            products:results.data.Products.Product_Url 
          , products_back : results.data.Products.Product_Back_Url 
          , product_desc : results.data.Products.Product_Desc 
          , products_front : results.data.Products.Product_Front_Url
          , name :results.data.Products.Name_Th
        });

        this.setState({product_descs:results.data.Images.map((o) => { 
          return <div><img key={o.ImageId} src={o.Image_Url} className="img-fluid" draggable="false" alt="..."/ ><br/><br/></div> })
        });

      }).catch((error) => {
  
      }); 
    }
  }

  render() {
    return (
      <div>
    <div id="main" class="container">
        <div class="container-wrp">
          <Banner/>
          <Navbar/>
          <div class="mt-4 content">
            <div class="mt-4 content-title">
            <b>{this.state.name != "" ? this.state.name : "ไม่พบข้อมูล"}</b>
            </div>
            <div class="mt-4 content-desc">
            <img src={this.state.products_front} className="img-fluid" draggable="false" alt="..."/>
              <br/>
              <br/>
              <img src={this.state.products_back} className="img-fluid" draggable="false" alt="..."/>
              <br/>
              <br/>
              <img src={this.state.products} className="img-fluid" draggable="false" alt="..."/>
              <br/>
              <br/>
              {this.state.product_descs}
              {<div dangerouslySetInnerHTML={{ __html: this.state.product_desc  }} />}     
              <br/>      
            </div>
          </div>
          <div id="about-me" class="mt-4 about-me">
          <div class="mb-2 about-me-title"><b>ข้อมูลติดต่อ</b></div>
            <div class="about-me-desc">
            ที่อยู่ : หจก.ภูบุญเต็ม เซ็นเตอร์ ที่อยู่ 91 หมู่ที่ 4 ตำบลธาตุนาเวง อำเภอเมือง จังหวัดสกลนคร 47000 
            <br/>
            เบอร์โทร : 02-0014809 , 095-4142495
            </div>
          </div>
          <div class="mt-4 copy-right copy-right-size">
            {/* <!-- Copy right Here --> */}
            Copyright © 2022 www.phuboontam.com All rights Reserved
          </div>
        </div>
      </div>
      <div class="root-elem"></div>
      </div>
    );
  }
}

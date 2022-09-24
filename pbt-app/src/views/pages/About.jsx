import React, { Component } from "react";
import logo from "../../assets/images/test/Logo/pbt-logo.png"
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class About extends Component {
  render() {
    return (
      <div>
    <div id="main" class="container">
        <div class="container-wrp">
          <Banner/>
          <Navbar/>
          <div class="mt-4 content">
            <div class="mt-4 content-title">
            ติดต่อ ห้างหุ้นส่วนจำกัด  ภูบุญเต็ม เซ็นเตอร์
            </div>
            <div class="mt-4 content-desc">
            ที่อยู่ : หจ ก.ภูบุญเต็ม เซ็นเตอร์ ที่อยู่ 91 หมู่ที่ 4 ตำบลธาตุนาเวง อำเภอเมือง จังหวัดสกลนคร 47000 
            <br/>
            เบอร์โทร : 02-0014809 , 095-4142495
            </div>
          </div>
          <Footer/>
        </div>
      </div>
      <div class="root-elem"></div>
      </div>
    );
  }
}

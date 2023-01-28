import React, { Component } from "react";
import logo from "../../assets/images/test/Logo/pbt-logo.png"
import bannerMock from "../../assets/images/bg/banner.png"
import star from "../../assets/images/bg/star.png"
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
    <div id="main" class="container">
        <div class="container-wrp">
          <Banner/>
          <Navbar/>
          <div class="mt-4 content">
            <div class="content-logo">
              {/* <!-- Content Logo Here --> */}
              <img
                class="content-image-logo"
                src={logo}
                alt=""
                draggable="false"
              />
            </div>
            <div class="mt-4 content-title">
              ห้างหุ้นส่วนจำกัด ภูบุญเต็ม เซ็นเตอร์
            </div>
            <div class="mt-4 content-desc">
              {/* <!-- Content Detail Here --> */}
              ยินดีต้อนรับท่านเข้าสู่ หจก.ภูบุญเต็ม เซ็นเตอร์ https://pbtcenters.com/<br/>
              รับทำกรอบรูปทั้งปลีก และ ส่ง พิมพ์โลโก้ พิมพ์รูปภาพลงแก้วกาแฟ เซรามิค รับทำป้ายตัวอักษรจากแผ่นพลาสวูด <br/>รับจัดตกแต่งงานมงคลครบวงจร งานแกะสลัก ออกบัตรรับรองพระแท้ ทรัพย์อจินไตย วัตถุมงคลต่างๆ อัญมณีนาคราช
              <br/>สนใจติดต่อแผนกออกบัตรรับรอง และ ทรัพย์อจินไตย <br/>โทร.02-001-4809,02-001-6460,095-4142495
              แผนกกรอบรูป <br/>ป้ายและอื่นๆ โทร.042-751129,065-085-3142,<br/>
              สำนักงานใหญ่ตั้งอยู่ที่ ที่91 หมู่ที่ 4 ต.ธาตุนาเวง  อ.เมือง จ.สกลนคร  47000
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

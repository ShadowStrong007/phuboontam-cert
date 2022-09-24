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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32. The standard chunk of Lorem Ipsum used since the
              1500s is reproduced below for those interested. Sections 1.10.32
              and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
              also reproduced in their exact original form, accompanied by
              English versions from the 1914 translation by H. Rackham.
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

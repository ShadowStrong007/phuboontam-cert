import React from "react";


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {}

  render() {
    return (
      <div>
          <div id="about-me" class="mt-4 about-me">
            <div class="mb-2 about-me-title">ข้อมูลติดต่อ</div>
            <div class="about-me-desc">
            ที่อยู่ : หจก.ภูบุญเต็ม เซ็นเตอร์ ที่อยู่ 91 หมู่ที่ 4 ตำบลธาตุนาเวง อำเภอเมือง จังหวัดสกลนคร 47000 
            <br/>
            เบอร์โทร : 02-0014809 , 095-4142495
            </div>
          </div>
          <div class="mt-4 copy-right">
            {/* <!-- Copy right Here --> */}
            Copyright © 2022 www.phuboontam.com All rights Reserved
          </div>
      </div>
    );
  }
}


export default Footer;

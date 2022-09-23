import React from "react";


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {}

  render() {
    return (
      <div  className="border rounded-1 bg-footer">
        <div>ข้อมูลติดต่อ</div>
        <div className="font-size-08rem">ที่อยู่ : หจก.ภูบุญเต็ม เซ็นเตอร์ ที่อยู่ 91 หมู่ที่ 4 ตำบลธาตุนาเวง อำเภอเมือง จังหวัดสกลนคร 47000 </div>
        <div className="font-size-08rem">เบอร์โทร : 02-0014809 , 095-4142495</div>
      </div>
    );
  }
}


export default Footer;

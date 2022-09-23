import React, { Component } from "react";
import Banner from "../pages/Banner";
import Navbar from "../pages/Navbar";
import Footer from "./Footer";
import Product from "./Product";
import logo from "../../assets/images/test/Logo/pbt-logo.png"
import buttomright from "../../assets/images/bg/buttom-right.png"
import buttomleft from "../../assets/images/bg/buttom-left.png"
import topleft from "../../assets/images/bg/top-left.png"
import topright from "../../assets/images/bg/top-right.png"

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageIndex: 0,
    };
  }

  handlePageIndex = (index) => {
    this.setState({ pageIndex: index });
  };

  render() {
    return (
      <div
        className="template-content bg-dark font-th font-size"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="bg-main"
          style={{
            height: "100vh",
            overflow: "hidden auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className="row m-4">
            <div className="col">
              <Banner/>
            </div>
          </div>
          <div className="row m-4">
            <div className="col">
            {/* <img src={logo} alt="" width="30" height="24"/> */}
              <Navbar/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className={`m-4 ${this.state.pageIndex === 0 ? "" : "d-none"}`}>
                <Product/>
              </div>
              <div
                className={`m-4 ${this.state.pageIndex === 1 ? "" : "d-none"}`}
              >
                <h3>Deatil Page</h3>
                <div className="text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Placerat vestibulum lectus mauris ultrices eros. Auctor eu
                  augue ut lectus arcu. Amet risus nullam eget felis. Eget nunc
                  lobortis mattis aliquam faucibus purus in massa tempor. Et
                  ligula ullamcorper malesuada proin libero. Habitant morbi
                  tristique senectus et netus et. Eget nunc scelerisque viverra
                  mauris in aliquam sem fringilla ut. Egestas quis ipsum
                  suspendisse ultrices gravida dictum fusce. Viverra maecenas
                  accumsan lacus vel facilisis volutpat est. Ipsum dolor sit
                  amet consectetur adipiscing elit duis tristique. Nibh
                  venenatis cras sed felis eget velit aliquet sagittis id. Orci
                  a scelerisque purus semper. Consequat mauris nunc congue nisi
                  vitae suscipit tellus. Orci nulla pellentesque dignissim enim
                  sit. Amet facilisis magna etiam tempor orci eu lobortis
                  elementum nibh. A pellentesque sit amet porttitor eget dolor.
                  Scelerisque fermentum dui faucibus in ornare quam viverra. Id
                  velit ut tortor pretium viverra suspendisse potenti nullam.
                  Morbi tristique senectus et netus et malesuada fames ac
                  turpis. Odio aenean sed adipiscing diam donec. Morbi enim nunc
                  faucibus a. Sit amet tellus cras adipiscing enim. Id cursus
                  metus aliquam eleifend mi in nulla. Tempor nec feugiat nisl
                  pretium fusce. Sed velit dignissim sodales ut. Leo a diam
                  sollicitudin tempor id eu nisl nunc mi. Venenatis cras sed
                  felis eget velit aliquet. Nisl nunc mi ipsum faucibus vitae
                  aliquet nec ullamcorper. Justo donec enim diam vulputate ut.
                  At in tellus integer feugiat. Sit amet mattis vulputate enim.
                  Posuere lorem ipsum dolor sit amet consectetur. Congue eu
                  consequat ac felis donec. Gravida dictum fusce ut placerat.
                </div>
              </div>
              <div
                className={`m-4 ${this.state.pageIndex === 2 ? "" : "d-none"}`}
              >
                <h3>About Page</h3>
                <div className="text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Placerat vestibulum lectus mauris ultrices eros. Auctor eu
                  augue ut lectus arcu. Amet risus nullam eget felis. Eget nunc
                  lobortis mattis aliquam faucibus purus in massa tempor. Et
                  ligula ullamcorper malesuada proin libero. Habitant morbi
                  tristique senectus et netus et. Eget nunc scelerisque viverra
                  mauris in aliquam sem fringilla ut. Egestas quis ipsum
                  suspendisse ultrices gravida dictum fusce. Viverra maecenas
                  accumsan lacus vel facilisis volutpat est. Ipsum dolor sit
                  amet consectetur adipiscing elit duis tristique. Nibh
                  venenatis cras sed felis eget velit aliquet sagittis id. Orci
                  a scelerisque purus semper. Consequat mauris nunc congue nisi
                  vitae suscipit tellus. Orci nulla pellentesque dignissim enim
                  sit. Amet facilisis magna etiam tempor orci eu lobortis
                  elementum nibh. A pellentesque sit amet porttitor eget dolor.
                  Scelerisque fermentum dui faucibus in ornare quam viverra. Id
                  velit ut tortor pretium viverra suspendisse potenti nullam.
                  Morbi tristique senectus et netus et malesuada fames ac
                  turpis. Odio aenean sed adipiscing diam donec. Morbi enim nunc
                  faucibus a. Sit amet tellus cras adipiscing enim. Id cursus
                  metus aliquam eleifend mi in nulla. Tempor nec feugiat nisl
                  pretium fusce. Sed velit dignissim sodales ut. Leo a diam
                  sollicitudin tempor id eu nisl nunc mi. Venenatis cras sed
                  felis eget velit aliquet. Nisl nunc mi ipsum faucibus vitae
                  aliquet nec ullamcorper. Justo donec enim diam vulputate ut.
                  At in tellus integer feugiat. Sit amet mattis vulputate enim.
                  Posuere lorem ipsum dolor sit amet consectetur. Congue eu
                  consequat ac felis donec. Gravida dictum fusce ut placerat.
                </div>
              </div>
            </div>
          </div>
          <div className="row m-4">
            <div className="col">
              <Footer/>
            </div>
          </div>
          <div className="row m-4">
            <div className="col">
              <div className="text-secondary font-size-06rem">
              <strong>Copyright &copy; 2022</strong> www.phuboontam.com All rights reserved.
              </div>
              <img src={topleft} className="bg-main-top-left" alt=""/>
              <img src={topright} className="bg-main-top-right" alt=""/>
              <img src={buttomright} className="bg-main-buttom-right" alt=""/>
              <img src={buttomleft} className="bg-main-buttom-left" alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

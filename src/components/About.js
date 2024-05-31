import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid" style={{ textAlign: "right" }}>
                <span style={{ cursor: "auto" }}>
                  <div
                    height="250px"
                    alt="Avatar placeholder"
                  >
                    <h1>Edcuation</h1>
                  </div>
                  <div>
                    <h3>
                      Bachelor of Science, Computer Science
                    </h3>
                    <p className="font-trebuchet" style={{ fontSize: "15px" }}>
                      Universidad Anáhuac León
                    </p>
                  </div>
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <h1 style={{ color: "black" }} className="col-md-10">
                <span>{sectionName}</span>
              </h1>
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "180%",
                      lineHeight: "200%",
                    }}
                  >
                    {/* <br /> */}
                    {/* <span className="wave">{hello} :) </span> */}
                    {/* <br />
                    <br /> */}
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <div style={{ fontSize: "260%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </div>
              </div>
            </span>
          </li>
        );
      });
      var skills1 = this.props.sharedSkills.icons1.map(function (skills1, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                {/* <i className={skills.class} style={{ fontSize: "220%" }}> */}
                <div style={{ fontSize: "260%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills1.name}
                  </p>
                </div>
                {/* </i> */}
              </div>
            </span>
          </li>
        );
      });
      var skills2 = this.props.sharedSkills.icons2.map(function (skills2, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                {/* <i className={skills.class} style={{ fontSize: "220%" }}> */}
                <div style={{ fontSize: "260%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills2.name}
                  </p>
                </div>
                {/* </i> */}
              </div>
            </span>
          </li>
        );
      });
      var skills3 = this.props.sharedSkills.icons3.map(function (skills3, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                {/* <i className={skills.class} style={{ fontSize: "220%" }}> */}
                <div style={{ fontSize: "260%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills3.name}
                  </p>
                </div>
                {/* </i> */}
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <h1 style={{ color: "#ffffff", paddingTop: "20px" }}>Languages</h1>
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
          <div className="col-md-12 text-center">
            <h1 style={{ color: "#ffffff", paddingTop: "20px" }}>Platforms</h1>
            <ul className="list-inline mx-auto skill-icon">{skills1}</ul>
          </div>
          <div className="col-md-12 text-center">
            <h1 style={{ color: "#ffffff", paddingTop: "20px" }}>Libraries/APIs</h1>
            <ul className="list-inline mx-auto skill-icon">{skills2}</ul>
          </div>
          <div className="col-md-12 text-center">
            <h1 style={{ color: "#ffffff", paddingTop: "20px" }}>Storage</h1>
            <ul className="list-inline mx-auto skill-icon">{skills3}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;

import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <h1>
              Contact me
            </h1>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          {/* <div className="social-links">{networks}</div> */}
          {/* <h1 style={{ paddingTop: "30px" }}>
            Hire me
          </h1> */}

          <div className="copyright py-4 text-center">
            <div className="container">
              <h4>
                RoriFloris0325@outlook.com
              </h4>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

import React from "react";
import { Link, Redirect } from "react-router-dom";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleDemoRequest = this.handleDemoRequest.bind(this);
  }

  handleDemoRequest(e) {
    e.preventDefault();
    this.props.demologin().then(() => this.props.history.push("/channels/@me"));
  }

  render() {
    const { currentMemberId, removeErrors } = this.props;
    return (
      <div className="splash-background">
        <div className="splash-container">
          <nav className="splash-nav">
            <div className="left-splash-nav">
              <a
                href="http://github.com/al6/diskord"
                className="splash-nav-item"
                target="_blank"
              >
                Diskord on Github
              </a>
            </div>
            <div className="right-splash-nav">
              <div className="network-buttons">
                <a href="http://github.com/al6" target="_blank">
                  <img
                    className="github-button"
                    src="https://diskord-pro.s3.amazonaws.com/github-logo.png"
                    target="_blank"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/albertlee3/"
                  target="_blank"
                >
                  <img
                    className="linkedin-button"
                    src="https://diskord-pro.s3.amazonaws.com/linkedin.svg"
                  />
                </a>
                <a href="https://angel.co/albertlee" target="_blank">
                  <img
                    className="angellist-button"
                    src="https://diskord-pro.s3.amazonaws.com/angellist.png"
                  />
                </a>
              </div>
              <Link
                className="splash-nav-button"
                to={currentMemberId ? `/channels/@me` : `/login`}
                onClick={() => removeErrors()}
              >
                {currentMemberId ? "Open" : "Login"}
              </Link>
            </div>
          </nav>
          <div className="landing-hero">
            <main className="splash-main">
              <div className="splash-header">
                <div className="splash-header-main-container">
                  <span className="splash-header-main">
                    It's time to ditch Skype and TeamSpeak.
                  </span>
                </div>
                <span className="splash-header-sub">
                  All-in-one voice and text chat for gamers that's free, secure,
                  and works on both your desktop and phone. Stop paying for
                  TeamSpeak servers and hassling with Skype. Simplify your life.
                </span>
                <div className="splash-main-github-demo-buttons">
                  <Link
                    to={`/register`}
                    className="splash-main-left-button"
                    onClick={() => removeErrors()}
                  >
                    Sign Up
                  </Link>
                  <a
                    className="splash-main-right-button"
                    onClick={this.handleDemoRequest}
                  >
                    Try the Demo
                  </a>
                </div>
              </div>
            </main>
            <div className="splash-margin-container">
              <div className="splash-image-container">
                {/* left of monitor */}
                <img
                  className="flask"
                  src="https://diskord-pro.s3.amazonaws.com/spawner-potion.svg"
                />
                <img
                  className="android"
                  src="https://diskord-pro.s3.amazonaws.com/android.svg"
                />
                <img
                  className="iphone"
                  src="https://diskord-pro.s3.amazonaws.com/iphone.svg"
                />
                <img
                  className="game-controller"
                  src="https://diskord-pro.s3.amazonaws.com/game-controller.svg"
                />
                <img
                  className="bomb"
                  src="https://diskord-pro.s3.amazonaws.com/bomb.svg"
                />
                <img
                  className="coin-left"
                  src="https://diskord-pro.s3.amazonaws.com/coin.svg"
                />
                <img
                  className="monitor"
                  src="https://diskord-pro.s3.amazonaws.com/monitor.svg"
                />
                {/* right of monitor */}
                <img
                  className="coin-top-middle"
                  src="https://diskord-pro.s3.amazonaws.com/coin.svg"
                />
                <img
                  className="game-cartridge"
                  src="https://diskord-pro.s3.amazonaws.com/game-cartridge.svg"
                />
                <img
                  className="laptop"
                  src="https://diskord-pro.s3.amazonaws.com/laptop.svg"
                />
                <img
                  className="headphones"
                  src="https://diskord-pro.s3.amazonaws.com/headphones.svg"
                />
                <img
                  className="shield"
                  src="https://diskord-pro.s3.amazonaws.com/shield.svg"
                />

                {/* filled dots */}
                <img
                  className="filled-dot-left-of-android"
                  src="https://diskord-pro.s3.amazonaws.com/filled-dot.svg"
                />
                <img
                  className="filled-dot-directly-above-iphone"
                  src="https://diskord-pro.s3.amazonaws.com/filled-dot.svg"
                />
                <img
                  className="filled-dot-above-monitor-and-laptop"
                  src="https://diskord-pro.s3.amazonaws.com/filled-dot.svg"
                />
                <img
                  className="filled-dot-top-right"
                  src="https://diskord-pro.s3.amazonaws.com/filled-dot.svg"
                />
                <img
                  className="filled-dot-bottom-right"
                  src="https://diskord-pro.s3.amazonaws.com/filled-dot.svg"
                />
                {/* triangles */}
                <img
                  className="triangle-left"
                  src="https://diskord-pro.s3.amazonaws.com/triangle.svg"
                />
                <img
                  className="triangle-top-middle"
                  src="https://diskord-pro.s3.amazonaws.com/triangle.svg"
                />
                <img
                  className="question-block"
                  src="https://diskord-pro.s3.amazonaws.com/question-block.svg"
                />
                {/* X svgs */}
                <img
                  className="x-above-flask"
                  src="https://diskord-pro.s3.amazonaws.com/x.svg"
                />
                <img
                  className="triangle-hidden-behind-top-left-monitor"
                  src="https://diskord-pro.s3.amazonaws.com/triangle.svg"
                />
                <img
                  className="x-right-of-laptop"
                  src="https://diskord-pro.s3.amazonaws.com/x.svg"
                />

                {/* empty white circles */}
                <img
                  className="empty-circle-above-iphone"
                  src="https://diskord-pro.s3.amazonaws.com/circle.svg"
                />
                <img
                  className="empty-circle-behind-controller"
                  src="https://diskord-pro.s3.amazonaws.com/circle.svg"
                />
                <img
                  className="empty-circle-right-of-monitor"
                  src="https://diskord-pro.s3.amazonaws.com/circle.svg"
                />

                {/* empty white squares */}
                <img
                  className="square-behind-monitor-stand"
                  src="https://diskord-pro.s3.amazonaws.com/square.svg"
                />
                <img
                  className="square-above-laptop-upper"
                  src="https://diskord-pro.s3.amazonaws.com/square.svg"
                />
                <img
                  className="square-above-laptop-lower"
                  src="https://diskord-pro.s3.amazonaws.com/square.svg"
                />
              </div>
              <div className="images-footer-thingy"></div>
            </div>
          </div>
          <div className="footer-main">
            <footer className="splash-footer">
              <div className="left-splash-footer">
                <div className="splash-footer-header-main">
                  Ready to try Diskord? It's free!
                </div>
                <div className="splash-footer-header-sub">
                  JOIN OVER 0.250 PLAYERS TODAY
                </div>
              </div>

              <div className="right-splash-footer">
                <Link
                  className="splash-footer-button"
                  to={currentMemberId ? `/channels/@me` : `/register`}
                  onClick={() => removeErrors()}
                >
                  <div className="splash-footer-button-text">
                    {currentMemberId ? "Open" : "Register Now"}
                  </div>
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;

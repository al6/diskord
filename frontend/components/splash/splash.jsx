import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props){
    super(props)
    this.handleDemoRequest = this.handleDemoRequest.bind(this);
  }

  handleDemoRequest(e){
    e.preventDefault();
    this.props.demologin();
    //redirect to demo user channels after demologin
  }

  render(){
    const {demologin, currentMemberId} = this.props;
    return(
      <div className="splash-background">
        <div className="splash-container">
          <nav className="splash-nav"> 
            <div className="left-splash-nav">
              {/* <img className="discord-logo" src="/assets/splash/discord-logo.svg"/> */}
              <div className="splash-nav-item">Download</div>
              <div className="splash-nav-item">Nitro</div>
              <div className="splash-nav-item">Jobs</div>
              <div className="splash-nav-item">Developers</div>
              <div className="splash-nav-item">Community</div>
              <div className="splash-nav-item">Support</div>
            </div>
            <div className="right-splash-nav">
              {/* <div className="splash-nav-item">github</div> */}
              <img className="github-button" src="/assets/splash/GitHub-Mark-32px.png"/>
              <div className="splash-nav-item">linkedin</div>
              <div className="splash-nav-item">angelist</div>
              <Link className="splash-nav-button" to={ currentMemberId ? `/channels/@me` : `/login`}><div className="splash-nav-button-text">{ currentMemberId ? "Open" : "Login" }</div></Link>
            </div>
          </nav>       
          <div className="landing-hero">
            <main className="splash-main">
              <div className="splash-header">
              <div className="splash-header-main">It's time to ditch Skype and TeamSpeak.</div>
              <div className="splash-header-sub">All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone. Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</div>
            </div>
              <div className="splash-main-github-demo-buttons">
              <Link to={`/register`} className="splash-main-left-button">Sign Up</Link>
              <Link to={`/channels/@me`} className="splash-main-right-button" onClick={()=>demologin()}>Try the Demo</Link>
            </div>
            </main>
            <div className="splash-margin-container">
              <div className="splash-image-container">
                <img className="flask" src="/app/assets/images/spawner-potion.svg"/>
                <img className="android" src="/assets/splash/android.svg"/>
                <img className="bomb" src="/assets/splash/bomb.svg"/>
                <img className="monitor" src="/assets/splash/monitor.svg"/>
                <img className="coin-left" src="/assets/splash/coin.svg"/>
                <img className="iphone" src="/assets/splash/iphone.svg"/>
                <img className="game-controller" src="/assets/splash/game-controller.svg"/>
                <img className="coin-top-middle" src="/assets/splash/coin.svg"/>
                <img className="filled-dot-above-monitor-and-laptop" src="/assets/splash/"/>
                <img className="game-cartridge" src="/assets/splash/game-cartridge.svg"/>
                <img className="laptop" src="/assets/splash/laptop.svg"/>
                <img className="headphones" src="/assets/splash/headphones.svg"/>
                <img className="shield" src="/assets/splash/shield.svg"/>
                <img className="filled-dot-left-of-android" src="/assets/splash/"/>
                <img className="filled-dot-directly-above-iphone" src="/assets/splash/"/>
                <img className="filled-dot-bottom-right" src="/assets/splash/"/>
                <img className="filled-dot-top-right" src="/assets/splash/"/>
                <img className="triangle-left" src="/assets/splash/"/>
                <img className="triangle-top-middle" src="/assets/splash/"/>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-main">
          <div className="footer-links">
              <div className="splash-footer-links-container">footer-links</div>
              <div className="splash-footer-links-container">
                <div className="footer-links-category">
                  Product
                </div>
                <div>Download</div>
                <div>Branding</div>
                <div>Nitro</div>
              </div>
              <div className="splash-footer-links-container">
                <div className="footer-links-category">
                  Developers
                  </div> 
                <div>Sell Your Game</div> 
                <div>Rich Presence</div> 
                <div>Verification</div> 
                <div>Applications</div> 
                <div>Documentation</div> 
              </div>
              <div className="splash-footer-links-container">
                <div className="footer-links-category">
                  Resources
                </div>
                <div>Help & Support</div>
                <div>Guidelines</div>
                <div>Feedback</div>
                <div>Terms</div>
                <div>Privacy</div>
                <div>Status</div>
              </div>
              <div className="splash-footer-links-container">
                <div className="footer-links-category">
                  Company
                </div>
                <div>About</div>
                <div>Blog</div>
                <div>Jobs</div>
              </div>
              <div className="splash-footer-links-container">
                <div className="footer-links-category">
                  More
                </div>
                <div>Partners</div>
                <div>HypeSquad</div>
                <div>Merch Store</div>
                <div>Press Inquiries</div>
                <div>Open Source</div>
              </div>
            </div>
          <footer className="splash-footer">
            <div className="left-splash-footer">
              <div className="splash-footer-header-main">Ready to try Discord? It's free!</div>
              <div className="splash-footer-header-sub">JOIN OVER 250 MILLION PLAYERS TODAY</div>
            </div>

            <div className="right-splash-footer">
              <Link className="splash-footer-button" to={ currentMemberId ? `/channels/@me` : `/register`}><div className="splash-footer-button-text">{ currentMemberId ? "Open" : "Register" }</div></Link>
            </div>
          </footer>
        </div>
      </div>
    )
  }

}

export default Splash;
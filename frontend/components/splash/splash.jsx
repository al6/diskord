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
    //redirect to demo user channels
  }

  render(){

    return(
      <div className="splash-container">
        <nav className="splash-nav"> 
          <div className="left-splash-nav">
            <div>Discord Logo</div>
            <div>Download</div>
            <div>Nitro</div>
            <div>Jobs</div>
            <div>Developers</div>
            <div>Community</div>
            <div>Support</div>
          </div>
          <div className="right-splash-nav">
            <div>twitter</div>
            <div>facebook</div>
            <div>instagram</div>
            <div>login/open button</div>
            <div>vertical bar</div>
            <div>language change button</div>
          </div>
        </nav>       
        <main className="splash-main">
          <div className="splash-header">
            <div>It's time to ditch Skype and TeamSpeak.</div>
            <div>All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone. Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</div>
          </div>
          <div className="splash-main-github-demo-buttons">
            <button>Public Github</button>
            <button>Try the Demo</button>
          </div>
        </main>
        <div className="footer-links">
          <div className="splash-footer-links-container">footer-links</div>
          <div className="splash-footer-links-container">
            <div>Product</div>
            <div>Download</div>
            <div>Branding</div>
            <div>Nitro</div>
          </div>
          <div className="splash-footer-links-container">
            <div>Developers</div> 
            <div>Sell Your Game</div> 
            <div>Rich Presence</div> 
            <div>Verification</div> 
            <div>Applications</div> 
            <div>Documentation</div> 
          </div>
          <div className="splash-footer-links-container">
            <div>Resources</div>
            <div>Help & Support</div>
            <div>Guidelines</div>
            <div>Feedback</div>
            <div>Terms</div>
            <div>Privacy</div>
            <div>Status</div>
          </div>
          <div className="splash-footer-links-container">
            <div>Company</div>
            <div>About</div>
            <div>Blog</div>
            <div>Jobs</div>
          </div>
          <div className="splash-footer-links-container">
            <div>More</div>
            <div>Partners</div>
            <div>HypeSquad</div>
            <div>Merch Store</div>
            <div>Press Inquiries</div>
            <div>Open Source</div>
          </div>
        </div>
        <footer className="splash-footer">
          <div className="left-splash-footer">
            <div>Ready to try Discord? It's free!</div>
            <div>JOIN OVER 250 MILLION PLAYERS TODAY</div>
          </div>

          <div className="right-splash-footer">
            <button>Sign Up Now</button>
          </div>
        </footer>
      </div>
    )
  }

}

export default Splash;
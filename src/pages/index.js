import * as React from "react"
import { Helmet } from "react-helmet"
import { useState } from "react"

//import components
import Popup from '../components/popup'
import Logo from '../components/logo'
import Countdown from '../components/Countdown'
import '../styles/styles.scss'

const IndexPage = () => {
  const [buttonPopup, setButtonPopup] = useState(true);
    
  return (
    <div className="page__wrapper">
      <Logo />
      <div className="page__content">
        <Helmet>
            <title>hicathon</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Helmet>
        <div className="info__wrapper">
          <h1 className="opening__title">The very first <u>hicathon</u>.</h1>
          <h2 classname="opening__sub__title">📆 May 22<sup>nd</sup> - May 23<sup>rd</sup></h2>
          <Countdown />
          <a href="https://docs.google.com/spreadsheets/d/1zAD_4pHzygU204crpJWVyVoV27lSSW207ZZIaa8kcng/edit#gid=1267499412">🤝 Join the hicathon!</a>
          <a href="https://discord.gg/efHzUbPwsF">💬 Chat with us on discord!</a>
          <a href="https://miro.com/app/board/o9J_lELpu8c=/">👀 Check the work in progress!</a>
        </div>
        <div className="about__para">
            <h3>About</h3>
            <p>What is a hicathon? Simple! It's a hackathon centered around the development of <a href="https://hicetnunc.xyz">hicetnunc!</a> Now that that is clear, what's supposed to happen at the event? Volunteers from around the web have come together to talk about and work on development of the platform; Since the dev's are all volunteers, it's hard to get a lot of stuff done around here... that's where the community of volunteers come in! With the small group of devs, the platform was struggling to tackle all the bugs and features that the community wanted, and with the hackathon, much more can be accomplished with the combined efforts of the community members. From artists to collectors alike, everyone has something to contribute whether it's intellectual or insigtful. <u>Every</u>. <u>Single</u>. <u>Person</u>. Getting all the help that's possible is a big feat in of itself, and with a rather large community a lot can be done during the time frame of the hackathon. During the event, participants will work on accelerating the development of H=N by working <u>alongside</u> the devs & governance.</p><br></br>

            <p>Ok. Good talk, now onto the good stuff. Since we're all a community It's great to see what everyone can do working together. Currently there are a few planning boards and timelines available - <i>made by the community (such as this website).</i> Everyone is able to view, edit, and contribute towards them, adding insight, and new ideas to the several boards and spreadsheets. With all these amazing tools, we're better able to organize not only the event, but everyone that's contributing towards it! The hackathon is set for May 22-23 and we can't wait to see everyone working towards a better H=N.</p><br></br>
            <a href="/guidelines" className="button">View our Brand Guidelines Page</a>
            <a href="/code-of-conduct" className="button">View our Code of Conduct Page</a>
        </div>    
      </div>
      <footer className="footer">
          <div className="page__footer__message">
          Made with ❤️ by <a href="https://twitter.com/homeworkpunks">@homeworkpunks</a>, powered by <a href="https://netlify.com">Netlify.</a>
          </div>
      </footer>
      <div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div>Before we continue:</div><hr></hr>
          <div className="items">
            <div>✅ Already registered as a participant?<a href="https://discord.gg/efHzUbPwsF">Chat! (Click)</a></div>
            <div>📺 Want to watch the event? <a href="https://twitter.com/verticalcrypto">Go to Twitter! (Click)</a></div>
            <div>🗳️ Voting for WGs is open! <a href="https://hicathon.changecrab.com/">Vote now! (Click)</a></div>
            <div></div>
          </div>
          
        </Popup>
    </div>
    </div>
  );
}

export default IndexPage

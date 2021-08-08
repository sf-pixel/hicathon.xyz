import * as React from "react"
import { Helmet } from "react-helmet"
import { useState } from "react"
import { Link } from "gatsby"

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
          <h2 classname="opening__sub__title"><span role="img" aria-label="calendar emoji">📆</span> May 22<sup>nd</sup> - May 23<sup>rd</sup></h2>
          <div className="info__buttons">
            <Link href="/recount"><span role="img" aria-label="running person emoji">🏃‍♂️</span> Catch up!</Link>
            <a href="https://docs.hicathon.xyz"><span role="img" aria-label="paper emoji">📄</span> Read our documentation!</a>
          </div>
        </div>
        <div className="about__para">
            <h3>About</h3>
            <p>What is a hicathon? Simple! It's a hackathon centered around the development of <a href="https://hicetnunc.xyz">hicetnunc!</a> Now that that is clear, what's supposed to happen at the event? Volunteers from around the web have come together to talk about and work on development of the platform; Since the dev's are all volunteers, it's hard to get a lot of stuff done around here... that's where the community of volunteers come in! With the small group of devs, the platform was struggling to tackle all the bugs and features that the community wanted, and with the hackathon, much more can be accomplished with the combined efforts of the community members. From artists to collectors alike, everyone has something to contribute whether it's intellectual or insigtful. <u>Every</u>. <u>Single</u>. <u>Person</u>. Getting all the help that's possible is a big feat in of itself, and with a rather large community a lot can be done during the time frame of the hackathon. During the event, participants will work on accelerating the development of H=N by working <u>alongside</u> the devs & governance.</p><br></br>

            <p>Ok. Good talk, now onto the good stuff. Since we're all a community It's great to see what everyone can do working together. Currently there are a few planning boards and timelines available - <i>made by the community (such as this website).</i> Everyone is able to view, edit, and contribute towards them, adding insight, and new ideas to the several boards and spreadsheets. With all these amazing tools, we're better able to organize not only the event, but everyone that's contributing towards it! The hackathon is set for May 22-23 and we can't wait to see everyone working towards a better H=N.</p><br></br>
            <Link to="/guidelines" className="button"><span role="img" aria-label="triangular ruler emoji">📐</span> View our Brand Guidelines</Link>
            <Link to="/code-of-conduct" className="button"><span role="img" aria-label="old scroll emoji">📜</span> View our Code of Conduct</Link>
            <Link to="/press" className="button"><span role="img" aria-label="newspaper emoji">📰</span> View our Press Release</Link>
            <Link to="/schedule" className="button"><span role="img" aria-label="calendar emoji">📆</span> View our Schedule</Link>
            <Link to="/map" className="button"><span role="img" aria-label="hugging emoji">🤗</span> View our Volunteers</Link>
        </div>    
      </div>
      <footer className="footer">
          <div className="page__footer__message">
          Made with <span role="img" aria-label="red heart emoji">❤️</span> by <a href="https://twitter.com/homeworkpunks">@homeworkpunks</a>, powered by <a href="https://netlify.com">Netlify.</a>
          </div>
      </footer>
      <div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div>Before We Continue:</div><hr></hr>
          <div className="items">
            <div>Community voting has begun! <a href="https://community.hicetnunc.xyz/c/hicathon/5">Discuss with the community</a>, and <a href="https://hicvote.vercel.app/">vote!</a></div>
            <div><span role="img" aria-label="paper emoji">📄</span> Take a look at our <a href="https://docs.hicathon.xyz">documentation!</a></div>
            <hr />
            <div>Final livestream: Sept. 18<sup>th</sup></div>
          </div>
        </Popup>
    </div>
    </div>
  );
}

export default IndexPage

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

//import components
import Countdown from '../components/Countdown'
import '../styles/styles.scss'

const IndexPage = () => (
  <div className="page__wrapper">
    <div className="page__content">
      <Helmet>
          <title>hicathon</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Helmet>
      <div className="info__wrapper">
        <h1>The very first <u>hic-athon</u>.</h1>
        <h2>📆 May 22<sup>nd</sup> - May 23<sup>rd</sup></h2>
        <Countdown /><hr></hr>
      </div>
      
      <div className="about__para">
          <h3>About</h3>
          <p>What is a hicathon? Simple! It's a hackathon centered around the development of <a href="https://hicetnunc.xyz">hicetnunc!</a> Now that that's cleared up, what's supposed to happen at the event? Volunteers from around the web have come together to talk about and work on development of the platform; Since the dev's are all volunteers, it's hard to get a lot of stuff done around here... that's where the community of volunteers come in! With the small group of devs, the platform was struggling to tackle all the bugs and features that the community wanted, and with the hackathon, much more can be accomplished with the combined efforts of the community members. From artists to collectors alike, everyone has something to contribute whether it's intellectual or insigtful. <u>Every</u>. <u>Single</u>. <u>Person</u>. Getting all the help that's possible is a big feat in of itself, and with a rather large community a lot can be done during the time frame of the hackathon.</p><br></br>

          <p>Ok. Good talk, now onto the good stuff. Since we're all a community It's great to see what everyone can do working together. Currently there are a few planning boards and timelines available - <i>made by the community (such as this website)</i> everyone is able to view, edit, and contribute towards them, adding insight, and new ideas to the several boards and spreadsheets. With all these amazing tools, we're better able to organize not only the event, but everyone that's contributing towards it! The hackathon is set for May 22-23 and we can't wait to see everyone working towards a better H=N. If you're interested in contributing, keep scrolling...</p>
      </div>
      <div className="help__para">
          <p>
              You're interested? Great! Everyone is welcome to volunteer, <u>click the button</u> below to
          </p>
          <a href="/tree">🤝 Join the hicathon!</a>
          <a href="https://discord.gg/efHzUbPwsF">💬 Chat with us on discord</a>
      </div>     
    </div>
    <footer className="footer">
        <div className="page__footer__message">
        Made with 💖 by <a href="https://twitter.com/homeworkpunks">@homeworkpunks</a>, powered by <a href="https://pages.github.com">Github Pages.</a>
        </div>
    </footer>
  </div>
)

export default IndexPage

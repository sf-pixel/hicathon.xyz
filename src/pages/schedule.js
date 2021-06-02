import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//import components
import Logo from '../components/logo'
import '../styles/schedule.scss'
import '../styles/styles.scss'

const Press = () => (
    <div className="page__wrapper">
      <Logo />
      <div className="page__content">
        <Helmet>
            <title>hicathon | schedule</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Helmet>
        <div className="info__wrapper">
          <h1>🎙 Dates & Times</h1>
          <h3 className="sub__text">Hicathon | May 2021</h3>
          <div className="buttons">
            <Link to="/">🏠 Home</Link>
            <Link to="/guidelines">Brand Guidelines</Link>
            <Link to="/press">Press Release</Link>
            <Link to="/code-of-conduct">Code of Conduct</Link>
            
          </div>
        </div>
        
        <div>
            <h3>Take a look at all our kick-off streams, keynotes & guest speakers!</h3><br></br>
            <hr></hr><br></br>
            <div>🔴 Kick-off Streams</div>
            <div>May 22<sup>nd</sup> | 2PM CEST | 9AM BRT</div>
            <br></br>
            <div>📨 Catch-up & Feedback Streams</div>
            <div>May 22<sup>nd</sup> | 8PM CEST | 3PM BRT</div>
            <div>May 23<sup>rd</sup> | 2PM CEST | 9AM BRT</div>
            <br></br>
            <div>🔴 Closing Stream</div>
            <div>May 23<sup>rd</sup> | 8PM CEST | 3PM BRT</div>
            <br></br>
            <div>🔴 Post Hicathon Stream #1</div>
            <div>June 6<sup>th</sup> | 2PM CEST | 9AM BRT</div>
            <br></br><hr></hr><br></br>
            <div>💬 Keynote by <a href="https://twitter.com/mjdklein">Michael Klein</a> from TQ Tezos. Talk about Homebase / Basedao in the <a href="https://discord.gg/eQJ2TCMnx8">#hicathon-stage discord channel</a></div>
            <div>May 22<sup>nd</sup> | 3:30PM CEST | 10:30AM BRT</div>
            <br></br>
            <div>💬 Presentation by By Bernadine Bröcker, Founder, Vastari - "Does a DAO need a legal entity? Analysing the unanswered questions about law and blockchain". Presentation will be hosted in the <a href="https://discord.gg/C7PTzSWEaX">#hicathon-living-room discord channel</a></div>
            <div>May 22<sup>nd</sup> | 3:30PM CEST | 10:30AM BRT</div>
            <br></br><hr></hr><br></br>
        </div>   
      </div>
      <footer className="footer">
          <div className="page__footer__message">
            Made with ❤️ by <a href='https://twitter.com/homeworkpunks'>@homeworkpunks</a>, powered by <a href="https://netlify.com">Netlify.</a>
          </div>
      </footer>
    </div>
)
  
export default Press
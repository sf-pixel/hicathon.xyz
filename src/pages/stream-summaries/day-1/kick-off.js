import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

//import components
import Logo from '../../../components/logo'
import '../../../styles/pages/streams.scss'
import '../../../styles/styles.scss'

const KickOff1 = () => (
    <div className="page__wrapper">
      <Logo />
      <div className="page__content">
        <Helmet>
            <title>hicathon | stream summaries</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Helmet>
        <div className="info__wrapper">
          <h1><span role="img" aria-label="document emoji">📄</span> Day 1 | Kick-Off Summary</h1>
          <h3 className="sub__text">May 22, 2021</h3>
          <div className="info__buttons">
            <Link to="/"><span role="img" aria-label="house emoji">🏠</span> Home</Link>
            <Link to="/stream-summaries/day-1/catch-up"><span role="img" aria-label="document emoji">📄</span> Day 1 Catch-Up Summary</Link>
            <Link to="/stream-summaries/day-2/kick-off"><span role="img" aria-label="document emoji">📄</span> Day 2 Kick-Off Summary</Link>
            <Link to="/stream-summaries/day-2/catch-up"><span role="img" aria-label="document emoji">📄</span> Day 2 Catch-Up Summary</Link>
            <Link to="/stream-summaries/day-2/post-hicathon/summary"><span role="img" aria-label="document emoji">📄</span> Post-Hicathon Summary</Link>
          </div>
        </div>
        
        <div>
            <h3>Summary of <a href="https://www.youtube.com/watch?v=UvynsPkCzUM">Hicathon #1 - Day 1 Live Stream</a> by <a href='https://twitter.com/itsaherring'>@itsaherring</a></h3>
            <br></br>
            <hr></hr><br></br>
            <div>
              <p>Welcome to the first hicathon, a hackathon by the hic et nunc community to improve the platform, add functionality, develop the community, and discuss broader questions about its governance and future.</p>
              <p>Since hic et nunc is a simple platform at its core, and open source, the possibilities for developing features abound.  Community members should support each other technically and creatively as they develop these projects and work through this important learning process together.  As hic et nunc self organizes and develops itself, with documentation along the way, it can provide an alternate path for other organizations to do the same.</p><br></br>
              <div>
                <div><strong>Advice for Hackathon Participants</strong></div>
                <ul>
                  <li>KISS, Keep it Stupid Simple.</li>
                  <li>Organize yourselves with small agile methods</li>
                  <li>Have a team leader to check in with members</li>
                  <li>Trust your team members in their roles</li>
                  <li>Sleeping is not cheating</li>
                  <li>Merge works frequently</li>
                  <li>Finish everything early</li>
                  <li>Stay in your working group Discord channel</li>
                  <li>Have fun!</li>
                </ul>
              </div>
            </div>
            <br></br>
            <div>
              <div><strong>Bounties for Contributors</strong></div>
              <p>As hic et nunc is an open source platform, everyone is welcome to contribute to its development. Site founder Rafael Lima effectively holds the keys to change the site, but there is no one leader or company behind it.  Making decisions in this decentralized way can be difficult, so developments happen when somebody takes initiative to develop an idea and others in the community pick it up. By way of the hicathon, the community has the opportunity to come together and get some things done in a more rapid manner.</p>
              <p>To reward participants for their efforts in the hicathon bounties have been set up as follows:</p>
              <ul>
                <li>1 tez for participants who sign on to a working group and register their wallet address</li>
                <li>2 tez for participants of groups who document a roadmap of their idea</li>
                <li>10 tez for participants of groups who develop a demo and present to the community</li>
                <li>An additional reward from the wallet surplus for participants who produce functional developments</li>
              </ul>
              <p>Opportunities for participants outside of the working groups abound as well. Bounties have been developed for supporting volunteers like helpers and mentors who help keep the hicathon coordinated on the ground level.</p>
              <p>Challenges have been developed with rewards for the winners. One is a meme challenge whereby participants create a meme for the event and post it to social media, the one with the greatest likes and retweets will win a prize. Thematic minting challenges will also take place and participants can have their gas fees reimbursed for these by using the appropriate tags.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Hicathon Donations</strong></div>
              <p>To fund these bounties and develop the site a hicathon wallet has been set up. Within this wallet are generous donations from sponsors and community members who want to support hic et nunc and its development.</p>
              <p>Additional funds are being raised in a bottom up manner through the sales of art donations.  Over 600 artworks have been donated by artists and were swapped for sale on the first day of the hicathon. The second day of the hicathon will see art donations from hand picked collectors within the community.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Related Links</strong></div>
              <ul>
                <li><a href="https://verticalcrypto.art/live-w-hic-et-nunc-and-friends">May 1st live talk with VerticalCrypto on developing hic et nunc governance with hDAO</a></li>
                <li><a href="https://verticalcrypto.art/live-w-hic-et-nunc-and-friends-2">May 8th live talk with VerticalCrypto on the community oriented development of hic et nunc</a></li>
                <li><a href="https://twitter.com/quasimondo/status/1392769758743912451">Mario Klingemann’s May 13th tweet which became the genesis of the hicathon</a></li>
                <li><a href="https://docs.google.com/spreadsheets/d/1G_JU8txi_WNI5u8R_uIAvUaZirIyMo7siH5F0RElzy0/edit#gid=103759642">Hicathon OBJKT donation spreadsheet</a></li>
                <li><a href="https://www.hicetnunc.xyz/tz/tz1ecr3NoPwvbJQSQXFJrk1cYGcDsJmmKEG5/collection">The hicathon collection of donated works</a></li>
                <li><a href="https://tzkt.io/tz1ecr3NoPwvbJQSQXFJrk1cYGcDsJmmKEG5/operations/">The hicathon wallet on TzKT</a></li>
                <li><a href="https://docs.google.com/document/d/1q6d3E5-YgWWp-V0fKf_gn02zwWeRaL-e8rnFPSM4Sew/edit">Guidelines for hicathon Helpers and Mentors</a></li>
              </ul>
            </div>
            <br></br>
            <div>
              <div><strong>Livestream Timestamps</strong></div>
              <ul>
                <li><a href="https://www.youtube.com/watch?v=UvynsPkCzUM&t=636s">[0:10:36] Stream Begins</a></li>
                <li><a href="https://www.youtube.com/watch?v=UvynsPkCzUM&t=705s">[0:11:45] Micol (@verticalcrypto) - Opening Remarks</a></li>
                <li><a href="https://www.youtube.com/watch?v=UvynsPkCzUM&t=783s">[0:13:03] Raphael Lima (@crzypatchwork) - Opening Remarks</a></li>
                <li><a href="https://www.youtube.com/watch?v=UvynsPkCzUM&t=1185s">[0:19:45] John Karp (@johnkarp) - Advice for Hackathon Participants</a></li>
                <li><a href="https://www.youtube.com/watch?v=UvynsPkCzUM&t=1737s">[0:28:57] Mario Klingemann (@quasimondo) - Bounties for Contributors</a></li>
                <li><a href="https://www.youtube.com/watch?v=UvynsPkCzUM&t=2278s">[0:37:58] James Paterson (@presstube) - Art Donations</a></li>
                <li><a href="https://www.youtube.com/watch?v=UvynsPkCzUM&t=2486s">[0:41:26] Micol (@verticalcrypto) - Working Groups Kick Off</a></li>
                <li><a href="https://www.youtube.com/watch?v=UvynsPkCzUM&t=2822s">[0:47:02] Brief Q&A and Stream End</a></li>

              </ul>
            </div>
            <br></br><br></br>
        </div>
      </div>
      <footer className="footer">
          <div className="page__footer__message">
            Document made with <span role="img" aria-label="red heart emoji">❤️</span> by <a href='https://twitter.com/itsaherring'>@itsaherring</a>, powered by <a href="https://netlify.com">Netlify.</a>
          </div>
      </footer>
    </div>
)
  
export default KickOff1
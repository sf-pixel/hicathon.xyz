import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

//import components
import Logo from '../../../components/logo'
import '../../../styles/pages/streams.scss'
import '../../../styles/styles.scss'

const Press = () => (
    <div className="page__wrapper">
      <Logo />
      <div className="page__content">
        <Helmet>
            <title>hicathon | stream summaries</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Helmet>
        <div className="info__wrapper">
          <h1><span role="img" aria-label="document emoji">📄</span> Day 1 | Catch-Up Summary</h1>
          <h3 className="sub__text">May 22, 2021</h3>
          <div className="info__buttons">
            <Link to="/"><span role="img" aria-label="house emoji">🏠</span> Home</Link>
            <Link to="/stream-summaries/day-1/kick-off"><span role="img" aria-label="document emoji">📄</span> Day 1 Kick-Off Summary</Link>
            <Link to="/stream-summaries/day-2/kick-off"><span role="img" aria-label="document emoji">📄</span> Day 2 Kick-Off Summary</Link>
            <Link to="/stream-summaries/day-2/catch-up"><span role="img" aria-label="document emoji">📄</span> Day 2 Catch-Up Summary</Link>
            <Link to="/stream-summaries/post-hicathon/summary"><span role="img" aria-label="document emoji">📄</span> Post-Hicathon Summary</Link>
          </div>
        </div>
        
        <div>
            <h3>Summary of <a href="https://www.youtube.com/watch?v=sMD-m9BLYks">Hicathon #1 - Catch-Up & Feedback Stream</a> by <a href='https://twitter.com/itsaherring'>@itsaherring</a></h3>
            <br></br>
            <hr></hr><br></br>
            <div>
              <p>The first four hours of the hicathon yielded stunning results.  In this catch up session working groups gave short presentations on their ideas and progress, sharing with the community and inviting feedback. Some groups called for additional members, noting any relevant expertise needed, to help realize their goal.  Several groups remained empty, but open for newcomers with the initiative to develop them.</p>
              <p>Hicathon updates and announcements were also made, including a 20,000 tez donation from the Tezos Foundation and the announcement of a talk by Arthur Breitman, an early architect of the Tezos Protocole.</p><br></br>
            </div>
            <br></br>
            <div>
              <div><strong>Improvements to the UI/UX and Organization of Artworks</strong></div>
              <p>Several of the working groups have focused on making improvements to hic et nunc’s interface and the broader user experience.  Since its launch in March, the site’s barebones punk aesthetic has been a subject of much discussion.  Many people criticise it as cryptic and lacking in expected features.  Others praise the site’s mysterious qualities and appreciate how its unapologetic simplicity creates an experience vastly different from other NFT platforms, social media, and most of the modern web.</p>
              <p>Through the hicathon these groups identified key opportunities to add clarity and functionality whilst respecting the site’s existing aesthetic and ethos.  Groups 1.1 and 9.4 proposed minor changes to the menus, word choices, and visual structure of the site.  Changes to profile pages were also proposed:</p>
              <ul>
                <li>An option for users to change the sorting order of OBJKTs</li>
                <li>Allow for display of user created categories</li>
                <li>Addition of social media features</li>
                <li>Denote whether an OBJKT is on the primary or secondary market</li>
                <li>Show price and editions</li>
                <li>Allow OBJKT details to be toggled on or off when browsing</li>
              </ul>
              <p>Groups 7.1 and 7.2 tackled the idea of galleries, a limited feature that has been prototyped on the site under the public “galleries” page but not yet offered to all users.  Proposals for several use cases were developed by Group 7.1.  Public curated galleries would function similarly to the current implementation, but be made easier to administer and potentially capped at a number of ten, with new galleries replacing the old to keep the experience fresh.  Galleries on a user’s profile could support organization for creations and collections, including the intermixing of the two and be administered by the user through a new “galleries” tab.</p>
              <p>Group 7.2 created an alternate solution for galleries and museums outside of hic et nunc.  It would function as a tool to generate a minimally styled gallery from a list of selected works.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Extending Core Functionality</strong></div>
              <p>Beyond the implementation of galleries, there has been a strong desire in the community to extend the core functionality of the site in other ways.  Three of the most popular requests, auctions, the splitting of sales, and unlockable content for OBJKTs, were taken up by working groups 3.5, 3.2, and 2.1, respectively.  Solutions for auctions and the splitting of sales included UI mockups and functional prototypes.</p>
              <p>The prototype for the splitting of sales allows users to mint from a special collaborative wallet ID and specify what percentage of the sales each user should receive.  Future development goals for this feature include considering how this can be of use to curators, support more users, allow everybody who is a part of the collaboration to mint, a signing system for collaborators to sign the terms before creating the contract, and even allowing the contract to be changed in the future should the need arise.</p>
              <p>Implementing auctions has a longer road ahead.  Their prototype tool is an experimental NFT and does not operate on-chain, it is an unsecure solution.  The code for this temporary solution will be made open source and could possibly contribute to the final implementation.  Ultimately though, auctions need to be implemented through smart contracts on the blockchain to ensure the bid money is secured and that an auction can operate with trust.  The mechanisms to achieve this are complex and group 3.5 put out a call for a developer with smart contract expertise to join their team.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Beyond the Platform</strong></div>
              <p>Two groups looked to develop hic et nunc functionality beyond the core platform.  Group 6.1, still in the early phases of their large project, examined how a metaverse for hic et nunc might function. They envision a unique space, highly accessible and with an even playing field that deemphasizes resources, constituted by a lobby-like launchpad with connections to users’ unique customizable “planets”.  In implementing these ideas the team seeks to embrace hic et nunc’s underground style and mystery while also enabling various forms of self expression. They hope to create an alternate way for members of the community to engage with the site and each other.</p>
              <p>Group 10.2 seeks to enrich the community in a different way by supporting the robust ecosystem of user developed external tools, which has sprung up as an answer to hic et nunc’s minimal functionality.  They identified key pillars to grow and support such a community and have set upon building them.  Among these are guidelines, tutorials, and open code resources.   As a way of encouraging others in the community to develop their own external apps, the group demonstrated a new open indexer tool which generates javascript code so users can easily incorporate the tool’s results into their own websites.  The group hopes that their developments can also be of use to hic et nunc’s core developer team.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Governance and the Community</strong></div>
              <p>As hic et nunc has grown so too have the questions around what a decentralized and sustainable governance for the site might look like.  Related to this is how users can trust each other and manage abuses.  Group 5.3 took on the copyminting problem by proposing that newly minted artworks be downscaled and automatically compared against a database of commonly targeted works.  Group 8.2 examined the issues around user verification, which is typically used as a measure of trust amongst community members and as a way to avoid falling prey to copyminters.  They proposed a manual verification option and an autonomous verification option using Twitter.  Additionally, they developed an idea for verification badges on profiles which could denote a user’s role and “rank”, a measure which would increase as a user interacted with the site.</p>
              <p>The broader question for how hic et nunc’s governance could function was taken up by group 5.4.  They proposed a series of collaborative DAOs:</p>
              <ul>
                <li>A governance DAO to create and vote on proposals, made up of hDAO holders</li>
                <li>A treasury DAO to develop appropriations budgets and administer funds, made up of people with large holdings of hDAO</li>
                <li>A technology DAO to guide development, made up of the founders and people who have contributed to the site thus far</li>
                <li>A body of elected representatives to help develop a vision for the platform and manage relationships, made up of artists, collectors, and developers elected by the community</li>
              </ul>
              <p>This is a deep and complicated subject that will undoubtedly evolve with the site but the ideas and plans for governance from this first hicathon are a major first step towards implementing actual decentralized governance for hic et nunc.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Livestream Timestamps</strong></div>
              <ul>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=886">[0:14:46] Stream Begins</a></li>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=999">[0:16:39] Micol (@verticalcrypto) - Opening Remarks</a></li>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=1185">[0:19:45] Diane Drubay (@DianeDrubay) - Opening Remarks</a></li>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=1410">[0:23:30] Group 1.1 - Categories and Sorting with @hoogerwoord</a></li>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=1930">[0:32:10] Group 2.1 - OBJKT Enhancement with @Hampelman6</a></li>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=2107">[0:35:07] Group 3.5 - Auctions with @JoanieLemercier and @ximecediazArt</a></li>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=3035">[0:50:35] Group 6.1 - Metaverse and Beyond with @__oxx___xoxoxox</a></li>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=4038">[1:07:18] Group 3.2 - Splitting Sales, Collaboration Made Easy with @Shamanovitch</a></li>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=5087">[1:24:47] Group 10.2 - How to Make Tools for hic et nunc with @pamicel and @marchingsquare</a></li>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=5848">[1:37:28] Group 7.1 - Make Galleries and Collection Available to Everyone with @TrasmanoArt</a></li>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=6810">[1:53:30] Group 7.2 - Minimal Galleries for Exhibitions with @andreasrau_eu</a></li>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=7045">[1:57:25] Group 8.2 - Verified Users with @jetlagNFT and @tagachistudio</a></li>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=7620">[2:07:00] Group 9.4 - Clear up UX with @sableraph</a></li>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=7977">[2:12:57] Group 5.4 - How to Make Decisions in a Decentralized World with @jamespowderly and @mitchmurray</a></li>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=8466">[2:21:06] Group 5.3 - By the Community for the Community with @HdaoMaxi</a></li>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=8549">[2:22:29] James Paterson (@presstube) - Update on Art Donations and Fundraising</a></li>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=8679">[2:24:39] John Karp (@johnkarp) - Update on hicathon Bounties</a></li>
                <li><a href="https://youtu.be/sMD-m9BLYks&t=8937">[2:28:57] Micol (@verticalcrypto) - Closing Remarks and Stream End</a></li>
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
  
export default Press
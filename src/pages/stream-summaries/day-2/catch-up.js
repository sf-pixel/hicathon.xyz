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
          <h1><span role="img" aria-label="document emoji">📄</span> Day 2 | Catch-Up Summary</h1>
          <h3 className="sub__text">May 23, 2021</h3>
          <div className="info__buttons">
            <Link to="/"><span role="img" aria-label="house emoji">🏠</span> Home</Link>
            <Link to="/stream-summaries/day-1/kick-off"><span role="img" aria-label="document emoji">📄</span> Day 1 Kick-Off Summary</Link>
            <Link to="/stream-summaries/day-2/catch-up"><span role="img" aria-label="document emoji">📄</span> Day 1 Catch-Up Summary</Link>
            <Link to="/stream-summaries/day-2/kick-off"><span role="img" aria-label="document emoji">📄</span> Day 2 Kick-Off Summary</Link>
            <Link to="/stream-summaries/post-hicathon/summary"><span role="img" aria-label="document emoji">📄</span> Post-Hicathon Summary</Link>
          </div>
        </div>
        
        <div>
            <h3>Summary of <a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA">Hicathon #1 - Day 2 Catch-Up & Feedback Stream</a> by <a href='https://twitter.com/itsaherring'>@itsaherring</a></h3>
            <br></br>
            <hr></hr><br></br>
            <div>
              <p>With this livestream hic et nunc’s first ever hicathon, a community run hackathon for the open source NFT platform, officially came to a close.  It was an incredibly productive weekend with around 120 active participants tackling a myriad of topics from the technical to the informational, and even the conceptual.  Supporting the event were various coordinators and helpers, donated art and gifts of tezos for reward bounties, and even social media challenges and games.</p>
              <p>The close out the event working groups presented their results, progress, and even some functional demos before receiving feedback from a panel of mentors.  Though the hicathon is over many of the working groups are continuing to develop their projects.</p><br></br>
            </div>
            <br></br>
            <div>
              <div><strong>Group 1.1 - Categories and Sorting</strong></div>
              <p>This group proposed implementing sub-tabs for a profile’s creations to allow viewers to filter the OBJKTs by all works, those available, and those still on the primary market.  They also implemented sorting for works so they could be viewed by newest, oldest, and random.  Their implementation is a functional demo made from a fork of the hic et nunc repository.  Additional  sorting features were considered but the group was hesitant to change the character of browsing NFTs on hicetnunc.  In their group document they describe the tradeoffs between focusing on art versus trading and suggest using third party tools for further functionality.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Group 3.5 - Auctions</strong></div>
              <p>This group created a proposed UX for auctions, accessed by a new tab on the OBJKT page.  Here the owner could create a new auction, set a reserve price, auction length, start the auction, cancel it, and accept or decline bids of their choice.  They also created an experimental auction prototype but it will need to be reworked to use smart contracts so it can operate securely.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Group 3.2 - Splitting Sales, Collaboration Made Easy</strong></div>
              <p>To split the sales of a single NFT this group developed a functional solution whereby they create a smart contract for collaborative works under a new collaboration address.  Up to 10 wallet IDs can be listed as collaborators and the profit sharing can be autosplit or set manually.  Works minted by this special collaborative profile will have their sales automatically distributed.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Group 5.2 - Values and Core Principles</strong></div>
              <p>To create a hic et nunc manifesto this group crowdsourced ideas from the community.  Over 30 people contributed to the open document, which ultimately needs to be edited and finalized before being put to the community for a vote.  Site founder Raphael Lima commented that, while the manifesto should have basic codes around openness, transparency, and against hate speech, there should also be an intentional effort to amplify and protect voices, especially those from emerging countries.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Group 2.3 - Optimising the Social Media Aspect of the URLs</strong></div>
              <p>One frustration of hic et nunc users is that no relevant image or information shows in the link previews when sharing OBJKTs on external platforms.  There are no previews because hic et nunc is a single page app dynamically generated by javascript.  To work around this the group used a third party app to generate URL previews with thumbnails and metadata.  However, they recommend developing a solution that does not rely on external services.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Group 11.2 - IPFS and Decentralized Storage</strong></div>
              <p>Like other NFT platforms, the media for hic et nunc NFTs is stored on IPFS, a peer to peer form of decentralized storage.  This allows the NFT to exist outside of hic et nunc but the media could also disappear if it is no longer seeded by IPFS nodes.  To avoid this issue the group suggested creating a multi-tenant cluster for hic et nunc media.  The cluster could also respond to a managed blocklist on hashes to prevent serving banned media.</p>           
            </div>
            <br></br>
            <div>
              <div><strong>Group 5.3 - By the Community For the Community</strong></div>
              <p>Copyminting has been a persistent problem on hic et nunc and there are still concerns of how to handle offensive media.  Thus far moderation has taken place largely through reporting offending OBJKTS in the hic et nunc discord to be reviewed by moderators who manage a blocklist.  This group builds on the existing model by proposing a report button be built into the site’s OBJKT pages.  This button would take users to a google form for reporting and record responses in a spreadsheet for review.  However, this feature could be abused and used for harassment.  Ideas for safeguards include bounties, deposits (which could be seized in the case of false reports), and community voting.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Group 5.7 - Where do the Fees Go?</strong></div>
              <p>This group looked into how the hic et nunc wallet funds, built up by a 2.5% fee from every sale, are currently used and how they might be used in the future.  It is estimated that approximately $1,500 per month is used for the domain and hosting, though this may increase as the site grows.  The group plans to develop a page for the site that explains the fees and accounts for expenses.  As proper governance develops, the Treasury DAO will likely become involved with this page to transparently communicate the budget.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Group 5.4 - How to Make Decisions in a Decentralized World</strong></div>
              <p>Governance of hic et nunc is one of the most important questions facing its community.  A token for use in governance, hDAO, was distributed to sellers and collectors during the first few weeks of the site and based on users’ sales participation.  This group detailed a plan for a governance protocol which would consist of four bodies:</p>
              <ul>
                <li>The Governance DAO, inclusive to anybody who holds hDAO, would come up with proposals and stake hDAO to upvote them.</li>
                <li>The hic et nunc Stewards, consisting of the founder and representatives elected by the community, would approve or veto proposals that have passed a vote.</li>
                <li>The Treasury DAO, where membership requires a certain amount of hDAO to be staked for a certain amount of time, would be responsible for creating budgets per the Stewards’ vision and Governance DAO’s proposals.</li>
                <li>The Technology and Design Delegates, appointed by the Stewards, would be responsible for turning successful proposals into actual architecture and for managing the hic et nunc labs, pre-approved vendors hic et nunc works with.</li>
              </ul>
              <p>If a proposal fails at the initial upvoting stage it would receive feedback and could be revised and resubmitted.  If a proposal is vetoed by the Stewards then a public conversation around the proposal would occur.</p>
              <p>Before a governance structure can be adopted it must be made into a working prototype, likely with Homebase, so it can be tested, corrected, and ultimately submitted to the community for a vote on adoption.  In the meantime the group invites all those concerned with governance, it’s core issues, technical implementation, and finer points, to join the discussion around it in the hic et nunc discord.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Group 6.1 - Metaverse and Beyond</strong></div>
              <p>This group seeks to create an abstract but expressive metaverse for hic et nunc, inspired by the site’s simple and arcane sensibilities.  Core areas of the metaverse would be a hub with links to others’ spaces, an avatar builder, and a world builder where OBJKTs could be retrieved.  They are working in  A-frame, an open source web framework for VR, and invite interested parties and developers to join them in the hic et nunc discord.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Group 9.4 - Clear up UX</strong></div>
              <p>This group worked on clearing up the site’s UX and making it simpler to understand.  They prototyped two views for the landing page, a feed in the current style and a grid view, and a redesign of the menu.  They also proposed giving users an option to switch between viewing modes, one with more information about the artworks and a “zen mode” that strips away information to focus on the art.</p>
            </div>
            <div>
              <div><strong>Group 7.1 - Make Galleries and Collections Available to Everyone</strong></div>
              <p>Currently hic et nunc has a limited implementation of galleries based on json files that are controlled by site admins.  This group worked to create a page to allow easy editing of these json gallery files through the site itself and to also extend this feature to all users.  For the UX they propose adding featured galleries to the homepage above the feed.  There is pushback against both human and algorithmic choices being biased and favoring the already privileged.  One suggestion was to guide the bias by featuring artists from emerging countries.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Group 7.2 - Minimal Galleries for Exhibitions</strong></div>
              <p>Instead of overlapping their work with that of pre-existing third party tools and 7.1, this group determined that audio NFTs on hic et nunc were underserved and switched to developing a radio app.  They successfully completed it and expect to continue the project’s development by adding functionality like allowing users to add individual OBJKTs, make playlists, add video work, etc.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Group 8.2 - Verified Users</strong></div>
              <p>Currently, hic et nunc pulls information from TzKT where users can fill out a google form with Baking Bad to add profile information to their wallet ID.  The group examined how verification might become more autonomous and propose using another third party, tzprofiles, which does not rely on human moderation.  Ultimately though, the group believes verification should be built into the hic et nunc platform.  They also proposed two badges, a general verification badge, and a community verification badge to be awarded after the user has participated without incident with the platform and its community.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Group 10.2 - Document hic et nunc Technically / How to Make Apps, Tools and Txts for hic et nunc</strong></div>
              <p>The hic et nunc community has already created many different external tools for the site and this group looked at how they could develop this tool centric community further.  They decided to do this by creating external tools for hic et nunc, curating them, documenting the software, creating tutorials to get more people involved, and nurturing the community overall through communications and events.  Already they have created an open source indexer to help others code their own projects.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Livestream Timestamps</strong></div>
              <ul>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=584">[9:44] Stream Begins</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=619">[10:19] Micol (@verticalcrypto) - Opening Remarks</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=749">[12:29] Group 1.1 - Categories and Sorting with @hoogerwoord</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=1521">[25:21] Group 3.5 - Auctions with @ximecediazArt</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=2219">[36:59] Group 3.2 - Splitting Sales, Collaboration Made Easy with @Shamanovitch</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=2892">[48:12] Group 5.2 - Values and Core Principles with @GuysWily and @edgar_dop</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=3783">[1:03:03] Group 2.3 - Optimising the Social Media Aspect of the URLs with @knowuh</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=4322">[1:12:02] Group 11.2 - IPFS and Decentralized Storage with @ElianCarsenat</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=4699">[1:18:19] Group 5.3 - By the Community For the Community with @QuittersArts</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=5329">[1:28:49] Group 5.7 - Where do the Fees Go? with @6eyFT</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=5922">[1:38:42] Group 5.4 - How to Make Decisions in a Decentralized World with @jamespowderly</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=6562">[1:49:22] Group 6.1 - Metaverse and Beyond with @yungmathusalem</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=7035">[1:57:15] Group 9.4 - Clear up UX with @sableraph</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=7557">[2:05:57] Group 7.1 - Make Galleries and Collections Available to Everyone with @TrasmanoArt</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=8276">[2:17:56] Group 7.2 - Minimal Galleries for Exhibitions with @andreasrau_eu</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=8698">[2:24:58] Group 8.2 - Verified Users with @jetlagNFT and @tagachistudio</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=9248">[2:34:08] Group 10.2 - Document hic et nunc Technically / How to Make Apps, Tools and Txts for hic et nunc with @crcdng</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=9567">[2:39:27] Revisiting Group 6.1 - Metaverse and Beyond with @plsvotetrumpout</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=9860">[2:44:20] John Karp (@johnkarp) - Discussion of Bounties</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=10390">[2:53:10] David (@somaticbits) - Participation Tokens</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=10469">[2:54:29] Raphael Lima (@crzypatchwork) - Closing Remarks</a></li>
                <li><a href="https://www.youtube.com/watch?v=jWmlf9Wk4cA&t=10521">[2:55:21] Micol (@verticalcrypto) - Closing Remarks</a></li>
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
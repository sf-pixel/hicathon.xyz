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
          <h1><span role="img" aria-label="document emoji">📄</span> Day 2 | Kick-Off Summary</h1>
          <h3 className="sub__text">May 23, 2021</h3>
          <div className="info__buttons">
            <Link to="/"><span role="img" aria-label="house emoji">🏠</span> Home</Link>
            <Link to="/stream-summaries/day-1/catch-up"><span role="img" aria-label="document emoji">📄</span> Day 1 Kick-Off Summary</Link>
            <Link to="/stream-summaries/day-1/kick-off"><span role="img" aria-label="document emoji">📄</span> Day 1 Catch-Up Summary</Link>
            <Link to="/stream-summaries/day-2/catch-up"><span role="img" aria-label="document emoji">📄</span> Day 2 Catch-Up Summary</Link>
            <Link to="/stream-summaries/day-2/post-hicathon/summary"><span role="img" aria-label="document emoji">📄</span> Post-Hicathon Summary</Link>
          </div>
        </div>
        
        <div>
            <h3>Summary of <a href="https://www.youtube.com/watch?v=NGVhDQIO4DU">Hicathon #1 - Day 2 Live Stream</a> by <a href='https://twitter.com/itsaherring'>@itsaherring</a></h3>
            <br></br>
            <hr></hr><br></br>
            <div>
              <p>This livestream kicked off the day with a talk from Arthur Breitman, cofounder of Tezos and council member of the Tezos Foundation.  The stream also included announcements regarding hicathon themed challenges, art donations, a group art history quiz from John Karp, remarks from hic et nunc founder Raphael Lima, and updates from 14 working groups.</p><br></br>
            </div>
            <br></br>
            <div>
              <div><strong>The Tezos Foundation</strong></div>
              <p>The Tezos Foundation is a nonprofit in Switzerland formed in 2017 to promote the Tezos ecosystem.  The foundation takes some initiatives of its own but prefers to work primarily through grants, as they have seen the greatest success with that model. Grant recipients include development teams like Nomadic Labs of France, the globally distributed Marigold, tool developers like Russian based Baking Bad, research centers, universities, and now, hic et nunc’s hicathon.</p>
              <p>In order to be a transformative movement, Breitman says, you want to empower people who are taking charge of that movement.  For this reason the foundation doesn’t seek to set the direction of the ecosystem but rather works to empower those who create great things and help them to do even more.</p>
            </div>
            <br></br>
            <div>
              <div><strong>A Roadmap for Tezos</strong></div>
              <p>When asked about the roadmap for Tezos Breitman was quick to point out that there is not any one roadmap for the protocol as developments are spread across multiple bodies and changes must be submitted to and voted upon by bakers before they can be implemented.  Still, there are some promising developments on the horizon for Tezos.</p>
              <p>When the Tezos network first launched many of its parameters were conservate because the goal was ensuring that the protocol was working properly.  Thanks to plenty of successful use and data some of those parameters can now be loosened and other parts overhauled.  These optimizations will bring greater efficiency to data and network usage.  Tackling the storage layer would be the next challenge.</p>
              <p>Scaling will be another crucial improvement.  At the moment there are an estimated 400+ bakers, all running the same calculations, and adding more bakers does not increase throughput.  The goal is to change this to have throughput scale up as more bakers participate in the network.  To make this happen the Marigold team is working on developing optimistic rollups on the Tezos chain.  They would operate by having one node perform the calculations and other nodes verifying, through a cryptographic proof or economic game, that the calculations were correct.  In addition to this there are efforts to make the downloading and distribution of the chain itself more efficient through sharding techniques.</p>
            </div>
            <br></br>
            <div>
              <div><strong>A Word on Backtracked Transactions</strong></div>
              <p>Breitman was asked to explain the reasons for backtracking, a common issue faced by hic et nunc users.  Essentially, each transaction has two parameters that need to be guessed before it is sent for validation.  These are the gas and the storage fees, which are capped by user adjustable limits.  If either of these parameters are insufficient to cover its costs then the whole transaction may be rejected by the baker and show up as “backtracked” or “failed”.  When setting the gas limit the user will pay the full cost of the limit they set, so it is not advisable to increase that setting much, if at all.  An insufficient storage limit is more often the culprit.  Setting the storage limit higher can solve the issue in this case, and the user will only be charged for the amount of storage used.  The current estimated limits are sometimes wrong because better logic is needed on the side of the DApp to simulate the smart contract transactions and communicate with the wallets.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Tezos and Open Sea</strong></div>
              <p>In December of 2020 Breitman talked with OpenSea about integrating Tezos with the platform.  They came to a deal to support the viewing of tezos based NFTs by the end of March and tezos trading by the end of April, but that never came to pass.  OpenSea stated that they had been busy with other obligations and the recent boom in NFTs.  Breitman is happy to see hic et nunc doing so well in the space instead but still hopes that integration with OpenSea comes soon stating, “That’s the whole point of building these things on blockchain, [so] that they can interoperate”.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Art Donations Update</strong></div>
              <p>Nearly all donated artworks had been swapped by this livestream, however a major flaw was discovered.  When collected artworks are swapped for sale they no longer appear in the holder’s collections tab as they are technically sent to the hic et nunc escrow wallet.  This makes it difficult for people to collect the donated works as they can not see them on the hicathon’s profile page and instead must use the tracking spreadsheet or other third party means to find the OBJKTs.  This issue has been known since March but was overlooked in the rapid development of the hicathon.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Updates from the Working Groups</strong></div>
              <p>Just 16 hours separated this catch up livestream from the previous but many groups continued to make great progress, thanks in part to the truly global nature of the hicathon.  Updates from working groups were limited to two minutes.</p>
              <p>Groups 2.3 and 3.2, URL optimization for social media and the splitting of sales, both arrived at functional demos of their projects and continued to work on their solutions for sustainability and usability.  Group 7.2 also made great progress by debuting a radio app for hic et nunc.</p>
              <p>Refining ideas and mockups around UX/UI were groups 1.1, 9.4, 7.1, and 8.2.  Similarly, group 6.1, metaverse and beyond, presented the first 3D mockup of their envisioned space.  Groups 2.1 and 5.3, unlockable content and trust against copyminting, continued to develop their ideas and methods, seeking feedback and collaboration from relevant working groups.</p>
              <p>Group 5.4, decentralized governance, already had solid progress from the previous day and put out a call for a developer with knowledge of homebase so they could develop a working prototype for governing.  Group 10.2, community tools, also had a strong foundation and looked ahead towards making a sustainable organization, a “WAO” or working autonomous organization, to keep their collective efforts going.</p>
              <p>Two new groups joined the hicathon, both dealing with non-technical but very important community information.  Group 5.7 seeks to create an informational page for the site explaining what the 2.5% fees collected by hic et nunc are used for, including future uses that would occur once governance is implemented.  Meanwhile, group 5.2 seeks to crowdsource and codify core values and principles of the platform from the community.</p>
            </div>
            <br></br>
            <div>
              <div><strong>Livestream Timestamps</strong></div>
              <ul>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=725s">[12:05] Stream Begins</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=740">[12:20] Micol (@verticalcrypto) - Opening Remarks</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=828">[13:48] Arthur Breitman (@ArthurB) - On the Tezos Foundation</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=1114">[18:34] Arthur Breitman (@ArthurB) - On the Technology of Tezos</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=1880">[31:20] Arthur Breitman (@ArthurB) - Q&A Moderated by Micol</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=2610">[43:30] Luca Fontana (@lucccafontana) - Update on Art Challenges</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=2735">[45:35] James Paterson (@presstube) - Update on Art Donations</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=2816">[46:56] Micol (@verticalcrypto) - Updates from Working Groups</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=2860">[47:40] Group 7.2 - Minimal Galleries for Exhibitions (Radio App) with @__orderandchaos</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=3069">[51:09] Group 2.3 - Optimizing the Social Media Aspect of the URLs with @NFT4_art</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=3378">[56:18] Group 1.1 - Categories and Sorting with @hoogerwoord</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=3544">[59:04] Group 3.2 - Splitting Sales, Collaboration Made Easy with @Shamanovitch</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=3710">[1:01:50] Group 6.1 - Metaverse and Beyond with @yungmathusalem</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=3947">[1:05:47] Group 9.4 - Clear up UX with @sableraph</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=4112">[1:08:32] Group 10.2 - Document hic et nunc Technically / How to Make Apps, Tools and Txts for hic et nunc with @c&tdng</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=4272">[1:11:12] Group 7.1 - Make Galleries and Collection Available to Everyone with @TrasmanoArt</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=4484">[1:14:44] Group 5.2 - Values and Core Principles with @guyswily</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=4610">[1:16:50] Group 5.4 - How to Make Decisions in a Decentralized World with @quasimondo</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=4824">[1:20:24] Group 8.2 - Verified Users with @jetlagNFT</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=4982">[1:23:02] Group 5.7 - Where do the Fees Go?  With @6eyFT</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=5207">[1:26:47] Group 2.1 - OBJKT Enhancement with @Hampelman6</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=5449">[1:30:49] Group 5.3 - By the Community for the Community with @QuittersArts</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=5715">[1:35:15] John Karp (@johnkarp) - Art Quiz Game</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=6384">[1:46:24] Raphael Lima (@crzypatchwork) - Remarks on the Ongoing Hicathon</a></li>
                <li><a href="https://www.youtube.com/watch?v=NGVhDQIO4DU&t=6541">[1:49:01] Micol (@verticalcrypto) - Working Groups Kick Off and Stream End</a></li>
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
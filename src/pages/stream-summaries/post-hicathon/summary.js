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
          <h1><span role="img" aria-label="document emoji">📄</span> Post-Hicathon Stream</h1>
          <h3 className="sub__text">June 6, 2021</h3>
          <div className="info__buttons">
            <Link to="/"><span role="img" aria-label="house emoji">🏠</span> Home</Link>
            <Link to="/stream-summaries/day-1/kick-off"><span role="img" aria-label="document emoji">📄</span> Day 1 Kick-Off Summary</Link>
            <Link to="/stream-summaries/day-2/catch-up"><span role="img" aria-label="document emoji">📄</span> Day 1 Catch-Up Summary</Link>
            <Link to="/stream-summaries/day-2/kick-off"><span role="img" aria-label="document emoji">📄</span> Day 2 Kick-Off Summary</Link>
            <Link to="/stream-summaries/day-2/catch-up"><span role="img" aria-label="document emoji">📄</span> Day 2 Catch-Up Summary</Link>
          </div>
        </div>
        
        <div>
            <h3>Summary of <a href="https://twitter.com/verticalcrypto/status/1401508823353921540">Hicathon #1 - Post-Hicathon Stream</a> by <a href='https://twitter.com/itsaherring'>@itsaherring</a></h3>
            <br></br>
            <hr></hr><br></br>
            <div>
              <p>And we are back! Two weeks after the first hackathon of hic et nunc, the participants met again online to get updates from the working groups (WGs) and discuss the next steps. <a href="https://twitter.com/verticalcrypto/status/1401508823353921540">Watch the recording here.</a></p>
              <p>After a quick intro by Micol, we reviewed the next steps suggested by John and Mario so the projects started by the WGs could be implemented, supported or developped. <a href="https://docs.google.com/document/d/1IMi49CiaEMQfv-dWnf0ddJyZiYcZJTsrc88XEhXtHmA/edit#heading=h.ejo839x0e2gk">You can find here the working document.</a></p>
              <p>In brief, what needs to be remembered:</p>
              <ul>
                <li>We won’t implement a new feature or support a WG if it hasn’t been upvoted by the community first; The voting phase will start asap and will last 72 hours (the WG 5.4 is currently working on a curation DAO with Homebase)</li>
                <li>The upvoted WGs will start by receiving 50% of the post-hicathon grant (if they need it)</li>
                <li>We will ask the WGs to fill up a test-sheet in order to ensure it is user friendly</li>
                <li>Advisors and users will join a mid-run demo day (date to be defined)</li>
                <li>A final demo day will be organised to end the post-hicathon phase (date to be defined)</li>
              </ul>
              <p><strong>Then, each working group has the mission to update the community on what they have been working on, show the last version of their feature or document, receive feedback from the community and call for support or skills if needed.</strong></p>
              <br></br>
            </div>
            <br></br><hr></hr>
            <div>
              <p>We started with the <strong>WG 2.1 ‘OBJKT enhancement’</strong> which has been focusing on the unlockable items to add to the objkts.</p>
              <p>🤨 Is it possible to let the API communicate with the wallet to better secure interactive objkt?</p>
            </div>
            <br></br><hr></hr>
            <div>
              <p>The <strong>WG 3.2 ‘Splitting Sales/ Collaborative contracts’</strong> has been working on a new feature for hic et nunc enabling collaborations. At the end of the hicathon, their V1 was almost ready for production and implementation (UI + contract ready to run). The final livestream of the hicathon highlighted the need to solve one pending question: how to verify who is the owner of an NFT / of a smart contract?</p>
              <p>Adding a signing feature is needed.</p>
              <p>The V2 will be ready with the signing feature preventing any minting before shared consent. Then, they will need to clean the UI, add a collaboration tab on user profile and on the objekts itself.</p>
              <p>👋🏽 they need a developer to help implementing the feature in hic et nunc</p>
            </div>
            <br></br><hr></hr>
            <div>
              <p>The <strong>WG 3.5 ‘Auctions’</strong> came up with a new kind of smart contract to support the “auction” feature. They are currently running a third party audit to find the smart contract (smartpy is one of them).</p>
              <p>🤨 Two questions still remaining is how to deal with fake-auction? Need to have a certified wallet to make an auction? Creator and royalties should be added in the auction smart contract but is it requiring more gas fees than a simple contract?</p>
              <p>They also highlighted that they are seeing auctions as a way to choose who will get the piece and not only the biggest investors.</p>
              <p>Rafael suggested using the auction feature as a gamification tool.</p>
              <p>👋🏽 need support in smart contract configuration and implementation</p>
            </div>
            <br></br><hr></hr>
            <div>
              <p>The <strong>WG 5.2 ‘Core values and Code of conducts’</strong> has been focusing on creating two documents: the core values and the code of conduct. It can be found and commented here. Thousands of people contributed to the creation of this document which has been updated and cleaned since the hicathon.</p>
              <p>The core values give priority to the people behind hic et nunc are at the core of hic et nunc, therefore, inclusivity, respect and solidarity are the first values listed.</p>
              <p>The second part is more about the tech side of hic et nunc and highlights decentralisation, simplicity and sustainability of the platform.</p>
              <p>And the last part is dedicated to creativity which highlight that hic te bync is about encouraging all kinds of creativity from everywhere, worldwide.</p>
              <p>🐾 Their next step is create an endless editable document which could change with the time</p>
              <p>The code of conduct is addressed to the members which precise rules:</p>
              <ul>
                <li>How do we want to behave as individuals on hic et nunc and foster a culture of sharing</li>
                <li>How to stay respectful and make hic et nunc a welcome place</li>
                <li>Copyright and intellectual property</li>
              </ul>
              <p>👋🏽 need expertise in copyright law</p>
              <p>👋🏽 need to translate the document - <a href="https://twitter.com/GuysWily/status/1401542697165459460">the group just launched a call for translators here.</a></p>
            </div>
            <br></br><hr></hr>
            <div>
              <p>The <strong>WG 5.7 ‘Fees’</strong> is complete as they have a request in progress to add into the main FAQ of hic et nunc. In this new section, they explain in full transparency where the fees are going. They will be able to start working on 6.2 “Bakers”</p>
            </div>
            <br></br><hr></hr>
            <div>
              <p>The <strong>WG 5.8 ‘Legal’</strong> has been compiling feedback from lawyers in order to better understand what is possible when talking about legal status of an organisation in the blockchain industry.</p>
              <p>The main takeaways from the hicathon has been to better understand the way to go and list the next steps:</p>
              <ul>
                <li>Step 1 disclaimer - The most immediate action point is writing a disclaimer on the website in order to help people understand the current legal status of hic et nunc.</li>
                <li>Step 2 clarity from the DAO</li>
                <li>Step 3 incorporation</li>
                <li>Step 4 terms of use should be set-up once the DAO is done</li>
              </ul>
            </div>
            <br></br><hr></hr>
            <div>
              <p>The <strong>WG 6.1 ‘Metaverse’</strong> worked on the metaverse of hic et nunc. <a href="https://hen-worlds.glitch.me/">Visit here the prototype</a> and <a href="https://drive.google.com/file/d/1WuCFZp8_FoNscmpwBY9nR5ThcPqUOvO1/view?usp=sharing">check their slides here.</a> Their goal is to bring all hic et nunc community in one place.</p>
              <p>It should be as inclusive as possible so accessibility is key for them. The platform should be usable for everyone and a very simple programme, so as many people as possible can start using it as soon as possible. Preventing all-star takeovers is crucial for them.</p>
              <p>They are pushing for mass media adoption with AR, filters, headsets, etc. It is a virtual world where exploration, play and performance can foster meaningful interactions between people. It is also a place for events with online personal avatars and non-linear gaming.</p>
              <p>They secured some web domains to anticipate future needs.</p>
              <p>🐾 next step: inspired by Objkt4Objkt, they want to organise a coordinated airdrop with the tag #circulus. The obkets will be exhibited in the metaverse</p>
              <p>🤨 Main questions still pending:</p>
              <ul>
                <li>Not profit or for profits? Donors or sponsors? Need to be aligned with the core values and the future DAO.</li>
                <li>open source or closed IP?</li>
              </ul>
              <p>They are currently working on a budget for a proof of concept.</p>
              <p>👋🏽  open call for coders, developers, designers to join the WG</p>
            </div>
            <br></br><hr></hr>
            <div>
              <p>The <strong>WG 7.1 ‘Galleries and Collections’</strong> identified different use cases to understand better what should be useful and needs for hic et nunc. They identified four types of galleries: ad-hoc galleries for event-focused galleries, website gallery, user gallery, user list.</p>
              <p>The feedback from the community on the chat made it clear that an open discussion should be organised as some ideas seem to create vivid reactions.</p>
              <p>👋🏽  need for a design system</p>
              <p>👋🏽  need to have an open discussion with the community</p>
            </div>
            <br></br><hr></hr>
            <div>
              <p>The <strong>WG 7.2 ‘Radio’</strong> started with the need to get a better experience to listen to music on hic et nunc. From the radio concept they ended the hicathon with, they are now developing way more than a radio. Starting with the idea of creating a gallery for audio, and then a playlist for audio, they are now working on a NFT music platform allowing artists to mint html, rich media music to their collections, as well as adding micro-donations option.</p>
              <p>🤨 Next question: How to compensate the artists? Is there a way to give away DAO?</p>
              <p>🐾  Their next steps are:</p>
              <ul>
                <li>dynamic creation of the playlist</li>
                <li>👋🏽  calling for dev to help</li>
                <li>get musician familiar with NFTs</li>
                <li>👋🏽  calling for marketing effort promote the platform</li>
              </ul>
            </div>
            <br></br><hr></hr>
            <div>
              <p>The <strong>WG 9.4 ‘UX / UI’</strong> has been working on the clean-up on the UX of hic et nunc. <a href="https://www.figma.com/file/Q2UWiIm6FOOBmscXrMVid6/WG-9.4?node-id=887%3A903">You can find their Figma board here.</a> Right after the hicathon they have been consulting with the core-devs of hic et nunc in order to identify what was idealistic or realistic. They have been through a necessary reality-check and presented it in the livestreams.</p>
              <p>🐾 Their main focus is now is collaborating with the devs and identifying what is implementable such as the menu and the font.</p>
              <p>👋🏽 need to get more feedbacks from the community via the upcoming upvoting tool</p>
            </div>
            <br></br><hr></hr>
            <div>
              <p>The last <strong>WG 10.2 ‘Apps and tools’</strong> worked on a series of tools to counterbalance the official narrations and uses on hic et nunc, but also tools to help artists and collectors to have a better view and understanding of their collection. Experimentation exists is the “tool-iverse” where everyone can use the API of hic et nunc, learn, test and try new uses. <a href="https://drive.google.com/file/d/1g_Ay_DPngNxbvDJCHsnlHDLrG8GpjqJ0/view">You can find their presentation here.</a></p>
              <p>Their goal was to help curate and support the community of developers who build apps and tools for hic et nunc.</p>
              <p>need front end dev and graph skills to display live data on hicdex.com</p>
              <p>developers-focused event to help more tools being developed</p>
              <p>They work towards a WAO - Working autonomous organisation. If you want to join the effort, you can follow the trello <a href="https://trello.com/b/eqnXjDGY/hen-apps-tools-orga">here.</a></p>
            </div>
            <br></br>
            <p><strong>We ended the livestream with encouraging and motivating feedback from Artnome, Rafael Lima and John Karp, as well as showing full support.</strong></p>
            <br></br><br></br>
        </div>
      </div>
      <footer className="footer">
          <div className="page__footer__message">
            Document made with <span role="img" aria-label="red heart emoji">❤️</span> by <a href='https://twitter.com/dianedrubay'>@DianeDrubay</a>, powered by <a href="https://netlify.com">Netlify.</a>
          </div>
      </footer>
    </div>
)
  
export default Press
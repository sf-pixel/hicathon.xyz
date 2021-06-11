import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

//import components
import Logo from '../components/logo'
import '../styles/styles.scss'
import '../styles/pages/recount.scss'


const Recount = () => (
  <div className="page__wrapper">
    <Logo />
    <div className="page__content">
      <Helmet>
          <title>hicathon | a brief recount</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Helmet>
      <div className="info__wrapper">
        <h1 className="info__mobile"><span role="img" aria-label="document emoji">📄</span> A breif recount</h1>
        <h3 className="sub__text__mobile">Hicathon | May 2021</h3>
        <div className="info__buttons__recount">
          <iframe src="https://www.youtube.com/embed/NIy8F5b2_Pk?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <a href="https://www.youtube.com/watch?v=NIy8F5b2_Pk" className="video__button"><span role="img" aria-label="camcorder emoji">📹</span> Watch the Wrap-Up Video</a>
          <Link to="/"><span role="img" aria-label="house emoji">🏠</span> Home</Link>
        </div>
      </div>
      
      <div>
        <h3>What's happened</h3>
        <p>With great support from the community, we are glad to present everything, yes, <i>everything</i> that has happened throughout our very first hicathon.</p>
        <br></br>
        <hr></hr>
        <br></br>
        <div>
          <p>Hic et nunc, the first Tezos-based NFT marketplace ran its first hackathon - 'hicathon' on May 22nd-23rd. The hicathon was an all volunteer community-led event to support and accelerate the development the platform. 150 participants joined across 77 different countries to take part across a range of working groups. The initiative was made possible by the hic et nunc community, donations from artists and collectors, and generous grants from the Tezos Foundation and Tezos Commons. Arthur Breitman, an early architect of the Tezos protocol, has also joined the event as a keynote speaker.</p>
          <p>Among the topics explored participants also discussed the idea of galleries, a limited feature that has been prototyped on the site under the public “galleries” page but not yet offered to all users. In addition, there has been a strong desire in the community to extend the core functionality of the site in other ways. Three of the most popular requests included auctions, the splitting of sales, and unlockable content for OBJKTs. Solutions for auctions and the splitting of sales included UI mockups and functional prototypes.</p>
          <p>The new prototype for the collaborative smart contract for splitting of sales will allow users to mint from a special collaborative wallet ID and specify what percentage of the sales each user should receive. Future development goals for this feature include considering how this can be of use to curators, support more users, allow everybody who is a part of the collaboration to mint, a signing system for collaborators to sign the terms before creating the contract, and even allowing the contract to be changed in the future.</p>
          <p>As a decentralized community without any official leadership or company behind it, major discussion points revolved around finding a decentralised governance model for the hic et nunc hDAO token. The hicathon also served as an experiment in self-organisation and finding consensus. Non-technical groups worked on creating the foundations for a democratic governance model that will eventually allow the community to vote and make binding decisions for the future roadmap of hic et nunc.</p>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <h3>View the livestream recaps below:</h3>
        <div className="recount__buttons">
          <Link to="/stream-summaries/day-1/kick-off" className="button"><span role="img" aria-label="document emoji">📄</span>Day 1 Kick-Off</Link>
          <Link to="/stream-summaries/day-1/catch-up" className="button"><span role="img" aria-label="document emoji">📄</span>Day 1 Catch-Up</Link>
          <Link to="/stream-summaries/day-2/kick-off" className="button"><span role="img" aria-label="document emoji">📄</span>Day 2 Kick-Off</Link>
          <Link to="/stream-summaries/day-2/catch-up" className="button"><span role="img" aria-label="document emoji">📄</span>Day 2 Catch-Up</Link>
          <Link to="/stream-summaries/post-hicathon/summary" className="button"><span role="img" aria-label="document emoji">📄</span>Post-Hicathon</Link>
        </div>
        <p className="collection__statement"><i>View the hicathon fan-pieces, a part of the <a href="https://hicathon-gallery.netlify.app/gallery/hicathon">donated collection.</a></i></p>
        <div className="donated__pieces">
            <video src="https://ipfs.io/ipfs/QmadYqKwXP2JBvkf3h2mjuUqpDwL59jZZQyFURfNJfS9ij" autoplay="autoplay" muted loop loading="lazy"></video>
            <img src="https://cloudflare-ipfs.com/ipfs/QmdkqjDcZBE5f4MiDu4r4LBRGhYxENZF1ruCvqXxaAQRWF" loading="lazy"></img>
            <img src="https://cloudflare-ipfs.com/ipfs/QmQn3w2NYQK6D124RVgv4dUEFxRgnm5YvUwcQnQD6JNx8w" loading="lazy"></img>
            <video src="https://ipfs.io/ipfs/QmRDJFugvbtYcMurKTN8fbLDkY8ooA3VFyhNy3BajiZNRg" autoplay="autoplay" muted loop loading="lazy"></video>
            <video src="https://ipfs.io/ipfs/QmdqjZm9uCWSg5kRNWzGyfmKtd6xZpUmkdNCw8y6AfKYaA" autoplay="autoplay" muted loop loading="lazy"></video>
            <video src="https://ipfs.io/ipfs/QmTdTyQNiyp75KkxxL2V25b4EddgkMrFDscLraDhzqi35J" autoplay="autoplay" muted loop loading="lazy"></video>
          </div>
        <br></br>
        <br></br>
      </div>   
    </div>
    <footer className="footer">
        <div className="page__footer__message">
          Made with <span role="img" aria-label="red heart emoji">❤️</span> by <a href='https://twitter.com/homeworkpunks'>@homeworkpunks</a>, powered by <a href="https://netlify.com">Netlify.</a>
        </div>
    </footer>
  </div>
)

export default Recount

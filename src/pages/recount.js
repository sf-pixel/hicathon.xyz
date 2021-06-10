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
        <h1 className="info__mobile"><span role="img" aria-label="newspaper emoji">📰</span> Press Release</h1>
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

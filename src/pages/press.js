import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

//import components
import Logo from '../components/logo'
import '../styles/pages/press-release.scss'
import '../styles/styles.scss'



const Press = () => (
  <div className="page__wrapper">
    <Logo />
    <div className="page__content">
      <Helmet>
          <title>hicathon | press release</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Helmet>
      <div className="info__wrapper">
        <h1><span role="img" aria-label="newspaper emoji">📰</span> Press Release</h1>
        <h3 className="sub__text">Hicathon | May 2021</h3>
        <div className="info__buttons">
          <Link to="/"><span role="img" aria-label="house emoji">🏠</span> Home</Link>
          <Link to="/guidelines">Brand Guidelines</Link>
          <Link to="/code-of-conduct">Code of Conduct</Link>
          <Link to="/schedule">Schedule</Link>
        </div>
      </div>
      
      <div>
            <h3>Leading Tezos-based NFT Marketplace Hic et Nunc Launches its First Hicathon</h3>
            <p>Hic et nunc, the first Tezos-based NFT marketplace launched on March 1st 2021 by Rafael Lima, will run its first hackathon - <a href="/">&#39;hicathon&#39;</a> on May 22nd-23rd. The platform, which will surpass 100,000 objects minted by the end of May, is the chosen home for a diverse group of artists from all over the world spanning the entire range from unknown to well-known and covers the entire range of creative expression: visual art, generative, conceptual or interactive art, music, literature and performance. Some of the hic et nunc creators include pioneering AI artist Mario Klingemann, visual artist and software engineer Helena Sarin, climate activist Joanie Lemercier, early crypto artists Angie Taylor and LuluxXX, the band Yacht, creative technologist Memo Akten and creative director James Paterson.</p>
            <p>The <a href="/">Hicathon</a> is an all volunteer event to support what has become the <a href="https://restofworld.org/2021/inside-brazils-diy-nft-art-marketplace/">largest</a> NFT platform by <a href="https://better-call.dev/dapps/hen">Daily Active Users</a> (+2,500 p/day). 250 participants already registered, in less than a week. The initiative is made possible by the hic et nunc community, generous donations from artists and collectors, and a generous grant from the Tezos Foundation.</p>
            <p>In addition to key strategy discussions on the evolution of the platform and its roadmap, participants will accelerate and prototype new features implementations such as galleries, resales and dApps. As a platform made by artists for the artists, major discussion points will revolve around finding a decentralised governance model for the hic et nunc hDAO token.</p>
            <p>Hic et nunc means &#39;here and now&#39;, and for its founder, <a href="https://twitter.com/crzypatchwork">Rafael Lima</a>, &quot;the main idea has been experimenting with creative economies right now as an alternative, also to the traditional &quot;DeFi&quot; (decentralized finance) mode of thinking.&quot; Lima has successfully navigated running the platform single- handedly and with the help of contributing developers (total sales as of May 19th were 1,087,492 tez, an equivalent of approximately $6,144,329 USD). Now, the hicathon aims to bring clarity to the platform&#39;s short and mid-term vision.</p><br></br><br></br>
            
            <p><strong>Visitors can register/ join hicathon here:</strong> <a href="/">https://hicathon.xyz/</a> Dates: from 9am BRT / 2pm CEST Saturday, May 22nd to 3pm BRT / 8pm CEST Sunday, May 23rd.</p><br></br>
            
            <p><strong>Official visuals for promotion:</strong><br></br><a href="https://drive.google.com/drive/folders/19Oyok7-nFBgtOdabytN_teaXfjLcTBfB">via this link</a></p><br></br>

            <p><strong>Links:</strong></p>
            <p>Website: https://www.hicetnunc.xyz/</p>
            <p>Twitter: https://twitter.com/hicetnunc2000</p>
            <p>Instagram: https://www.instagram.com/hicetnunc2000/</p><br></br>

            <p><strong>Selected press:</strong></p>
            <p><a href="https://www.nytimes.com/2021/04/13/climate/nft-climate-change.html">New York Times - NFTs Are Shaking Up the Art World. They May Be Warming The Planet, Too.</a></p>
            <ul>
              <li>Some smaller NFT platforms — including one known as Hic Et Nunc, which is based on the Tezos blockchain — have already started using proof of stake, attracting artists like Mr. Lemercier. By cutting down on the number-crunching required, Hic Et Nunc doesn’t just reduce energy consumption; it also seeks to roll back the cost of listing NFTs, which can reach many hundreds of dollars, according to Rafael Lima, the founder of Hic Et Nunc. “It’s just a more efficient algorithm,” he said.</li>
            </ul>

            <p><a href="https://cointelegraph.com/news/tezos-native-nft-platform-h-n-gains-steam-launches-world-art-day-fundraiser">CoinTelegraph - Tezos-native NFT platform H=N gains steam, launches World Art Day fundraiser</a></p>
            <ul>
              <li>Eventually, the bull market will fade and the money sloshing around will dry up. At that point, the cheaper, durable, and diverse communities like H=N might well be the ones left standing.</li>
            </ul>

            <p><a href="https://restofworld.org/2021/inside-brazils-diy-nft-art-marketplace/">Rest of World - Inside Brazil's DIY, eco-friendly NFT art marketplace</a></p>
            <ul>
              <li>“I never thought that working with NFTs would be the source of income or that it would have such a great impact in my community’s life. But it is real — I see the relief in my friends’ faces: they are paying debts, upgrading their working setups, and helping family members.” - <a href="https://restofworld.org/2021/inside-brazils-diy-nft-art-marketplace/">Jéssica Luz</a>, a graphic novelist from Curitiba, Brazil.</li>
            </ul>

            <br></br><div className="ending__hash">###</div><br></br>
            <div className="ending__remarks">
              <p><strong>About Tezos:</strong></p>
              <p>Tezos is smart money, redefining what it means to hold and exchange value in a digitally connected world. A self-upgradable and energy-efficient blockchain with a proven track record, Tezos seamlessly adopts tomorrow&#39;s innovations without network disruptions today.</p><br></br>
              <p>For media inquiries contact Aleksandra Artamonovskaja: <br></br>a@electricartefacts.art</p>
            </div>
      </div>   
    </div>
    <footer className="footer">
        <div className="page__footer__message">
          Document made with <span role="img" aria-label="red heart emoji">❤️</span> by <a href='https://twitter.com/aljaparis'>@aljaparis</a>, powered by <a href="https://netlify.com">Netlify.</a>
        </div>
    </footer>
  </div>
)

export default Press

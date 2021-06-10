import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

//import components
import Logo from '../components/logo'

//stylesheets
import '../styles/styles.scss'
import '../styles/pages/guidelines.scss'

//downloadable assets
import blackPngLogo from '../downloads/assets/H=N_logo.png'
import blackSvgLogo from '../downloads/assets/H=N_logo.svg'
import whitePngLogo from '../downloads/assets/H=N_logo_white.png'
import whiteSvgLogo from '../downloads/assets/H=N_logo_white.svg'
import rawSvgLogo from '../downloads/assets/H=N_logo_raw.svg'


const Guidelines = () => (
  <div className="page__wrapper">
    <Logo />
    <div className="page__content">
      <Helmet>
          <title>hicathon | guidelines</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Helmet>
      <div className="info__wrapper">
        <h1><span role="img" aria-label="old scroll emoji">📜</span> Brand Guidelines</h1>
        <h3 className="skip__text">Skip to:</h3>
        <div className="info__buttons">
          <Link to="/"><span role="img" aria-label="house emoji">🏠</span> Home</Link>
          <Link to="#skip__button__personality">Brand Personality</Link>
          <Link to="#skip__button__design">Design Guidelines</Link>
          <Link to="#skip__button__assets">Asset Downloads</Link>
        </div>
      </div>
      
      <div className="guide__para">
          <Link  id="skip__button__personality"></Link><br></br><br></br>
          <h3><span role="img" aria-label="theater masks emoji">🎭</span> Brand Personality</h3><hr></hr>
          <p>When working on branding for hicathon, keep some key points in mind while designing, promoting, and mentioning content:</p><br></br>
          <h4><span role="img" aria-label="green check emoji">✔️</span> Do</h4><hr></hr>
          <ul>
            <li><span role="img" aria-label="chat bubble emoji">💬</span> Keep it positive</li>
            <ul className="sub__list"><br></br>
              <li>Hicathon is all about community, making people feel like they belong is what we strive for. When designing, try to keep wording personal while avoiding slang.</li><br></br>
              <li>Making connections when promoting content created for hicathon is great! Whether you're tweeting, talking in telegram, or just planning sub-events during hicathon, continue to make connections with participants, volunteers & organizers.</li><br></br>
              <li>Even though hicathon is a community-organized event, we want to keep a positive brand image. With recent boom in usage, positive messages about the platform and those that contribute is <u>very important.</u></li><br></br>
            </ul><br></br>
            <li><span role="img" aria-label="credit card emoji">💳</span> Credit when credit is due</li>
            <ul className="sub__list"><br></br>
              <li>Always credit the original creators of imagery, promotion content & written resources.</li><br></br>
              <li>If you've used someone else's promotion content, as long as you have permission from the original creator, feel free to use it to promote hicathon. Even if the original creator didn't ask for credit, it's always recommended to do it anyways.</li><br></br>
            </ul><br></br>
            <li><span role="img" aria-label="chat bubble emoji">💬</span> Discuss</li>
            <ul className="sub__list"><br></br>
              <li>Talk. Talk to the organizers about your plan to promote so that everyone can co-ordinate.</li><br></br>
              <li>Talking to designers, copywriters, and content-creators is important when thinking about <i>brand</i>. We want to stay consistent with everything that we do, keeping the same fonts, colors, and writing styles.</li><br></br>
              <li>If something seems off about promotion material, talk to the creator, give them feedback and show them this brand guidelines page.</li><br></br>
            </ul><br></br><br></br><br></br>
          </ul>
          <h4><span role="img" aria-label="red x emoji">❌</span> Don't</h4><hr></hr>
          <ul>
            <li><span role="img" aria-label="chat bubble emoji">💬</span> Abuse hicathon's branding</li>
            <ul className="sub__list"><br></br>
              <li>Any racist, sexist, homophobic or otherwise politically incorrect messages using hicathon's name, brand, or promotion material will <u>not</u> be tolerated under any circumstances.</li><br></br>
              <li>Using hicathon's brand to self-promote with spam or un-ethical promotion practices that does not fit with our promotion plan is not to be used.</li><br></br>
              <li>Yes, this event is community-driven but that does not mean you own full rights to the promotion material you use. Make sure to talk with the original creators to stay within their copyright terms.</li><br></br>
            </ul><br></br>
            <li><span role="img" aria-label="credit card emoji">💳</span> Charge Tezos</li>
            <ul className="sub__list"><br></br>
              <li>Posts claiming they need donations for hicathon will not be tolerated. Unless it's for an official community Tezos pool, Tezos fountain, official hicetnunc addresses, or community funds, using hicathon's name, branding, and material is not permitted.</li><br></br>
              <li>Claiming a participation or entry fee goes against hicathon's branding. We're a group of volunteers, not a touring rock band.</li><br></br>
            </ul><br></br>
            <li><span role="img" aria-label="chat bubble emoji">💬</span> Find a loophole</li>
            <ul className="sub__list"><br></br>
              <li>If something isn't mentioned on this page, it doesn't mean it's permitted. Think before you post using hicathon's name, brandning and/or promotion materials. If you need clarification, we're more than happy to provide some at the <a href="https://discord.gg/efHzUbPwsF">discord server</a></li><br></br>
            </ul><br></br><br></br><br></br>
          </ul><br></br><Link id="skip__button__design"></Link><br></br><br></br>
          <h3><span role="img" aria-label="ruler emoji">📏</span> Design Guidelines</h3><hr></hr>
          <p>When working on branding for hicathon, keep these key points in mind while designing, curating, and giving feedback on content:</p><br></br><br></br>
          <h4><span role="img" aria-label="fountain pen emoji">🖋️</span> Fonts</h4><hr></hr>
          <p>Fonts to be used for hicathon branding, promotion & content will be 'Source Code Pro' and 'Inconsolata', in order of imporance. The font 'Inconsolata' is only to be used in special cases where 'Source Code Pro' is not available or able to be used. Standard font weights will include <u>400</u> for regular typeface and <u>700</u> for bolded typeface, never to exceed 700. Make sure to read the <a href="https://fonts.google.com/attribution">licensing/attribution agreements</a> attached with the fonts before using them.</p><br></br>
          <div className="font__examples">
            <div className="source__code__pro">
              <h1>This is a header in the font <i>'Source Code Pro'</i></h1>
              <p>This is a paragraph in the font <i>'Source Code Pro'</i>, you can download me <a href="https://fonts.google.com/download?family=Source+Code+Pro">here.</a></p><br></br>
            </div>
            <div className="inconsolata">
              <h1>This is a header in the font <i>'Inconsolata'</i></h1>
              <p>This is a paragraph in the font <i>'Inconsolata'</i>, you can download me <a href="https://fonts.google.com/download?family=Inconsolata">here.</a></p><br></br>
            </div>
          </div><br></br>
          <h4><span role="img" aria-label="paint pallette emoji">🎨</span> Colors</h4><hr></hr>
          <p>The suggested color pallette includes three primary colors. The dominant two colors are to be used together, #111111 (A not-quite black) & #F3F5F3 (A not-quite white). You can find the different colors below, the last and non-dominant color is #A0A1A3 (A light grey).</p><br></br>
          <div className="color__examples">
            <div className="not__quite__black">
              <div className="color__text">
                <p className="color__name">Not-quite black</p>
                <p>HEX #111111</p>
              </div>
            </div>
            <div className="not__quite__white">
              <div className="color__text">
                <p className="color__name">Not-quite white</p>
                <p>HEX #F3F5F3</p>
              </div>
            </div>
            <div className="light__grey">
              <div className="color__text">
                <p className="color__name">Light grey</p>
                <p>HEX #A0A1A3</p>
              </div>
            </div>
          </div><br></br><br></br><br></br><br></br><br></br><Link id="skip__button__assets"></Link><br></br><br></br>
          <h3><span role="img" aria-label="file folder emoji">📁</span> Asset Downloads (Click)</h3><hr></hr>
          <div className="download__buttons">
            <a href={blackPngLogo} download>Black H=N .PNG</a>
            <a href={blackSvgLogo} download>Black H=N .SVG</a>
            <a href={whitePngLogo} download>White H=N .PNG</a>
            <a href={whiteSvgLogo} download>White H=N .SVG</a>
            <a href={rawSvgLogo} download>Raw H=N .SVG</a>
            <a href="https://drive.google.com/drive/folders/1YpdFVvVmCx_8imXS9xYgXUJLHDBTS2OF">Hicathon Visual Assets (Drop your finished files here)</a>
          </div>
      </div>   
    </div>
    <footer className="footer">
        <div className="page__footer__message">
          Made with <span role="img" aria-label="red heart emoji">❤️</span> by <a href="https://twitter.com/homeworkpunks">@homeworkpunks</a>, powered by <a href="https://netlify.com">Netlify.</a>
        </div>
    </footer>
  </div>
)

export default Guidelines

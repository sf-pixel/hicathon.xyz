import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//import components
import Logo from '../components/logo'
import '../styles/styles.scss'
import '../styles/pages/conduct.scss'


const Conduct = () => (
  <div className="page__wrapper">
    <Logo />
    <div className="page__content">
      <Helmet>
          <title>hicathon | code of conduct</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Helmet>
      <div className="info__wrapper">
        <h1><span role="img" aria-label="old scroll emoji">📜</span> Code of Conduct</h1>
        <h3 className="sub__text">Hicathon | May 2021</h3>
        <div className="buttons">
          <Link to="/"><span role="img" aria-label="house emoji">🏠</span> Home</Link>
          <Link to="/guidelines">Brand Guidelines</Link>
          <Link to="/press">Press Release</Link>
          <Link to="/schedule">Schedule</Link>
        </div>
      </div>
      
      <div className="conduct__content">
            <h3><u>All participants</u> in the May 2021 Hicathon are required to agree to the following Code of Conduct: </h3>
            <div className="individual__conduct">
                <ul><br></br>
                    <li><strong>Be mindful of your language.</strong> Engage with community members and contributors with respect and good intention.</li>
                    <li><strong>Use your best judgement.</strong> If it will possibly make others uncomfortable, do not say it or post to the community forum.</li>
                    <li><strong>Be respectful.</strong> While disagreements may arise, it is not an opportunity to attack or threaten someone else's thoughts and/or opinions. Remember to approach every situation with patience, understanding, and great care.</li>
                    <li><strong>Be intentional.</strong> Consider how your contribution will affect others in the community.</li>
                    <li><strong>Be open-minded.</strong> Embrace new people and new ideas. Our community is continually evolving and we welcome positive change.</li>
                </ul><br></br>
            </div>
            <div classname="rights__reserved">
                <p>This Hicathon is dedicated to providing a harassment-free experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, mental illness, neurotype, physical appearance, body, age, race, ethnicity, nationality, language, or religion. We do not tolerate harassment of participants in any form. Any participant who violates this Code of Conduct may be expelled from the Hicathon at the discretion of the admins. HIcathon admins prioritize marginalized people’s safety over privileged people’s comfort.<i> We reserve the right <u>not</u> to act on complaints regarding:</i></p>
                <ul><br></br>
                    <li>‘Reverse’ -isms, including ‘reverse racism,’ ‘reverse sexism,’ and ‘cisphobia’</li>
                    <li>Reasonable communication of boundaries, such as “leave me alone,” “go away,” or “I’m not discussing this with you.”</li>
                    <li>Communicating in a ‘tone’ you don’t find congenial</li>
                    <li>Criticizing racist, sexist, cissexist, or otherwise oppressive behavior or assumption</li>
                </ul><br></br>
            </div>
            <div className="acknowledgement__statement">
                <p>Acknowledgements: This Code of Conduct was adapted from the Feral File discord server and Processing Community Day COC compiled by Dorothy R. Santos. It is based on resources provided by Geek Feminism, and borrows heavily from open source policies authored by p5.js and XOXO Festival. This policy is licensed under a Creative Commons Attribution 4.0 International license. We encourage other organizations to adopt (and enforce) similar Codes of Conduct by using and remixing this one.</p>
            </div>
            <div className="group__agreements">
                <h3>Group Agreements:</h3>
                <ul><br></br>
                    <li><strong>Try On</strong> – Risk trying new ideas, other points of view, and new behaviors; keep only what you choose.</li>
                    <li><strong>Speak your truth and focus on self</strong> – Notice when you speak and when you are silent, avoid generalizations such as “we”, “they”, etc.</li>
                    <li><strong>Agree to disagree</strong> – Make it okay to recognize when a difference is emerging, honor differences without shame, blame, or guilt.</li>
                    <li><strong>Both/and thinking</strong> – Break down false dichotomies that limit out thinking and compassion.</li>
                    <li><strong>Intent AND impact</strong> – Acknowledge and take responsibility for the impact of your words and actions; assume others have good intentions and/or inquire about intentions.</li>
                    <li><strong>Confidentiality</strong> – Keep others’ personal sharing in the room, unless noted otherwise.</li>
                    <li><strong>Expect and accept non-closure</strong> – You may have thoughts and feelings that go unresolved today and will be part of an ongoing discussion for the platform.</li>
                    <li><strong>Lean into uncomfortable conversation</strong> – This can expand all of our learning possibilities. Push yourself to not take criticism personally.</li>
                </ul><br></br>
            </div>
            <div className="ending__remarks">
                <p><i>Adapted from Glenn E Singleton & Curtis Linton, Courageous Conversations about Race: A Field Guide for Achieving Equity in Schools. 2006</i></p>
                <p>If you believe someone is violating the code of conduct on the forum, we ask you to report it by sending a DM to <u>verticalcryptoart@gmail.com</u>. Please include a description of the incident, and we will respond as quickly as possible.</p><br></br><hr></hr>
                <div className="additional__inspo">
                    <h4>For additional inspiration, below is a copy of OBJKTt# 6991 by Mario K from March 2021: </h4>
                    <StaticImage src='../images/Conduct/CoC.png' className="not__a__conduct" alt="document written by Mario K, titled 'Not a Code of Conduct'"/>
                </div>
                
            </div>
            
      </div>   
    </div>
    <footer className="footer">
        <div className="page__footer__message">
          Document made with <span role="img" aria-label="red hearth emoji">❤️</span> by <a href='https://twitter.com/jimfetterley'>@jimfetterley</a>, powered by <a href="https://netlify.com">Netlify.</a>
        </div>
    </footer>
  </div>
)

export default Conduct

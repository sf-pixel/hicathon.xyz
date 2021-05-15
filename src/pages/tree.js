import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//import components
import styles from '../styles/tree.scss'
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <div className="tree__content">
    <Helmet>
      <title>hicathon | tree</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Helmet>
    <div className="links">
    <a href="https://discord.gg/efHzUbPwsF">💬 Discord Channel</a>
    <a href="https://docs.google.com/spreadsheets/d/1zAD_4pHzygU204crpJWVyVoV27lSSW207ZZIaa8kcng/edit#gid=1267499412">📝 Hicathon Readme</a>
    <a href="https://docs.google.com/spreadsheets/d/1zAD_4pHzygU204crpJWVyVoV27lSSW207ZZIaa8kcng/edit#gid=0">📝 Volunteer Sign Up Sheet</a>
    <a href="https://miro.com/welcomeonboard/aIe9NoUMqwXEH1gH16rTeikeucQnai0Vam0ORwvmIQ4AHORYNaCgqKJNWF1HNXkH">💡 Miro Ideas + Planning Board</a>
    <a href="https://docs.google.com/spreadsheets/d/1zAD_4pHzygU204crpJWVyVoV27lSSW207ZZIaa8kcng/edit#gid=1016698333">💡 Google Sheets Idea Capture</a>
    <a href="/">🏠 Home</a>
    </div>
  </div>

)

export default IndexPage

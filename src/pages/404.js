import * as React from "react"
import { Helmet } from "react-helmet"
import '../styles/styles.scss'
import '../styles/404.scss'

const NotFoundPage = () => (
  <div className="content__404">
    <Helmet>
      <title>hicathon | 404</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Helmet>
    <p alt="404 page, an error occured"><span role="img" aria-label="Red x emoji">❌</span> An error occurred.</p>
  </div>
)

export default NotFoundPage

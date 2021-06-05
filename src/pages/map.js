import * as React from "react"
import '../styles/pages/map.scss'

const Map = () => (
    <div>
        <iframe src="https://graphcommons.com/graphs/efea1043-b8e6-4798-a8fe-cb7abab9bbe9/embed?topbar=false&fitgraph=true" frameborder="0" className="volunteer__map" title="volunteer data map"></iframe>
        <div className="float__button">
            <a href="/"><span role="img" aria-label="house emoji">🏠</span> Home</a>
        </div>
        <footer className="footer">
          <div className="page__footer__message">
          Map made with <span role="img" aria-label="red heart emoji">❤️</span> by <a href="https://twitter.com/ozlem_olcer">@oz</a>, powered by <a href="https://netlify.com">Netlify.</a>
          </div>
      </footer>
    </div>
    
)

export default Map
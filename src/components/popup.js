import * as React from "react"
import '../styles/popup.scss'
import '../styles/styles.scss'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup__inner">
                <a className="close__btn" onClick={() => props.setTrigger(false)}>x</a>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup
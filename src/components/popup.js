import * as React from "react"
import '../styles/popup/popup.scss'
import '../styles/styles.scss'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup__inner">
                <button className="close__btn" onClick={() => props.setTrigger(false)} tabindex="1">x</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup
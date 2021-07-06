import React from 'react'
import "./MonoButton.css"

function MonoButton(props) {
    return (
        <div>
            <button className="mono-button text">{props.content}</button>
        </div>
    )
}

export default MonoButton

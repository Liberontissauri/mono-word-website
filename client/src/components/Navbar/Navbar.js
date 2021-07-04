import React from 'react'
import "./Navbar.css"

function Navbar(props) {
    const items = [];
    if(props.links !== undefined) {
        props.links.forEach(element => {
            items.push(<li><a className="text navbar-link" href={element.link}>{element.content}</a></li>)
        });
    }
    
    return (
        <div className="navbar-div-main">
            <div className="navbar-div-left">
                <h1 className="navbar-title text">{props.title}</h1>
                <ul className="navbar-items">
                    {items}
                </ul>
            </div>
            <div className="navbar-div-right">
                
            </div>
        </div>
    )
}

export default Navbar

import React from "react"
import logo from "./logo.svg"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} alt="react-logo" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
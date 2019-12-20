import React, { Component } from 'react'
import { resume } from './../assets/resume.pdf'

export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { active: false }
    }

    onNavigation() { this.setState({ active: false }) }
    onBurgerClick() { this.setState({ active: !this.state.active }) }

    render(){
        return (
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div role="button"
                        className={`navbar-burger burger ${this.state.active ? 'is-active': ''}`}
                         aria-label="menu" aria-expanded="false"
                         data-target="navbar" onClick={() => this.onBurgerClick()}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>
                <div id="navbar"
                    className={`navbar-menu ${this.state.active ? 'is-active': ''}`} onClick={() => this.onNavigation()}>
                    <div className="navbar-start is-unselectable">
                        <a href="/#" className="navbar-item">Home</a>
                        <a href="/#about" className="navbar-item">About</a>
                        <a href="/#skills" className="navbar-item">Skills</a>
                        <a href="/#projects" className="navbar-item">Projects</a>
                        <a href="/#contact" className="navbar-item">Contact</a>
                    </div>
                    <div className="navbar-end">
                      <a href={resume} target="_blank" rel="noopener noreferrer" className="navbar-item">
                        <div className="button is-dark"><strong>Resume</strong></div>
                      </a>
                    </div>
                </div>
            </nav>
        )
    }
}

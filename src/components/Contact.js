import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => (
    <div id="contact" className="new-section">
        <div className="hero is-dark">
            <div className="hero-body is-fullwidth">
                <div className="container is-unselectable">
                    <h1 className="title has-text-left-desktop has-text-centered-touch">Contact Me</h1>
                </div>
            </div>
        </div>
        <section className="section has-background-white">
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <div className="tile is-child has-text-centered">
                        <div className="container">
                            <div className="is-size-2 has-text-weight-light">Let's get in touch</div>
                            <br/>
                            <div>
                                Would you like to work together or get in contact? Please send me an e-mail at <strong>inasirov@uwaterloo.ca</strong> and I will try my best to reply to you as soon as possible!
                            </div>
                            <br/>
                            <a href="https://github.com/ildarnasirov" 
                                className="contact-icon tooltip is-tooltip-bottom"
                                data-tooltip="Github">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faGithub} size="lg"/>
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/ildarnasirov/" 
                                className="contact-icon tooltip is-tooltip-bottom" 
                                data-tooltip="LinkedIn">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                                </span>
                            </a>
                            <a href="mailto:inasirov@edu.uwaterloo.ca" className="contact-icon">
                                <span 
                                    className="icon tooltip is-tooltip-bottom" 
                                    data-tooltip="Email">
                                    <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="is-divider"></div>
    </div>
)
import React from 'react'

export const Projects = () => (
    <div id="projects" className="new-section">
        <div className="hero is-dark">
            <div className="hero-body is-fullwidth">
                <div className="container is-unselectable">
                    <h1 className="title has-text-left-desktop has-text-centered-touch">Projects</h1>
                </div>
            </div>
        </div>
        <section className="section has-background-white">
            <div className="container">
                <p className="title has-text-weight-light has-text-centered">Here is a list of my personal projects:</p>
                <div className='tile is-ancestor'>
                    <div className="tile is-4 is-parent">
                        <div className="tile is-child box notification is-white">
                            <p className="title has-text-weight-light has-text-centered">Backlogger</p>
                            <br/>
                            <p className="subtitle has-text-weight-light has-text-centered">A collaboration-based application for keeping track of your entertainment backlogs</p>
                            <div className="content">
                                <div className="buttons is-centered">
                                    <a className="button is-text" href="https://github.com/ildarnasirov/backlogger">Check it out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tile is-4 is-parent">
                        <div className="tile is-child box notification is-white">
                            <p className="title has-text-weight-light has-text-centered">!ping</p>
                            <br/>
                            <p className="subtitle has-text-weight-light has-text-centered">An application that allows people with sight disabilities to find their friend with the help of binaural pinging</p>
                            <div className="content">
                                <div className="buttons is-centered">
                                    <div className="button is-text" disabled>Currently in progress</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tile is-4 is-parent">
                        <div className="tile is-child box notification is-white">
                            <p className="title has-text-weight-light has-text-centered">More to come!</p>
                            <br/>
                            <p className="subtitle has-text-weight-light has-text-centered">Please let me know if you have a cool idea and would be interested in collaboration!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)
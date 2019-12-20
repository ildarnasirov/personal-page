import React from 'react'
export const About = () => (
    <div id="about" className="new-section">
        <div className="hero is-dark">
            <div className="hero-body is-fullwidth">
                <div className="container is-unselectable">
                    <h1 className="title has-text-left-desktop has-text-centered-touch">About</h1>
                </div>
            </div>
        </div>
        <div className="section has-background-white">
            <div className="container">
                <p className="has-text-centered is-size-5">
                    I am a 4A student at University of Waterloo studying Computer Science and Statistics.<br/><br/>
                    I enjoy solving problems and I am always looking for the next challenge, be it in software development or any other field.<br/><br/>
                    My main experience is in Web Development, however some of my other current interests are Machine Learning, Android Development, and <br/> Data Visualization.
                </p>
            </div>
        </div>
        <div class="is-divider"></div>
        <section className="section has-background-white">
            <div className="container is-unselectable">
                <div className="title has-text-centered">My journey so far:</div>
                <div className="timeline is-centered">
                    <header className="timeline-header">
                        <span className="tag is-medium is-dark">2017</span>
                    </header>
                    <div className="timeline-item is-dark">
                        <div className="timeline-marker is-dark"></div>
                        <div className="timeline-content">
                            <p className="heading">May</p>
                            <p>Trapeze Group | Software Developer</p>
                        </div>
                    </div>
                    <header className="timeline-header">
                        <span className="tag is-dark">2018</span>
                    </header>
                    <div className="timeline-item is-dark">
                        <div className="timeline-marker is-dark"></div>
                        <div className="timeline-content">
                            <p className="heading">January</p>
                            <p>Carbonite | Software Developer</p>
                        </div>
                    </div>
                    <div className="timeline-item is-dark">
                        <div className="timeline-marker is-dark">
                            <i className="fa fa-flag"></i>
                        </div>
                        <div className="timeline-content">
                            <p className="heading">September</p>
                            <p>Adknown Inc. | Software Engineer</p>
                        </div>
                    </div>
                    <header className="timeline-header">
                        <span className="tag is-dark">2019</span>
                    </header>
                    <div className="timeline-item is-dark">
                        <div className="timeline-marker is-dark"></div>
                        <div className="timeline-content">
                            <p className="heading">May</p>
                            <p>SS&C Technologies | Full Stack Software Developer</p>
                        </div>
                    </div>
                    <header className="timeline-header">
                        <span className="tag is-dark">2020</span>
                    </header>
                    <div className="timeline-item is-dark">
                        <div className="timeline-marker is-dark"></div>
                        <div className="timeline-content">
                            <p className="heading">January</p>
                            <p>Oracle Corporation (NetSuite) | Software Developer</p>
                        </div>
                    </div>
                    <div className="timeline-item is-dark">
                        <div className="timeline-marker is-dark"></div>
                        <div className="timeline-content">
                            <p className="heading">May</p>
                            <p>Seeking an internship position for Summer 2020 term</p>
                        </div>
                    </div>
                    <header className="timeline-header">
                        <span className="tag is-medium is-dark">TBA</span>
                    </header>
                </div>
            </div>
        </section>
    </div>
)
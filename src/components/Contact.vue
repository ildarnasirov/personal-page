<template>
    <div id="contact" class="content-section">
        <div class="hero is-dark">
            <div class="hero-body is-fullwidth">
                <div class="container is-unselectable">
                    <h1 class="title has-text-left-desktop has-text-centered-touch">contact me</h1>
                </div>
            </div>
        </div>
        <section class="section has-background-white">
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <div class="tile is-child has-text-centered">
                        <div class="container">
                            <div class="is-size-2 has-text-weight-light">Let's get in touch</div>
                            <br/>
                            <div>
                                Would you like to work together or get in contact? Please send me an e-mail at <strong>inasirov@uwaterloo.ca</strong> and I will reply to you as soon as possible!
                            </div>
                            <br/>
                            <a 
                                href="https://github.com/ildarnasirov" 
                                class="contact-icon tooltip is-tooltip-bottom"
                                data-tooltip="Github">
                                <span class="icon">
                                    <font-awesome-icon size="lg" :icon="['fab', 'github']" class="icon alt"/>
                                </span>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/ildarnasirov/" 
                                class="contact-icon tooltip is-tooltip-bottom" 
                                data-tooltip="LinkedIn">
                                <span class="icon">
                                    <font-awesome-icon size="lg" :icon="['fab', 'linkedin']" class="icon alt"/>
                                </span>
                            </a>
                            <a 
                                href="mailto:inasirov@edu.uwaterloo.ca"
                                class="contact-icon tooltip is-tooltip-bottom" 
                                data-tooltip="Email">
                                <span class="icon">
                                    <font-awesome-icon size="lg" :icon="['fas', 'envelope']" class="icon alt"/>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
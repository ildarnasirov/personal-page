<template>
    <div id="about" class="content-section">
        <div class="hero is-dark">
            <div class="hero-body is-fullwidth">
                <div class="container is-unselectable">
                    <h1 class="title has-text-left-desktop has-text-centered-touch">about</h1>
                </div>
            </div>
        </div>
        <div class="section has-background-white">
            <div class="tile is-ancestor middle">
                <div class="tile is-1 is-parent is-vertical"></div>
                <div class="tile is-5 is-parent is-vertical">
                    <div class="tile is-child">
                        <div class="container ">
                            <p class=" is-size-5">
                                I am a 4th year student at University of Waterloo studying computer science and statistics.<br/><br/>
                                I enjoy solving problems and I am always looking for the next challenge, be it in software development or any other field.<br/><br/>
                                My main experience is in web development, however some of my other current interests are machine learning, and android development.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="is-divider-vertical"></div>
                <div class="tile is-5 is-parent is-vertical">
                    <div class="tile is-child">
                        <div class="container is-unselectable">
                            <p class="subtitle has-text-weight-light has-text-centered">where I worked</p>
                            <div class="timeline is-centered">
                                <header class="timeline-header">
                                    <span class="tag is-medium is-dark">2017</span>
                                </header>
                                <TimelineItem :month="'May'" :position="'Trapeze Group | Software Developer'" />
                                <header class="timeline-header">
                                    <span class="tag is-dark">2018</span>
                                </header>
                                <TimelineItem :month="'January'" :position="'Carbonite | Software Developer'" />
                                <TimelineItem :month="'September'" :position="'Adknown Inc. | Software Engineer'" />
                                <header class="timeline-header">
                                    <span class="tag is-dark">2019</span>
                                </header>
                                <TimelineItem :month="'May'" :position="'SS&C Technologies | Full Stack Software Developer'" />
                                <header class="timeline-header">
                                    <span class="tag is-dark">2020</span>
                                </header>
                                <TimelineItem :month="'January'" :position="'Oracle Corporation, NetSuite | Software Developer'" />
                                <TimelineItem :month="'May'" :position="'Salesforce, Marketing Cloud | Software Engineering Intern'" />
                                <header class="timeline-header">
                                    <span class="tag is-medium is-dark">Today</span>
                                </header>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tile is-1 is-parent is-vertical"></div>
            </div>
        </div>
    </div>
</template>
<script>
import TimelineItem from './TimelineItem'

export default {
    components: {
        TimelineItem
    }
}
</script>
<style scoped>
    @import '~bulma-extensions/bulma-divider/dist/css/bulma-divider.min.css';
    @import '~bulma-extensions/bulma-timeline/dist/css/bulma-timeline.min.css';
</style>
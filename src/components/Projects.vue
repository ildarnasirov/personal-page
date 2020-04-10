<template>
    <div id="projects" class="content-section">
        <div class="hero is-dark">
            <div class="hero-body is-fullwidth">
                <div class="container is-unselectable">
                    <h1 class="title has-text-left-desktop has-text-centered-touch">projects</h1>
                </div>
            </div>
        </div>
        <section class="section has-background-white">
            <div class="container">
                <p class="title has-text-weight-light has-text-centered">here is a list of my personal projects:</p>
                <div class='tile is-ancestor'>
                    <div class="tile is-4 is-parent">
                        <div class="tile is-child box notification is-white">
                            <p class="title has-text-weight-light has-text-centered">Backlogger</p>
                            <br/>
                            <p class="subtitle has-text-weight-light has-text-centered">A collaboration-based application for keeping track of your entertainment backlogs</p>
                            <div class="content">
                                <div class="buttons is-centered">
                                    <a class="button is-text" href="https://github.com/ildarnasirov/backlogger">Check it out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-4 is-parent">
                        <div class="tile is-child box notification is-white">
                            <p class="title has-text-weight-light has-text-centered">!ping</p>
                            <br/>
                            <p class="subtitle has-text-weight-light has-text-centered">An application that allows people with sight disabilities to find their friend with the help of binaural pinging</p>
                            <div class="content">
                                <div class="buttons is-centered">
                                    <div class="button is-text" disabled>Currently in progress</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-4 is-parent">
                        <div class="tile is-child box notification is-white">
                            <p class="title has-text-weight-light has-text-centered">More to come!</p>
                            <br/>
                            <p class="subtitle has-text-weight-light has-text-centered">Please let me know if you have a cool idea and would be interested in collaboration!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data: () => ({
        backlogger: {
            name: 'backlogger',
            subtext: 'a collaboration-based application for keeping track of your entertainment backlogs',
            link: 'https://github.com/ildarnasirov/backlogger'
        },
        ping: {
            name: '!ping',
            subtext: 'an application that allows people with sight disabilities to find their friend with the help of binaural pinging'
        }
    })
}
</script>
<style scoped>
    @import '~bulma-extensions/bulma-divider/dist/css/bulma-divider.min.css';
</style>
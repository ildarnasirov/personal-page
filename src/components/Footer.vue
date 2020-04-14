<template>
    <footer class="footer has-background-white">
        <div class="is-divider"></div>
        <div class="content has-text-centered is-unselectable">
            <p>Made by Ildar Nasirov using Vue.js and Bulma. Source code can be found <a :href="urlPage" target="_blank" rel="noopener noreferrer">here.</a></p>
            <p>Photo by <a :href="urlPhotographer" target="_blank" rel="noopener noreferrer">Benjamin Suter</a> on <a :href="urlPhoto" target="_blank" rel="noopener noreferrer">Unsplash</a></p>
        </div>
    </footer>
</template>
<script>
export default {
    data: () => ({
        urlPage: 'https://github.com/ildarnasirov/personal-page',
        urlPhoto:'https://unsplash.com/photos/W8CLgqhjZuw',
        urlPhotographer: 'https://unsplash.com/@benjaminjsuter'
    })
}
</script>
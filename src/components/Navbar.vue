<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div role="button"
                :class="{'is-active': active}"
                @click="active = !active"
                class="navbar-burger burger"
                aria-label="menu" aria-expanded="false"
                data-target="navbar">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
            </div>
        </div>
        <div id="navbar"
            :class="{'is-active': active}"
            @click="active = false"
            class="navbar-menu">
            <div class="navbar-start is-unselectable">
                <a v-for="(text, index) in Object.keys(textToUrl)" 
                    class="navbar-item"
                    :class="{'is-active': activeIndex == index}"
                    @click="activeIndex = index; active = false"
                    :key="index"
                    :href="textToUrl[text]">{{ text }}</a>
            </div>
            <div class="navbar-end">
                <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" class="navbar-item">
                    <div class="button is-dark">resume</div>
                </a>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data: () => ({
        active: false,
        activeIndex: 0,
        textToUrl: {
            'home': '/#',
            'about': '/#about',
            'skills': '/#skills',
            'projects': '/#projects',
            'contact me': '/#contact'
        }
    })
}
</script>
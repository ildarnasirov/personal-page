<template>
    <article class="media">
        <div class="media-content">
            <div class="content has-text-centered is-unselectable">
                <h2 class="is-2">{{ skillList.skillTitle }}</h2>
                <div v-for="(section, sectionIndex) in skillList.sections" :key="sectionIndex" class="section">
                    <h4 class="is-4">{{ section.title }}</h4>
                    <div class="tags is-centered">
                        <span v-for="(skill, skillIndex) in section.skills" 
                            :key="skillIndex" class="tag">{{ skill }}</span>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    props: [ 'skillList' ]
}
</script>
<template>
    <div class="timeline-item is-dark">
            <div class="timeline-marker is-dark"></div>
            <div class="timeline-content">
                <p class="heading">{{ month }}</p>
                <p>{{ position }}</p>
            </div>
        </div>
</template>
<script>
export default {
    props: ['month', 'position']
}
</script>
<template>
    <div id="skills" class="content-section">
        <div class="hero is-dark">
            <div class="hero-body is-fullwidth">
                <div class="container">
                    <h1 class="title has-text-left-desktop has-text-centered-touch is-unselectable">skills</h1>
                </div>
            </div>
            <section class="section has-background-white">
                <div class="tile is-ancestor middle">
                    <div class="tile is-1 is-parent is-vertical"></div>
                    <div class="tile is-3 is-parent is-vertical">
                        <div class="tile is-child">
                            <SkillList :skillList="myFrontEnd" />
                        </div>
                    </div>
                    <div class="is-divider-vertical"></div>
                    <div class="tile is-3 is-parent is-vertical">
                        <div class="tile is-child">
                            <SkillList :skillList="myBackEnd" />
                        </div>
                    </div>
                    <div class="is-divider-vertical"></div>
                    <div class="tile is-3 is-parent is-vertical">
                        <div class="tile is-child">
                            <SkillList :skillList="dataScience" />
                        </div>
                    </div>
                    <div class="tile is-1 is-parent is-vertical"></div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import SkillList from './SkillList'

export default {
    data: () => ({
        myFrontEnd: {
            skillTitle: 'Front-End Development',
            sections: [{
                title: 'Languages',
                skills: ['javascript', 'typescript', 'java', 'html/css', 'scss/sass']
            },{
                title: 'Frameworks and Technologies',
                skills: ['vue.js', 'angular 8', 'android', 'react.js']
            },{
                title: 'Libraries',
                skills: ['redux', 'vuex', 'jquery', 'bootstrap', 'bulma']
            }]
        },
        myBackEnd: {
            skillTitle: 'Back-End Development',
            sections: [{
                title: 'Languages and Libraries',
                skills: ['javascript', 'c++', 'java', 'kotlin', 'php', 'c#' ]
            },{
                title: 'Databases',
                skills: ['mysql', 'oracle', 'mongodb']
            },{
                title: 'Libraries and Technologies',
                skills: ['node.js','express.js', 'graphql']
            }]
        },
        dataScience: {
            skillTitle: 'Data Science',
            sections: [{
                title: 'Languages',
                skills: ['r', 'python']
            },{
                title: 'Libraries',
                skills: ['numpy', 'pandas', 'scikit-learn', 'tensorflow']
            }],
        }
    }),
    components: {
        SkillList
    }
}
</script>
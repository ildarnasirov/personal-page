import React from 'react'
import { SkillList } from './SkillList'

const myFrontEndSkills = {
    skillTitle: 'Front-End Development',
    sections: [{
        title: 'Languages',
        skills: ['JavaScript', 'TypeScript', 'Java', 'HTML/CSS', 'SASS']
    },{
        title: 'Frameworks and Technologies',
        skills: ['Vue.js', 'Angular 8', 'Android', 'React.js']
    },{
        title: 'Libraries',
        skills: ['Redux', 'Vuex', 'Bootstrap', 'Bulma', 'JQuery']
    }]
};

const myBackEndSkills = {
    skillTitle: 'Back-End Development',
    sections: [{
        title: 'Languages and Libraries',
        skills: ['JavaScript', 'C++', 'Java', 'PHP', 'C#' ]
    },{
        title: 'Databases',
        skills: ['MySQL', 'MongoDB']
    },{
        title: 'Libraries and Technologies',
        skills: ['Node.js','Express.js', 'GraphQL']
    }]
};

export const Skills = () => (
    <div id="skills" className="new-section">
        <div className="hero is-dark">
            <div className="hero-body is-fullwidth">
                <div className="container">
                    <h1 className="title has-text-left-desktop has-text-centered-touch is-unselectable">Skills</h1>
                </div>
            </div>
            <section className="section has-background-white">
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <div className="tile is-child">
                            <SkillList skillList={myFrontEndSkills}/>
                        </div>
                    </div>
                    <div className="is-divider-vertical"></div>
                    <div className="tile is-parent">
                        <div className="tile is-child">
                            <SkillList skillList={myBackEndSkills}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
) 
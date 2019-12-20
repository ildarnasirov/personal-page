import React from 'react'

export const SkillList = ({ skillList }) => (
    <article className="media">
        <div className="media-content">
            <div className="content has-text-centered is-unselectable">
                <h2 className="is-2">{skillList.skillTitle}</h2>
                { 
                    skillList.sections.map((section, sectionIndex) => (
                        <div className="section" key={sectionIndex}>
                            <h4 className="is-4">{section.title}</h4>
                            <div className="tags is-centered">
                                { 
                                    section.skills.map((skill, skillIndex) => (
                                        <span className="tag" key={skillIndex}>{skill}</span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </article>
)
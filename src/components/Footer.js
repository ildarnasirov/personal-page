import React from 'react'
const urlPage = 'https://github.com/ildarnasirov/personal-page'
const urlPhoto = 'https://unsplash.com/photos/W8CLgqhjZuw'
const urlPhotographer = 'https://unsplash.com/@benjaminjsuter'

export const Footer = () => (
    <footer className="footer has-background-white">
        <div className="content has-text-centered is-unselectable">
            <p>Made by Ildar Nasirov using React.js and Bulma. Source code can be found <a href={urlPage} target="_blank" rel="noopener noreferrer">here.</a></p>
            <p>Photo by <a href={urlPhotographer} target="_blank" rel="noopener noreferrer">Benjamin Suter</a> on <a href={urlPhoto} target="_blank" rel="noopener noreferrer">Unsplash</a></p>
        </div>
    </footer>
)
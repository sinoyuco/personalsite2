import React from 'react';

const StarJouster = () => {
    return (
        <div className="project-main">

            <div className="project-gif">
                <a className="project-gif-link" href="https://sinoyuco.github.io/StarJouster/" target="_blank">
                    <img src="https://hiptrip-aa-seed.s3.amazonaws.com/psite/SJ.gif" alt="" />
                </a>
            </div>


            <div className="project-dropdown-triangle"></div>
            <div className="project-dropdown">
                <div className="project-header">
                    <h2 className="project-header-starjouster">STARJOUSTER</h2>
                    <p>Used: <strong>Canvas, <em className="em-js">JavaScript</em></strong></p>
                </div>

                <div className="project-description">
                    <p className="project-description-starjouster">Defeat sith lords in lightsaber joust battles and pick up their lightsabers. If you don't, they will respawn and you will soon be overwhelmed.</p>
                </div>

                <div className="project-links">

                    <a href="https://sinoyuco.github.io/StarJouster/" target="_blank"><h2>Live</h2></a>
                    <div className="project-links-separator"></div>
                    <a href="https://github.com/sinoyuco/StarJouster" target="_blank"><h2>Github</h2></a>

                </div>
            </div>
        </div>
    )
};

export default StarJouster;
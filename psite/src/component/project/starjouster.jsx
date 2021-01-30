import React from 'react';

const StarJouster = () => {
    return (
        <div className="project-main">

            <div className="project-gif">
                <a className="project-gif-link" href="https://sinoyuco.github.io/StarJouster/" target="_blank">
                    <img src="https://hiptrip-aa-seed.s3.amazonaws.com/psite/SJ.gif" alt="" />
                </a>
            </div>


            <div className="project-dropdown">
                <div className="project-header">
                    <h2>STARJOUSTER</h2>
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
import React from 'react';

const OwnProps = () => {
    return(
        <div className="project-main">

            <div className="project-gif">
                <a className="project-gif-link" href="https://aa-ownpropsdotmatch.herokuapp.com/" target="_blank">
                    <img src="https://hiptrip-aa-seed.s3.amazonaws.com/psite/OPM.gif" alt="" />
                </a>
            </div>


            <div className="project-dropdown">
                <div className="project-header">
                    <h2>OWNPROPS.MATCH</h2>
                </div>

                <div className="project-links">

                    <a href="https://aa-ownpropsdotmatch.herokuapp.com/" target="_blank"><h2>Live</h2></a>
                    <div className="project-links-separator"></div>
                    <a href="https://github.com/sinoyuco/OwnProps.Match" target="_blank"><h2>Github</h2></a>

                </div>
            </div>
        </div>
    )
};

export default OwnProps;
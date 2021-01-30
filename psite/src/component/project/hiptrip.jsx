import React from 'react';

const HipTrip = () => {
    return (
        <div className="project-main">
            
            
            <div className="project-gif">
                <a className="project-gif-link" href="https://aa-hiptrip.herokuapp.com/" target="_blank">
                    <img src="https://hiptrip-aa-seed.s3.amazonaws.com/psite/Kapture+2021-01-29+at+18.23.18.gif" alt=""/>
                </a>
            </div>
            

            <div className="project-dropdown">
                <div className="project-header">
                    <h2>HIPTRIP</h2>
                </div>

                <div className="project-links">
                    
                    <a href="https://aa-hiptrip.herokuapp.com/" target="_blank"><h2>Live</h2></a>
                    <div className="project-links-separator"></div>
                    <a href="https://github.com/sinoyuco/HipTrip" target="_blank"><h2>Github</h2></a>
                    
                </div>
            </div>
        </div>
    )
};

export default HipTrip;
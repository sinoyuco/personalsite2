import React from 'react';

const HipTrip = () => {
    return (
        <div className="project-main">
            
            
            <div className="project-gif">
                <a className="project-gif-link" href="https://aa-hiptrip.herokuapp.com/" target="_blank">
                    <img src="https://hiptrip-aa-seed.s3.amazonaws.com/psite/Kapture+2021-01-29+at+18.23.18.gif" alt=""/>
                </a>
            </div>
            
            <div className="project-dropdown-triangle"></div>
            <div className="project-dropdown">
                <div className="project-header">
                    <h2 className="project-header-hiptrip">HipTrip</h2>
                    <p>Used: <strong> PostgreSQL, <em className="em-rails">Rails</em>, <em className="em-react">React</em>, <em className="em-react">Redux</em></strong></p>
                </div>

                <div className="project-description">
                    <p className="project-description-hiptrip">HipTrip is an online marketplace for camping experiences. Users can search for sports, book them or leave reviews.</p>
                </div>

                <div className="project-links">
                    
                    <a className="project-link" href="https://aa-hiptrip.herokuapp.com/" target="_blank"><p>Live</p></a>
                    
                    <a className="project-link" href="https://github.com/sinoyuco/HipTrip" target="_blank"><p>Repo</p></a>
                    
                </div>
            </div>
        </div>
    )
};

export default HipTrip;
import React from 'react';

const OwnProps = () => {
    return(
        <div className="project-main">

            <div className="project-gif">
                <a className="project-gif-link" href="https://aa-ownpropsdotmatch.herokuapp.com/" target="_blank">
                    <img src="https://hiptrip-aa-seed.s3.amazonaws.com/psite/OPM.gif" alt="gif and crap" />
                </a>
            </div>


            <div className="project-dropdown-triangle"></div>
            <div className="project-dropdown">
                <div className="project-header">
                    <h2 className="project-header-ownprops">OWNPROPS</h2>
                    <p>Used: <strong> <em className="em-mongo">MongoDB</em>, <em className="em-js">Express.js</em>, <em className="em-js">Node.js</em>, <em className="em-react">React</em>, <em className="em-react">Redux</em> </strong></p>
                </div>

                <div className="project-description">
                    <p className="project-description-ownprops">OwnProps.Match is a matching application to bring together people who are looking for pair programmers. Users create profiles, like other profiles and match with mutual likes.</p>
                </div>

                <div className="project-links">

                    <a className="project-link" href="https://aa-ownpropsdotmatch.herokuapp.com/" target="_blank"><p>Live</p></a>
                    
                    <a className="project-link" href="https://github.com/sinoyuco/OwnProps.Match" target="_blank"><p>Repo</p></a>

                </div>
            </div>
        </div>
    )
};

export default OwnProps;
import React, { useState } from 'react';
import General from './general';
import Skills from './skills';

const Info = () => {

    const [section, setSection] = useState("General");

    const sections = {
        'General': <General />,
        'Skills': <Skills />
    };

    return (
        <div className="info-main">
            <div className="info-bar">
                <div onClick={() => setSection('General')} className="info-general-button">
                    <i className="fas fa-info-circle"></i>
                    <div className="info-button-dropdown"><p>About</p></div>
                </div>
                <div className="info-bar-separator"></div>
                <div onClick={() => setSection('Skills')} className="info-skills-button">
                    <i className="fas fa-code"></i>
                    <div className="info-button-dropdown"><p>Skills</p></div>
                </div>
                <div className="info-bar-separator"></div>
                <div className="info-resume-button">
                    <i className="fas fa-download"></i>
                    <div className="info-button-dropdown"><p>Resume</p></div>
                </div>

            </div>
            <div className="info-show">
                {sections[section]}
            </div>
        </div>
    )

};

export default Info;
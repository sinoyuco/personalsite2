import React, { useState } from 'react';
import General from './general';
import Skills from './skills';
import Resume from './resume';

const Info = () => {

    const [section, setSection] = useState("General");

    const sections = {
        'General': <General />,
        'Skills': <Skills />,
        'Resume': <Resume />
    };

    return (
        <div className="info-main">
            <div className="info-bar">
                <div onClick={() => setSection('General')} className="info-general-button">
                    <i id={section=='General' ? 'active-banner' : 'inactive-banner'} className="fas fa-info-circle"></i>
                    <div className="info-button-dropdown"><p>About</p></div>
                </div>
                <div className="info-bar-separator"></div>
                <div onClick={() => setSection('Skills')} className="info-skills-button">
                    <i id={section == 'Skills' ? 'active-banner' : 'inactive-banner'} className="fas fa-code"></i>
                    <div className="info-button-dropdown"><p>Skills</p></div>
                </div>
                <div className="info-bar-separator"></div>
                <div onClick={() => setSection('Resume')} className="info-resume-button">
                    <i id={section == 'Resume' ? 'active-banner' : 'inactive-banner'} className="fas fa-download"></i>
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
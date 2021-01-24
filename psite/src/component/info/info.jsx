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
                    <i class="fas fa-info-circle"></i>
                </div>
                <div className="info-bar-separator"></div>
                <div onClick={() => setSection('Skills')} className="info-skills-button">
                    <i class="fas fa-code"></i>
                </div>
                <div className="info-bar-separator"></div>
                <div className="info-resume-button">
                    <i class="fas fa-download"></i>
                </div>

            </div>
            <div className="info-show">
                {sections[section]}
            </div>
        </div>
    )

};

export default Info;
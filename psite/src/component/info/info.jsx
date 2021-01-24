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
                    <h1>General</h1>
                </div>

                <div onClick={() => setSection('Skills')} className="info-skills-button">
                    <h1>Skills</h1>
                </div>

                <div className="info-resume-button">
                    <h1>Resume</h1>
                </div>

            </div>
            <div className="info-show">
                {sections[section]}
            </div>
        </div>
    )

};

export default Info;
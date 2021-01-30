import React, {useState} from 'react';
import HipTrip from './hiptrip';
import StarJouster from './starjouster';
import OwnProps from './ownprops';

const Projects = () => {

    const [name, setName] = useState("HipTrip");

    const projects = {
        'HipTrip': <HipTrip/>,
        'StarJouster': <StarJouster/>,
        'OwnProps': <OwnProps/>
    };

    return(
        <div className="projects-main">
            <div className="projects-bar">
                <div onClick={() => setName('HipTrip')} className="projects-hiptrip-button">
                    <div className={name=="HipTrip" ? "logo-circle-parent-active" : "logo-circle-parent"}>
                        <div className="project-logo-container-circle">
                            <img className="hiptrip-logo" src="https://hiptrip-aa-seed.s3.amazonaws.com/logo/green_icon.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="info-bar-separator"></div>
                <div onClick={() => setName('StarJouster')} className="projects-starjouster-button">
                    <div className={name == "StarJouster" ? "logo-circle-parent-active" : "logo-circle-parent"}>
                        <div className="project-logo-container-circle">
                            <img className="starjouster-logo" src="https://hiptrip-aa-seed.s3.amazonaws.com/psite/luke_left_frozen.png"/>
                        </div>
                    </div>
                </div>
                <div className="info-bar-separator"></div>
                <div onClick={() => setName('OwnProps')} className="projects-ownprops-button">
                    <div className={name == "OwnProps" ? "logo-circle-parent-active" : "logo-circle-parent"}>
                        <div className="project-logo-container-circle-ownprops">
                            <img className="ownprops-logo" src="https://hiptrip-aa-seed.s3.amazonaws.com/psite/opdmlogo.png"/>
                        </div>
                    </div>
                </div>

            </div>
            <div className="projects-show">
                {projects[name]}
            </div>
        </div>
    )
    
};

export default Projects;
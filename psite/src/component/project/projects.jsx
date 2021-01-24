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
                    <h1>HipTrip</h1>
                </div>

                <div onClick={() => setName('OwnProps')} className="projects-ownprops-button">
                    <h1>OwnProps</h1>
                </div>

                <div onClick={() => setName('StarJouster')} className="projects-starjouster-button">
                    <h1>StarJouster</h1>
                </div>
            </div>
            <div className="projects-show">
                {projects[name]}
            </div>
        </div>
    )
    
};

export default Projects;
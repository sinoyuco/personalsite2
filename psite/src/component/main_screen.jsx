import React, {useState} from 'react';
import Projects from './project/projects';
import Info from './info/info';

const MainScreen = () => {

    const [type, setType] = useState('Info');

    const types = {
        'Info': <Info/>,
        'Projects': <Projects/>
    }

    return(
        <div className="screen-main">
            <div className="screen-left">
                <div onClick={() => setType('Info')} className="screen-left-info">
                    <h1>Info</h1>
                </div>
                
                <div onClick={() => setType('Projects')} className="screen-left-projects">
                    <h1>Projects</h1>
                </div>
            </div>
            <div className="screen-right">
                {types[type]}
            </div>
        </div>
    );
};


export default MainScreen;
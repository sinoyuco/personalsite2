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
                    <i id={type=='Info' ? 'active-banner' : 'inactive-banner' } className="fas fa-user-circle"></i>
                    <div className="main-button-dropdown"><p>Info</p></div>
                </div>

                <div className="screen-left-separator"></div>
                
                <div onClick={() => setType('Projects')} className="screen-left-projects">
                    <i id={type == 'Projects' ? 'active-banner' : 'inactive-banner'} class="fas fa-book"></i>
                    <div className="main-button-dropdown"><p>Projects</p></div>
                </div>
            </div>
            <div className="screen-right">
                {types[type]}
            </div>
        </div>
    );
};


export default MainScreen;
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
                    <i className="fas fa-user-circle"></i>
                </div>

                <div className="screen-left-separator"></div>
                
                <div onClick={() => setType('Projects')} className="screen-left-projects">
                    <i class="fas fa-book"></i>
                </div>
            </div>
            <div className="screen-right">
                {types[type]}
            </div>
        </div>
    );
};


export default MainScreen;
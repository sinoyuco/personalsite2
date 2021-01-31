import React, { useState } from 'react';

const Resume = () => {

    const [selection, setSelection] = useState('');

    if(selection=="View"){
        // 
    }
    return(
        <div className="resume-main">
            <div className="resume-buttons-div">
                <div className="resume-view-button" onClick={() => setSelection('View')}>
                    <p>View</p>
                </div>
                <p>or</p>
                <div className="resume-download-button">
                    <p>Download</p>
                </div>
            </div>
        </div>
    );
}


export default Resume;
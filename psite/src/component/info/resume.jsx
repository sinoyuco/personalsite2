import React, { useState } from 'react';

const Resume = () => {

    const [selection, setSelection] = useState('');

    if(selection=="View"){
        return(
            <div className="resume-main">
                <div className="resume-top">
                    <div className="resume-button" onClick={() => setSelection('')}>
                        <p>Back</p>
                    </div>
                </div>

                <div className="resume-bottom">

                </div>
            </div>
        )
    }
    return(
        <div className="resume-main">
            <div className="resume-buttons-div">
                <div className="resume-button" onClick={() => setSelection('View')}>
                    <p>View</p>
                </div>
            </div>

            <div className="resume-buttons-separator"></div>

            <div className="resume-buttons-div">
                <div className="resume-button">
                    <p>Download</p>
                </div>
            </div>
        </div>
    );
}


export default Resume;
import React, { useState } from 'react';


const Resume = () => {

    const [selection, setSelection] = useState('');

    if(selection=="View"){
        return(
            <div className="resume-main-view">
                <div className="resume-top">
                    <div className="resume-button-back" onClick={() => setSelection('')}>
                        <i class="fas fa-arrow-left"></i>
                        <p>Back</p>
                    </div>
                </div>

                <div className="resume-bottom">
                    <embed src="SinanYucesanResume.pdf#zoom=73" type="application/pdf" width="100%" height="100%"/>
                </div>
            </div>
        );
    }else{
        return(
            <div className="resume-main">
                <div className="resume-buttons-div">
                    <div className="resume-button" onClick={() => setSelection('View')}>
                        <p>View</p>
                    </div>
                </div>
    
                <div className="resume-buttons-separator"></div>
    
                <div className="resume-buttons-div">
                    <a href="SinanYucesanResume.pdf" download> 
                        <div className="resume-button">
                            <p>Download</p>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}


export default Resume;
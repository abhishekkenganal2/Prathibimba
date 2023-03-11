import React from 'react';
import './header.css'; 
import main from './Prathibimba1.png';

function HomepageHeader(props) {
    return (
        <div>
            <div className="header-container-2">
                <img src={main} alt="company logo" className="logo" />
            </div>
        </div>
    );
}

export default HomepageHeader;
import React from 'react';

import onlineIcon from '../../icons/online-icon.png';
import closeIcon from '../../icons/close-icon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
    <div className="info-bar">
        <div className="left-inner-container">
            <img className="online-icon" src={onlineIcon} alt="online icon" />
            <h3>{room}</h3>
        </div>
        <div className="right-inner-container">
            <a href="/"><img src={closeIcon} alt="close icon" /></a>
            {/* using <a> tags with href not the best practice for React apps,
            since it is refresh the entire page etc., but here it is made for simplification, since we also don't use React 
            routes and for the simplicity resorted to querystring library and 
            its queryparams options*/}
        </div>
    </div>
);

export default InfoBar;
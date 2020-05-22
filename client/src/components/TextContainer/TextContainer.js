import React from 'react';

import onlineIcon from '../../icons/online-icon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
    <div className="text-container">
        {
            users
                ? (
                    <div>
                        <h2>Currently chatting:</h2>
                        <div className="active-container">
                            <div>
                                {users.map(({ name }) => (
                                    <div key={name} className="active-item">
                                        {name}
                                        <img alt="Online Icon" src={onlineIcon} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
                : null
        }
    </div >
);

export default TextContainer;

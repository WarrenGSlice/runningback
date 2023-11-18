import React from "react";
import './Track.css';

const PlayerName = (props) => {


    return (
        <div className="post-container">
            <li>{props.name}</li>
            <button onClick={() => props.onGetDetails(props)}>OK</button>
        </div>
    );
};

export default PlayerName;
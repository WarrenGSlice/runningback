import React, { useState } from "react";
import TrackList from './TrackList';
import TrackLyrics from "./TrackLyrics";
import TrackVideo from "./TrackVideo";

const OnePlayer = (props) => {

    const playerStats = props.runningback.name;
    const [Lyricstext, setLyricsText] = useState("Something New Coming Soon...");
    const [Videotext, setVideoText] = useState("Content Coming Soon...");
    console.log('Career Stats ', playerStats);

    const updateLyrics = (text) => {
        setLyricsText(text);
    }

    const updateVideo = (text) => {
        console.log('Update text to ', text);
        setVideoText(text);
    }

    return (
        <div className='container'>
            <h2>Player Details for {props.runningback.name}</h2>
            <div className='row'>
                <div className='col col-sm-3'>
                    <div className='card'>
                        <img
                            src={props.runningback.team}
                            className='card-img-top'
                            alt={props.runningback.name}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{props.runningback.name}</h5>
                            <p className="card-text">{props.runningback.points}</p>
                            <div className="list-group">
                                <li>Show the Player's Career Stats here</li>
                                <TrackList playerStats={playerStats} setLyricsText={updateLyrics} setVideoText={updateVideo} />

                            </div>
                            <a href="/#" className="btn btn-primary">
                                Edit
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col col-sm-9">
                    <div className="card">
                        <TrackLyrics text={Lyricstext} />
                    </div>
                    <div className="card">
                        <TrackVideo text={Videotext} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OnePlayer;
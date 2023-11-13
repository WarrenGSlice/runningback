import React from "react";
import TrackTitle from "./TrackTitle";

const TrackList = (props) => {
    const onGetDetails = (runningback) => {
        console.log('runningback', runningback);
        console.log('props', props);
        props.setLyricsText(runningback.name);
        props.setVideoText(runningback.name);

    }

    console.log('props TrackList', props);
    const playerStats = props.runningback.map((runningback) => {
        return (
            <div>
                <TrackTitle
                    key={runningback.rbId}
                    trackTitle={runningback.name}
                    trackLyrics={runningback.name}
                    trackVideo={runningback.name}
                    onGetDetails={onGetDetails}
                />
            </div>

        );
    });
    return <div className="container">{playerStats}</div>
};

export default TrackList;
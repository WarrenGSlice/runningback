import React, { useState, useEffect } from "react";
import PlayerName from "./PlayerName";
import datasource from "./datasource";

const StatList = (props) => {

    const [ statList, setStatList] = useState([]);

    const onGetDetails = (stats) => {
        console.log('stats', stats);
        console.log('props', props);
        props.setLyricsText(stats.name);
        props.setVideoText(stats.name);

    }

    const loadStats = async () => {
        const response = await datasource.get('/stats');

      setStatList(response.data);
    };
    // Setup initialization callback
    //useEffect(() => {
        // Update the running back List
      //  loadStats();
    //}, []);
    console.log('props StatList', props);
    const playerStatList = statList.map((props) => {
        return (
            <div>
                <PlayerName
                    key={props.playerId}
                    playerName={props.name}
                    playerImg={props.img}
                    age={props.age}
                    height={props.height}
                    weight={props.weight}
                    exp={props.exp}
                    college={props.college}
                    year={props.year}
                    team={props.team}
                    gp={props.gp}
                    points={props.points}
                    rank={props.rank}
                    att={props.att}
                    rushYd={props.rushYd}
                    rushYpc={props.rushYpc}
                    rushTd={props.rushTd}
                    tar={props.tar}
                    rec={props.rec}
                    recYd={props.recYd}
                    recYpt={props.recYpt}
                    recYpc={props.recYpc}
                    recTd={props.recTd}
                    fum={props.fum}
                    lost={props.lost}
                    onGetDetails={onGetDetails}
                />
            </div>

        );
    });
    return <div className="container">{playerStatList}</div>
};

export default StatList;
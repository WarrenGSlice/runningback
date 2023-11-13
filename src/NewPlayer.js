import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataSource from "./datasource";

const NewPlayer = (props) => {
    const [rank, setRank] = useState('');
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');
    const [byeWeek, setByeWeek] = useState('');
    const [points, setPoints] = useState('');
    const [rushAttempts, setRushAttempts] = useState('');
    const [rushYards, setRushYards] = useState('');
    const [rushTds, setRushTds] = useState('');
    const [recs, setRecs] = useState('');
    const [recYards, setRecYards] = useState('');
    const [recTds, setRecTds] = useState('');
    const [fum, setFum] = useState('');
    const [fumLost, setFumLost] = useState('');
    const [firstDowns, setFirstDowns] = useState('');
    const [hundredGame, setHundredGame] = useState('');
    const [twoHundredGame, setTwoHundredGame] = useState('');
    const [fourtyPlay, setFourtyPlay] = useState('');
    const [fourtyTd, setFourtyTd] = useState('');
    const [passComp, setPassComp] = useState('');
    const [passYards, setPassYards] = useState('');
    const [passTds, setPassTds] = useState('');
    const [targetShare, setTargetShare] = useState('');
    const [pointsGame, setPointsGame] = useState('');

    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log("submit");
        const runningback = {
            rank: rank,
            name: name,
            team: team,
            byeWeek: byeWeek,
            points: points,
            rushAttempts: rushAttempts,
            rushYards: rushYards,
            rushTds: rushTds,
            recs: recs,
            recYards: recYards,
            recTds: recTds,
            fum: fum,
            fumLost: fumLost,
            firstDowns: firstDowns,
            hundredGame: hundredGame,
            twoHundredGame: twoHundredGame,
            fourtyPlay: fourtyPlay,
            fourtyTd: fourtyTd,
            passComp: passComp,
            passYards: passYards,
            passTds: passTds,
            targetShare: targetShare,
            pointsGame: pointsGame,
        };
        console.log(runningback);

        savePlayer(runningback);
    };

    const savePlayer = async (runningback) => {
        const response = await dataSource.post('/runningbacks', runningback);
        console.log(response);
        console.log(response.data);
        props.onNewPlayer(navigate);
    };

    const handleCancel = () => {
        navigate("/");
    }

    const updateRank = (event) => {
        setRank(event.target.value);
    };
    const updateName = (event) => {
        setName(event.target.value);
    };
    const updateTeam = (event) => {
        setTeam(event.target.value);
    };
    const updateByeWeek = (event) => {
        setByeWeek(event.target.value);
    };
    const updatePoints = (event) => {
        setPoints(event.target.value);
    };
    const updateRushAttempts = (event) => {
        setRushAttempts(event.target.value);
    };
    const updateRushYards = (event) => {
        setRushYards(event.target.value);
    };
    const updateRushTds = (event) => {
        setRushTds(event.target.value);
    };
    const updateRecs = (event) => {
        setRecs(event.target.value);
    };
    const updateRecYards = (event) => {
        setRecYards(event.target.value);
    };
    const updateRecTds = (event) => {
        setRecTds(event.target.value);
    };
    const updateFum = (event) => {
        setFum(event.target.value);
    };
    const updateFumLost = (event) => {
        setFumLost(event.target.value);
    };
    const updateFirstDowns = (event) => {
        setFirstDowns(event.target.value);
    };
    const updatehundredGame = (event) => {
        setHundredGame(event.target.value);
    };
    const updateTwoHundredGame = (event) => {
        setTwoHundredGame(event.target.value);
    };
    const updateFourtyPlay = (event) => {
        setFourtyPlay(event.target.value);
    };
    const updateFourtyTd = (event) => {
        setFourtyTd(event.target.value);
    };
    const updatePassComp = (event) => {
        setPassComp(event.target.value);
    };
    const updatePassYards = (event) => {
        setPassYards(event.target.value);
    };
    const updatePassTds = (event) => {
        setPassTds(event.target.value);
    };
    const updateTargetShare = (event) => {
        setTargetShare(event.target.value);
    };
    const updatePointsGame = (event) => {
        setPointsGame(event.target.value);
    };

    return (
        <div className="container">   
            <form onSubmit={handleFormSubmit}>
                <h1>Create Player</h1>
                <div className="form-group">
                    <label htmlFor="rank">Player Rank</label>
                    <input type="text" className="form-control" id="rank" placeholder="Enter Player Rank" value={rank} onChange={updateRank}/>

                    <label htmlFor="name">Player Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Player Name" value={name} onChange={updateName}/>

                    <label htmlFor="team">Team Image</label>
                    <textarea type="text" className="form-control" id="team" placeholder="Enter Team Image Link" value={team} onChange={updateTeam}/>

                    <label htmlFor="byeWeek">Bye Week</label>
                    <input type="text" className="form-control" id="byeWeek" placeholder="Enter Bye Week" value={byeWeek} onChange={updateByeWeek}/>

                    <label htmlFor="points">Total Points</label>
                    <input type="text" className="form-control" id="points" placeholder="Enter Total Points" value={points} onChange={updatePoints}/>

                    <label htmlFor="rushAttempts">Rush Attempts</label>
                    <input type="text" className="form-control" id="rushAttempts" placeholder="Enter Total Rush Attempts" value={rushAttempts} onChange={updateRushAttempts}/>

                    <label htmlFor="rushYards">Rush Yards</label>
                    <input type="text" className="form-control" id="rushYards" placeholder="Enter Rush Yards" value={rushYards} onChange={updateRushYards}/>

                    <label htmlFor="rushTds">Rush Tds</label>
                    <input type="text" className="form-control" id="rushTds" placeholder="Enter Rush TDs" value={rushTds} onChange={updateRushTds}/>

                    <label htmlFor="recs">Total Receptions</label>
                    <input type="text" className="form-control" id="recs" placeholder="Enter Total Receptions" value={recs} onChange={updateRecs}/>

                    <label htmlFor="recYards">Recieving Yards</label>
                    <input type="text" className="form-control" id="recYards" placeholder="Enter Recieving Yards" value={recYards} onChange={updateRecYards}/>

                    <label htmlFor="recTds">Recieving TDs</label>
                    <input type="text" className="form-control" id="recTds" placeholder="Enter Recieving TDs" value={recTds} onChange={updateRecTds}/>

                    <label htmlFor="fum">Fumbles</label>
                    <input type="text" className="form-control" id="fum" placeholder="Enter Fumbles" value={fum} onChange={updateFum}/>

                    <label htmlFor="fumLost">Fumbles Lost</label>
                    <input type="text" className="form-control" id="fumLost" placeholder="Enter Fumbles Lost" value={fumLost} onChange={updateFumLost}/>

                    <label htmlFor="firstDowns">First Downs</label>
                    <input type="text" className="form-control" id="firstDowns" placeholder="Enter First Downs" value={firstDowns} onChange={updateFirstDowns}/>

                    <label htmlFor="hundredGame">100-199 Yard Games</label>
                    <input type="text" className="form-control" id="hundredGame" placeholder="Enter 100-199 Yard Games" value={hundredGame} onChange={updatehundredGame}/>

                    <label htmlFor="twoHundredGame">200+ Yard Games</label>
                    <input type="text" className="form-control" id="twoHundredGame" placeholder="Enter 200+ Yard Games" value={twoHundredGame} onChange={updateTwoHundredGame}/>

                    <label htmlFor="fourtyPlay">40+ Yard Plays</label>
                    <input type="text" className="form-control" id="fourtyPlay" placeholder="Enter 40+ Yard Plays" value={fourtyPlay} onChange={updateFourtyPlay}/>

                    <label htmlFor="fourtyTd">40+ Yard TDs</label>
                    <input type="text" className="form-control" id="fourtyTd" placeholder="Enter 40+ Yard TDs" value={fourtyTd} onChange={updateFourtyTd}/>

                    <label htmlFor="passComp">Pass Completions</label>
                    <input type="text" className="form-control" id="passComp" placeholder="Enter Pass Completions" value={passComp} onChange={updatePassComp}/>

                    <label htmlFor="passYards">Pass Yards</label>
                    <input type="text" className="form-control" id="passYards" placeholder="Enter Pass Yards" value={passYards} onChange={updatePassYards}/>

                    <label htmlFor="passTds">Pass TDs</label>
                    <input type="text" className="form-control" id="passTds" placeholder="Enter Pass TDs" value={passTds} onChange={updatePassTds}/>

                    <label htmlFor="targetShare">Target Share</label>
                    <input type="text" className="form-control" id="targetShare" placeholder="Enter Target Share" value={targetShare} onChange={updateTargetShare}/>

                    <label htmlFor="pointsGame">Total Points per Game</label>
                    <input type="text" className="form-control" id="pointsGame" placeholder="Enter Total Points per Game" value={pointsGame} onChange={updatePointsGame}/>
                </div>
                <div align="center">
                    <button type="button" className="btn btn-light" onClick={handleCancel}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
    
};

export default NewPlayer;
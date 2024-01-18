import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dataSource from "./datasource";
import "flowbite";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './EditPlayer.css';

const EditPlayer = (props) => {
    // Assume New Player by setting up an empty player and setting the flag newPlayerCreation
    let runningback = {
        rank: '',
        name:'',
        team:'',
        byeWeek: '',
        points:'',
        rushAttempts:'',
        rushYards:'',
        rushTds:'',
        recs:'',
        recYards:'',
        recTds:'',
        fum:'',
        fumLost:'',
        firstDowns:'',
        hundredGame:'',
        twoHundredGame:'',
        fourtyPlay:'',
        fourtyTd:'',
        passComp:'',
        passYards:'',
        passTds:'',
        targetShare:'',
        pointsGame:'',
    };

    let newPlayerCreation = true;

    // If an runningback is provided in 'props', then we are editing an runningback.
    // Set runningback to the provided runningback and set newPlayerCreation to false.
    if(props.runningback) {
        runningback = props.runningback;
        newPlayerCreation = false;
    };

    // runningback is now setup as a edited or new runningback
    const [rank, setRank] = useState(runningback.rank);
    const [name, setName] = useState(runningback.name);
    const [team, setTeam] = useState(runningback.team);
    const [byeWeek, setByeWeek] = useState(runningback.byeWeek);
    const [points, setPoints] = useState(runningback.points);
    const [rushAttempts, setRushAttempts] = useState(runningback.rushAttempts);
    const [rushYards, setRushYards] = useState(runningback.rushYards);
    const [rushTds, setRushTds] = useState(runningback.rushTds);
    const [recs, setRecs] = useState(runningback.recs);
    const [recYards, setRecYards] = useState(runningback.recYards);
    const [recTds, setRecTds] = useState(runningback.recTds);
    const [fum, setFum] = useState(runningback.fum);
    const [fumLost, setFumLost] = useState(runningback.fumLost);
    const [firstDowns, setFirstDowns] = useState(runningback.firstDowns);
    const [hundredGame, setHundredGame] = useState(runningback.hundredGame);
    const [twoHundredGame, setTwoHundredGame] = useState(runningback.twoHundredGame);
    const [fourtyPlay, setFourtyPlay] = useState(runningback.fourtyPlay);
    const [fourtyTd, setFourtyTd] = useState(runningback.fourtyTd);
    const [passComp, setPassComp] = useState(runningback.passComp);
    const [passYards, setPassYards] = useState(runningback.passComp);
    const [passTds, setPassTds] = useState(runningback.passTds);
    const [targetShare, setTargetShare] = useState(runningback.targetShare);
    const [pointsGame, setPointsGame] = useState(runningback.pointsGame);
    const navigate = useNavigate();

    

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

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("submit");
        const editedRunningBack = {
            rbId: runningback.rbId,
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
        console.log(editedRunningBack);

        savePlayer(editedRunningBack);
    };

    const savePlayer = async (runningback) => {
        let response;
        if (newPlayerCreation) {
            response = await dataSource.post('/runningbacks',runningback);
        } else {
            response = await dataSource.put('/runningbacks',runningback);
        }
        console.log(response);
        console.log(response.data);
        if(response.status===200) {
            alert(`The status of your runningback creation is : ${response.status} (Success)`)
        } else {
            alert(`The status of your runningback creation is : ${response.status} (Failed)`)
        }
        props.onEditPlayer(navigate);
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
    <div className="bg-cover bg-no-repeat 
    bg-[url('https://kroxam.com/wp-content/uploads/2021/10/54497_football-field-hd-wallpapers_1400x933_h.jpg')] 
    bg-gray-700 bg-blend-color-dodge"
    style={{height:'100vh'}}>
        <div className="px-4 text-center py-4">
            <h1 className="font-extrabold tracking-tight text-black lg:text-6xl py-4 bg-gradient-to-r rounded-lg from-purple-500 
                to-pink-500">{newPlayerCreation ? "Create " : "Edit "} Player
            </h1> 
        </div>
        <div className="edit-container ">
        <form onSubmit={handleFormSubmit} >
  
            <table className="table table-responsive-sm table-striped table-dark table-bordered table-hover">
            <thead className="thead-dark text-center">
                <tr>
                    <th scope="col"><label htmlFor="ranking">Player Rank</label></th>
                    <th scope="col" ><label htmlFor="name">Player Name</label></th>
                    <th scope="col"><label htmlFor="team">Team Image</label></th>
                    <th scope="col"><label htmlFor="byeWeek">Bye Week</label></th>
                    <th scope="col"><label htmlFor="points">Total Points</label></th>
                    <th scope="col"><label htmlFor="rushAttempts">Rush Attmps</label></th>
                    <th scope="col"><label htmlFor="rushYards">Rush Yards</label></th>
                    <th scope="col"><label htmlFor="rushTds">Rush TD's</label></th>
                    <th scope="col"><label htmlFor="recs">Total Recs</label></th>
                    <th scope="col"><label htmlFor="recYards">Rec Yards</label></th>
                    <th scope="col"><label htmlFor="recTds">Rec TD's</label></th>
                    <th scope="col"><label htmlFor="fum">Fum</label></th>
                    <th scope="col"><label htmlFor="fumLost">Fum Lost</label></th>
                    <th scope="col"><label htmlFor="firstDowns">FD's</label></th>
                    <th scope="col"><label htmlFor="hundredGame">100-199 Yard Game</label></th>
                    <th scope="col"><label htmlFor="twoHundredGame">200+ Yard Game</label></th>
                    <th scope="col"><label htmlFor="fourtyPlay">40+ Yard Play</label></th>
                    <th scope="col"><label htmlFor="fourtyTd">40+ Yard TDs</label></th>
                    <th scope="col"><label htmlFor="passComp">Pass Comp</label></th>
                    <th scope="col"><label htmlFor="passYards">Pass Yards</label></th>
                    <th scope="col"><label htmlFor="passTds">Pass TD's</label></th>
                    <th scope="col"><label htmlFor="targetShare">Target Share</label></th>
                    <th scope="col"><label htmlFor="pointsGame">Total Points per Game</label></th>
                </tr>
            </thead>
            <tbody className="text-left">
                <tr>
                    <th scope="row"><input type="text" className="form-control font-bold" id="ranking" placeholder="Enter Player Rank" value={ranking} onChange={updateRank}/></th>
                    <td ><input type="text" className="form-control font-bold" id="name" placeholder="Enter Player Name" value={name} onChange={updateName} style={{width:'175px'}}/></td>
                    <td><textarea type="text" className="form-control font-bold" id="team" placeholder="Enter Team Image Link" value={team} onChange={updateTeam} style={{width:'200px', height:'140px'}}/></td>
                    <td><input type="text" className="form-control font-bold" id="byeWeek" placeholder="Enter Bye Week" value={byeWeek} onChange={updateByeWeek} style={{width:'45px'}}/></td>
                    <td><input type="text" className="form-control font-bold" id="points" placeholder="Enter Total Points" value={points} onChange={updatePoints} style={{width:'67px'}}/></td>
                    <td><input type="text" className="form-control font-bold" id="rushAttempts" placeholder="Enter Total Rush Attempts" value={rushAttempts} onChange={updateRushAttempts} /></td>
                    <td><input type="text" className="form-control font-bold" id="rushYards" placeholder="Enter Rush Yards" value={rushYards} onChange={updateRushYards} style={{width:'55px'}}/></td>
                    <td><input type="text" className="form-control font-bold" id="rushTds" placeholder="Enter Rush TDs" value={rushTds} onChange={updateRushTds}/></td>
                    <td><input type="text" className="form-control font-bold" id="recs" placeholder="Enter Total Receptions" value={recs} onChange={updateRecs} style={{width:'55px'}}/></td>
                    <td><input type="text" className="form-control font-bold" id="recYards" placeholder="Enter Recieving Yards" value={recYards} onChange={updateRecYards} style={{width:'55px'}}/></td>
                    <td><input type="text" className="form-control font-bold" id="recTds" placeholder="Enter Recieving TDs" value={recTds} onChange={updateRecTds} style={{width:'40px'}}/></td>
                    <td><input type="text" className="form-control font-bold" id="fum" placeholder="Enter Fumbles" value={fum} onChange={updateFum} style={{width:'35px'}}/></td>
                    <td><input type="text" className="form-control font-bold" id="fumLost" placeholder="Enter Fumbles Lost" value={fumLost} onChange={updateFumLost} style={{width:'35px'}}/></td>
                    <td><input type="text" className="form-control font-bold" id="firstDowns" placeholder="Enter FDs" value={firstDowns} onChange={updateFirstDowns} style={{width:'35px'}}/></td>
                    <td><input type="text" className="form-control font-bold" id="hundredGame" placeholder="Enter 100-199 Yard Games" value={hundredGame} onChange={updatehundredGame}/></td>
                    <td><input type="text" className="form-control font-bold" id="twoHundredGame" placeholder="Enter 200+ Yard Games" value={twoHundredGame} onChange={updateTwoHundredGame}/></td>
                    <td><input type="text" className="form-control font-bold" id="fourtyPlay" placeholder="Enter 40+ Yard Plays" value={fourtyPlay} onChange={updateFourtyPlay} style={{width:'35px'}}/></td>
                    <td><input type="text" className="form-control font-bold" id="fourtyTd" placeholder="Enter 40+ Yard TDs" value={fourtyTd} onChange={updateFourtyTd} style={{width:'35px'}}/></td>
                    <td><input type="text" className="form-control font-bold" id="passComp" placeholder="Enter Pass Completions" value={passComp} onChange={updatePassComp}/></td>
                    <td><input type="text" className="form-control font-bold" id="passYards" placeholder="Enter Pass Yards" value={passYards} onChange={updatePassYards}/></td>
                    <td><input type="text" className="form-control font-bold" id="passTds" placeholder="Enter Pass TDs" value={passTds} onChange={updatePassTds} style={{width:'35px'}}/></td>
                    <td><input type="text" className="form-control font-bold" id="targetShare" placeholder="Enter Target Share" value={targetShare} onChange={updateTargetShare} style={{width:'65px'}}/></td>
                    <td><input type="text" className="form-control font-bold" id="pointsGame" placeholder="Enter Total Points per Game" value={pointsGame} onChange={updatePointsGame} style={{width:'67px'}}/></td>
                </tr>
            </tbody>
        </table>
        
        <div align="center">
            <button type="button" className="text-black font-bold bg-gradient-to-r from-red-500 via-red-550 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-large rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2" onClick={handleCancel}>Cancel</button>
            <button type="submit" className="border-black font-bold text-black bg-gradient-to-r from-teal-400 via-lime-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-teal-800 font-large rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2">Submit</button>
        </div>              
    </form>
    </div>
</div>
    );
    
};

export default EditPlayer;
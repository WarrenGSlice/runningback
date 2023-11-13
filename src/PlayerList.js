import React from "react";
import PlayerCard from "./PlayerCard";
import { useNavigate } from "react-router-dom";
import "flowbite";
import DataSource from "./datasource";

const PlayerList = (props) => {

    const handleSelectionOne = (rbId, uri) => {
        console.log('Selected ID is ' + rbId);
        props.onClick(rbId, navigator, uri);
    };
    const handleButttonClick = (rbId, uri) => {
        console.log('ID clicked is ' + props.rbId);
        props.onClick(rbId,navigator, uri);
    }

    console.log('props playerList', props);
    const navigator = useNavigate();
    //const runningbacks = props.playerList.map();

    const onDelete = async (rbId) => {
        console.log('Selected delete ID is ', rbId);
        let response = await DataSource.delete('/runningbacks/' + rbId);
        console.log(response);
        console.log(response.data);
        //window.location.reload(false);
    };
    const handleDeleteClick = (event) => {
        console.log(props.rbId);
        console.log('ID clicked is ' + props.rbId);
        onDelete(props.rbId);
    };

    const deleteData = async rbId => {
        console.log('Selected delete ID is ', rbId);
        let response = await DataSource.delete('/runningbacks/' + rbId);
        console.log(response);
        window.location.reload(true);
    };
   
        return(
            <div className="container">
            <table className="table table-striped table-dark table-bordered table-hover" style={{width: '18rem'}}>
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Team</th>
                    <th scope="col">Name</th>
                    <th scope="col">Points</th>
                    <th scope="col">Bye Week</th>
                    <th scope="col">Rush Attmps</th>
                    <th scope="col">Rush Yrds</th>
                    <th scope="col">Rush TDs</th>
                    <th scope="col">Recs</th>
                    <th scope="col">Rec Yrds</th>
                    <th scope="col">Rec TDs</th>
                    <th scope="col">Pts / Game</th>
                    <th scope="col">Fum</th>
                    <th scope="col">Fum Lost</th>
                    <th scope="col">First Downs</th>
                    <th scope="col">100-199 Games</th>
                    <th scope="col">200+ Games</th>
                    <th scope="col">40+ Plays</th>
                    <th scope="col">40+ TDs</th>
                    <th scope="col">Pass Comp</th>
                    <th scope="col">Pass Yrds</th>
                    <th scope="col">Pass TDs</th>
                    <th scope="col">TargetShare</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.playerList.map((props) => {

                            return (
                                <tr>
                                <th scope="row">{props.rank}</th>
                                <td style={{width:'auto', height:'auto'}}><img src={props.team} style={{overflow:'visible',width:'4rem', height:'4rem', backgroundSize:'contain', backgroundPosition:'cover'}} alt="team"/> </td>
                                <td>{props.name}</td>
                                <td>{props.points}</td>
                                <td>{props.byeWeek}</td>
                                <td>{props.rushAttempts}</td>
                                <td>{props.rushYards}</td>
                                <td>{props.rushTds}</td>
                                <td>{props.recs}</td>
                                <td>{props.recYards}</td>
                                <td>{props.recTds}</td>
                                <td>{props.pointsGame}</td>
                                <td>{props.fum}</td>
                                <td>{props.fumLost}</td>
                                <td>{props.firstDowns}</td>
                                <td>{props.hundredGame}</td>
                                <td>{props.twoHundredGame}</td>
                                <td>{props.fourtyPlay}</td>
                                <td>{props.fourtyTd}</td>
                                <td>{props.passComp}</td>
                                <td>{props.passYards}</td>
                                <td>{props.passTds}</td>
                                <td>{props.targetShare}</td>
                                <td>
                                    <button 
                                        className="text-black bg-gradient-to-br from-blue-500 to-orange-400 hover:bg-gradient-to-bl 
                                            focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium 
                                            font-bold rounded-lg text-sm text-center me-2 mb-2" 
                                        type="button" 
                                        style={{width:'50px', height:'25px'}}
                                        onClick={() => handleButttonClick(props.rbId, '/show/')}>
                                        View
                                    </button>
                                    <button 
                                        className="text-black bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br 
                                            focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium font-bold 
                                            rounded-lg text-sm text-center me-2 mb-2" 
                                        type="button"
                                        style={{width:'50px', height:'25px'}}
                                        onClick={() => handleButttonClick(props.rbId, '/edit/')}>
                                        Edit
                                    </button>
                                    <button 
                                        className="text-black bg-gradient-to-r from-red-200 via-red-400 to-red-500 hover:bg-gradient-to-br 
                                            focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium font-bold 
                                            rounded-lg text-sm text-center me-2 mb-2" 
                                        type="button"
                                        style={{width:'50px', height:'25px'}}
                                        onClick={() => deleteData(props.rbId)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            );
                    })
                }
            </tbody>
        </table>
        </div>
        );    
};

export default PlayerList;
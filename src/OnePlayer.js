import React, { useState, useEffect } from "react";
import "flowbite";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import datasource from "./datasource";
import StatList from "./StatList";
import TrackLyrics from "./TrackLyrics";
import TrackVideo from "./TrackVideo";
import "./OnePlayer.css";

const OnePlayer = (props) => {

    //const playerStats = props.runningback.name;
    const [Lyricstext, setLyricsText] = useState("Something New Coming Soon...");
    const [Videotext, setVideoText] = useState("Content Coming Soon...");
    

    const updateLyrics = (text) => {
        setLyricsText(text);
    }

    const updateVideo = (text) => {
        console.log('Update text to ', text);
        setVideoText(text);
    }

    const stats = props.stats;
    const [currentSelectedPlayerId, setCurrentSelectedPlayerId] = useState(0);
    let refresh = false;
    console.log('Career Stats ', props.stats);

    
    const getBackgroundColor = () => {
        let color;
        if (stats.team === "SF"  ) {
            color = "rgb(170, 0, 0)";
        } else if (stats.team === "SEA") {
            color = "rgb(105,190,40)";
        } else if (stats.team === "GB") {
            color = "rgb(24, 48, 40)";
        } else if (stats.team === "LAR") {
            color = "rgb(0, 53, 148)";
        } else if (stats.team === "MIN") {
            color = "rgb(79, 38, 131)";
        } else if (stats.team === "DEN") {
            color = "rgb(251, 79, 20)";
        } else if (stats.team === "NO") {
            color = "rgb(211, 188, 141)";
        } else if (stats.team === "CIN") {
            color = "rgb(251, 79, 20)";
        } else if (stats.team === "BAL"){
            color = "rgb(26,25,95)";
        } else if (stats.team === "CLE") {
            color = "rgb(49, 29, 0)";
        } else if (stats.team === "PIT") {
            color = "rgb(255, 182, 18)";
        } else if (stats.team === "BUF") {
            color = "rgb(0, 51, 141)";
        } else if (stats.team === "MIA") {
            color = "rgb(0, 142, 151)";
        } else if (stats.team === "NE") {
            color = "rgb(0, 34, 68)";
        } else if (stats.team === "NYJ") {
            color = "rgb(18, 87, 64)";
        } else if (stats.team === "HOU") {
            color = "rgb(3, 32, 47)";
        } else if (stats.team === "IND") {
            color = "rgb(0, 44, 95)";
        } else if (stats.team === "JAX") {
            color = "rgb(16, 24, 32)";
        } else if (stats.team === "TEN") {
            color = "rgb(12, 35, 64)";
        } else if (stats.team === "KC") {
            color = "rgb(227, 24, 55)";
        } else if (stats.team === "LV") {
            color = "rgb(0, 0, 0)";
        } else if (stats.team === "LAC") {
            color = "rgb(0, 128, 198)";
        } else if (stats.team === "CHI") {
            color = "rgb(11, 22, 42)";
        } else if (stats.team === "DET") {
            color = "rgb(0, 118, 182)";
        } else if (stats.team === "DAL") {
            color = "rgb(0, 53, 148)";
        } else if (stats.team === "NYG") {
            color = "rgb(1, 35, 82)";
        } else if (stats.team === "PHI") {
            color = "rgb(0, 78, 84)";
        } else if (stats.team === "WAS") {
            color = "rgb(90, 20, 20)";
        } else if (stats.team === "ATL") {
            color = "rgb(167, 25, 48)";
        } else if (stats.team === "CAR") {
            color = "rgb(0, 133, 202)";
        } else if (stats.team === "TB") {
            color = "rgb(213,10,10)";
        } else if (stats.team === "ARI") {
            color = "rgb(151, 35, 63)";
        } 
        return color;
    };
    
    

    

    return (
        <div className="bg-auto bg-repeat 
        bg-[url('https://wallpapers.com/images/hd/dynamic-football-play-in-high-definition-qzycbrj5038ail40.jpg')] 
        bg-gray-700 
        bottom-0"
        style={{height:'100vh'}}>
            <div className="px-4 text-center py-4">
                <h1 className="font-extrabold tracking-tight text-black lg:text-6xl py-4 bg-gradient-to-r rounded-lg from-purple-500 
                    to-pink-500">Player Details for {props.runningback.name}
                </h1> 
                
            </div>

            <div className="modal-item px-48 py-4" >
                <div className="player-news-modal">
                    <div className="player-card-wrapper">
                        <div className="details-panel">
                            <div className="player-card-header-container">
                                <div className="player-card-header">
                                    <div className="player-card-header-gradient" style={{ backgroundColor: getBackgroundColor(), color:'white', paddingTop:'5%'}}>

                                    </div>
                                    <img
                            
                                        src={props.runningback.team}
                                        className='team-bg-image'
                                        alt={props.runningback.team}
                                    />
                                    <div className="player-card-content-container">
                                        <div className="player-image-container">
                                            <img
                                            src={props.stats.img}
                                            className='player-image'
                                            alt={props.runningback.team}
                                            />
                                        </div>
                                        <div className="player-info-container">
                                            <div className="player-name-container">
                                                <div className="player-name">
                                                {props.stats.name}
                                                </div>
                                            </div>
                                            <div className="profile-items-container">
                                                <div className="profile-item-wrapper">
                                                    <div className="profile-item">
                                                        <div className="profile-item-label">AGE</div>
                                                        <div className="profile-item-value">{props.stats.age}</div>
                                                    </div>
                                                </div>
                                                <div className="profile-item-wrapper">
                                                    <div className="profile-item-divider"></div>
                                                    <div className="profile-item">
                                                        <div className="profile-item-label">HEIGHT</div>
                                                        <div className="profile-item-value">{props.stats.height}</div>
                                                    </div>
                                                </div>
                                                <div className="profile-item-wrapper">
                                                    <div className="profile-item-divider"></div>
                                                    <div className="profile-item">
                                                        <div className="profile-item-label">WEIGHT</div>
                                                        <div className="profile-item-value">{props.stats.weight}
                                                            <div className="profile-item-unit">lbs</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="profile-item-wrapper">
                                                    <div className="profile-item-divider"></div>
                                                    <div className="profile-item">
                                                        <div className="profile-item-label">EXP</div>
                                                        <div className="profile-item-value">{props.stats.exp}</div>
                                                    </div>
                                                </div>
                                                <div className="profile-item-wrapper">
                                                    <div className="profile-item-divider"></div>
                                                    <div className="profile-item">
                                                        <div className="profile-item-label">COLLEGE</div>
                                                        <div className="profile-item-value">{props.stats.college}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="player-ranking-container">
                                                <div className="profile-item-label">PLAYER RANKINGS</div>
                                                <div className="player-ranking-row">
                                                    <div className="rank-item">
                                                        <div className="rank-value">
                                                            # {props.runningback.rank}
                                                        </div>
                                                        <div className="rank-label">RB</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="player-deatils-panel card bg-gray-600">
                                        <div handlers="click-rail,drag-thumb,keyboard,wheel,touch" className="scrollbar-container panel stats ps ps--active-y">
                                            <div className="player-career-logs">
                                                <div className="career-log-section-header-container">
                                                    <h2 className="player-card-section-header">CAREER</h2>
                                                </div>
                                                <div className="stat-table-wrapper">
                                                    <div className="stat-section">
                                                        <div className="stat-section-label"></div>
                                                        <div className="section-columns">
                                                            <div className="stat column">
                                                                <div className="stat-label" >YR</div>
                                                                <div className="stat-value">
                                                                    <span className="stat-value-text">{props.stats.year}</span>
                                                                </div>
                                                            </div>
                                                            <div className="stat column">
                                                                <div className="stat-label">TM</div>
                                                                <div className="stat-value">
                                                                    <span className="stat-value-text">{props.stats.team}</span>
                                                                </div>
                                                            </div>
                                                            <div className="stat column">
                                                                <div className="stat-label">GM</div>
                                                                <div className="stat-value">
                                                                    <span className="stat-value-text">{props.stats.gp}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="stat-section">
                                                        <div className="stat-section-label">FANTASY</div>
                                                        <div className="section-columns">
                                                            <div className="stat-column">
                                                                <div className="stat-label">PPR</div>
                                                                <div className="stat-wrapper">
                                                                    <div className="stat-value">
                                                                        <span className="stat-value-text">{props.stats.points}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="stat-section">
                                                        
                                                        <div className="stat-section-label">RANK</div>
                                                        <div className="section-columns">
                                                            <div className="stat-column">
                                                                <div className="stat-label">PPR</div>
                                                                <div className="stat-wrapper">
                                                                    <div className="stat-value">
                                                                        <span className="stat-value-text">{props.runningback.ranking}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="stat-section">
                                                        <div className="stat-section-label" >RUSHING</div>
                                                        <div className="section-columns">
                                                            <div className="stat column">
                                                                <div className="stat-label">ATT</div>
                                                                <div className="stat-value">
                                                                    <span className="stat-value-text">{props.stats.att}</span>
                                                                </div>
                                                            </div>
                                                            <div className="stat column">
                                                                <div className="stat-label">YD</div>
                                                                <div className="stat-value">
                                                                    <span className="stat-value-text">{props.stats.rushYd}</span>
                                                                </div>
                                                            </div>
                                                            <div className="stat column">
                                                                <div className="stat-label">YPC</div>
                                                                <div className="stat-value">
                                                                    <span className="stat-value-text">{props.stats.rushYpc}</span>
                                                                </div>
                                                            </div>
                                                            <div className="stat column">
                                                                <div className="stat-label">TD</div>
                                                                <div className="stat-value">
                                                                    <span className="stat-value-text">{props.stats.rushTd}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="stat-section">
                                                        <div className="stat-section-label">RECEIVING</div>
                                                        <div className="section-columns">
                                                            <div className="stat column">
                                                                <div className="stat-label">TAR</div>
                                                                <div className="stat-value">
                                                                    <span className="stat-value-text">{props.stats.tar}</span>
                                                                </div>
                                                            </div>
                                                            <div className="stat column">
                                                                <div className="stat-label">REC</div>
                                                                <div className="stat-value">
                                                                    <span className="stat-value-text">{props.stats.rec}</span>
                                                                </div>
                                                            </div>
                                                            <div className="stat column">
                                                                <div className="stat-label">YD</div>
                                                                <div className="stat-value">
                                                                    <span className="stat-value-text">{props.stats.recYd}</span>
                                                                </div>
                                                            </div>
                                                            <div className="stat column">
                                                                <div className="stat-label">YPT</div>
                                                                <div className="stat-value">
                                                                    <span className="stat-value-text">{props.stats.recYpt}</span>
                                                                </div>
                                                            </div>
                                                            <div className="stat column">
                                                                <div className="stat-label">YPC</div>
                                                                <div className="stat-value">
                                                                    <span className="stat-value-text">{props.stats.recYpc}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="stat-section">
                                                        <div className="stat-section-label">FUMBLE</div>
                                                        <div className="section-columns">
                                                            <div className="stat column">
                                                                <div className="stat-label">FUM</div>
                                                                <div className="stat-value">
                                                                    <span className="stat-value-text">{props.stats.fum}</span>
                                                                </div>
                                                            </div>
                                                            <div className="stat column">
                                                                <div className="stat-label">LOST</div>
                                                                <div className="stat-value">
                                                                    <span className="stat-value-text">{props.stats.lost}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br/><br/>
                                </div>
                            </div>
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnePlayer;
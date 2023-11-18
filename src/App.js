import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { createMemoryHistory } from "history";
import SearchPlayer from "./SearchPlayer";
import NavBar from "./NavBar";
import OnePlayer from "./OnePlayer";
import './App.css';
import dataSource from "./datasource";
import EditPlayer from "./EditPlayer";
//import { render } from "@testing-library/react";

const App = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [playerList, setPlayerList] = useState([]);
    const [statList, setStatList] = useState([]);
    const [currentSelectedRbId, setCurrentSelectedRbId] = useState(0);
    const [currentSelectedPlayerId, setCurrentSelectedPlayerId] = useState(0);

    const { players } = playerList;
    const [sortedField, setSortedField] = useState(null);

    let refresh = false;

    const loadPlayers = async () => {
        const response = await dataSource.get('/runningbacks');

        setPlayerList(response.data);
    };

    const loadStats = async () => {
        const response = await dataSource.get('/stats');
        setStatList(response.data);
    }
    
    

     // Setup initialization callback
     useEffect(() => {
        // Update the running back List
        loadPlayers();
    }, [refresh]);
    useEffect(() => {
        loadStats();
    },[] );

    const updateSearchResults = async (phrase) => {
        console.log('phrase is ' + phrase);
        setSearchPhrase(phrase);
        // const response = await dataSource.get(
        // '/runningbacks/search/description/' + phrase    
        //);
        // setPlayerList(response.data);
    };

    const updateSinglePlayer = (rbId, navigate, uri) => {
        console.log('Update Single Running Back = ', rbId);
        console.log('Update Single Running Back = ', navigate);
        var indexNumber = 0;
        for (var i = 0; i < playerList.length; i++) {
            if (playerList[i].rbId === rbId) {
                indexNumber = i;
            }           
        }
        setCurrentSelectedRbId(indexNumber);
        let path = uri + indexNumber;
        console.log('path', path);
        navigate(path);
        //console.log('update path', '/show/' + indexNumber);
        //navigate('/show/' + indexNumber);
    };

    const UpdateSingleStat = (playerId, navigate, uri) => {
        console.log('Update Single Stat Running Back = ', playerId);
        console.log('Update Single Stat Running Back = ', navigate);
        var indexNumber = 0;
        for (var i = 0; i < statList.length; i++) {
            if (statList[i].playerId === playerId) {
                indexNumber = i;
            }           
        }
        setCurrentSelectedPlayerId(indexNumber);
        let path = uri + indexNumber;
        console.log('path', path);
        navigate(path);
        //console.log('update path', '/show/' + indexNumber);
        //navigate('/show/' + indexNumber);
    };

    console.log('statList', statList);

    console.log('playerList', playerList);
    const renderedList = playerList.filter((runningback) => {
        if (
            runningback.name.toLowerCase().includes(searchPhrase.toLowerCase()) || searchPhrase === ''
        ) {
            return true;
        }
        return false;
    });

    

    console.log('renderedList', renderedList);

//    const onNewPlayer = (navigate) => {
//        loadPlayers();
//        navigate("/");
//    }

    const onEditPlayer = (navigate) => {
        loadPlayers();
        navigate("/");
    }

    return ( 
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<SearchPlayer updateSearchResults={updateSearchResults} 
                    playerList={renderedList} updateSinglePlayer={updateSinglePlayer} UpdateSingleStat={UpdateSingleStat} />} />      
                <Route exact path='/new' element={<EditPlayer onEditPlayer={onEditPlayer}/>} />
                <Route exact path='/edit/:rbId' element={<EditPlayer onEditPlayer={onEditPlayer} runningback={playerList[currentSelectedRbId]} />} />
                <Route exact path='/show/:playerId' element={<OnePlayer stats={statList[currentSelectedRbId]} UpdateSingleStat={UpdateSingleStat} runningback={playerList[currentSelectedRbId]} />} />
                <Route
                    exact path='/show/:rbId/:rbId'
                    element={<OnePlayer runningback={playerList[currentSelectedRbId]} />}
                />
            </Routes>
        </BrowserRouter>
        );
};

export default App;

/** <Route exact path='/new' element={<NewAlbum onNewAlbum={onNewAlbum} />} />  */
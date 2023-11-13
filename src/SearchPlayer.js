import React from "react";
import SearchForm from "./SearchForm";
import PlayerList from "./PlayerList";

const SearchPlayer = (props) => {
    console.log('props with update single player ' , props);
    return (
        <div className="container">
            <SearchForm onSubmit={props.updateSearchResults} />

            <PlayerList playerList={props.playerList} onClick={props.updateSinglePlayer} />
        </div>
    );
};

export default SearchPlayer;
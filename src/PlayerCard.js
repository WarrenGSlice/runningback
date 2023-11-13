import React from "react";
//import ReactDom from "react-dom";

const PlayerCard = (props) => {
    const handleButttonClick = (event, uri) => {
        console.log('ID clicked is ' + props.rbId);
        props.onClick(props.rbId, uri);
    }

    return(
        {/**nothing */}
        
    )
}
export default PlayerCard;
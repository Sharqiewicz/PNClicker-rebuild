import React from 'react'
import FoeField from './FoeComponents/FoeField'
import GameCenter from './GameScreenComponents/GameCenter';


function GameScreen(){
    return(
        <div id="GameScreen">
            <GameCenter/>
            <FoeField/>
        </div>

    );
}

export default GameScreen;
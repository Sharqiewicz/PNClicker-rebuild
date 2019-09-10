import React from 'react';
import candyFoes from './foesList/candy'
import FoeField from './FoeField'

function FoeScreen() {
    candyFoes.forEach(item => console.log(item));

    const foe = candyFoes.map( item => <FoeField />)

    return (
        <div className="FoeScreen">Loaded foes</div>
    );
}

export default FoeScreen;

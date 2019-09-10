import React from 'react';
import candyFoes from './foesList/candy'

function FoeField() {
    console.log(candyFoes);

    return (
        <div className="FoeField">
            <div id="enemy_container" className="col-12 d-flex flex-column bg-warning">
                <div id="enemy_card" className="order-sm-2 order-md-1">
                    <div id="enemy_image">

                    </div>
                </div>
                <div id="enemy_stats" className="d-flex justify-content-center flex-wrap order-sm-1 order-md-2">
                    <div className="stat">{candyFoes[0].damage}</div>
                    <div className="stat">{candyFoes[0].health}</div>
                </div>
            </div>
        </div>
    );
}

export default FoeField;
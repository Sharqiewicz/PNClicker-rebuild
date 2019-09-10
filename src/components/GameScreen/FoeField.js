import React, {Component} from 'react';
import candyFoes from './foesList/candy'
import waterFoes from './foesList/water'
import fireFoes from './foesList/fire'
import slimeFoes from './foesList/slime'

class FoeField extends Component {

    componentDidMount = () => {
        this.foeDraw();
    }

    redrawFoe = (biom ,foe) => {
        document.querySelectorAll('.stat')[0].innerHTML = `Damage: ${biom[foe].damage}`;
        document.querySelectorAll('.stat')[1].innerHTML = `Health: ${biom[foe].health}`;
    }

    foeDraw = () => {
        let randomBiom = 1; // then make it random

        switch(randomBiom){

            //candy
            case 1:
                let randomEnemy = Math.floor(Math.random() * candyFoes.length);
                this.redrawFoe(candyFoes ,randomEnemy);
                break;
            default:
                console.log('default');
                break;
        }

    }

    render(){
        return(
            <div className="FoeField">
                <div id="enemy_container" className="col-12 d-flex flex-column bg-warning">
                    <div id="enemy_card" className="order-sm-2 order-md-1">
                        <div id="enemy_image">

                        </div>
                    </div>
                    <div id="enemy_stats" className="d-flex justify-content-center flex-wrap order-sm-1 order-md-2">
                        <div className="stat"></div>
                        <div className="stat"></div>
                    </div>
                </div>
            </div>
        )};
}

export default FoeField;
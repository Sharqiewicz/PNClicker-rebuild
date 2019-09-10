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
        document.getElementById('enemy_name').innerHTML = `Name: ${biom[foe].name}`;
    }

    foeDraw = () => {
        let randomBiom = Math.floor(Math.random() * 4); // then make it random
        let randomEnemy = 0;

        switch(randomBiom){
            //candy
            case 0:
                randomEnemy = Math.floor(Math.random() * fireFoes.length);
                this.redrawFoe(fireFoes ,randomEnemy);
                break;
            case 1:
                randomEnemy = Math.floor(Math.random() * waterFoes.length);
                this.redrawFoe(waterFoes, randomEnemy);
                break;
            case 2:
                randomEnemy = Math.floor(Math.random() * slimeFoes.length);
                this.redrawFoe(slimeFoes, randomEnemy);
                break;
            case 3:
                randomEnemy = Math.floor(Math.random() * candyFoes.length);
                this.redrawFoe(candyFoes, randomEnemy);
                break;
            default:
                console.log('default');
                break;
        }

    }

    render(){
        return(
            <div className="FoeField">
                <button className="btn btn-warning" onClick={this.foeDraw}>New Foe</button>
                <div id="enemy_container" className="col-12 d-flex flex-column bg-warning">
                    <div id="enemy_name" className="bg-primary"></div>
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
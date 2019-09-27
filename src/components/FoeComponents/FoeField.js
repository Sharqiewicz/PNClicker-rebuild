import React, {Component} from 'react';
import candyFoes from './foesList/candy'
import waterFoes from './foesList/water'
import fireFoes from './foesList/fire'
import slimeFoes from './foesList/slime'
import { connect } from 'react-redux';

class FoeField extends Component {

    componentDidMount = () => {
        this.foeDraw();
    }

    redrawFoe = (biom ,foe) => {
        document.querySelectorAll('.stat')[0].innerHTML = `Damage: ${biom[foe].damage}`;
        document.querySelectorAll('.stat')[1].innerHTML = `Health: ${biom[foe].health}`;
        document.getElementById('enemy_name').innerHTML = `Name: ${biom[foe].name}`;
        document.getElementById('enemy_image').innerHTML = `<img class="img-fluid" src="${biom[foe].img}"/>`;

        //foe color
        let foe_color = biom[foe].biomID;
        const colors_light = ['#e84118', '#00a8ff', '#4cd137', '#f8a5c2'];
        const colors_dark = ['#c23616', '#0097e6', '#44bd32', '#f78fb3'];

        document.getElementById('enemy_container').style.backgroundColor = colors_dark[foe_color];
        document.getElementById('enemy_image').style.backgroundColor = colors_light[foe_color];

    }

    foeDraw = () => {
        let randomBiom = Math.floor(Math.random() * 4);

        console.log(this.props.biomID);
        console.log(randomBiom);

        if(randomBiom === this.props.biomID){ return this.foeDraw() }

        let randomEnemy = 0;

        switch(randomBiom){
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
                // no code
                break;
        }

    }

    render(){
        return(
            <div className="col-4 my-auto">
                <div className="FoeField">
                    <button className="btn" onClick={this.foeDraw}>New Foe</button>
                    <div id="enemy_container">
                        <div id="enemy_image"></div>
                        <div id="enemy_name"></div>
                        <div id="enemy_stats">
                            <div className="stat"></div>
                            <div className="stat"></div>
                        </div>
                    </div>
                </div>
            </div>
        )};
}


const mapStateToProps = (props) => {
    return {
        biomID: props.biomID
    }
}

export default connect(mapStateToProps)(FoeField);

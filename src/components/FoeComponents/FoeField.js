import React, {Component} from 'react';
import candyFoes from './foesList/candy'
import waterFoes from './foesList/water'
import fireFoes from './foesList/fire'
import slimeFoes from './foesList/slime'
import { connect } from 'react-redux';

class FoeField extends Component {

    constructor(){
        super();
        this.state = {
            actualfoe: {}
        }
    }

    attack = () =>{

        let endgame = this.props.health - this.state.actualfoe.damage;
        if (endgame <= 0) {
            window.alert('YOU DIED');
            this.props.history.push('/');
            window.location.reload();
        }

        // send attack action to reducer
        this.props.attack(this.state.actualfoe.damage);


        // enemy attack stuff in this.state
        let newhealth = this.state.actualfoe.health -= this.props.charakter.damage;
        if (newhealth <= 0) {
            this.foeDraw();
        }

        this.setState((state = this.state.actualfoe) => {
            return {
                ...state, health: newhealth
            }
        })

    }


    componentDidMount = () => {
        this.foeDraw();
    }

    redrawFoe = (biom ,foe) => {

        // copying object - do not rewrite the health of the foe in biom.js list
        const enemy = Object.assign({}, biom[foe])

        this.setState(() => {
            return{
                ...this.state,
                actualfoe: enemy
            }
        });

        //foe color
        let foe_color = biom[foe].biomID;
        const colors_light = ['#e84118', '#00a8ff', '#4cd137', '#f8a5c2'];
        const colors_dark = ['#c23616', '#0097e6', '#44bd32', '#f78fb3'];

        document.getElementById('enemy_container').style.backgroundColor = colors_dark[foe_color];
        document.getElementById('enemy_image').style.backgroundColor = colors_light[foe_color];

    }

    foeDraw = () => {
        let randomBiom = Math.floor(Math.random() * 4);

        if(randomBiom == this.props.biomID){ return this.foeDraw() }

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
                        <div id="enemy_image"><img src={this.state.actualfoe.img}/></div>
                        <div id="attack_button" onClick={this.attack}>ATTACK</div>
                        <div id="enemy_name">{this.state.actualfoe.name}</div>
                        <div id="enemy_stats">
                            <div className="stat"> Damage: {this.state.actualfoe.damage}</div>
                            <div className="stat"> Health {this.state.actualfoe.health}</div>
                        </div>
                    </div>
                </div>
            </div>
        )};
}


const mapStateToProps = (props) => {
    return {
        charakter: {
            biomID: props.biomID,
            damage: props.damage,
            health: props.health,
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        attack: (damage) => { dispatch({ type: 'TAKE_DAMAGE', damage })}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoeField);

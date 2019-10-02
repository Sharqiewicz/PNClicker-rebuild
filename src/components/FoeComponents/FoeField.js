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

        let ch_received_dmg = this.state.actualfoe.damage;
        let enemy_received_dmg = this.props.charakter.damage;

        if( this.state.actualfoe.bonusdamagebiom == this.props.charakter.biomID){
            ch_received_dmg = this.state.actualfoe.damage + this.state.actualfoe.level;
        }
        if( this.props.charakter.bonusdamagebiom == this.state.actualfoe.biomID){
            enemy_received_dmg = this.props.charakter.damage + this.props.charakter.level;
        }

        let endgamevar = this.props.charakter.health - ch_received_dmg;
        if (endgamevar <= 0) {
            this.props.endgame();
        }

        // send attack action to reducer
        this.props.attack(ch_received_dmg);


        // enemy attack stuff in this.state
        let newhealth = this.state.actualfoe.health -= enemy_received_dmg;
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
        if ((this.state.actualfoe.name === biom[foe].name)) { return this.foeDraw() };
        const enemy = Object.assign({}, biom[foe]);
        if (enemy.level > this.props.charakter.level) { return this.foeDraw() }

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

        if(randomBiom == this.props.charakter.biomID){ return this.foeDraw() }

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
                    <div id="enemy_container">
                        <div id="enemy_image"><img src={this.state.actualfoe.img}/></div>
                        <div id="attack_button" onClick={this.attack}>ATTACK</div>
                        <div id="enemy_name"> <h3>{this.state.actualfoe.name}</h3></div>
                        <div id="enemy_stats">
                            <div className="stat"> Level: {this.state.actualfoe.level}</div>
                            <div className="stat text-white"> Damage: {this.state.actualfoe.damage} {console.log(this.props.charakter.vulnerabilities, this.props.charakter.bonusdamagebiom), this.props.charakter.vulnerabilities == this.state.actualfoe.biomID ? `+ ${this.state.actualfoe.level}` : ""}</div>
                            <div className="stat text-white">Health: {this.state.actualfoe.vulnerabilities == this.props.charakter.biomID ?  this.state.actualfoe.health - this.state.actualfoe.level  : this.state.actualfoe.health}</div>
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
            level: props.level,
            vulnerabilities: props.vulnerabilities,
            bonusdamagebiom: props.bonusdamagebiom
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        attack: (damage) => { dispatch({ type: 'TAKE_DAMAGE', damage })}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoeField);

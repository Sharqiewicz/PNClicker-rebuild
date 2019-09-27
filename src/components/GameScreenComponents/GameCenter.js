import React, {Component} from 'react';
import Onestat from './Onestat';
import AddStat from './AddStat';
import { connect } from 'react-redux';
import icon from '../../img/icons/fire.png';

class GameCenter extends Component{

    componentDidMount(){
        const colors_light = ['#e84118', '#00a8ff', '#4cd137', '#f8a5c2'];
        const colors_dark = ['#c23616', '#0097e6', '#44bd32', '#f78fb3'];
        document.querySelector('#charakter-img-icon').style.backgroundColor = colors_dark[this.props.biomID];
    }

    statfunc = (actionstat, value, number) => {
        this.props.changestatistic(actionstat, value, number);
    }


    render(){

        return(
            <div className="col-12 col-md-4 GameCenter">
                <Onestat name='Name' value={this.props.name} />
                <div id="charakter-img-icon" className="col-5">
                    <img src={`${this.props.biomicon}`} />
                </div>
                <Onestat name='Balance' value={this.props.money} stat={this.statfunc}/>
                <AddStat name='Level' value={this.props.level} stat={this.statfunc}/>
                <AddStat name='Damage' value={this.props.damage} stat={this.statfunc}/>
                <AddStat name='Health' value={this.props.health} stat={this.statfunc}/>
                <AddStat name='Steal' value={this.props.steal} stat={this.statfunc}/>
            </div>
        )
    }
}

const mapStateToProps = (props) => {
    return {
        name: props.name,
        damage: props.damage,
        health: props.health,
        steal: props.steal,
        bonusdamagebiom: props.bonusdamagebiom,
        vulnerabilities: props.vulnerabilities,
        biomID: props.biomID,
        money: props.money,
        level: props.level,
        biomicon: props.biomicon
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changestatistic: (actionstat, value, number) => { dispatch({ type: 'CHANGE_STAT', actionstat: actionstat, value: value, number: number }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCenter);
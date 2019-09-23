import React, {Component} from 'react';
import Onestat from './Onestat';
import AddStat from './AddStat';
import { connect } from 'react-redux';
import icon from '../../img/icons/fire.png'
class GameCenter extends Component{

    componentDidMount(){
        const colors_light = ['#e84118', '#00a8ff', '#4cd137', '#FDA7DF'];
        const colors_dark = ['#c23616', '#0097e6', '#44bd32', '#D980FA'];
        document.querySelector('#charakter-img-icon').style.backgroundColor = colors_dark[this.props.biomID];
    }

    render(){

        return(
            <div className="col-4 GameCenter">
                <Onestat name='Name' value={this.props.name} />
                <div id="charakter-img-icon" className="col-5">
                    <img src={`${this.props.biomicon}`} />
                </div>
                <Onestat name='Balance' value={this.props.money}/>
                <AddStat name='Damage' value={this.props.damage}/>

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

export default connect(mapStateToProps)(GameCenter);
import React, {Component} from 'react';
import Onestat from './Onestat';
import { connect } from 'react-redux';
import icon from '../../img/icons/fire.png'
class GameCenter extends Component{

    render(){
        console.log(this.props.biomicon);
        return(
            <div className="col-4 GameCenter">
                <h1>{this.props.name}</h1>
                <img src={`../${this.props.biomicon === 0 ? icon : this.props.biomicon}`}/>
                <Onestat name='Balance' value={this.props.money}/>

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
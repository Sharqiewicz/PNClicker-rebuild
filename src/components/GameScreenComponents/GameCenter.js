import React, {Component} from 'react';
import { connect } from 'react-redux';

class GameCenter extends Component{

    render(){
        return(
            <div className="col-4 GameCenter">
                <h1>{this.props.name}</h1>
                <img src={`../${this.props.biomicon}`}/>
                <h1>Balance</h1>

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
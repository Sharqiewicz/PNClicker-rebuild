import React, { Component } from 'react'
import FoeField from './FoeComponents/FoeField'
import GameCenter from './GameScreenComponents/GameCenter';
import CharakterField from './GameScreenComponents/CharakterField';
import { connect } from 'react-redux';


class GameScreen extends Component {

    componentDidMount() {
        const bg_color = ['#daa', '#aab', '#abb', '#bab'];
        document.getElementById('GameScreen').style.backgroundColor = bg_color[this.props.biomID];
    }

    endgame() {
        document.getElementById('endgamebutton').classList.add('active');
    }

    render() {
        return (
            <div id="GameScreen">
                <button id="endgamebutton" className="btn btn-warning" onClick={() => { this.props.history.push('/'); window.location.reload(); }}>You died! <br /> Play Again </button>
                <GameCenter />
                <CharakterField />
                <FoeField endgame={this.endgame} />
            </div>

        )
    }
}

const mapStateToProps = (props) => {
    return {
        biomID: props.biomID
    }
}

export default connect(mapStateToProps)(GameScreen);
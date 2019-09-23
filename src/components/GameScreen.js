import React, {Component} from 'react'
import FoeField from './FoeComponents/FoeField'
import GameCenter from './GameScreenComponents/GameCenter';
import { connect } from 'react-redux';


class GameScreen extends Component{

    componentDidMount(){
        const bg_color = ['#daa', '#aab', '#abb', '#bab'];
        document.getElementById('GameScreen').style.backgroundColor = bg_color[this.props.biomID];
    }

   render(){
       return (
           <div id="GameScreen">
               <GameCenter />
               <FoeField />
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
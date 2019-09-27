import React, {Component} from 'react'
import FoeField from './FoeComponents/FoeField'
import GameCenter from './GameScreenComponents/GameCenter';
import CharakterField from './GameScreenComponents/CharakterField';
import { connect } from 'react-redux';


class GameScreen extends Component{


    // Attack function

    componentDidMount(){
        const bg_color = ['#daa', '#aab', '#abb', '#bab'];
        document.getElementById('GameScreen').style.backgroundColor = bg_color[this.props.biomID];
    }

   render(){
       return (
           <div id="GameScreen">
               <GameCenter />
               <CharakterField/>
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
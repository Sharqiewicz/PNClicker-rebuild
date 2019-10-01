import React, { Component } from 'react';
import playbutton from '../img/icons/playbuttonwhite.png';
import openbook from '../img/icons/openbookwhite.png';
import settingsgears from '../img/icons/settingsgearswhite.png';
import '../css/menuscreen.css';
import Option from './MenuCoponents/Option';

class MenuScreen extends Component{

    constructor(){
        super();
        this.state = {
            options : [ { id: 0, name: 'PLAY', image: playbutton, text: 'Begin your adventure! Choose one of four bioms and conquer the pnClicker world!'},
                        { id: 1, name: 'OPTIONS', image: settingsgears, text: 'Set difficulty level, sound and language'},
                        { id: 2, name: 'INSTRUCTIONS', image: openbook, text: 'Learn how to play PnClicker, simple guide.'} ]
        }
    }

    render(){

        const optionslist = this.state.options.map( item=> <Option key={item.id} name={item.name} image={item.image} text={item.text} history={this.props.history}/>);
        return(
            <div id="MenuScreen">
                <h1 className="text-center text-white col-12"> PnClicker Alpha 1.1</h1>
                <div className="box">
                    {optionslist}
                </div>
            </div>
        )
    }

}

export default MenuScreen;
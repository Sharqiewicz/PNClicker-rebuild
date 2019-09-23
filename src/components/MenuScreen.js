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
                        { id: 1, name: 'OPTIONS', image: settingsgears},
                        { id: 2, name: 'INSTRUCTIONS', image: openbook} ]
        }
    }

    render(){

        const optionslist = this.state.options.map( item=> <Option key={item.id} name={item.name} image={item.image} text={item.text}/>);
        return(
            <div className="box">
                {optionslist}
            </div>
        )
    }

}

export default MenuScreen;
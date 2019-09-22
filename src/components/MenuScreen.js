import React, { Component } from 'react';
import playbutton from '../img/icons/playbuttonwhite.png';
import openbook from '../img/icons/openbookwhite.png';
import settingsgears from '../img/icons/settingsgearswhite.png';
import '../css/menuscreen.css';

class MenuScreen extends Component{

    render(){

        return(
            <div className="container">


                <div className="option">
                    <div className="option-image active">
                        <div className="option-icon-section">
                            <img src={playbutton}/>
                                <h3>PLAY</h3>
                        </div>
                    </div>
                    <div className="option-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Sed unde, mollitia molestiae quia quibusdam aut architecto quis ipsum velit fuga sapiente,
                          deserunt esse reiciendis repellendus atque? Magni reprehenderit assumenda similique.
                    </div>
                </div>

                <div className="option">
                    <div className="option-image active">
                        <div className="option-icon-section">
                            <img src={settingsgears} />
                            <h3>SETTINGS</h3>
                        </div>
                    </div>
                    <div className="option-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Sed unde, mollitia molestiae quia quibusdam aut architecto quis ipsum velit fuga sapiente,
                          deserunt esse reiciendis repellendus atque? Magni reprehenderit assumenda similique.
                    </div>
                </div>

                <div className="option">
                    <div className="option-image active">
                        <div className="option-icon-section">
                            <img src={openbook} />
                            <h3>INSTRUCTIONS</h3>
                        </div>
                    </div>
                    <div className="option-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Sed unde, mollitia molestiae quia quibusdam aut architecto quis ipsum velit fuga sapiente,
                          deserunt esse reiciendis repellendus atque? Magni reprehenderit assumenda similique.
                    </div>
                </div>


            </div>
        )
    }

}

export default MenuScreen;
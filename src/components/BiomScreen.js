/*  TO REPAIR */
/* CARDS HAVE ON ALL ELEMENTS ID! */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import fireicon from '../img/icons/fire.png';
import watericon from '../img/icons/water.png';
import slimeicon from '../img/icons/slime.png';
import candyicon from '../img/icons/candy.png';

class BiomScreen extends Component {


    changeDescription = (e) => {
        const colors_dark = ['#211', '#112', '#122', '#212'];
        const colors_light = ['#daa', '#aad', '#add', '#dad'];
        const descriptions = ['First Desc', 'Second Desc', 'Third Desc', "Fourth Desc"];
        const biom_names = ['Fire', 'Water', 'Slime', 'Candy'];

        let element = document.querySelector('.biom_desc');
        element.innerHTML = descriptions[e.target.id];
        element.style.color = colors_light[e.target.id];
        document.getElementById('your_biom').innerHTML = biom_names[e.target.id];
        document.getElementById('StartScreenSection').style.backgroundColor = colors_dark[e.target.id];
    }

    playGame = (e) => {
        this.props.playGame(e.target.id)
        this.props.history.push('/GAME');
    }


    render() {

        return (
            <section id="StartScreenSection">

                        <h1 className="col-12 text-white" id="your_biom">Choose your Biom</h1>

                        <div className="biom_card col-sm-12 col-xl-3" id="0" onMouseOver={this.changeDescription} onClick={this.playGame}>
                            <div id="0"><img src={fireicon} id="0"/></div>
                        </div>

                        <div className="biom_card col-sm-12 col-xl-3" id="1" onMouseOver={this.changeDescription} onClick={this.playGame}>
                            <div id="1"><img src={watericon} id="1"/></div>
                        </div>

                        <div className="biom_card col-sm-12 col-xl-3" id="2" onMouseOver={this.changeDescription} onClick={this.playGame}>
                            <div id="2"><img src={slimeicon} id="2"/></div>
                        </div>

                        <div className="biom_card col-sm-12 col-xl-3" id="3" onMouseOver={this.changeDescription} onClick={this.playGame}>
                            <div id="3"><img src={candyicon} id="3"/></div>
                        </div>

                        <div className="biom_desc col-10">Hover on element to see the description!</div>
            </section>
        )
    }
}

const mapStateToProps = (props) => {
    return {
        charakter: props.charakter,
        bioms: props.bioms
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: (biom) => { dispatch({ type: 'CHARAKTER_BIOM', charakterbiom: biom }) }
    }
}

// (what Data we want to take from redux)( where we want this data )
export default connect(mapStateToProps, mapDispatchToProps)(BiomScreen);
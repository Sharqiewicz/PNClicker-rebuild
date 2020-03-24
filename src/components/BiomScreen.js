// Można rozdzielić na mniejsze komponenty!

import React, { Component } from 'react';
import { connect } from 'react-redux';
import fireicon from '../img/icons/fire.png';
import watericon from '../img/icons/water.png';
import slimeicon from '../img/icons/slime.png';
import candyicon from '../img/icons/candy.png';

class BiomScreen extends Component {


    changeDescription = (e) => {

        const biom_obj = {
            0: ['#211', '#daa', 'Vulnerabilities: Water, Bonus DMG: Candy', 'Fire'],
            1: ['#112', "#aad", "Vulnerabilities: Slime, Bonus DMG: Fire", "Water"],
            2: ['#122', "#add", "Vulnerabilities: Candy, Bonus DMG: Water", "Slime"],
            3: ['#212', "#dad", "Vulnerabilities: Fire, Bonus DMG: Slime", "Candy"],

        }

        let element = document.querySelector('.biom_desc');
        element.innerHTML = biom_obj[e.target.id][2];
        element.style.color = biom_obj[e.target.id][1];
        document.getElementById('your_biom').innerHTML = biom_obj[e.target.id][3];
        document.getElementById('StartScreenSection').style.backgroundColor = biom_obj[e.target.id][0];
    }

    playGame = (e) => {
        let vul = Number(e.target.id) === 3 ? 3 : Number(e.target.id);
        let bdm = Number(e.target.id) == 0 ? 3 : Number(e.target.id) == 1 ? 0 : Number(e.target.id) == 2 ? 1 : Number(e.target.id) == 3 ? 2 : null;

        let biomicons = [fireicon, watericon, slimeicon, candyicon];
        let biomimg = biomicons[e.target.id];
        this.props.playGame(e.target.id, biomimg, vul, bdm);
        this.props.history.push('/GAME');
    }


    render() {

        return (
            <section id="StartScreenSection">

                <h1 className="col-12 text-white" id="your_biom">Choose your Biom</h1>

                <div className="biom_card col-sm-12 col-xl-2" id="0" onMouseOver={this.changeDescription} onClick={this.playGame}>
                    <div id="0"><img src={fireicon} id="0" /></div>
                </div>

                <div className="biom_card col-sm-12 col-xl-2" id="1" onMouseOver={this.changeDescription} onClick={this.playGame}>
                    <div id="1"><img src={watericon} id="1" /></div>
                </div>

                <div className="biom_card col-sm-12 col-xl-2" id="2" onMouseOver={this.changeDescription} onClick={this.playGame}>
                    <div id="2"><img src={slimeicon} id="2" /></div>
                </div>

                <div className="biom_card col-sm-12 col-xl-2" id="3" onMouseOver={this.changeDescription} onClick={this.playGame}>
                    <div id="3"><img src={candyicon} id="3" /></div>
                </div>

                <div className="biom_desc col-10">Hover on the element to see the description!</div>
            </section>
        )
    }
}

const mapStateToProps = (props) => {
    return {
        biomID: props.biomID,
        biomicon: props.biomicon,
        bonusbiomdamage: props.bonusbiomdamage,
        vulnerabilities: props.vulnerabilities
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: (biom, biomicon, vul, bdm) => { dispatch({ type: 'CHARAKTER_BIOM', biomID: biom, biomicon: biomicon, bonusdamagebiom: bdm, vulnerabilities: vul }) }
    }
}

// (what Data we want to take from redux)( where we want this data )
export default connect(mapStateToProps, mapDispatchToProps)(BiomScreen);
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharakterField extends Component {

    componentDidMount(){
        const colors_light = ['#e84118', '#00a8ff', '#4cd137', '#f8a5c2'];
        const colors_dark = ['#c23616', '#0097e6', '#44bd32', '#f78fb3'];

        document.getElementById('charakter_container').style.backgroundColor = colors_dark[1];
        document.getElementById('charakter_image').style.backgroundColor = colors_light[1];
    }


    drawCharakter = (biom, Charakter) => {
        document.querySelectorAll('.stat')[0].innerHTML = `Damage: ${biom[Charakter].damage}`;
        document.querySelectorAll('.stat')[1].innerHTML = `Health: ${biom[Charakter].health}`;
        document.getElementById('charakter_name').innerHTML = `Name: ${biom[Charakter].name}`;
        document.getElementById('charakter_image').innerHTML = `<img class="img-fluid" src="${biom[Charakter].img}"/>`;



    }

    render() {
        return (
            <div className="col-4">
                <div className="CharakterField">
                    <div id="charakter_container">
                        <div id="charakter_image"></div>
                        <div id="charakter_name"></div>
                    </div>
                </div>
            </div>
        )
    };
}

const mapStateToProps = (props) => {
    return {
        biomID: props.biomID,
    }
}

export default connect(mapStateToProps)(CharakterField);
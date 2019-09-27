import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharakterField extends Component {

    componentDidMount(){
        const colors_light = ['#e84118', '#00a8ff', '#4cd137', '#f8a5c2'];
        const colors_dark = ['#c23616', '#0097e6', '#44bd32', '#f78fb3'];

        document.getElementById('charakter_container').style.backgroundColor = colors_dark[this.props.biomID];
        document.getElementById('charakter_image').style.backgroundColor = colors_light[this.props.biomID];
        document.getElementById('charakter_image').innerHTML = `<img class="img-fluid" src="${this.props.charakterimg}"/>`;
    }

    render() {
        return (
            <div className="col-4">
                <div className="CharakterField">
                    <div id="charakter_container">
                        <div id="charakter_image"></div>
                    </div>
                </div>
            </div>
        )
    };
}

const mapStateToProps = (props) => {
    return {
        biomID: props.biomID,
        charakterimg : props.charakterimg
    }
}

export default connect(mapStateToProps)(CharakterField);
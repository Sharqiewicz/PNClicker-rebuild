import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharakterField extends Component {

    componentDidMount(){
        const colors_light = ['#e84118', '#00a8ff', '#4cd137', '#f8a5c2'];

        document.getElementById('charakter_image').style.backgroundColor = colors_light[this.props.biomID];
        document.getElementById('charakter_image').innerHTML = `<img class="img-fluid" src="${this.props.charakterimg}"/>`;
    }

    render() {
        return (
            <div className="col-sm-12 col-md-4 my-auto">
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
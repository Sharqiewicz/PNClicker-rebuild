import React, { Component } from 'react';
import { connect } from 'react-redux';


class WelcomeScreen extends Component {

    componentDidMount(){
        this.changeBackground();
    }

    constructor(){
        super()
        this.state = {
            name: 'Fin The Human'
        }
    }

    changeBackground = () => {
        const colors_dark = ['#c23616', '#0097e6', '#44bd32', '#D980FA'];

        setInterval(() => {
            let randomBck = Math.floor(Math.random() * 4);
            document.getElementById('WelcomeScreen').style.textShadow = `0.2em 0.2em 0.3em ${colors_dark[randomBck]}`;
        }, 3000)

    }



    newName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    changeOldName = () => {
        this.props.changeName(this.state.name)
        this.props.history.push('/start');
    }

    playGame = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <section id="WelcomeScreen">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center mb-5">Hey, welcome to the pnClicker game!</h1>
                        <form onSubmit={this.playGame}>
                            <label>What is your name?</label>
                            <input className="ml-5 nameInput" type="text" placeholder="Fin The Human" onChange={this.newName}></input>
                            <button className="startButton" onClick={this.changeOldName}>PLAY</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (props) => {
    return {
        charakter: props.charakter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (name) => { dispatch({ type: 'CHANGE_NAME', name: name }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
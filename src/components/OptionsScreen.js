import React from 'react'
import { FaCog } from 'react-icons/fa'

function OptionsScreen(props) {

    return (
        <div id="OptionsScreen" className="text-white">
            <button className="btn btn-warning mb-5" onClick={() => { props.history.push('./') }}>Back...</button>
            <h3>In Progress...</h3>
            <p>To do in this project:</p>
            <ol>
                <li>InstructionsScreen design and content</li>
                <li>OptionsScreen</li>
                <li>Sounds</li>
                <li>Mobile Version ( RWD )</li>
                <li>Other Languages to choose ( Polish, French )</li>
                <li>Game Events</li>
                <li>Bosses</li>
                <li>Better design</li>
                <li>More Foes</li>
            </ol>
            <FaCog class="spin" />
        </div>
    )
}

export default OptionsScreen;
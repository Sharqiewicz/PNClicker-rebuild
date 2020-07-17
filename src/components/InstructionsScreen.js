import React from 'react'
import { FaCog } from 'react-icons/fa'

function InstructionsScreen(props) {

    return (
        <div id="InstructionsScreen" className="text-white">
            <button className="btn btn-warning" onClick={() => { props.history.push('./') }}>Back...</button>
            <p>Vulnerabilities ( enemy bonus ) : Foe Damage = Base Damage + Your/Enemy Level - in gamescreen you see that as "Damage: number ( + number )"</p>
            <p>Vulnerabilities ( your bonus ) : Foe Health = Base Health - Your Level - in gamescreen it is already decreased by lvl number</p>
            <p>Steal stat = how much money you will earn when you attack your foe</p>
            <p> Each level allows you to increase your statistics by 10: 1lvl => max: 10dmg, 2lvl => max: 20dmg etc.</p>
            <p>Level cost: level level * 10 </p>
            <p>Level bonus: When you increase your level + 1 point to all stats, but be aware of more powerful foes!</p>
            <p class="col-12 d-flex justify-content-center text-center"><FaCog class="spin" /></p>
        </div>
    )
}

export default InstructionsScreen;
import React from 'react'

function InstructionsScreen(props){

    return(
        <div id="InstructionsScreen" className="text-white">
            <button className="btn btn-warning" onClick={() => { props.history.push('./') }}>Back...</button>
            <p>Vulnerabilities ( enemy bonus ) : Foe Damage = Base Damage + Your/Enemy Level - in gamescreen you see that as "Damage: number ( + number )"</p>
            <p>Vulnerabilities ( your bonus ) : Foe Health = Base Health - Your Level - in gamescreen it is already decreased by lvl number</p>
            <p>Steal stat = how many money you will earn when you attack your foe</p>
            <p>Level cost: level level * 10 </p>
            <p>Level bonus: When you increase your level + 1 point to all stats, but be aware of more powerful foes!</p>
        </div>
    )
}

export default InstructionsScreen;
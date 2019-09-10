import fire_elemental_child from '../../../img/fire_elemental.png'
import fire_elemental from '../../../img/fire_elemental.png'
import fire_elemental_2 from '../../../img/fire_elemental_2.png'

const fireFoes = [
    {
        id: 0,
        biomID: 0,
        level: 1,
        //
        name: `fire child`,
        damage: 1,
        health: 5,
        //
        bonusdamagebiom: [`fire`, `slime`],
        vulnerabilities: `water`,
        //
        img: fire_elemental_child
    },
    {
        id: 1,
        biomID: 0,
        level: 2,
        //
        name: `Fire Elemental`,
        damage: 1,
        health: 5,
        //
        bonusdamagebiom: [`candy`, `slime`],
        vulnerabilities: `water`,
        //
        img: fire_elemental
    },
    {
        id: 2,
        biomID: 0,
        level: 3,
        //
        name: `Fire Warrior`,
        damage: 1,
        health: 5,
        //
        bonusdamagebiom: [`candy`, `slime`],
        vulnerabilities: `water`,
        //
        img: fire_elemental_2
    }
]

export default fireFoes;
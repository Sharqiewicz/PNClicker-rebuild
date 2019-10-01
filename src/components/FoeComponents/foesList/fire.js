import fire_elemental_child from '../../../img/fire_elemental.png'
import fire_elemental from '../../../img/fire_elemental.png'
import fire_elemental_2 from '../../../img/fire_elemental_2.png'
import Flame_Guard from '../../../img/Flame_Guard.png'
import Flame_King from '../../../img/Flame_King.png'
import flame_minstrel from '../../../img/flame_minstrel.png'
import flame_princess from '../../../img/flame_princess.png'

const fireFoes = [
    {
        id: 0,
        biomID: 0,
        level: 1,
        //
        name: `fire child`,
        damage: 5,
        health: 1,
        //
        bonusdamagebiom: [`candy`, `slime`],
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
        damage: 10,
        health: 6,
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
        damage: 16,
        health: 10,
        //
        bonusdamagebiom: [`candy`, `slime`],
        vulnerabilities: `water`,
        //
        img: fire_elemental_2
    },
    {
        id: 2,
        biomID: 0,
        level: 4,
        //
        name: `Flame Minstrel`,
        damage: 28,
        health: 8,
        //
        bonusdamagebiom: [`candy`, `slime`],
        vulnerabilities: `water`,
        //
        img: flame_minstrel
    },
    {
        id: 2,
        biomID: 0,
        level: 5,
        //
        name: `Fire Princess`,
        damage: 42,
        health: 4,
        //
        bonusdamagebiom: [`candy`, `slime`],
        vulnerabilities: `water`,
        //
        img: flame_princess
    },
    {
        id: 2,
        biomID: 0,
        level: 6,
        //
        name: `Flame Guard`,
        damage: 48,
        health: 8,
        //
        bonusdamagebiom: [`candy`, `slime`],
        vulnerabilities: `water`,
        //
        img: Flame_Guard
    },
    {
        id: 2,
        biomID: 0,
        level: 7,
        //
        name: `Flame King`,
        damage: 1,
        health: 5,
        //
        bonusdamagebiom: [`candy`, `slime`],
        vulnerabilities: `water`,
        //
        img: Flame_King
    }
]

export default fireFoes;
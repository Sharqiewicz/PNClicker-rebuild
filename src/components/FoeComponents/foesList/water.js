import water_nymphs from '../../../img/water_nymphs.png'
import ice_king from '../../../img/ice_king.png'
import penguin from '../../../img/penguin.png'

const waterFoes = [
    {
        id: 0,
        biomID: 1,
        level: 1,
        //
        name: `Water Nyphs`,
        damage: 1,
        health: 5,
        //
        bonusdamagebiom: [`fire`, `slime`],
        vulnerabilities: `water`,
        //
        img: water_nymphs
    },
    {
        id: 1,
        biomID: 1,
        level: 2,
        //
        name: `Ice King`,
        damage: 1,
        health: 5,
        //
        bonusdamagebiom: [`fire`, `slime`],
        vulnerabilities: `water`,
        //
        img: ice_king
    },
    {
        id: 2,
        biomID: 1,
        level: 3,
        //
        name: `Penguin`,
        damage: 1,
        health: 5,
        //
        bonusdamagebiom: [`fire`, `slime`],
        vulnerabilities: `water`,
        //
        img: penguin
    },
]


export default waterFoes;
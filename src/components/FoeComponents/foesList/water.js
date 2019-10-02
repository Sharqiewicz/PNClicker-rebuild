import water_nymphs from '../../../img/water_nymphs.png'
import ice_king from '../../../img/ice_king.png'
import penguin from '../../../img/penguin.png'
import Whywolf from '../../../img/Whywolf.png'
import Whywolf_glasses from '../../../img/Whywolf-glasses.png'
import Princess_Beautiful from '../../../img/Princess_Beautiful.png'
import Marceline from '../../../img/Marceline.png'

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
        bonusdamagebiom: 0,
        vulnerabilities: 2,
        //
        img: water_nymphs
    },
    {
        id: 1,
        biomID: 1,
        level: 2,
        //
        name: `Whywolf`,
        damage: 2,
        health: 14,
        //
        bonusdamagebiom: 0,
        vulnerabilities: 2,
        //
        img: Whywolf
    },
    {
        id: 2,
        biomID: 1,
        level: 3,
        //
        name: `Penguin`,
        damage: 3,
        health: 23,
        //
        bonusdamagebiom: 0,
        vulnerabilities: 2,
        //
        img: penguin
    },
    {
        id: 2,
        biomID: 1,
        level: 4,
        //
        name: `Whywolf Prof`,
        damage: 4,
        health: 32,
        //
        bonusdamagebiom: 0,
        vulnerabilities: 2,
        //
        img: Whywolf_glasses
    },
    {
        id: 2,
        biomID: 1,
        level: 5,
        //
        name: `Princess Beautiful`,
        damage: 4,
        health: 42,
        //
        bonusdamagebiom: 0,
        vulnerabilities: 2,
        //
        img: Princess_Beautiful
    },
    {
        id: 2,
        biomID: 1,
        level: 6,
        //
        name: `Marceline`,
        damage: 5,
        health: 51,
        //
        bonusdamagebiom: 0,
        vulnerabilities: 2,
        //
        img: Marceline
    },
    {
        id: 2,
        biomID: 1,
        level: 3,
        //
        name: `Ice King`,
        damage: 6,
        health: 70,
        //
        bonusdamagebiom: 0,
        vulnerabilities: 2,
        //
        img: ice_king
    },
]


export default waterFoes;
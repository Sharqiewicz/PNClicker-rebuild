import slime_elemental from '../../../img/slime_elemental.png'
import slime_princess from '../../../img/slime_princess.png'
import ppp from '../../../img/ppp.png'
import A_Worm from '../../../img/A_Worm.png'
import bmo from '../../../img/BMO.png'
import slime_citizen from '../../../img/slime_citizen.png'
import ugly_monster from '../../../img/ugly_monster.png'

const slimeFoes = [
        {
            id: 0,
            biomID: 2,
            level: 1,
            //
            name: `Slime elemental`,
            damage: 2,
            health: 3,
            //
            bonusdamagebiom: 1,
            vulnerabilities: 3,
            //
            img: slime_elemental
        },
        {
            id: 1,
            biomID: 2,
            level: 2,
            //
            name: `Worm`,
            damage: 8,
            health: 8,
            //
            bonusdamagebiom: 1,
            vulnerabilities: 3,
            //
            img: A_Worm
        },
        {
            id: 1,
            biomID: 2,
            level: 3,
            //
            name: `Slime Citizen`,
            damage: 13,
            health: 13,
            //
            bonusdamagebiom: 1,
            vulnerabilities: 3,
            //
            img: slime_citizen
        },
        {
            id: 1,
            biomID: 2,
            level: 4,
            //
            name: `Ugly Monster`,
            damage: 18,
            health: 18,
            //
            bonusdamagebiom: 1,
            vulnerabilities: 3,
            //
            img: ugly_monster
        },
        {
            id: 1,
            biomID: 2,
            level: 5,
            //
            name: `BMO`,
            damage: 23,
            health: 23,
            //
            bonusdamagebiom: 1,
            vulnerabilities: 3,
            //
            img: bmo
        },
        {
            id: 1,
            biomID: 2,
            level: 6,
            //
            name: `Slime Princess`,
            damage: 18,
            health: 18,
            //
            bonusdamagebiom: 1,
            vulnerabilities: 3,
            //
            img: slime_princess
        },
        {
            id: 1,
            biomID: 2,
            level: 7,
            //
            name: `Princess Princess Princess`,
            damage: 38,
            health: 38,
            //
            bonusdamagebiom: 1,
            vulnerabilities: 3,
            //
            img: ppp
        },
]

export default slimeFoes;
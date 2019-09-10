import slime_elemental from '../../../img/slime_elemental.png'
import slime_princess from '../../../img/slime_princess.png'

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
            bonusdamagebiom: [`fire`, `water`],
            vulnerabilities: `candy`,
            //
            img: slime_elemental
        },
        {
            id: 1,
            biomID: 2,
            level: 2,
            //
            name: `Slime Princess`,
            damage: 4,
            health: 4,
            //
            bonusdamagebiom: [`fire`, `water`],
            vulnerabilities: `candy`,
            //
            img: slime_princess
        }
]

export default slimeFoes;
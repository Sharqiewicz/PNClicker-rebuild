import candy_elemental from '../../../img/candy_elemental.png'
import candy_elemental_2 from '../../../img/candy_elemental_2.png'
import abracadaniel from '../../../img/abracadaniel.png'
import cotton_candy_princess from '../../../img/Cotton_Candy_Princess.png'
import lsp from '../../../img/LSP.png'
import raincorn from '../../../img/LadyRainicorn.png'
import Hot_Dog_Princess from '../../../img/Hot_Dog_Princess.png'
import Candy_person from '../../../img/Candy_person.png'

const candyFoes = [
    {
        id: 0,
        biomID: 3,
        level: 1,
        //
        name: `Candy Citizen`,
        damage: 1,
        health: 5,
        //
        bonusdamagebiom: [`fire`, `slime`],
        vulnerabilities: `water`,
        //
        img: candy_elemental
    },
    {
        id: 0,
        biomID: 3,
        level: 1,
        //
        name: `Candy Citizen`,
        damage: 2,
        health: 4,
        //
        bonusdamagebiom: [`fire`, `slime`],
        vulnerabilities: `water`,
        //
        img: Candy_person
    },
    {
        id: 0,
        biomID: 3,
        level: 2,
        //
        name: `Candy Thinker`,
        damage: 4,
        health: 12,
        //
        bonusdamagebiom: [`fire`, `slime`],
        vulnerabilities: `water`,
        //
        img: candy_elemental_2
    },
    {
        id: 0,
        biomID: 3,
        level: 3,
        //
        name: `Cotton Candy Princess`,
        damage: 6,
        health: 20,
        //
        bonusdamagebiom: [`fire`, `slime`],
        vulnerabilities: `water`,
        //
        img: cotton_candy_princess
    },
    {
        id: 0,
        biomID: 3,
        level: 4,
        //
        name: `Candy Magician`,
        damage: 12,
        health: 24,
        //
        bonusdamagebiom: [`fire`, `slime`],
        vulnerabilities: `water`,
        //
        img: abracadaniel
    },
    {
        id: 0,
        biomID: 3,
        level: 5,
        //
        name: `Lumpy Space Princess`,
        damage: 26,
        health: 20,
        //
        bonusdamagebiom: [`fire`, `slime`],
        vulnerabilities: `water`,
        //
        img: lsp
    },
    {
        id: 0,
        biomID: 3,
        level: 6,
        //
        name: `Lady Rainicorn`,
        damage: 55,
        health: 1,
        //
        bonusdamagebiom: [`fire`, `slime`],
        vulnerabilities: `water`,
        //
        img: raincorn
    },
    {
        id: 0,
        biomID: 3,
        level: 7,
        //
        name: `Hot Dog Princess`,
        damage: 55,
        health: 21,
        //
        bonusdamagebiom: [`fire`, `slime`],
        vulnerabilities: `water`,
        //
        img: Hot_Dog_Princess
    }

]

export default candyFoes;
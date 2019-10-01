import candy_elemental from '../../../img/candy_elemental.png'
import candy_elemental_2 from '../../../img/candy_elemental_2.png'
import abracadaniel from '../../../img/abracadaniel.png'
import cotton_candy_princess from '../../../img/Cotton_Candy_Princess.png'
import lsp from '../../../img/LSP.png'
import raincorn from '../../../img/'

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
        level: 2,
        //
        name: `Candy child`,
        damage: 5,
        health: 5,
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
        name: `Candy child`,
        damage: 10,
        health: 5,
        //
        bonusdamagebiom: [`fire`, `slime`],
        vulnerabilities: `water`,
        //
        img: abracadaniel
    },
    {
        id: 0,
        biomID: 3,
        level: 3,
        //
        name: `Candy child`,
        damage: 10,
        health: 5,
        //
        bonusdamagebiom: [`fire`, `slime`],
        vulnerabilities: `water`,
        //
        img: abracadaniel
    },

]

export default candyFoes;
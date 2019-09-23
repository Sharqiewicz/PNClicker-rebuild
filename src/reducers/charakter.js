const initState = {
    name: 'Fin the Human',
    damage: 1,
    health: 10,
    steal: 0,
    bonusdamagebiom: 'none',
    vulnerabilities: 'none',
    biomID: 0,
    money: 0,
    level: 1,
    biomicon: 'none'
}

const charakter = (state = initState, action) => {

    if (action.type == 'CHANGE_NAME') {
        let name = action.name;
        return {
           ...state,
           ...state[0], name
        }
    }

    if (action.type == 'CHARAKTER_BIOM') {
        return {
            ...state,
            ...state, biomID: action.biomID, biomicon: action.biomicon
        }
    }

    return state;

}

export default charakter;
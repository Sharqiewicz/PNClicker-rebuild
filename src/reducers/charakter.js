import fireicon from '../img/icons/fire.png'

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
    biomicon: fireicon
}

const charakter = (state = initState, action) => {

    if (action.type == 'CHANGE_NAME') {
        let name = action.name;
        return {
           ...state,
           ...state[0], name
        }
    }

    if(action.type == 'CHANGE_STAT'){
        let value = action.value;
        let [actionstat] = [action.actionstat.toLowerCase()];
        let number = action.number;
        if( value === 1 ){
            let many = state[actionstat] + number;
            return{
                ...state,
                ...state, [actionstat]: many
            }
        }
        if (value === 2) {
            let many = state[actionstat] - number;
            return {
                ...state,
                ...state, [actionstat]: many
            }
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
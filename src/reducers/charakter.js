import fireicon from '../img/icons/fire.png'
import charakterimg from '../img/jake.png'

const initState = {
    name: 'Fin the Human',
    damage: 1,
    health: 10,
    steal: 1,
    bonusdamagebiom: 3,
    vulnerabilities: 1,
    biomID: 0,
    money: 0,
    level: 1,
    biomicon: fireicon,
    charakterimg: charakterimg
}

const charakter = (state = initState, action) => {

    if (action.type == 'TAKE_DAMAGE') {
        let damage = action.damage;
        return {
            ...state,
            ...state[0], money: state.money + state.steal, health: state.health - damage
        }
    }

    if (action.type == 'CHANGE_NAME') {
        let name = action.name;
        return {
            ...state,
            ...state[0], name
        }
    }

    if (action.type == 'CHANGE_STAT') {
        let value = action.value;
        let [actionstat] = [action.actionstat.toLowerCase()];
        let number = action.number;



        if (value === 1) {
            let many = state[actionstat] + number;

            //different costs of stats
            let money = action.actionstat.toLowerCase() == 'health' ? state.money - 1 : state.money - state[actionstat];
            money = action.actionstat.toLowerCase() == 'level' ? state.money - state.level * 10 : money;

            if (money < 0) { return { ...state } }
            else if ([actionstat] == 'level') {
                return {
                    ...state,
                    ...state, level: state.level + 1, health: state.health + state.level, damage: state.damage + 1, steal: state.steal + 1, money
                }
            }
            else {
                return {
                    ...state,
                    ...state, [actionstat]: many, money
                }
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
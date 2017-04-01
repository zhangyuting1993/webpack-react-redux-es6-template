import {
    deepClone
}
from "functions/tools";


const radioTypeSet = {
    checkedValue: "1",
    radioOption: [{
        text: 'type1',
        value: '1',
        name: 'radioType',
        checked: true,
        disabled: false,
    }, {
        text: 'type2',
        value: '2',
        name: 'radioType',
        checked: false,
        disabled: false,
    }]
};
const radioState = (state = radioTypeSet, action) => {
    let {
        type, index
    } = action;
    switch (type) {
        case 'CHANGE_TYPE':
            let _radioState1 = deepClone(state);
            for (let r = 0; r < _radioState1.radioOption.length; r++) {
                _radioState1.radioOption[r].checked = false
            }
            _radioState1.radioOption[index].checked = true;
            _radioState1.checkedValue = _radioState1.radioOption[index].value;
            return Object.assign({}, state, _radioState1);

        default:
            return state
    }
}




export {
    radioState
};

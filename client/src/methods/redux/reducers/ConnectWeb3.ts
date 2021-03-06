import _const from '../../_const';

type Action = {
    type: string;
    payload: any;
};

const initialState = {
    address: '',
};

const ConnectWeb3 = (state = initialState, action: Action) => {
    switch (action.type) {
        case _const.ADDRESS:
            return { ...state, address: action.payload };
        case _const.PRISTINE:
            return {...state, address: ''}
        default:
            return state;
    }
};

export default ConnectWeb3;
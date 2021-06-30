import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let store;

const initialState = {
    signUp: {
        email: '',
        password: '',
        name: '',
        role: '',
        type: '',
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'EMAIL':
        return {
            ...state,
            email: action.email,
        };
    case 'PASSWD':
        return {
            ...state,
            password: action.password,
        };
    case 'NAME':
        return {
            ...state,
            name: action.name,
        };
    case 'ROLE':
        return {
            ...state,
            role: action.role,
        };
    case 'ACCOUNT':
        return {
            ...state,
            account: action.account,
        };
    case 'RESET':
        return {
            ...initialState,
        };
    default:
        return state;
    }
};

function initStore(preloadedState = initialState) {
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware()),
    );
}

export const initializeStore = (preloadedState) => {
    let initingStore = store ?? initStore(preloadedState);

    if (preloadedState && store) {
        initingStore = initStore({
            ...store.getState(),
            ...preloadedState,
        });
        store = undefined;
    }

    if (typeof window === 'undefined') return initingStore;
    if (!store) store = initingStore;

    return initingStore;
};

export function useStore(initState) {
    const usedStore = useMemo(() => initializeStore(initState), [initState]);
    return usedStore;
}

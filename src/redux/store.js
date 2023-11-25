import { createStore, applyMiddleware, compose } from 'redux';

const myInitialState = { name : "arjun" };

const reducer = (state = myInitialState, action) => {
    if (action.type === "posts") {
        return { ...state, posts: action.payload }
    }else if (action.type === "postDetails"){
        return{ ...state, postDetails : action.payload}
    }
    return state;
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware();

export const store = createStore(reducer, composeEnhancers(middleware));

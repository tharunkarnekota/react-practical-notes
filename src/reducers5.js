const count = 0;

function countReducer(state = count, action) {
    const {type, payload} = action;
    
    switch(type){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        default:
            return state;
    }
}

export default countReducer;
export default (state = { count: 0 }, action) => {
    const count = state.count;
    switch (action.type){
        case 'increment':
            return { count: count + 1};
        case 'decrement':
            return { count: count - 1};
        default:
            return state;
    }
}
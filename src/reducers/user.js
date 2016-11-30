export default (state = { name: 'Brendan', age: 26 }, action) => {
    const newState = {...state};

    switch (action.type) {
        case 'CHANGE_NAME': {
            newState.name = action.name;
            break;
        }
        case 'CHANGE_AGE': {
            newState.age = action.age;
            break;
        }
        case 'CHANGE_HEIGHT': {
            newState.height = action.height;
        }
    }
    return newState;
}

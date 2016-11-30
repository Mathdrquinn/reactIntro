export default (state = { name: 'unchanged title' }, action) => {
    switch (action.type) {
        case 'UPDATE_TITLE': {
            return {...state, name: action.name };
        }
    }

    return {...state};
}
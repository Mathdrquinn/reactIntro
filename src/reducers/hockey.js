export default (state = { loading: false, data: null }, action) => {
    switch (action.type) {
        case 'HOCKEY_LOADING': {
            return {...state, loading: true, error: false, data: []};
        }
        case 'HOCKEY_DATA': {
            return {...state, loading: false, error: false, data: action.data};
        }
        case 'HOCKEY_ERROR': {
            return {...state, loading: false, error: true, data: []};
        }
    }

    return {...state};
}
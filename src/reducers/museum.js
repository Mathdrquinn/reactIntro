export default function(state = {loading: false, error: false, data: []}, action) {
    switch(action.type) {
        case 'MUSEUM_LOADING': {
            return {...state, loading: true, error: false};
        }
        case 'MUSEUM_DATA': {
            return {...state, data: action.data, loading: false, error: false};
        }
        case 'MUSEUM_ERROR': {
            return {...state, loading: false, error: true};
        }
    }

    return {...state};
}
import axios from 'axios';

function setMuseumLoading() {
    return {
        type: 'MUSEUM_LOADING',
    };
}

function setMuseumData(data) {
    return {
        type: 'MUSEUM_DATA',
        data,
    };
}

function setMuseumError() {
    return {
        type: 'MUSEUM_ERROR',
    };
}

export function fetchMuseumData() {
    return function thunk(dispatch) {
        dispatch(setMuseumLoading());
        return axios.get('https://www.reddit.com/r/museum.json')
            .then(response => {
                const data = response.data.data.children;
                dispatch(setMuseumData(data));
            })
            .catch(() => dispatch(setMuseumError()));
    }
}
import axios from 'axios';

function setHockeyDataLoading() {
    return { type: 'HOCKEY_LOADING' };
}

function setHockeyData(data) {
    return {
        type: 'HOCKEY_DATA',
        data,
    };
}

function setHockeyDataError() {
    return { type: 'HOCKEY_ERROR' };
}

export function fetchHockeyData() {
    return function thunk(dispatch) {
        dispatch(setHockeyDataLoading());
        axios.get('https://www.reddit.com/r/hockey.json')
            .then((response) => {
                const data = response.data.data.children;
                dispatch(setHockeyData(data))
            })
            .catch((err) => {
                dispatch(setHockeyDataError());
            });
    };
}
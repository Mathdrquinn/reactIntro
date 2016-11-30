export function addTweet(content) {
    return {
        type: 'ADD_TWEET',
        content,
        id: new Date().getTime(),
    };
}

export function deleteTweet(id) {
    return { type: 'DELETE_TWEET', id, };
}
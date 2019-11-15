import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'All Stars', duration: '3:45'},
        {title: 'Macarena', duration: '4:07'},
        {title: 'All I have is love', duration: '2:59'},
        {title: 'Busy body', duration: '1:45'},
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
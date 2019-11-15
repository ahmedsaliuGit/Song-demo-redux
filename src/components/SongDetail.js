import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    if(!song) {
        return <div>Select a song</div>
    }

    return (
        <div>
            <h3>Details for: </h3>
            <p>{song.title} <br /> {song.duration}</p>
        </div>
    );
}

const stateToProps = state => ({
    song: state.selectedSong
});

export default connect(stateToProps)(SongDetail);
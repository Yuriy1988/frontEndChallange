import React, {PropTypes} from 'react';
import VideoList from '../components/VideoList/VideoList';
import {connect} from 'react-redux';


function Videos (props) {

    return <VideoList {...props} />
}

Videos.propTypes = {
    videos: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
};

export default connect(
    (state)=>({
        videos: state.videos.data,
        isFetching: state.videos.isFetching
    })
)(Videos);
import React, {PropTypes} from 'react';
import VideoList from '../components/VideoList/VideoList';
import {connect} from 'react-redux';


function Videos ({videos}) {
    return <VideoList videos={videos}/>
}

Videos.propTypes = {
    videos: PropTypes.array.isRequired,
};

export default connect(
    (videos) => (videos)
)(Videos);
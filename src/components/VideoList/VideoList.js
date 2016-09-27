import React, {PropTypes}  from 'react'
import Video from '../Video/Video'
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay'
import './VideoList.css';

const VideoList = ({videos, isFetching}) => {

    const content = videos.map((video) =>
        <Video
            key={video.uri}
            name={video.name}
            previewImage={video.pictures.sizes[2].link}
            link={video.link}
        />);

    content.length = 9; // Use this because we don't have pagination, and only 9 videos are needed;

    return (
        <div className="videoList">
            {content}
            <LoadingOverlay loading={isFetching}/>
        </div>
    )
};

VideoList.propTypes = {
    videos: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
};

export default VideoList;
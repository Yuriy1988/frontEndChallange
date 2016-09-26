import React, {PropTypes}  from 'react'
import Video from '../Video/Video'
import './VideoList.css';

const VideoList = ({videos}) => {

    const content = videos.map((video, i) =>
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
        </div>
    )
};

VideoList.propTypes = {
    videos: PropTypes.array.isRequired,
};

export default VideoList;
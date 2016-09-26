import React, {PropTypes} from 'react'
import './Video.css';

const Video = ({previewImage, name, link}) => {

    return (
        <div className="video">
            <a target="_blank" href={link}>
                <img src={previewImage}/>
            </a>
            <div className="desc">{name}</div>
        </div>
    )
};

Video.propTypes = {
    previewImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Video;
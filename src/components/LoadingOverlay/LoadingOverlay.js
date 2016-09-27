import React, {PropTypes} from 'react'
import './LoadingOverlay.css'

const LoadingOverlay = ({loading}) => {
  return loading ? <div className="loading"><div className="spinner"/></div>: null;
};

export default LoadingOverlay;

LoadingOverlay.propTypes = {
    loading: PropTypes.bool.isRequired
};
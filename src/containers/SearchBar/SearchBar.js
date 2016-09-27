import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchVideos} from '../../actions/index';
import './SearchBar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    render () {
        return (
            <form className="video-search" onSubmit={this.onFormSubmit}>
                <input
                    type="text"
                    placeholder="Enter your request"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <button type="submit">Search</button>
            </form>
        );
    }

    onInputChange (event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit (event) {
        event.preventDefault();
        this.props.fetchVideos(this.state.term);
        this.setState({term: ''});
    }
}

SearchBar.propTypes = {
    fetchVideos: PropTypes.func.isRequired,
};

export default connect(null,
    {
        fetchVideos
    }
)(SearchBar);
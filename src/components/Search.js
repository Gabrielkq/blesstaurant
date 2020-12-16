import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getYelpResults } from '../redux/actionCreators';
class Search extends Component {

    state = {
        searchTerm: ""
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    searchYelpForRestaurants = (e) => {
        e.preventDefault()
        this.props.getYelpResults(this.state.searchTerm)
        this.setState({searchTerm: ""})
        this.props.history.push("/restaurants")
    }

    render() {
        return (
            <div>
                <form onSubmit={this.searchYelpForRestaurants}>
                <label>Search</label>
                <input type="text" name="searchTerm" onChange={this.onChange} value={this.state.searchTerm} />
                <br>
                </br>
                <input type="submit"/>
                </form>
             <br>
             </br>

            </div>
        );
    }
}




export default connect(null, {getYelpResults})(Search);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getYelpResults } from './redux/actionCreators';
class Search extends Component {

    state = {
        searchTerm: "",
        restArr: []

    }
    
    sortRest = () => {
       return this.state.restArr.sort((a, b) => a.distance - b.distance)
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    searchy = (e) => {
        e.preventDefault()
        this.props.getYelpResults(this.state.searchTerm)
    }

    render() {
        console.log("search bar: ", this.props)
        return (
            <div>
                <form onSubmit={this.searchy}>
                <label>Search</label>
                <input type="text" name="searchTerm" onChange={this.onChange} value={this.state.searchTerm} />
                <br>
                </br>
                <input type="submit"/>
                </form>
             <br>
             </br>
             {/* <Switch>             <ul>
        {this.sortRest().map(r => (<li style={{ listStyleType: "none" }}>
            <Route path={`restaurants/${r.id}`} key={r.id} render={() => <RestaurantTile/>} />

            
            
            <Link to={`/restaurants/${r.id}`}
            >{r.name} </Link>
            distance: {r.distance * 0.000189394} miles
        
            </li>))}
             </ul>
             </Switch> */}

            </div>
        );
    }
}




export default connect(null, {getYelpResults})(Search);
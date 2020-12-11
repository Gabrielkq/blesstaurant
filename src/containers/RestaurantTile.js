import React, { Component } from 'react';

class RestaurantTile extends Component {

    state = {
        selectedRestaurant: {},
        location: {}
    }


    componentDidMount(){
        fetch("http://localhost:3000/get_restaurant", {
            headers: {'Yelp-Id': `${this.props.match.params.id}`}
        })
        .then(r => r.json())
        .then(obj => {
            if (obj.error){
            alert("errors")
            } else {
            this.setState({
                selectedRestaurant: obj.selected_restaurant,
                location: obj.selected_restaurant.location.display_address
            })
             }
        })
    }

    render() {
        console.log("obj:", this.state.location.display_address)
        return (
            <div>
                <h1>{this.state.selectedRestaurant.name}</h1>
        <p>{this.state.location[0]} {this.state.location[1]}</p>
                <img src={this.state.selectedRestaurant.image_url}/>
            </div>
        );
    }
}

export default RestaurantTile;
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const RestaurantTiles = (props) => {
        return (
            <div>
               {sortRest(props.restaurants).map(restaurant => (
               restaurant.none
               ? 
                <h3>No Results Found, Try Another Search</h3>
               :
               <>
                    <div className="rest-tile">
                        <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`}> <p>{restaurant.name}</p>
                        {restaurant.location && <p>{restaurant.location.address1}, {restaurant.location.city} </p>}
                        <p>{restaurant.distance && convertFeetToMiles(restaurant.distance)} miles away</p>
                        <img className="tile-img" src={restaurant.image_url} alt={restaurant.name}/></Link>
                    </div>
                </>)
                )
                }
                </div>
        );
    }

const convertFeetToMiles = (feet) => {
        return (feet / 5280).toFixed(2);
      }

const sortRest = (Arr) => {
        return Arr.sort((a, b) => a.distance - b.distance)
     }

const msp = state =>({
    restaurants: state.restaurants.yelpResults
})

export default connect(msp)(RestaurantTiles);
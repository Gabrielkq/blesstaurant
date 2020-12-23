import { connect } from 'react-redux';
import { getYelpResults, clearYelpResutls } from '../redux/actionCreators';
import { useState } from 'react';
import Button from "./Button"

const Search = ({ getYelpResults, history, clearYelpResutls }) =>{

    const [searchTerm, setSearchTerm] = useState("")

    const searchYelpForRestaurants = (e) => {
        e.preventDefault()
        clearYelpResutls()
        getYelpResults(searchTerm)
        setSearchTerm("")
        history.push("/restaurants")
    }

        return (
            <div id="search">
                <form onSubmit={searchYelpForRestaurants}>
                <label>Search</label>
                <input type="text" placeholder="enter location" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
               <input type="submit"/>
                </form>
            </div>
        );
}

export default connect(null, { getYelpResults, clearYelpResutls })(Search);
import { connect } from 'react-redux';
import { getYelpResults } from '../redux/actionCreators';
import { useState } from 'react';
import Button from "./Button"

const Search = ({ getYelpResults, history }) =>{

    const [searchTerm, setSearchTerm] = useState("")

    const searchYelpForRestaurants = (e) => {
        e.preventDefault()
        getYelpResults(searchTerm)
        setSearchTerm("")
        history.push("/restaurants")
    }

        return (
            <div>
                <form onSubmit={searchYelpForRestaurants}>
                <label>Search</label>
                <input type="text" placeHolder="enter location" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
                 <Button text={<input type="submit"/>} className="keep-in-row"/>
                </form>
            </div>
        );
}

export default connect(null, { getYelpResults })(Search);
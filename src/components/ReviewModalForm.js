import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../redux/actionCreators'

class ReviewModalForm extends Component {

    state = {
        content: "",
        rating: null,
        review: {}
    }

    addReviewOnly = () => {
        fetch('http://localhost:3000/reviews', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      content: this.state.content,
      rating: this.state.rating,
      user_id: this.props.userId,
      restaurant_id: this.props.restaurantId
  }),
})
.then(response => response.json())
.then(data => {
  this.setState({
      review: data
  }, () => this.props.toggleModal())
})
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { displayModal, toggleModal, userId, restaurantId } = this.props
        const display = displayModal ? "block" : "none"
        return (
            <div id="myModal" className="modal" style={{display}}>
                 <div className="modal-content">
                    <span className="close" onClick={toggleModal}>&times;</span>
                    {!userId 
                    ?
                    <p>Sign up or Login to review this restaurant</p>
                    :
                        !restaurantId
                            ? 
                        //     <form onSubmit={this.handleSubmit}>
                        //     <label>
                        //       Essay:
                        //       <textarea value={this.state.value} onChange={this.handleChange} />
                        //     </label>
                        //     <input type="submit" value="Submit" />
                        //   </form>
                        <p>create rest and review</p>
                            :
                            <>
                            <p>restaurant already created, review form</p>
                                   <form onSubmit={this.addReviewOnly}>
                            <label>
                              Review:
                              <textarea name="content" value={this.state.content} onChange={this.handleChange} />
                            </label>
                            <br/>   
                            <label>
                                Rating:
                                <input type="number" name="rating" value={this.state.rating} min="1" max="5" onChange={this.handleChange} />
                              </label>
                            <input type="submit" value="Submit" />
                          </form>
                          </>
                    }
                </div>
            </div>    
        );
    }
}

const msp = state => ({
    displayModal: state.restaurants.displayModal,
    userId: state.user.userId,
    restaurantId: state.restaurants.restaurantId
})

export default connect(msp, { toggleModal })(ReviewModalForm);
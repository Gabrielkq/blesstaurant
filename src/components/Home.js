import { connect } from 'react-redux';

const Home = ({userId, username}) => {
        return (
            <div id="home">

                   <p id="blessed">
          Blesstaurant 🌱
        </p>
        {userId && <h2>Many Blessings to you, {username}</h2>}

        <p>Blesstaurant is a one stop resource for you to locate vegan food establishments all over the world. 🌎</p>
        <p>Enter a location into the search field and we'll find you places where they serve ethical plant based treats. Yummy! 😀</p>
        <p> Read reviews from other vegans to find delectable dishes, the most favored places, and other tips and recommendations! 💯</p>
            </div>
        );
    }


const msp = state =>({
    userId: state.user.userId,
    username: state.user.username
})

export default connect(msp)(Home);
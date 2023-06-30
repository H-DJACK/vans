import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-container">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife
                move make your perfect read trip.
            </p>
            <Link to='vans'>Find your van</Link>
        </div>
    )
}

export default Home
import { Link } from 'react-router-dom'
import bgImg from "../assets/images/about-hero.png"

const About = () => {
    return (
        <div>
            <img src={bgImg} className='about-hero-image' />
            <div className='about-page-content'>
                <h1>Don&apos;t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your read trip with the perfect travel van rental.
                    Our vans are recertified before each trip to ensure your travel plans can go off
                    without a hitch. (Hitch costs extra )
                </p>
                <p>Our team is full of vanlife enthusiasts who know
                    the world on 4 wheels.
                </p>
            </div>
            <div>
                <h2>Your description is waiting.<br />Your
                van is read</h2>
                <Link to='/vans' className='link-button'>Explore our vans</Link>
            </div>
        </div>
    )
}

export default About;
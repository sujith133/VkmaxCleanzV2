import Intro from '../Intro';
import SlickCarousel from '../Slider/index'
import RatingSlick from '../RatingSlick';
import VideoSlick from '../VideoSlick';
import './index.css'

const Home =()=>{

    return(
        <div className='homeContainer margin'>
            <Intro />
            <SlickCarousel />
            <RatingSlick />
            <VideoSlick />
            
        </div>
    )
}
export default Home
import Intro from '../Intro';
import SlickCarousel from '../Slider/index'
import './index.css'

const Home =()=>{
    console.log("home")
    return(
        <div className='homeContainer margin'>
            <Intro />
            <SlickCarousel />
        </div>
    )
}
export default Home
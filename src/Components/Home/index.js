import Intro from '../Intro';
import SlickCarousel from '../Slider/index'


import './index.css'

const Home =()=>{

    return(
        <div className='homeContainer margin'>
            <Intro />
            <SlickCarousel />
        </div>
    )
}
export default Home
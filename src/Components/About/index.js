import './index.css'

const About =()=>{
    console.log("about")
    return(
        <div className='AboutContainer margin'>
            <h1>About us</h1>
            <div className='aboutSubContainer'><h3>Who we are</h3></div>
            <div className='aboutSubContainer'><h3>Our core values</h3></div>
            <div className='aboutSubContainer'><h3>Our mission</h3></div>
            <div className='aboutSubContainer'><h3>Our vision</h3></div>
            <div className='aboutSubContainer'><h3>Why choose us</h3></div>
            <div className='aboutSubContainer'><h3>Our Founder</h3></div>
        </div>
    )
}
export default About
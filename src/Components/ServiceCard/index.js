import './index.css'

const ServiceCard =(props)=>{
    const {id,url,desc}=props
    console.log(id,url,desc)
    return(
        <li id={id} className='card'>
            <p>{desc}</p>
            <img src={url} alt={id} />
        </li>
    )
}
export default ServiceCard
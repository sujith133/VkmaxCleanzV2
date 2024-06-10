import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { Link } from 'react-router-dom';
//import { SlStar } from "react-icons/sl";
import { BiSolidStar,BiSolidStarHalf } from "react-icons/bi";

import { IoIosPeople } from "react-icons/io";

import './index.css'
import { useState } from 'react';


const Intro =()=>{ 
    
    const categoryList=[
        {categoryName:"CLEANING",title:"House Keeping",imageUrl:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/cleaning.png"},
        {categoryName:"AC",title:"AC Repairs and Services",imageUrl:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/ac.png"},
        {categoryName:"Salon",title:"Car Wash",imageUrl:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/car.png"},        
        {categoryName:"ELECTRICAL",title:"Electrician, Plumber & Carpenter",imageUrl:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/electrical.png"},
        {categoryName:"home",title:"Home Painting",imageUrl:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/painting.png"},
        {categoryName:"PEST CONTROL",title:"Pest Control",imageUrl:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/pest.png"},
        {categoryName:"INTERIOR DESIGN",title:"Interior Designing",imageUrl:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/c2.png"},
        {categoryName:"SOFA CLEANING",title:"Sofa Cleaning",imageUrl:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/sofa.png"}
        ]
    const subCategoryList=[
        {name:"Basic Wash", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/formCar.png",category:"Salon"},
        {name:"Foam Wash", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/formCar.png",category:"Salon"},
        {name:"Polishing", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/formCar.png",category:"Salon"},
        {name:"Shining Wash", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/formCar.png",category:"Salon"},

        {name:"AC Repair & Service", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/ac.png",category:"AC"},
        {name:"Chimney Repair", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/chimney.png",category:"AC"},
        {name:"Refrigerator Repair", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/fridge.png",category:"AC"},
        {name:"Washing Machine Repair", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/washingMachine.png",category:"AC"},
        {name:"Water Purifier", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/waterro.png",category:"AC"},
        {name:"Microwave Purifier", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/microwave.png",category:"AC"},
        {name:"Geyser Repair", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/heater.png",category:"AC"},
        {name:"Bathroom & Kitchen Cleaning", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/basine.png",category:"CLEANING"},
        {name:"Full Home Cleaning", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/c2.png",category:"CLEANING"},
        {name:"House keeping", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/c2.png",category:"CLEANING"},
        {name:"Sofa & Carpet Cleaning", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/sofa.png",category:"SOFA CLEANING"},
        {name:"Electrician", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/electrical.png",category:"ELECTRICAL"},
        {name:"Plumbers", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/plumbing.png",category:"ELECTRICAL"},
        {name:"Carpenters", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/carpentry.png",category:"ELECTRICAL"},
        {name:"Furniture Assembly", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/e4.png",category:"ELECTRICAL"},
        {name:"Home Painting", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/painting.png",category:"home"},
        {name:"Interior Designing", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/c2.png",category:"INTERIOR DESIGN"},
        {name:"Pest Control", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottons/pest.png",category:"PEST CONTROL"}
        
        ] 
        const [filteredCategory,setFilteredCategory]=useState([])
        const changeCategory=(categoryNa)=>{
            console.log(categoryNa)
            const filtered = subCategoryList.filter(each=>each.category===categoryNa)
            setFilteredCategory(filtered)
        }
    return(
        <div className="introduction"> 
            <div className="categoryBlog">
                <h1 className="heading1">Home services at your doorstep</h1>
                <div className="categoryContainer">
                    <h3 className="heading3">What do you like to search???</h3>
                    {categoryList.map(eachItem=>(
                        <Popup key={eachItem.categoryName}
                    modal 
                    trigger={
                        <button className="categoryButtons">
                        <div onClick={()=>changeCategory(eachItem.categoryName)}>
                            <img className='' src={eachItem.imageUrl} alt={eachItem.categoryName} />
                            <p className='categoryTitle'>{eachItem.title}</p>
                        </div>
                    </button>
                    }
                >
                    {close => (
                    <>
                        <div className='margin popuContainer'>
                        {filteredCategory.map(eachItem=>(
                            <Link className='linked' to={`/service/${eachItem.category}`}><div className='subLayerItems' key={eachItem.name}>
                                <p>{eachItem.name}</p>
                                <img src={eachItem.image} alt={eachItem.name} className="subImage" />
                            </div></Link>
                        ))}
                        </div>
                        <button
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                        >
                        Close
                        </button>
                    </>
                    )}
                </Popup>
                    ))}
                    
                </div>
                <div className='ratingContainer'>
                    <div className='rowContainer ratingBox'>
                        <div className='starRating'>
                            <BiSolidStar className='stars' />
                            <BiSolidStar className='stars' />
                            <BiSolidStar className='stars' />
                            <BiSolidStar className='stars' />
                            <BiSolidStarHalf className='stars' />
                        </div>
                        <div className='columnContainer'>
                            <h1>4.5</h1>
                            <p>Servicing Rating</p>
                        </div>
                    </div>
                    <div className='rowContainer ratingBox'>
                        <div>
                        <IoIosPeople className="ratingIcon" />
                        </div>
                        <div className='columnContainer'>
                            <h1>700+</h1>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
            <img className="titleImg" src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/Black%20White%20Simple%20Fashion%20Photo%20Collage%20(Portrait)%20(2).png" alt="slterate" />        
        </div>

    )
}
export default Intro
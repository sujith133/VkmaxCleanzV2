import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
//import { SlStar } from "react-icons/sl";
import { BiSolidStar,BiSolidStarHalf } from "react-icons/bi";

import { IoIosPeople } from "react-icons/io";

import './index.css'
import { useState } from 'react';


const Intro =()=>{ 
    
    const categoryList=[
        {categoryName:"Salon",title:"Salon and Spa",imageUrl:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/1658402788588-fe1681.jpg"},
        {categoryName:"AC & Appliance Repair",title:"AC & Appliance Repair",imageUrl:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/1679292077307-6143d7.jpg"},
        {categoryName:"clean",title:"Cleaning",imageUrl:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/1681711961404-75dfec.jpg"},
        {categoryName:"electrician",title:"Electrician, Plumber & Carpenter",imageUrl:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/1658402794135-faf080.jpg"},
        {categoryName:"home",title:"Home Painting",imageUrl:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/1674120935535-f8d5c8.jpg"},
        {categoryName:"Pests",title:"Pest Control",imageUrl:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/1658402794135-faf080.jpg"},
        {categoryName:"Interior Designing",title:"Interior Designing",imageUrl:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/1658402794135-faf080.jpg"},
        {categoryName:"Sofa",title:"Sofa Cleaning",imageUrl:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/1658402794135-faf080.jpg"}
        ]
    const subCategoryList=[
        {name:"Salon for Women", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/123.webp",category:"Salon"},
        {name:"Spa for Women", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/spa1.webp",category:"Salon"},
        {name:"Salon for Kids & Men", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/3.webp",category:"Salon"},
        {name:"Massage for Men", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/4.webp",category:"Salon"},
        {name:"AC Repair & Service", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/a1.webp",category:"AC & Appliance Repair"},
        {name:"Chimney Repair", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/a2.webp",category:"AC & Appliance Repair"},
        {name:"Refrigerator Repair", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/a3.webp",category:"AC & Appliance Repair"},
        {name:"Washing Machine Repair", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/a4.webp",category:"AC & Appliance Repair"},
        {name:"Water Purifier", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/a5.webp",category:"AC & Appliance Repair"},
        {name:"Microwave Purifier", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/a6.webp",category:"AC & Appliance Repair"},
        {name:"Geyser Repair", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/a7.webp",category:"AC & Appliance Repair"},
        {name:"Bathroom & Kitchen Cleaning", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/c1.webp",category:"Clean"},
        {name:"Full Home Cleaning", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/c2.webp",category:"Clean"},
        {name:"Sofa & Carpet Cleaning", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/c3.webp",category:"Clean"},
        {name:"Electrician", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/e1.webp",category:"electrician"},
        {name:"Plumbers", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/e2.webp",category:"electrician"},
        {name:"Carpenters", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/e3.webp",category:"electrician"},
        {name:"Furniture Assembly", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/e4.webp",category:"electrician"},
        {name:"Home Painting", image:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/h1.webp",category:"home"},
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
                <h1>Home services at your doorstep</h1>
                <div className="categoryContainer">
                    <h3 className="heading3">What do you like to search???</h3>
                    {categoryList.map(eachItem=>(
                        <Popup key={eachItem.categoryName}
                    modal
                    trigger={
                        <button className="categoryButtons">
                        <div onClick={()=>changeCategory(eachItem.categoryName)}>
                            <img src={eachItem.imageUrl} alt={eachItem.categoryName} />
                            <p className='categoryTitle'>{eachItem.title}</p>
                        </div>
                    </button>
                    }
                >
                    {close => (
                    <>
                        <div className='margin popuContainer'>
                        {filteredCategory.map(eachItem=>(
                            <div className='subLayerItems' key={eachItem.name}>
                                <p>{eachItem.name}</p>
                                <img src={eachItem.image} alt={eachItem.name} className="subImage" />
                            </div>
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
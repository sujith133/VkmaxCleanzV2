import {v4 as v4uuid} from "uuid"
import './index.css';

const About = () => {
    const chooseList = [{id:v4uuid(),name:"Skilled Experts",description:"Our staff comprises proficient individuals who excel in their roles, ensuring efficient service delivery.",img:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/aboutUs/leader.png"},
                        {id:v4uuid(),name:"Recognized Excellence:",description:"We have earned acclaim from customers, establishing ourselves as a trusted choice in the industry.",img:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/aboutUs/rewards.png"},
                        {id:v4uuid(),name:"Quality Commitment:",description:"Quality is our priority, guiding our service delivery to consistently meet high standards.",img:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/aboutUs/housekeeper.png"},
                        {id:v4uuid(),name:"Budget-Friendly:",description:"Our services offer affordability without compromising quality, providing customers with cost-effective solutions.",img:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/aboutUs/balancing-scale.png"},
                        {id:v4uuid(),name:"Guaranteed Satisfaction:",description:"Customer happiness is our goal, ensuring a fulfilling experience with our dedicated service.",img:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/aboutUs/customer-satisfaction.png"},
                        {id:v4uuid(),name:"Premium Products:",description:"We use only quality-controlled products, ensuring superior results in our services.",img:"https://raw.githubusercontent.com/sujith133/maxCleanz/main/aboutUs/rating.png"}]
                        window.scrollTo(0, 0);
                        return (
        <div className="about-container margin" >
            <h1 className="titleHeading">About Us</h1>
            <div className="about-item hovering">
                <h3 className="about-title">Who we are</h3>
                <div className="aboutRowContainer">
                <img className="aboutLog" src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/aboutUs/intro.jpg" alt="aboutImg"/>    
                <div className="about-description leftBorder">
                <para>VK Max Cleanz swiftly garnered acclaim for its unwavering dedication to excellence, dependability, and customer contentment. Spearheaded by Eathalapaka Hanock Moses and Maddila Sai Rama Lakshmi, the vision was to establish a comprehensive solution hub for both residential and commercial service requisites, offering an extensive spectrum of tailored services to cater to diverse client needs.
                </para><br />
                <para>
                With a primary focus on residential services, VK Max Cleanz delved into property management, maintenance, and repairs Recognizing the challenges encountered by homeowners and tenants alike, Eathalapaka Hanock Moses and Maddila Sai Rama Lakshmi ensured that their team of professionals possessed the expertise to tackle a broad range of housing-related tasks. From routine upkeep to plumbing fixes, electrical installations, and pest management, VK Max Cleanz emerged as a beacon of efficiency and excellence within the industry.</para>
                <br />
                <para className="displayer">
                From office cleaning and janitorial services to facility maintenance and specialized cleaning for industries such as healthcare and hospitality, VK Max Cleanz set a new standard of excellence in the commercial services sector. With a relentless commitment to quality and customer satisfaction, the company earned a reputation as a trusted partner for businesses seeking reliable and comprehensive service solutions.
                </para>
                </div>

                </div>

            </div>
            <br />
            <div className="rowContainer wrapper justifier positioning">
            <div className='sliderItemer aboutmission'>
                <img className='sliderImage' src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/aboutUs/target%20(1).png" alt="mission" />
                <h3 className="about-title">Our mission</h3>
                <p className="about-description">VK Max Cleanz aims to extend its reach across the country, striving to become the premier choice for residential and commercial facility management services.</p>
            </div>
            <div className='sliderItemer aboutmission'>
                <img className='sliderImage' src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/aboutUs/leadership.png" alt="vision" />
                <h3 className="about-title">Our vision</h3>
                <p className="about-description">Our vision is to emerge as the leading provider of facility management solutions, dedicated to making a positive impact on the lives of our customers by enhancing the quality of their living and working environments.</p>
            </div>
            <div className='sliderItemer aboutmission'>
                <img className='sliderImage' src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/aboutUs/customer.png" alt="values" />
                <h3 className="about-title">Our core values</h3>
                <p className="about-description">At VK Max Cleanz, we uphold integrity, excellence, and customer-centricity as our core values, guiding every aspect of our operations to ensure unparalleled service delivery and customer satisfaction.</p>
            </div>
            
            </div>
            <div className="about-item">
                <h3 className="about-title">Why choose us</h3>
                <p className="about-description">When it comes to selecting a cleaning service provider in Visakhapatnam, VK Max Cleanz stands out as the premier choice. With a steadfast commitment to excellence and a proven track record of delivering top-notch cleaning solutions, we have earned the trust and admiration of our clientele. Our team of dedicated professionals is equipped with the expertise and resources to tackle any cleaning challenge, ensuring pristine and hygienic environments for homes, offices, and commercial establishments alike. We prioritize customer satisfaction above all else, going above and beyond to tailor our services to meet the unique needs and preferences of each client. From thorough deep cleaning to specialized services for carpets, upholstery, and more, VK Max Cleanz is synonymous with reliability, quality, and unparalleled professionalism. Choose us for your cleaning needs and experience the VK Max Cleanz difference firsthand.</p>
                <div className='rowContainer wrapper justifier'>
                    {chooseList.map(each=>(
                        <div key={each.id} className='chooseContainer'>
                            <img src={each.img} alt={each.name} className='chooseImg' />
                            <div>
                                <h5>{each.name}</h5>
                                <p>{each.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="about-item">
                <h3 className="about-title">Our Founder</h3>
                <div className="aboutRowContainer founderContainer">
                <p className="about-description imageBlog padder">At VK Max Cleanz, our visionary Leadership Team spearheads the charge in steering marketing initiatives and propelling product expansion. Beyond the realm of marketing, they pioneer technological advancements and drive product innovation to new heights. Moreover, their adept management extends to seamless operations and the strategic onboarding of service providers, ensuring unparalleled excellence in every facet of our operations.</p>
                <div className="rowContainer  imageBlog aboutrowContainers">
                <div><img src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/IMG_8101.JPG" alt="ceo" className="founderImage" /><p><strong>Enoch</strong></p><p>CEO | VK Max Cleanz</p></div>
                <div><img src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/IMG_8103.JPG" alt="director" className="founderImage" /><p><strong>Rama Lakshmi</strong></p><p>Director | VK Max Cleanz</p></div>
                </div>
                </div>


            </div>
        </div>
    );
}

export default About;

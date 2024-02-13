import { SlSocialFacebook, SlSocialYoutube, SlSocialInstagram} from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";

import { SiGooglemaps } from "react-icons/si";

import './index.css'

const Contact = () => {
    const faqList =[{question:"How can I contact customer support?",answer:"You can contact our customer support team at support@example.com",id:1},{question:"How can I contact customer support?",answer:"You can contact our customer support team at support@example.com",id:2},{question:"How can I contact customer support?",answer:"You can contact our customer support team at support@example.com",id:3},{question:"How can I contact customer support?",answer:"You can contact our customer support team at support@example.com",id:4},{question:"How can I contact customer support?",answer:"You can contact our customer support team at support@example.com",id:5},{question:"How can I contact customer support?",answer:"You can contact our customer support team at support@example.com",id:6}]
  return (
    <div className="contact-us margin">
      <h2>Contact Us</h2>
      <div className="contactRowContainer borders">
        <div className="contact-info">
            <h3>Contact Information:</h3>
            <p><strong>Address:</strong> Your Company Address Goes Here</p>
            <p><strong>Email Address:</strong> info@example.com</p>
            <p><strong>Operating Hours:</strong> Monday - Saturday: 9:00 AM - 7:00 PM</p>
            {/* You can provide additional contact information as needed */}
        </div>
        <div>
            <div className="map-directions">
                <h3>Map and Directions: <SiGooglemaps className="socialLinks" /></h3>
                <iframe title="VK Max Cleanz Website" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.656565545211!2d-122.08155068434033!3d37.38934047982196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbcfdb03e5f43%3A0x23b24c6a7f5a45a4!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1636571682905!5m2!1sen!2sus" className="map" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                {/* Embed an interactive map or provide directions here */}
                {/* Example: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.656565545211!2d-122.08155068434033!3d37.38934047982196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbcfdb03e5f43%3A0x23b24c6a7f5a45a4!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1636571682905!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe> */}
            </div>
            <div className="social-media">
                <h3>Social Media Links:</h3>
                <div className="rowContainer">
                    <a href="https://www.google.com/"><SlSocialFacebook className="socialLinks" /></a>
                    <a href="https://www.google.com/"><BsTwitterX className="socialLinks" /></a>
                    <a href="https://www.google.com/"><SlSocialYoutube className="socialLinks" /></a>
                    <a href="https://www.google.com/"><SlSocialInstagram className="socialLinks" /></a>
                </div>
 
            </div>
        </div>
      </div>
      <div className="faqs">
        <h3>FAQs:</h3>
        <ul className="faqsList">
            {faqList.map(each=>(
                <li key={each.id} className="faqItems">
                    <p><strong>Q:</strong>{each.question}</p>
                    <p><strong>A:</strong>{each.answer}</p>
                </li>
            ))}

        </ul>
        {/* Add more FAQs and their answers as needed */}
      </div>
      <div className="privacy-policy">
        <h3>Privacy Policy:</h3>
        <p><a href="/privacy-policy">Needs to be updated by the owner</a></p>
        <p>At VrMaxCleanz, we are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our cleaning services or interact with our website.

Information We Collect:

Personal Information: When you book our cleaning services, we may collect personal information such as your name, address, email address, phone number, and payment details.
Usage Information: We may also collect non-personal information about your interactions with our website, such as your IP address, browser type, pages visited, and the time and date of your visit.
How We Use Your Information:

Provide Services: We use your personal information to schedule cleaning appointments, communicate with you about your bookings, and deliver our cleaning services to your satisfaction.
Improve Services: We may use usage information to analyze website trends, track user activities, and enhance the quality of our services and website.
Marketing: With your consent, we may use your contact information to send you promotional materials or updates about our cleaning services.
Information Sharing:

Service Providers: We may share your personal information with trusted third-party service providers who assist us in delivering our cleaning services (e.g., payment processors, customer support).
Legal Compliance: We may disclose your information when required by law or in response to valid legal requests (e.g., court orders, subpoenas).
Data Security:

We implement security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
However, please be aware that no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
Your Choices:

You have the right to opt-out of receiving marketing communications from us by following the unsubscribe instructions provided in the emails.
You may also have the right to access, update, or delete your personal information. Please contact us at 8500267895 if you wish to exercise these rights.
Children's Privacy:

Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to remove such information.
Changes to This Policy:

We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly. We encourage you to review this Privacy Policy periodically for any changes.
Contact Us:

If you have any questions or concerns about our Privacy Policy or our practices regarding your personal information, please contact us at 8500267895 or via email at enoch@VrMaxCleanz.com.</p>
      </div>
    </div>
  );
};

export default Contact;
